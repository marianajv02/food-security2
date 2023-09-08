import React, { useState, useEffect } from "react";
import StaticFilterOptions from "./StaticFilterOptions";
import axios from "axios";
import { feature } from "@turf/turf";
import App from "../App";

const Mapfilter = ({ handleFilteredDataChange, countryData, level1Data, level2Data }) => {

  const [filterCountry, setFilterCountry] = useState([]);
  const [level1Filter, setLevel1Filter] = useState([]);
  const [level2Filter, setLevel2Filter] = useState([]);

  const [countryOptions, setCountryOptions] = useState([]);
  const [level1Options, setLevel1Options] = useState([]);
  const [level2Options, setLevel2Options] = useState([]);

  const [outputCountryData, setOutputCountryData] = useState([]);
  const [outputLevel1Data, setOutputLevel1Data] = useState([]);
  const [outputLevel2Data, setOutputLevel2Data] = useState([]);

  useEffect(() => {
    axios
      .get("./data/output_country.geojson")
      .then((response) => {
        setOutputCountryData(response.data.features);
        const countries = response.data.features.map(
          (feature) => feature.properties.Country
        );
        setCountryOptions(countries); 
      })
      .catch((error) => {
        console.error("Error loading output_country.geojson:", error);
      });

    axios
      .get("./data/output_level1.geojson")
      .then((response) => {
        setOutputLevel1Data(response.data.features);
        const level1Names = response.data.features.map(
          (feature) => feature.properties.Name_1
        );
        setLevel1Options(level1Names);
      })
      .catch((error) => {
        console.error("Error loading output_level1.geojson:", error);
      });

    axios
      .get("./data/output_level2.geojson")
      .then((response) => {
        setOutputLevel2Data(response.data.features);
        const level2Names = response.data.features.map(
          (feature) => feature.properties.Name_2
        );
        setLevel2Options(level2Names);
      })
      .catch((error) => {
        console.error("Error loading output_level2.geojson:", error);
      });
  }, []);

  useEffect(() => {
    // Update filterCountry and available level1Options when level1Filter changes
    const availableLevel1Options = outputLevel1Data
      .filter((feature) => filterCountry.includes(feature.properties.Country))
      .map((feature) => feature.properties.Name_1);

    setLevel1Options(availableLevel1Options);
  }, [filterCountry, outputLevel1Data]);

  useEffect(() => {
    // Update filterCountry, level1Filter, and available level2Options when level2Filter changes
    const availableLevel2Options = outputLevel2Data
      .filter(
        (feature) =>
          filterCountry.includes(feature.properties.Country) &&
          level1Filter.includes(feature.properties.Name_1)
      )
      .map((feature) => feature.properties.Name_2);

    setLevel2Options(availableLevel2Options);
  }, [filterCountry, level1Filter, outputLevel2Data]);

  useEffect(() => {
    console.log('Filtering data...');
    const filteredCountryFeatures = [];
    const filteredLevel1Features = [];
    const filteredLevel2Features = [];
  
    if (filterCountry.length > 0 || level1Filter.length > 0 || level2Filter.length > 0) {
      console.log('Applying filters...');
      filteredCountryFeatures.push(
        ...outputCountryData
          .filter((feature) => {
            if (
              level1Filter.length === 0 &&
              level2Filter.length === 0 &&
              filterCountry.length === 0
            ) {
              return true;
            }
            return filterCountry.includes(feature.properties.Country);
          })
          .map((feature) => ({
            type: 'Feature',
            properties: feature.properties,
            geometry: feature.geometry,
          }))
      );
  
      // Level 1 filter should not be affected by Level 2 filter.
      filteredLevel1Features.push(
        ...outputLevel1Data
          .filter((feature) => {
            console.log('Filtering level 1 data...');
            return (
              (level1Filter.length === 0 ||
                level1Filter.includes(feature.properties.Name_1)) &&
              (filterCountry.length === 0 ||
                filterCountry.includes(feature.properties.Country))
            );
          })
          .map((feature) => ({
            type: 'Feature',
            properties: feature.properties,
            geometry: feature.geometry,
          }))
      );
  
      // Level 2 filter.
      filteredLevel2Features.push(
        ...outputLevel2Data
          .filter((feature) => {
            console.log('Filtering level 2 data...');
            return (
              (level1Filter.length === 0 ||
                level1Filter.includes(feature.properties.Name_1)) &&
              (level2Filter.length === 0 ||
                level2Filter.includes(feature.properties.Name_2)) &&
              (filterCountry.length === 0 ||
                filterCountry.includes(feature.properties.Country))
            );
          })
          .map((feature) => ({
            type: 'Feature',
            properties: feature.properties,
            geometry: feature.geometry,
          }))
      );
    } else {
      // Handle the case when no filters are applied.
      filteredCountryFeatures.push(
        ...outputCountryData.map((feature) => ({
          type: 'Feature',
          properties: feature.properties,
          geometry: feature.geometry,
        }))
      );
      filteredLevel1Features.push(
        ...outputLevel1Data.map((feature) => ({
          type: 'Feature',
          properties: feature.properties,
          geometry: feature.geometry,
        }))
      );
      filteredLevel2Features.push(
        ...outputLevel2Data.map((feature) => ({
          type: 'Feature',
          properties: feature.properties,
          geometry: feature.geometry,
        }))
      );
    }
  
    const filteredData = {
      filteredCountryData: {
        type: 'FeatureCollection',
        features: filteredCountryFeatures,
      },
      filteredLevel1Data: {
        type: 'FeatureCollection',
        features: filteredLevel1Features,
      },
      filteredLevel2Data: {
        type: 'FeatureCollection',
        features: filteredLevel2Features,
      },
    };
  
    console.log('Filtered Country data:', filteredData.filteredCountryData); // this has to be sent to App
    console.log('Filtered Lv1 data:', filteredData.filteredLevel1Data);
    console.log('Filtered Lv2 data:', filteredData.filteredLevel2Data);
  
    handleFilteredDataChange(filteredData);
  }, [filterCountry, level1Filter, level2Filter, outputCountryData, outputLevel1Data, outputLevel2Data]);
      
  return (
    <div>
      <h1></h1>
      <div className="filter-section">
        <StaticFilterOptions
          title="Country"
          options={countryOptions}
          selectedOptions={filterCountry}
          setSelectedOptions={setFilterCountry}
        />
      </div>
      <div className="filter-section">
        <StaticFilterOptions
          title="Level 1 Name"
          options={level1Options}
          selectedOptions={level1Filter}
          setSelectedOptions={setLevel1Filter}
        />
      </div>
      <div className="filter-section">
        <StaticFilterOptions
          title="Level 2 Name"
          options={level2Options}
          selectedOptions={level2Filter}
          setSelectedOptions={setLevel2Filter}
        />
      </div>
    </div>
  );
}

export default Mapfilter;