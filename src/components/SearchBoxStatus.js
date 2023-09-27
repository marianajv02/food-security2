import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";
import statusImage from "../assets/status.svg";

const StatusOptions = [
    "ONGOING",
    "COMPLETED",
    "FORTHCOMING",
];

const SearchBoxStatus = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <StaticFilterOptions
      title={<img src={statusImage} title="Status" />}
      options={StatusOptions}
      selectedOptions={selectedStatus}
      setSelectedOptions={setSelectedStatus}
    />
  );
};

export default SearchBoxStatus;
