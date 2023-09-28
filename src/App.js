import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import Timebar from './components/Timebar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Mapfilter from './components/Mapfilter';
import TimeTable from './components/TimeTable';

export default function App() {
    const [countryData, setCountryData] = useState(null);
    const [level1Data, setLevel1Data] = useState(null);
    const [level2Data, setLevel2Data] = useState(null);//for diff layers
    const [protocoleData, setProtocoleData]= useState(null);
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
    
  

    useEffect(() => { 
        async function fetchData() {
          try {
            const responseCountry = await axios.get('./data/output_country.geojson');
            setCountryData(responseCountry.data);
    
            const responseLevel1 = await axios.get('./data/output_level1.geojson');
            setLevel1Data(responseLevel1.data);
    
            const responseLevel2 = await axios.get('./data/output_level2.geojson');
            setLevel2Data(responseLevel2.data);

            const responseProtocole = await axios.get('./data/output_protocol.geojson');
            setProtocoleData(responseProtocole.data);
              

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

    

  return (
<div>

  <div className="container">
      <MapView protocoleData={protocoleData} countryData={countryData} regionInfo={hoveredRegion} onChangeYear={handleYearChange} onChangeRegion={handleRegionChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/>
    <div>
      <Timebar onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} />
 
      <Sidebar countryData={countryData} level1Data={level1Data} level2Data={level2Data} regionInfo={hoveredRegion} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} /> 
    </div>
  </div>
  <div className="container">
      <Mapfilter handleFilteredDataChange={handleFilteredDataChange}/>

      <Table countryData={filteredData.filteredCountryData} level1Data={filteredData.filteredLevel1Data} level2Data={filteredData.filteredLevel2Data} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/>
  </div>
  <div></div>
     {/* <div className='container'><TimeTable countryData={countryData}></TimeTable> </div>*/}

</div>

  );
}
