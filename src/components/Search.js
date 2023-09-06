import React from "react";
import SearchBox from "./SearchBox";
import SearchBoxLocation from "./SearchBoxLocation";
import SearchBoxPartner from "./SearchBoxPartner";
import SearchBoxAGIRPillars from "./SearchBoxAGIRPillars";
import SearchBoxTopic from "./SearchBoxTopic";
import SearchBoxTarget from "./SearchBoxTarget";
import "../styles/Search.css";

const Search = ({
  searchQuery,
  setSearchQuery,
  selectedPartners,
  setSelectedPartners,
  selectedLocations,
  setSelectedLocations,
  selectedAGIRPillars,
  setSelectedAGIRPillars,
  selectedTopics,
  setSelectedTopics,
  selectedTargets,
  setSelectedTargets,
}) => {
  return (
    <div className="search-container">
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SearchBoxLocation
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
      />
      <SearchBoxPartner
        selectedPartners={selectedPartners}
        setSelectedPartners={setSelectedPartners}
      />
      <SearchBoxAGIRPillars
        selectedAGIRPillars={selectedAGIRPillars}
        setSelectedAGIRPillars={setSelectedAGIRPillars}
      />
      <SearchBoxTopic
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      />
      <SearchBoxTarget
        selectedTargets={selectedTargets}
        setSelectedTargets={setSelectedTargets}
      />
    </div>
  );
};

export default Search;
