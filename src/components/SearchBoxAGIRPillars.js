import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const AGIRPillarsOptions = [
    "Pillar 1: Improve social protection for the most vulnerable communities and households in order to secure their livelihoods",
    "Pillar 2: Strengthen the nutrition of vulnerable households",
    "Pillar 3: Sustainably improve agricultural and food productivity and the incomes of the most vulnerable households and improve access to food",
    "Pillar 4: Strengthen governance in food and nutrition security",
      // ... other AGIRPillars options
];

const SearchBoxAGIRPillars = ({ selectedAGIRPillars, setSelectedAGIRPillars }) => {
  return (
    <StaticFilterOptions
      title="AGIR Pillars"
      options={AGIRPillarsOptions}
      selectedOptions={selectedAGIRPillars}
      setSelectedOptions={setSelectedAGIRPillars}
    />
  );
};

export default SearchBoxAGIRPillars;
