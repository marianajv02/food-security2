import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="filter-container">
      <label>Project Name:</label>
      <div className="search-dropdown">
        <input
          type="text"
          placeholder="Search by Project Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
