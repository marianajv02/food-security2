import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";
import typeImage from "../assets/type.svg";

const staticProjectTypes = [
    "Humanitarian Aid",
    "Development",
    "Peace",
];

const SearchBoxProjectTypes = ({ selectedProjectTypes, setselectedProjectTypes }) => {
  return (
    <StaticFilterOptions
      title={<img src={typeImage} title="Type" />}
      options={staticProjectTypes}
      selectedOptions={selectedProjectTypes}
      setSelectedOptions={setselectedProjectTypes}
    />
  );
};

export default SearchBoxProjectTypes;
