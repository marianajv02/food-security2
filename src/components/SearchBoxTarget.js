import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const TargetOptions = [
  "Artisanal fishermen",
  "Childer aged under 5 years",
  "Institutions",
  "Pastoralists & Agro-pastoralists",
  "Poor households",
  "Poor workers in the informal economy",
  "Pregnant and lactating women",
  "Refugees",
  "Vulnerable small-scale farmers",
  "Women",
  "Youth",
  // ... other Target options
];

const SearchBoxTarget = ({ selectedTargets, setSelectedTargets }) => {
  return (
    <StaticFilterOptions
      title="Target"
      options={TargetOptions}
      selectedOptions={selectedTargets}
      setSelectedOptions={setSelectedTargets}
    />
  );
};

export default SearchBoxTarget;
