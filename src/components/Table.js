import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import App from '../App';
import Timebar from './Timebar';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Table.css';

const Table = ({ countryData, level1Data, level2Data, selectedYear, selectedMonth }) => {
  console.log('table', countryData);
  // se esta duplicando la tabla cuando hay undefined data, hay que hacer algo para reiniciarla cada vez que cambie selected year o selected month
   
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Country', rowgroup: true, hide: false, headerClass: 'custom-header', cellClass: 'custom-cell-bold', width: 100 },
    { field: 'Level1', rowgroup: true, hide: false, headerClass: 'custom-header', width: 100 },
    { field: 'Level2', rowgroup: true, hide: false, headerClass: 'custom-header', width: 100 },
    { field: 'Population', headerClass: 'custom-header', width: 120 },
    { field: 'Phase 1', headerClass: 'custom-header1', width: 90 },
    { field: 'Phase 2', headerClass: 'custom-header2', width: 90 },
    { field: 'Phase 3', headerClass: 'custom-header3', width: 90 },
    { field: 'Phase 4', headerClass: 'custom-header4', width: 90 },
    { field: 'Phase 5', headerClass: 'custom-header5', width: 90 },
    { field: 'Phase 3-5', headerClass: 'custom-header5', width: 100 },
    { field: '%', headerClass: 'custom-header5', width: 60 }
  ]);
  const getRowId = (params) => params.data.Key;
  ///
  
  const [tableData, setTableData] = useState([]);;
  const [expandedCountry, setExpandedCountry] = useState(null);
  const handleExpandButtonClick = (country) => {
    if (expandedCountry === country) {
      setExpandedCountry(null);
    } else {
      setExpandedCountry(country);
    }
    
  };
  ///
  useEffect(() => {
    
    if (!countryData || !countryData.features) {
      return; // Render nothing while data is being fetched
    }

    const rowData = countryData.features
    .map((feature) => formatFeature(feature, selectedYear, selectedMonth))
    .filter((row) => row.Population !== 'Data not available'); 

    const totalRow = {
      Country: 'Total',
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

    setTableData(allRows); // Update tableData with new data
  }, [countryData, selectedYear, selectedMonth]);


  
  function rowClick(clickEvent) { // llamar cuando se pique el boton o el nombre
    const clickedRowData = clickEvent.data;
    const api = clickEvent.api;
    const rowLevel = clickedRowData.level || 0;
    const columnsToCheck = ['Country', 'Level1'];

    
    
    if (rowLevel === 2) {
      return;
    }
    // expand
    const columnToCheck = columnsToCheck[rowLevel];
    const cellValue = clickedRowData[columnToCheck];
    const data = [level1Data.features, level2Data.features].map((featureSet) => featureSet.map((feature) => formatFeature(feature, selectedYear, selectedMonth)));
    const filteredRows = data[rowLevel]
      .filter((feature) => feature[columnToCheck] === cellValue)
    if(clickedRowData.expanded) {
      // collapse logic ... en cada if voy a tener que hacer un filter y un map 
      clickedRowData.expanded = false;
      api.applyTransaction({
        remove: filteredRows.map((row) => ({ Key: row.Key }))
      });
    } else {
      clickedRowData.expanded = true;
      api.applyTransaction({
        add: filteredRows.map((childFeature) => ({ ...childFeature, excludeFromTotals: true, level: rowLevel + 1, expanded: false })), 
        addIndex: clickEvent.rowIndex + 1
      });
    }
  }
  ///




  const groupDisplayType = 'groupRows';

  return (
    <div className="ag-theme-alpine" >
      <AgGridReact rowData={tableData} groupDisplayType={groupDisplayType} columnDefs={columnDefs} onRowClicked={rowClick} getRowId={getRowId}/>

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
  return rowData.reduce((total, row) => total + !row.excludeFromTotals ? parseFloat(row[columnName].replace(/,/g, '')) : 0 || 0, 0);
}

function formatFeature(feature, selectedYear, selectedMonth)  {
  let month;
  if(selectedMonth==11){
    month='11';
  }
  else{
    month=`0${selectedMonth}`;
  }
  const populationData = feature.properties[`POP-${selectedYear}-${month}`];
  console.log(month);

  if (populationData === undefined) {
    let month;
    if(selectedMonth==11){
      month='11';
    }
    else{
      month=`0${selectedMonth}`;
    }
    // Data is not available for this combination, return a message
    return {
      Country: feature.properties['Country'],
      Level1: feature.properties['Name_1'],
      Level2: feature.properties['Name_2'],
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
    Country: getNameByLevel(feature, 0),
    Level1: getNameByLevel(feature, 1),
    Level2: getNameByLevel(feature, 2),
    Population: formatNumber(populationData),
    'Phase 1': formatNumber(feature.properties[`PH1-${selectedYear}-${month}`]),
    'Phase 2': formatNumber(feature.properties[`PH2-${selectedYear}-${month}`]),
    'Phase 3': formatNumber(feature.properties[`PH3-${selectedYear}-${month}`]),
    'Phase 4': formatNumber(feature.properties[`PH4-${selectedYear}-${month}`]),
    'Phase 5': formatNumber(feature.properties[`PH5-${selectedYear}-${month}`]),
    'Phase 3-5': formatNumber(feature.properties[`PH3:5-${selectedYear}-${month}`]),
    '%': calculatePercentage(
      feature.properties[`PH3:5-${selectedYear}-${month}`],
      populationData
    ),
    Key: feature.properties.Key
  };
}

function getNameByLevel(feature, level = 0){
  const propNames = ['Country', 'Name_1', 'Name_2'];
  const propName = propNames[level];
  const name = feature.properties[propName];
  if(level > 0 && name === feature.properties[propNames[level - 1]]) {
    return ''
  } else {
    return name;
  }
}



export default Table;