import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";
import sdgImage from "../assets/SDG.png";

const TargetOptions = [
  "SDG 1",
  "SDG 2",
  "SDG 3",
  "SDG 4",
  "SDG 5",
  "SDG 6",
  "SDG 7",
  "SDG 8",
  "SDG 9",
  "SDG 10",
  "SDG 11",
  "SDG 12",
  "SDG 13",
  "SDG 14",
  "SDG 15",
  "SDG 16",
  "SDG 17",
];

const SearchBoxTarget = ({ selectedTargets, setSelectedTargets }) => {
  return (
    <StaticFilterOptions
      title={<img src={sdgImage} title="Goal" />}
      options={TargetOptions}
      selectedOptions={selectedTargets}
      setSelectedOptions={setSelectedTargets}
    />
  );
};

export default SearchBoxTarget;
