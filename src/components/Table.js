import React from 'react';
import './Table.css'; 

function Table({ countryData }) {

    const renderColumns = () => {
        const columns = [];
      
        if (countryData && countryData.features && countryData.features.length > 0) {
          const properties = countryData.features[0].properties;
          const columnNames=['Population', 'Phase 1','Phase 2','Phase 3','Phase 4','Phase 5','Phase 3-5'];      
          const columnColors = ['grey-bg', 'green-bg', 'yellow-bg', 'orange-bg', 'red-bg', 'dark-red-bg', 'dark-red-bg'];      
 

          Object.keys(properties).forEach((key, index) => {
            if (key.includes('-2023-03')) {
              if (key.includes('CLAS')) {
                return; // Skip unwanted columns
              }
      
              const adjustedKey = key.replace('-2023-03', ''); // Remove '-2023-03' from the key
              const columnClass = columnColors[1];

              
              columns.push({ key: adjustedKey, class: columnClass });
            }
          });
      
          // Push the last column with the dark red class
          columns.push({ key: '%', class: 'green-bg' });
        }
      
        return columns.map((column, index) => (
          <th key={index} className={column.class}>
            {column.key}
          </th>
        ));
      };
      

  const renderRows = () => {
    if (countryData && countryData.features && countryData.features.length > 0) {
      return countryData.features.map((feature, index) => {
        const properties = feature.properties;
        return (
            <tr key={index}>
              <td>{properties.Country}</td>
              {Object.entries(properties).map(([key, value]) => {
                if (key.includes('-2023-03')) {
                  // Skip columns with the word "Class"
                  if (key.includes('CLAS')) {
                    return null;
                  }
                  return <td key={key}>{formatNumber(value)}</td>;
                }
                return null;
              })}
           <td>
              {calculatePercentage(
                parseFloat(properties['PH3:5-2023-03']), //change later
                parseFloat(properties['POP-2023-03']) // change later
              )}
            </td>
          </tr>
        );
      });
    }
    return null;
  };



  return (
    <div className="table-container">
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
  );
}


function formatNumber(number) {
    return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
}

export default Table;
