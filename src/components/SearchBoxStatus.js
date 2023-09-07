import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const StatusOptions = [
    "ONGOING",
    "COMPLETED",
    "FORTHCOMING",
];

const SearchBoxStatus = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <StaticFilterOptions
      title="Status"
      options={StatusOptions}
      selectedOptions={selectedStatus}
      setSelectedOptions={setSelectedStatus}
    />
  );
};

export default SearchBoxStatus;
