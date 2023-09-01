import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import Table from './components/Table';
import Timebar from './components/Timebar';
import Sidebar from './components/Sidebar';
import Draft from './components/Draft';
import Mapfilter from './components/Mapfilter';
import DraftRow from './components/DraftRow';

export default function App() {
    const [countryData, setCountryData] = useState(null);
    const [level1Data, setLevel1Data] = useState(null);
    const [level2Data, setLevel2Data] = useState(null);//for diff layers
    const [selectedYear, setSelectedYear] = useState(2023);
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const handleYearChange = (year) => {
      setSelectedYear(year);
    };
    const handleRegionChange= (region) => { 
      setHoveredRegion(region);
      
    };
    
  

    useEffect(() => { //la data de draft si cambia porque esta dentro de UseEffect
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
      <MapView regionInfo={hoveredRegion} onChangeYear={handleYearChange} onChangeRegion={handleRegionChange} selectedYear={selectedYear}/>
      
      <Timebar onChangeYear={handleYearChange} selectedYear={selectedYear} />
      <Sidebar countryData={countryData} regionInfo={hoveredRegion} onChangeYear={handleYearChange} selectedYear={selectedYear} /> 
      <Mapfilter/>
      <div><Draft countryData={countryData} level1Data={level1Data} level2Data={level2Data} onChangeYear={handleYearChange} selectedYear={selectedYear}/></div>

    
      

    </div>


  );
}
