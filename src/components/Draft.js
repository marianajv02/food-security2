import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import App from '../App';
import Timebar from './Timebar';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DraftRow.css';

const Draft = ({ countryData, selectedYear, selectedMonth}) => {
 // console.log(selectedMonth);
  
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Country', rowgroup: true, hide: false, headerClass: 'custom-header', width: 100  },
    { field: 'L1', headerClass: 'custom-header',width: 100  },
    { field: 'L2', headerClass: 'custom-header',width: 100  },
    { field: 'Population', headerClass: 'custom-header',width: 120  },
    { field: 'Phase 1', headerClass: 'custom-header1',width: 90 },
    { field: 'Phase 2', headerClass: 'custom-header2',width: 90  },
    { field: 'Phase 3', headerClass: 'custom-header3',width: 90  },
    { field: 'Phase 4', headerClass: 'custom-header4',width: 90  },
    { field: 'Phase 5', headerClass: 'custom-header5',width: 90  },
    { field: 'Phase 3-5', headerClass: 'custom-header5',width: 100  },
    { field: '%', headerClass: 'custom-header5',width: 60  }
  ]);
  
    if (!countryData) {
      return null; // Render nothing while data is being fetched
    }

    const rowData = countryData.features.map((feature) => {
      const populationData = feature.properties[`POP-${selectedYear}-0${selectedMonth}`];
  
      if (populationData === undefined) {
        // Data is not available for this combination, return a message
        return {
          Country: feature.properties['Country'],
          L1: '',
          L2: '',
          Population: 'Data not available',
          'Phase 1': 'Data not available',
          'Phase 2': 'Data not available',
          'Phase 3': 'Data not available',
          'Phase 4': 'Data not available',
          'Phase 5': 'Data not available',
          'Phase 3-5': 'Data not available',
          '%': 'Data not available',
        };
      }
  
      // Data is available, format it
      return {
        Country: feature.properties['Country'],
        L1: feature.properties[''],
        L2: feature.properties[''],
        Population: formatNumber(populationData),
        'Phase 1': formatNumber(feature.properties[`PH1-${selectedYear}-0${selectedMonth}`]),
        'Phase 2': formatNumber(feature.properties[`PH2-${selectedYear}-0${selectedMonth}`]),
        'Phase 3': formatNumber(feature.properties[`PH3-${selectedYear}-0${selectedMonth}`]),
        'Phase 4': formatNumber(feature.properties[`PH4-${selectedYear}-0${selectedMonth}`]),
        'Phase 5': formatNumber(feature.properties[`PH5-${selectedYear}-0${selectedMonth}`]),
        'Phase 3-5': formatNumber(feature.properties[`PH3:5-${selectedYear}-0${selectedMonth}`]),
        '%': calculatePercentage(
          feature.properties[`PH3:5-${selectedYear}-0${selectedMonth}`],
          populationData
        ),
      };
    });

    const totalRow = {
      Country: 'Total', 
      L1: '', 
      L2: '',
      Population: formatNumber(calculateColumnSum('Population', rowData)),
      'Phase 1': formatNumber(calculateColumnSum('Phase 1', rowData)),
      'Phase 2': formatNumber(calculateColumnSum('Phase 2', rowData)),
      'Phase 3': formatNumber(calculateColumnSum('Phase 3', rowData)),
      'Phase 4': formatNumber(calculateColumnSum('Phase 4', rowData)),
      'Phase 5': formatNumber(calculateColumnSum('Phase 5', rowData)),
      'Phase 3-5': formatNumber(calculateColumnSum('Phase 3-5', rowData)),
      '%': calculatePercentage(
        calculateColumnSum('Phase 3-5', rowData),
        calculateColumnSum('Population', rowData)
      ),
      
      rowClass: 'total-row',
    };
    
    
    const allRows = [...rowData, totalRow];

    


    const groupDisplayType = 'groupRows';
  
    return (
      <div className="ag-theme-alpine" >
        <AgGridReact rowData={allRows} groupDisplayType={groupDisplayType} columnDefs={columnDefs} />

      </div>
    );
  };

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

function calculateColumnSum(columnName, rowData) {
  return rowData.reduce((total, row) => total + parseFloat(row[columnName].replace(/,/g, '')) || 0, 0);
}
  
  export default Draft;