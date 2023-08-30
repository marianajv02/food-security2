import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const NestedGridRenderer = (props) => {
  const rowData = props.value; // Assuming your row data for the nested grid is passed as the 'Group' field value

  return (
    <div className="nested-grid">
      <AgGridReact
        rowData={rowData}
        columnDefs={[
          { field: 'L1' },
          { field: 'L2' },
          // Other columns for nested grid...
        ]}
        domLayout='autoHeight' // Adjust the layout to fit the content
      />
    </div>
  );
};

export default NestedGridRenderer;
