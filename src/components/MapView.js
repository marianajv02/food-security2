// EVERYTHING WORKS BUT ITS SUPER SLOW WHEN SELECTING REGIONS (ON-CLICK)- NEED TO OPTIMIZE RE-RENDERS IN THE USEEFFECT
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Legend from './Legend';
import App from '../App';
import './MapView.css';
import Sidebar from './Sidebar';
import { selected } from '@syncfusion/ej2-react-pivotview';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A';

function MapView({selectedYear, onChangeRegion}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(17);
  const [zoom, setZoom] = useState(3.4);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const initializeMap = () => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('move', handleMove);
    layerNames.forEach(layerName => {
      map.current.on('click', layerName, createLayerClickHandler);
    }); 


  };

  const handleMove = () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
  };

  const layerNames = ['output_country-2uwmmy', 'output_level1-5iewsu', 'output_level2-8nur76'];

  const createLayerClickHandler = (e) => {// CLICKHANDLER si lo dejamos en key ya no tiene que depender de year, solo de la posicion 
    console.log('clickhandler ran')
      
    const feature = e.features[0];
    const lngLat = e.lngLat;

    const newHoveredRegion = {
      name: feature.properties['Name_2'],
      key: feature.properties['Key'] 
      //population: feature.properties[`POP-${selectedYear}-03`], 
      //phase1: feature.properties[`PH1-${selectedYear}-03`],
      //phase2: feature.properties[`PH2-${selectedYear}-03`],  
      //phase3: feature.properties[`PH3-${selectedYear}-03`],
      //phase4: feature.properties[`PH4-${selectedYear}-03`],
      //phase5: feature.properties[`PH5-${selectedYear}-03`]
    };

    let popup = null;

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

    onChangeRegion(newHoveredRegion);
  };//CLICKHANDLER
  
// separating useffects

useEffect(() => {
  let isMounted = true;

  if (!map.current) {
    initializeMap();
  } else {

    layerNames.forEach(layerName => {
      const existingLayer = map.current.getLayer(layerName);
      if (existingLayer) {
        map.current.setPaintProperty(
          layerName,
          'fill-color',
          getMapboxExpression(selectedYear)
        );
      }
    });
  }

  return () => {
    isMounted = false;
  };
}, [selectedYear]);

useEffect(() => {
  let isMounted = true;

  if (map.current) {
    map.current.on('move', handleMove);
    
  }

  return () => {
    isMounted = false;
  };
}, [lat, lng, zoom]);


  
    return (
      <div className='view-container'>
        
        <div ref={mapContainer} className="map-container" />

        <Legend/>
      </div>
      
    );
  }

  function getMapboxExpression(selectedYear) {
    const yearValue = parseInt(selectedYear);
    
    return [
      'case',
      ['==', ['number', ['get', `CLAS-${yearValue}-03`]], 1], '#53ca57',
      ['==', ['number', ['get', `CLAS-${yearValue}-03`]], 2], '#ffe252',
      ['==', ['number', ['get', `CLAS-${yearValue}-03`]], 3], '#fa890f',
      ['==', ['number', ['get', `CLAS-${yearValue}-03`]], 4], '#eb3333',
      '#ffffff'
    ];
  }


export default MapView;
