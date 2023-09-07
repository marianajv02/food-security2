import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapView from './components/MapView';
import Table from './components/Table';
import Timebar from './components/Timebar';
import Sidebar from './components/Sidebar';
import Draft from './components/Draft';
import Mapfilter from './components/Mapfilter';
import DraftRow from './components/DraftRow';
import Search from "./components/Search";
import DataBlocksList from "./components/DataBlocksList";
import data from "./data/data.json";


export default function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState([]);
    const [selectedProjectTypes, setselectedProjectTypes] = useState([]);
    const [selectedTargets, setSelectedTargets] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);

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
            const responseCountry = await axios.get('/data/output_country.geojson');
            setCountryData(responseCountry.data);
    
            const responseLevel1 = await axios.get('/data/output_level1.geojson');
            setLevel1Data(responseLevel1.data);
    
            const responseLevel2 = await axios.get('/data/output_level2.geojson');
            setLevel2Data(responseLevel2.data);
              console.log(responseLevel1,responseLevel2,'response levels');

          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

    const filteredDataBlock = data
      .filter((entry) => {
        if (selectedPartner.length === 0) {
          return true;
        }
        const partnersArray = (entry.Partners || "").split(";").map(partner => partner.trim());
        return selectedPartner.some((selectedPartner) => partnersArray.includes(selectedPartner));
      })
      .filter((entry) => {
        if (selectedLocations.length === 0) {
          return true;
        }
        const locationsArray = (entry.Location || "").split(";").map(location => location.trim());
        return selectedLocations.some((selectedLocation) => locationsArray.includes(selectedLocation))
      })
      .filter((entry) => {
        if (selectedStatus.length === 0) {
          return true;
        }
        const statusArray = (entry.Status || "").split(";").map(status => status.trim());
        return selectedStatus.some((selectedStatus) => statusArray.includes(selectedStatus))
      })
      .filter((entry) => {
        if (selectedTopics.length === 0) {
          return true;
        }
        const topicsArray = (entry.Topic || "").split(";").map(topic => topic.trim());
        return selectedTopics.some((selectedTopic) => topicsArray.includes(selectedTopic))
      })
      .filter((entry) => {
        if (selectedTargets.length === 0) {
          return true;
        }
        const targetsArray = (entry.Target || "").split(";").map(target => target.trim());
        return selectedTargets.some((selectedTarget) => targetsArray.includes(selectedTarget))
      })
      .filter((entry) => {
        if (selectedProjectTypes.length === 0) {
          return true;
        }
        const projectTypesArray = (entry.ProjectType || "").split(";").map(projectType => projectType.trim());
        return selectedProjectTypes.some((selectedProjectTypes) => projectTypesArray.includes(selectedProjectTypes));
      })
      .filter((entry) => {
        if (!searchQuery) {
          return true;
        }
        return entry.Project.toLowerCase().includes(searchQuery.toLowerCase());
      });
  

  return (
    <div>
      <MapView regionInfo={hoveredRegion} onChangeYear={handleYearChange} onChangeRegion={handleRegionChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth}/>      
      <Timebar onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} />
      <Sidebar countryData={countryData} level1Data={level1Data} level2Data={level2Data} regionInfo={hoveredRegion} onChangeYear={handleYearChange} selectedYear={selectedYear} onChangeMonth={handleMonthChange} selectedMonth={selectedMonth} /> 
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedPartner={selectedPartner}
        setSelectedPartner={setSelectedPartner}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        selectedTargets={selectedTargets}
        setSelectedTargets={setSelectedTargets}
        selectedProjectTypes={selectedProjectTypes}
        setselectedProjectTypes={setselectedProjectTypes}
      />
      <DataBlocksList filteredDataBlock={filteredDataBlock} />

    </div>


  );
}
