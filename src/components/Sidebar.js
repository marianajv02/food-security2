import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import App from '../App';

function Sidebar({countryData, level1Data, level2Data, regionInfo, selectedYear}) {


    if (!regionInfo) {
        return null; 
      }
      const clickedKey = regionInfo.key;

      const foundRow= countryData.filter(countryData.Key==clickedKey)||
      level1Data.filter(level1Data.Key==clickedKey) ||
      level2Data.filter(level2Data.Key==clickedKey);

    console.log('sidebar selected year', selectedYear)//receiving correctly
    console.log(regionInfo.key, 'region info in sidebar') //receiving without year update



        // Check if a row was found
        if (!foundRow) {
            return <div>Row not found for the given Key.</div>;
        }

        // Extract properties from the found row

        const Population = formatNumber(foundRow[`POP-${selectedYear}-03`]);
        const Phase1 = formatNumber(foundRow[`PH1-${selectedYear}-03`]);
        const Phase2 = formatNumber(foundRow[`PH2-${selectedYear}-03`]);
        const Phase3 = formatNumber(foundRow[`PH3-${selectedYear}-03`]);
        const Phase4 = formatNumber(foundRow[`PH4-${selectedYear}-03`]);
        const Phase5 = formatNumber(foundRow[`PH5-${selectedYear}-03`]);
        const Phase3To5 = formatNumber(foundRow[`PH3:5-${selectedYear}-03`]);

        const Percentage = calculatePercentage(Phase3To5, Population);
            
   

    return (
        <nav className='sidebar'>
          <div className='sidebar-container'>
            <div className='logo'>
              <img src='/images/family_icon.jpg' alt='Family Icon' />
              <span className='logo-text'>Food and nutrition situation {selectedYear}</span>
            </div>
            
            <div className='region-info'>
              {/* Display information about the hovered region */}
              <h2>{foundRow.name}</h2>
              <div className='info-row'>
                <h4>Total population:</h4>
                <p>{Population}</p>
              </div>
              <div className='info-row'>
                <h4>Phase 1:</h4>
                <p>{Phase1}</p>
                <p>{calculatePercentage(Phase1, Population)}%</p>
              </div>
              <div className='info-row'>
                <h4>Phase 2:</h4>
                <p>{Phase2}</p>
                <p>{calculatePercentage(Phase2, Population)}%</p>
              </div>
              <div className='info-row'>
                <h4>Phase 3:</h4>
                <p>{Phase3}</p>
                <p>{calculatePercentage(Phase3, Population)}%</p>
              </div>
              <div className='info-row'>
                <h4>Phase 4:</h4>
                <p>{Phase4}</p>
                <p>{calculatePercentage(Phase4, Population)}%</p>
              </div>
              <div className='info-row'>
                <h4>Phase 5:</h4>
                <p>{Phase5}</p>
                <p>{calculatePercentage(Phase5, Population)}%</p>
              </div>
              {/* Add more fields as needed */}
            </div>
            {/* More sidebar content */}
          </div>
        </nav>
      );
    };

function formatNumber(number) {
    return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
}

export default Sidebar;
