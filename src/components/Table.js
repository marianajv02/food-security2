import React, { useState } from 'react';
import _ from 'lodash';
import './Table.css'; 
import Timebar from './Timebar';
import App from '../App';

function Table({ countryData, level1Data, level2Data, selectedYear }) {
 

    const renderColumns = () => {
        const columns = [];
      
        if (level2Data && level2Data.features && level2Data.features.length > 0) {
          const properties = level2Data.features[0].properties;
          const columnNames=['Population', 'Phase 1','Phase 2','Phase 3','Phase 4','Phase 5','Phase 3-5'];      
          const columnColors = ['grey-bg', 'green-bg', 'yellow-bg', 'orange-bg', 'red-bg', 'dark-red-bg', 'dark-red-bg'];      
 

          Object.keys(properties).forEach((key, index) => {
            
            if (key.includes(`-${selectedYear}-03`)) {
              if (key.includes('CLAS')|| key.includes('PROT')) { 
                return; // Skip unwanted columns
              }
      
              const adjustedKey = key.replace(`-${selectedYear}-03`, ''); // Remove '-2023-03' from the key
              const columnClass = columnColors[1];

              
              columns.push({ key: adjustedKey, class: columnClass });
            }
          });
      
          // Push the last column with the dark red class
          columns.unshift({ key: 'L2', class: 'green-bg' });
          columns.unshift({ key: 'L1', class: 'green-bg' });
          columns.push({ key: '%', class: 'green-bg' });
        }
      
        return columns.map((column, index) => (
          <th key={index} className={column.class}>
            {column.key}
          </th>
        ));
      };
  
      const renderCountryRows = () => {
        if (countryData && countryData.features && countryData.features.length > 0) {
          return countryData.features.map((feature, index) => { 
            const properties = feature.properties;// hasta aqui todo igual
         
    
            return (
                <tr key={index}>
                  <td>{properties.Country}</td>
                  <td></td>
              <td></td>
  
    
    
                  {Object.entries(properties).map(([key, value]) => {
                    if (key.includes(`-${selectedYear}-03`)) {
                      if (key.includes('CLAS')|| key.includes('PROT')) {
                        return null;
                      }
                      return <td key={key}>{formatNumber(value)}</td>;
                    }
                    return null;
                  })}
               <td>
    
                </td>
              </tr>
            );
          });
        }
        return null;
      };    


      const renderLevel1Rows = () => {
        if (level1Data && level1Data.features && level1Data.features.length > 0) {
          return level1Data.features.map((feature, index) => { 
            const properties = feature.properties;// hasta aqui todo igual
         
    
            return (
                <tr key={index}>
                  <td>{properties.Country}</td>
                  <td>{properties.Name_1}</td>
              <td></td>
  
    
    
                  {Object.entries(properties).map(([key, value]) => {
                    if (key.includes(`-${selectedYear}-03`)) {
                      if (key.includes('CLAS')|| key.includes('PROT')) {
                        return null;
                      }
                      return <td key={key}>{formatNumber(value)}</td>;
                    }
                    return null;
                  })}
               <td>
    
                </td>
              </tr>
            );
          });
        }
        return null;
      };    






  const renderRows = () => {
    if (level2Data && level2Data.features && level2Data.features.length > 0) {
      return level2Data.features.map((feature, index) => { 
        const properties = feature.properties;// hasta aqui todo igual
     

        return (
            <tr key={index}>
              <td>{properties.Country}</td>
              <td>{properties.Name_1}</td>
              <td>{properties.Name_2}</td>



              {Object.entries(properties).map(([key, value]) => {
                if (key.includes(`-${selectedYear}-03`)) {
                  if (key.includes('CLAS')|| key.includes('PROT')) {
                    return null;
                  }
                  return <td key={key}>{formatNumber(value)}</td>;
                }
                return null;
              })}
           <td>

            </td>
          </tr>
        );
      });
    }
    return null;
  };



  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="green-bg"></th>
              {renderColumns()}
            </tr>
          </thead>
          <tbody>
            {renderCountryRows()}
          </tbody>
        </table>
      </div>
  
      <div className="table-spacing" /> {/* Add some spacing */}
      
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="green-bg"></th>
              {renderColumns()}
            </tr>
          </thead>
          <tbody>
            {renderLevel1Rows()}
          </tbody>
        </table>
      </div>
      <div className="table-spacing" /> {/* Add some spacing */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th className="green-bg"></th>
              {renderColumns()}
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    </div>

    

    
  );
  
}


function formatNumber(number) {
  if (number === null) {
      return '0'; // Return '0' as a string or 0 if you prefer a number
  }
  
  return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}


function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
}



export default Table;
