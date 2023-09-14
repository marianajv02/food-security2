import React from 'react';
import { TableSection } from './TableSection';

function Table({ countryData, selectedYear, selectedMonth }) {

  countryData.features.map((feature) => {
    const countryName= feature.properties['Country']
    const populationData = feature.properties[`POP-${selectedYear}-0${selectedMonth}`];
    const pahse1Data = feature.properties[`PH1-${selectedYear}-0${selectedMonth}`];
    }
  );

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Population</th>
          <th>Phase 1</th>
        </tr>
      </thead>
      <tbody>
        
          <TableSection key={countryName} countryData={countryData} />
      
      </tbody>
    </table>
  );
}

export default Table;
