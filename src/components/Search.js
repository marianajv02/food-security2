import React from "react";
import Mapfilter from "./Mapfilter";
import SearchBox from "./SearchBox";
import SearchBoxLocation from "./SearchBoxLocation";
import SearchBoxPartner from "./SearchBoxPartner";
import SearchBoxStatus from "./SearchBoxStatus";
import SearchBoxTopic from "./SearchBoxTopic";
import SearchBoxTarget from "./SearchBoxTarget";
import SearchBoxProjectTypes from "./SearchBoxProjectType";
import "../styles/Search.css";

const Search = ({
  searchQuery,
  setSearchQuery,
  selectedPartner,
  setSelectedPartner,
  selectedLocations,
  setSelectedLocations,
  selectedStatus,
  setSelectedStatus,
  selectedTopics,
  setSelectedTopics,
  selectedTargets,
  setSelectedTargets,
  selectedProjectTypes,
  setselectedProjectTypes
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
        selectedPartner={selectedPartner}
        setSelectedPartner={setSelectedPartner}
      />
      <SearchBoxStatus
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <SearchBoxTopic
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
      />
      <SearchBoxTarget
        selectedTargets={selectedTargets}
        setSelectedTargets={setSelectedTargets}
      />
      <SearchBoxProjectTypes
        selectedProjectTypes={selectedProjectTypes}
        setselectedProjectTypes={setselectedProjectTypes}
      />
    </div>
  );
};

export default Search;
