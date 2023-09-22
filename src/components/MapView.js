import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Legend from './Legend';
import App from '../App';
import './MapView.css';
import Sidebar from './Sidebar';
import { countryCoordinates } from './Coordinates'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWFuYWp2LSIsImEiOiJjbGs3eXJmbzEwYXR3M2RxbnRuOHVkaHV3In0.rVa0wb_O5OTeuk07J90w5A';

function MapView({ selectedYear, selectedMonth, onChangeRegion, countryProjectArray, countryData, protocoleData }) {
  console.log(countryData, 'mapview comp');
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(17);
  const [zoom, setZoom] = useState(3.4);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const features = countryProjectArray.map((project) => {
    const matchingCoordinate = countryCoordinates.find(({ country }) => country === project.country);
  
    return {
      type: 'Feature',
      properties: {
        countryName: project.country,
        countProjects: project.countProjects
      },
      geometry: {
        type: 'Point',
        coordinates: matchingCoordinate.coordinates
      }
    };
  });
  console.log('features', features);

  const layerNames = ['output_country-2uwmmy', 'output_level1-5iewsu', 'output_level2-8nur76'];

  const addBoundaryToMap = () => {
    const countryBoundary = {
      id: 'output_country-2uwmmw',
      minzoom: 0,
      maxzoom: 22,
      type: 'line',
      paint: {
        'line-opacity': 1,
        'line-width': 2.5,
        "line-color": "#045226"  
      },
      source: 'composite',
      'source-layer': 'output_country-2uwmmy',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      }
    };

    // Add the custom layer to the map
    map.current.addLayer(countryBoundary);
  };

  const initializeMap = () => {
    console.log('Initializing map...');
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/marianajv-/cllf4b5be012q01pb6nqq4k5x',
      center: [lng, lat],
      zoom: zoom,
      minZoom: 2.6,
      cooperativeGestures: true,
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
    map.current.addControl(
      new mapboxgl.NavigationControl()
    );

  };

  useEffect(() => {
    if (map.current && features && features.length > 0) {
        const existingSource = map.current.getSource('projectClusters');
        if (existingSource) {
          console.log('Updating existing source data...');
          // Source already exists, update its data
          existingSource.setData({
            type: 'FeatureCollection',
            features: features
          });
          // Update text label field property
          map.current.setLayoutProperty('projectClusters-labels', 'text-field', [
            'to-string',
            ['get', 'countProjects']
          ]);
          console.log('Source data updated:', 'projectClusters');
          
        } else {
          console.log('Adding new source...');
          // Source doesn't exist, add it
          addBoundaryToMap();
          map.current.addSource('projectClusters', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: features
            },
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 10
          });
          console.log('Source added:', 'projectClusters');
          map.current.addLayer({
          id: 'projectClusters-circles',
          type: 'circle',
          source: 'projectClusters',
          paint: {
            'circle-color': [
              "interpolate",
              ["exponential", 1],
              ["get", "countProjects"],
              0,
              "hsl(295, 78%, 73%)",
              10,
              "hsl(284, 79%, 71%)",
              20,
              "hsl(274, 82%, 70%)",
              40,
              "hsl(266, 83%, 68%)",
              60,
              "hsl(257, 84%, 66%)",
              80,
              "hsl(248, 85%, 64%)",
              100,
              "hsl(235, 86%, 60%)"
            ],
            "circle-stroke-color": [
              "interpolate",
              [
                "exponential",
                1
              ],
              [
                "get",
                "countProjects"
              ],
              0,
              "hsl(295, 78%, 51%)",
              10,
              "hsl(284, 79%, 50%)",
              20,
              "hsl(274, 82%, 49%)",
              40,
              "hsl(266, 83%, 48%)",
              60,
              "hsl(257, 84%, 46%)",
              80,
              "hsl(248, 85%, 45%)",
              100,
              "hsl(235, 86%, 42%)"
            ],
            "circle-stroke-width": 0.75,
            'circle-radius': [
              "interpolate",
              ["linear"],
              ["zoom"],
              0,
              [
                "*",
                [
                  "interpolate",
                  ["exponential", 1],
                  [
                    "get",
                    "countProjects"
                  ],
                  0,
                  3,
                  10,
                  6,
                  20,
                  9,
                  40,
                  12,
                  60,
                  15,
                  80,
                  18,
                  100,
                  21
                ],
                2.7
              ],
              5,
              [
                "*",
                [
                  "interpolate",
                  ["exponential", 1],
                  [
                    "get",
                    "countProjects"
                  ],
                  0,
                  3,
                  10,
                  6,
                  20,
                  9,
                  40,
                  12,
                  60,
                  15,
                  80,
                  18,
                  100,
                  21
                ],
                2.9700000000000006
              ],
              10,
              [
                "*",
                [
                  "interpolate",
                  ["exponential", 1],
                  [
                    "get",
                    "countProjects"
                  ],
                  0,
                  3,
                  10,
                  6,
                  20,
                  9,
                  40,
                  12,
                  60,
                  15,
                  80,
                  18,
                  100,
                  21
                ],
                3.78
              ],
              22,
              [
                "*",
                [
                  "interpolate",
                  ["exponential", 1],
                  [
                    "get",
                    "countProjects"
                  ],
                  0,
                  3,
                  10,
                  6,
                  20,
                  9,
                  40,
                  12,
                  60,
                  15,
                  80,
                  18,
                  100,
                  21
                ],
                5.4
              ]
            ]
          }
        });
        map.current.addLayer({
          id: 'projectClusters-labels',
          type: 'symbol',
          source: 'projectClusters',
          layout: {
            'text-field': ['to-string', ['get', 'countProjects']],
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 12,
                  }
        });
      }
    }
  }, [features]);    

  const handleMove = () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
  };

  const createLayerClickHandler = (e) => {
      
    const feature = e.features[0];
    const lngLat = e.lngLat;

    const newHoveredRegion = {
      name: feature.properties['Name_2'],
      key: feature.properties['Key']
    };

    const currentZoom = map.current.getZoom();
    let maxZoom;
    if (currentZoom < 4.99) {
      maxZoom = 4.99;
    } else if (currentZoom > 4.99) {
      maxZoom = 6.7;
    }
    const targetZoom = currentZoom + 0.5 <= maxZoom ? currentZoom + 1 : maxZoom;
    map.current.easeTo({
      center: [lngLat.lng.toFixed(4), lngLat.lat.toFixed(4)],
      zoom: targetZoom,
      duration: 1000,
      curve: 1
    });

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

    setTimeout(() => {console.log("Waiting data for 60 milliseconds.")}, 60);

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

    };
  }

  function getStripesExpression(selectedYear, selectedMonth, protocoleData) {
    
    const yearValue = parseInt(selectedYear);
    const monthValue = parseInt(selectedMonth);
    const propertyExists = protocoleData.features.some((feature) => {
      const propertyName = `PROT-${yearValue}-0${monthValue}`;
      console.log(propertyName);
      return propertyName in feature.properties;
      
    });
      
    if (propertyExists) {
      return [
        'case',
        ['==', ['number', ['get', `PROT-${yearValue}-0${monthValue}`]], 1],'stripes',
        'transparent' 
      ];
    } else {
      return 'transparent'; 
    
  }
}

export default MapView;