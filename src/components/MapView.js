import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Sidebar from './Sidebar';
import Legend from './Legend';
import Table from './Table';
import './MapView.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A';

function MapView() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(17);
  const [zoom, setZoom] = useState(3.4);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2023); 
  const [selectedMonth, setSelectedMonth] = useState(3);

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x',
      center: [lng, lat],
      zoom: zoom
    });
    const layerNames = ['output_country-2uwmmy', 'output_level1-5iewsu', 'output_level2-8nur76'];

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    let popup=null;

    layerNames.forEach(layerName => {
      map.current.on('mouseenter', layerName, (e) => {
        const feature = e.features[0];
        const lngLat = e.lngLat;

        setHoveredRegion({
          name: feature.properties['Name_2'],
          population: feature.properties['POP-2023-03'],
          phase1: feature.properties['PH1-2023-03'],
          phase2: feature.properties['PH2-2023-03'],
          phase3: feature.properties['PH3-2023-03'],
          phase4: feature.properties['PH4-2023-03'],
          phase5: feature.properties['PH5-2023-03']
        });

        if (popup) {
          popup.remove();
        }

        popup = new mapboxgl.Popup({
          maxWidth: '100px',
          maxHeight: '50px',
          className: 'custom-popup'
        })
        .setLngLat(lngLat)
        .setHTML(`<h5>${feature.properties.Name_2}</h5>`)
        .addTo(map.current);
      });

      map.current.on('mouseleave', layerName, () => {
        map.current.getCanvas().style.cursor = '';
        setHoveredRegion(null);

        if (popup) {
          popup.remove();
          popup = null;
        }
      });
    });
  }, []);

  return (
    <div className='view-container'>
      <div ref={mapContainer} className="map-container" />
      <Sidebar/>
      <div><Table></Table></div>
      <Sidebar regionInfo={hoveredRegion} /> {/* Pass regionInfo here */}
      <Legend/>
    </div>
    
  );
}

export default MapView;
