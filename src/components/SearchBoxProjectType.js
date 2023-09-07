import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const staticProjectTypes = [
    "Humanitarian Aid",
    "Development",
    "Peace",
];

const SearchBoxProjectTypes = ({ selectedProjectTypes, setselectedProjectTypes }) => {
  return (
    <StaticFilterOptions
      title="Project Type"
      options={staticProjectTypes}
      selectedOptions={selectedProjectTypes}
      setSelectedOptions={setselectedProjectTypes}
    />
  );
};

export default SearchBoxProjectTypes;
