import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const TopicOptions = [
  "Agriculture",
  "Livestock & pastoralism",
  "Forestry & biodiversity",
  "Fisheries & aquaculture",
  "Natural resource management and Climate adaptation and mitigation",
  "Employment & revenues",
  "Food security and social protection",
  "Nutrition and health",
  "Demography and migration",
  "Energy",
  "Water & sanitation",
  "Markets, prices & trade",
  "Gender (Youth and women)",
  "Governance",
  "Resilience",
  "Youth",
  "Protection, paix",
  // ... other Topic options
];

const SearchBoxTopic = ({ selectedTopics, setSelectedTopics }) => {
  return (
    <StaticFilterOptions
      title="Topic"
      options={TopicOptions}
      selectedOptions={selectedTopics}
      setSelectedOptions={setSelectedTopics}
    />
  );
};

export default SearchBoxTopic;
