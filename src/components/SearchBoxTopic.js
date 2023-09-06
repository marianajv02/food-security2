import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const TopicOptions = [
  "Agriculture & value chains",
  "Aide d'urgence",
  "Climate, climate change & adaptation",
  "Demographic trends",
  "Education",
  "Employment & revenues",
  "Energy",
  "Environment",
  "Fisheries & aquaculture",
  "Food security & zero hunger",
  "Forestry & biodiversity",
  "Gender",
  "Governance & capacity-building",
  "Health",
  "Livestock & pastoralism",
  "Local actors & livelihoods",
  "Markets, prices & trade",
  "Natural resource management",
  "Nutrition",
  "Poverty",
  "Rural-urban issues",
  "Social protection",
  "Water & sanitation",
  "Youth"
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
