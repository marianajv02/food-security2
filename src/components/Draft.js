  'use strict';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './Draft.css';


const Draft = ({level2Data}) => {
    console.log(level2Data)
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Country', rowGroupIndex: 0, hide: false },
    { field: 'L1', rowGroupIndex: 1, hide: false  },
    
    {
      field: 'L2',
      minWidth: 250,
      cellRenderer: (params) => {
        return <span style={{ marginLeft: 60 }}>{params.value}</span>;
      },
    },
    { field: 'Populaton', minWidth: 200 },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    };
  }, []);


  if (!level2Data) {
    return null; // Render nothing while data is being fetched
  }

  const onGridReady = () => {
    if (level2Data && level2Data.features) {
      const extractedData = level2Data.features.map(feature => ({
        Country: feature.properties['Country'],
        L1: feature.properties['Name_1'], 
        L2: feature.properties['Name_2'],
        Population: formatNumber(feature.properties[`POP-2023-03`])
      }));
      setRowData(extractedData);
    } else {
      console.log("Invalid level2Data or missing features array.");
    }
  };
  

      
    
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          groupDisplayType={'groupRows'}
          animateRows={true}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

function formatNumber(number) {
    if (number === null) {
        return '0'; // Return '0' as a string or 0 if you prefer a number
    }
    
    return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }

export default Draft;