import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import Timebar from './components/Timebar';
import Sidebar from './components/Sidebar';
import Draft from './components/Draft';
import Mapfilter from './components/Mapfilter';

export default function App() {
    const [countryData, setCountryData] = useState(null);
    const [level1Data, setLevel1Data] = useState(null);
    const [level2Data, setLevel2Data] = useState(null);//for diff layers
    const [selectedYear, setSelectedYear] = useState(2023);
    const [selectedMonth, setSelectedMonth] = useState(3);
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [filteredData, setFilteredData] = useState({
      filteredCountryData: [],
      filteredLevel1Data: [],
      filteredLevel2Data: [],
    });
    const handleFilteredDataChange = (filteredData) => {
      setFilteredData(filteredData);
    };

    const handleYearChange = (year) => {
      setSelectedYear(year);
    };
    const handleMonthChange = (month) => {
      setSelectedMonth(month);
    };
    
    const handleRegionChange= (region) => { 
      setHoveredRegion(region);
      
    };
    
  

    useEffect(() => { //la data de draft si cambia porque esta dentro de UseEffect
        async function fetchData() {
          try {
            const responseCountry = await axios.get('./data/output_country.geojson');
            setCountryData(responseCountry.data);
    
            const responseLevel1 = await axios.get('./data/output_level1.geojson');
            setLevel1Data(responseLevel1.data);
    
            const responseLevel2 = await axios.get('./data/output_level2.geojson');
            setLevel2Data(responseLevel2.data);
              console.log(responseLevel1,responseLevel2,'response levels');

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

    

  return (
    <div>
      <MapView regionInfo={hoveredRegion} onChangeYear={handleYearChange} onChangeRegion={handleRegionChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/>
      
      <Timebar onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} />
      <Sidebar countryData={countryData} level1Data={level1Data} level2Data={level2Data} regionInfo={hoveredRegion} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} /> 
      <Mapfilter handleFilteredDataChange={handleFilteredDataChange}/>
      <Draft countryData={filteredData.filteredCountryData} level1Data={level1Data} level2Data={level2Data} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/>
      {/* <div><Table countryData={filteredData.filteredCountryData} level1Data={level1Data} level2Data={level2Data} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/></div> */}

    
      

    </div>


  );
}
