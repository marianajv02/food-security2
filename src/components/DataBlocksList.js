import React, { useState } from "react";
import DataBlock from "./DataBlock";
import "../styles/DataBlocksList.css";
import "../styles/CustomSwitch.css"; // Make sure to import the custom switch styles
import { centroid } from '@turf/turf';


const DataBlocksList = ({ filteredDataBlock, countryData }) => {
  const [viewMode, setViewMode] = useState("grid"); // Add view mode state

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const exportToCSV = () => {
    const header = Object.keys(filteredDataBlock[0]).join(","); // Get the keys of the first entry as headers
    const dataRows = filteredDataBlock.map(entry => Object.values(entry).join(",")); // Convert each entry to a CSV row
  
    const csvContent = `data:text/csv;charset=utf-8,${header}\n${dataRows.join("\n")}`;
  
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

// Initialize countryProjectArray as an empty array
let countryProjectArray = [];

const projectsPerCountry = filteredDataBlock.reduce((acc, entry) => {
  const locations = entry.Location.split(';').map(location => location.trim());

  locations.forEach(location => {
    // Remove spaces from the location and convert it to lowercase
    const modifiedLocation = location.replace(/\s+/g, '');

    if (!countryData) {
      return; // Handle the case when countryData is null or undefined
    }

    // Loop through countryData to find a matching Country
    countryData.features.forEach(countryFeature => {
      const countryProperties = countryFeature.properties;
      const countryName = countryProperties.Country;

      if (modifiedLocation === countryName) {
        if (!acc[modifiedLocation]) {
          acc[modifiedLocation] = {
            country: modifiedLocation,
            countProjects: 0,
            centroid: null,
          };
        }
        acc[modifiedLocation].countProjects++;

        // Calculate the centroid
        const countryGeometry = countryFeature.geometry;
        const countryCentroid = centroid(countryGeometry);

        // Add centroid to the countryProjectArray
        acc[modifiedLocation].centroid = countryCentroid;
      }
    });
  });

  return acc;
}, {});

// Convert the object into an array of objects with named properties
countryProjectArray = Object.values(projectsPerCountry).map(({ country, countProjects, centroid }) => ({
  country: country.replace(/\s+/g, ' '),
  countProjects,
  centroid,
}));
console.log(countryProjectArray);
        
  return (
    <div className="data-blocks-list">
      <div className="view-mode-switch">
        <span>Grid</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleViewMode} />
          <span className="slider round"></span>
        </label>
        <span>List</span>
      </div>
      <button className="export-button" onClick={exportToCSV}>Export to CSV</button>
      <div className={viewMode === "grid" ? "data-blocks-grid" : "data-blocks-list"}>
        {filteredDataBlock.map((entry, index) => (
          <DataBlock
            key={index}
            project={entry.Project}
            location={entry.Location}
            partners={entry.Partners}
            detail={entry.Detail}
            status={entry.Status}
          />
        ))}
      </div>
    </div>
  );
};

export default DataBlocksList;
