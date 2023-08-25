import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import Table from './components/Table';

export default function App() {
    const [countryData, setCountryData] = useState(null);
    const [level1Data, setLevel1Data] = useState(null);
    const [level2Data, setLevel2Data] = useState(null);//for diff layers

    useEffect(() => {
        async function fetchData() {
          try {
            const responseCountry = await axios.get('/data/output_country.geojson');
            setCountryData(responseCountry.data);
    
            const responseLevel1 = await axios.get('/data/output_level1.geojson');
            setLevel1Data(responseLevel1.data);
    
            const responseLevel2 = await axios.get('/data/output_level2.geojson');
            setLevel2Data(responseLevel2.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);
    
    

  return (
    <div>
      <MapView />
      <Table countryData={countryData} />
      

    </div>


  );
}
