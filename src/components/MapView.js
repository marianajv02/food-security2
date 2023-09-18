
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Legend from './Legend';
import App from '../App';
import './MapView.css';
import Sidebar from './Sidebar';
import { selected } from '@syncfusion/ej2-react-pivotview';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A';

function MapView({selectedYear, selectedMonth, onChangeRegion, countryData}) {
  console.log(countryData, 'mapview comp');
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
    //console.log('clickhandler ran',  e.features)
      
    const feature = e.features[0];
    const lngLat = e.lngLat;

    const newHoveredRegion = {
      name: feature.properties['Name_2'],
      key: feature.properties['Key'] 
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

    ///

    ///

    layerNames.forEach(layerName => {
      const existingLayer = map.current.getLayer(layerName);
      if (existingLayer) {
        map.current.setPaintProperty(
           layerName,
          'fill-color',
          getMapboxExpression(selectedYear, selectedMonth, countryData)
          
        );
      }
    });


    // Check and update the fill pattern for the separate layer "output_protocol-7nndf6"
    {/*const separateLayerName = "output_protocol-7nndf6";
    const existingSeparateLayer = map.current.getLayer(separateLayerName);
    
    if (existingSeparateLayer) {
      // Add your logic here to set the image pattern based on different conditions
      const imagePattern = getImagePatternBasedOnConditions(); // Replace with your logic
      map.current.setPaintProperty(
        separateLayerName,
        'fill-pattern',
        imagePattern
      );
    }
  */}
}

  

  return () => {
    isMounted = false;
  };
}, [selectedYear, selectedMonth]);

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

  function getMapboxExpression(selectedYear, selectedMonth, countryData) {
    const yearValue = parseInt(selectedYear);
    const monthValue = parseInt(selectedMonth);
    const propertyExists = countryData.features.some((feature) => {
      const propertyName = `CLAS-${yearValue}-0${monthValue}`;
      return propertyName in feature.properties;
    });
    
    if (propertyExists) {
      return [
        'case',
        ['==', ['number', ['get', `CLAS-${yearValue}-0${monthValue}`]], 1], '#53ca57',
        ['==', ['number', ['get', `CLAS-${yearValue}-0${monthValue}`]], 2], '#ffe252',
        ['==', ['number', ['get', `CLAS-${yearValue}-0${monthValue}`]], 3], '#fa890f',
        ['==', ['number', ['get', `CLAS-${yearValue}-0${monthValue}`]], 4], '#eb3333',
        '#ffffff'
      ]
    } else {
      return '#ffffff';

    }
    
;
  }
  

  


export default MapView;
