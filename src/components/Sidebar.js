import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import App from '../App';

function Sidebar({ countryData, level1Data, level2Data, regionInfo, selectedYear, selectedMonth }) { //REGIONINFO TRAE EL KEY
  const [appendedData, setAppendedData] = useState([]);

  

  useEffect(() => {
    if (countryData && level1Data && level2Data){
        const mergedData = [ ...countryData.features, ...level1Data.features, ...level2Data.features ];
        setAppendedData(mergedData);
    };
    
  }, [regionInfo]);


  if (!regionInfo) {
    return null;
  }

  const clickedKey = regionInfo.key;

  
  let foundRow = null;
  if (appendedData) {
    foundRow = appendedData.find((feature) => feature.properties.Key === clickedKey);

  }

  const properties = foundRow ? foundRow.properties : {};
  let month;
  if(selectedMonth==11){
    month='11';
  }
  else{
    month=`0${selectedMonth}`;
  }
  const Name= properties['Name_2'];
  const Population = formatNumber(properties[`POP-${selectedYear}-${month}`]);
  const Phase1 = formatNumber(properties[`PH1-${selectedYear}-${month}`]);
  const Percent1 = calculatePercentage(
    parseFloat(properties[`PH1-${selectedYear}-${month}`]),
    parseFloat(properties[`POP-${selectedYear}-${month}`])
  );

  const Phase2 = formatNumber(properties[`PH2-${selectedYear}-${month}`]);
  const Percent2 = calculatePercentage(
    parseFloat(properties[`PH2-${selectedYear}-${month}`]),
    parseFloat(properties[`POP-${selectedYear}-${month}`])
  );
  const Phase3 = formatNumber(properties[`PH3-${selectedYear}-${month}`]);
  const Percent3 = calculatePercentage(
    parseFloat(properties[`PH3-${selectedYear}-${month}`]),
    parseFloat(properties[`POP-${selectedYear}-${month}`])
  );
  const Phase4 = formatNumber(properties[`PH4-${selectedYear}-${month}`]);
  const Percent4 = calculatePercentage(
    parseFloat(properties[`PH4-${selectedYear}-${month}`]),
    parseFloat(properties[`POP-${selectedYear}-${month}`])
  );
  const Phase5 = formatNumber(properties[`PH5-${selectedYear}-${month}`]);
  const Percent5 = calculatePercentage(
    parseFloat(properties[`PH5-${selectedYear}-${month}`]),
    parseFloat(properties[`POP-${selectedYear}-${month}`])
  );

  return (
    <nav className='sidebar'>
      <div className='sidebar-container'>
        <div className='logo'>
        <img src={process.env.PUBLIC_URL + '/images/family_icon.jpg'} alt='Family Icon' />
          <span className='logo-text'>Food and nutrition situation {selectedYear} </span> 
        </div>

        <div className='region-info'>
          {/* Display information about the hovered region */}
          <h2>
            <div>
              <p>
              {Name}
              </p>
            </div>
          </h2>

          <div className='info-row'>
            <h4>Total population:</h4>
            <p>{Population}</p>
          </div>

          <div className='info-row'>
            <h4>Phase 1:</h4>
            <p>{Phase1}</p>
            <p>{Percent1}%</p>
          </div>
          <div className='info-row'>
            <h4>Phase 2:</h4>
            <p>{Phase2}</p>
            <p>{Percent2}%</p>
          </div>
          <div className='info-row'>
            <h4>Phase 3:</h4>
            <p>{Phase3}</p>
            <p>{Percent3}%</p>
          </div>
          <div className='info-row'>
            <h4>Phase 4:</h4>
            <p>{Phase4}</p>
            <p>{Percent4}%</p>
          </div>
          <div className='info-row'>
            <h4>Phase 5:</h4>
            <p>{Phase5}</p>
            <p>{Percent5}%</p>
          </div>
          {/* Add more fields as needed */}
        </div>
        {/* More sidebar content */}
      </div>
    </nav>
  );
}

function formatNumber(number) {
  return number ? number.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '';
}

function calculatePercentage(value, total) {
  const percentage = total ? ((value || 0) / total) * 100 : 0;
  return percentage.toFixed(2); // Displaying percentage with two decimal places
}

export default Sidebar;
