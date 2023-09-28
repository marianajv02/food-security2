
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Legend from './Legend';
import App from '../App';
import './MapView.css';
import Sidebar from './Sidebar';


mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A';

function MapView({selectedYear, selectedMonth, onChangeRegion, countryData, protocoleData}) {
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
      zoom: zoom,
      sources: {
        // ... other sources ...
        'stripes': {
          type: 'image',
          url: '/images/stripes2.jpg', // Path to your local image file
          coordinates: [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1]
          ]
        },
      
    }
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

  const createLayerClickHandler = (e) => { 
      
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
  };
  


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
          getMapboxExpression(selectedYear, selectedMonth, countryData)
          
        );
      }
    });

    const separateLayerName = "output-protocol-7nndf6";
    const existingSeparateLayer = map.current.getLayer(separateLayerName);
    
    if (existingSeparateLayer) {
      map.current.setPaintProperty(
        separateLayerName,
        'fill-pattern',
        getStripesExpression(selectedYear, selectedMonth, protocoleData)
      );
    }
  
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
      let propertyName;
      if (monthValue === 11) {
        propertyName = `CLAS-${yearValue}-${monthValue}`;
      } else {
        propertyName = `CLAS-${yearValue}-0${monthValue}`;
      }
      console.log(propertyName);
      return propertyName in feature.properties;
    });
    
    if (propertyExists) {
      let propertyName;
      if (monthValue === 11) {
        propertyName = `CLAS-${yearValue}-${monthValue}`;
      } else {
        propertyName = `CLAS-${yearValue}-0${monthValue}`;
      }
      return [
        'case',
        ['==', ['number', ['get', propertyName]], 1], '#53ca57',
        ['==', ['number', ['get', propertyName]], 2], '#ffe252',
        ['==', ['number', ['get', propertyName]], 3], '#fa890f',
        ['==', ['number', ['get', propertyName]], 4], '#eb3333',
        '#ffffff'
      ]
    } else {
      return '#ffffff';

    };
  }

  function getStripesExpression(selectedYear, selectedMonth, protocoleData) {
    
    const yearValue = parseInt(selectedYear);
    const monthValue = parseInt(selectedMonth);
    const propertyExists = protocoleData.features.some((feature) => {
      let propertyName;
      if (monthValue === 11) {
        propertyName = `PROT-${yearValue}-${monthValue}`;
      } else {
        propertyName = `PROT-${yearValue}-0${monthValue}`;
      }
      console.log(propertyName);
      return propertyName in feature.properties;
      
    });
      
    if (propertyExists) {
      let propertyName;
      if (monthValue === 11) {
        propertyName = `PROT-${yearValue}-${monthValue}`;
      } else {
        propertyName = `PROT-${yearValue}-0${monthValue}`;
      }
      console.log(propertyName,'stripes function');
      return [
        'case',
        ['==', ['number', ['get', propertyName]], 1],'stripes',
        'transparent' 
      ];
    } else {
      return 'transparent'; 
    
  }
}

  


export default MapView;
