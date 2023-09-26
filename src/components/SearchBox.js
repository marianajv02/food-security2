import React, { useState } from 'react';
import projectImage from "../assets/project.svg";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="filter-container">
      <label className="label" onClick={() => { setIsVisible(!isVisible);}}><img src={projectImage} alt="project" /></label>
      {isVisible && 
        <div className="search-dropdown">
          <input className="dropdown-toggle"
            type="text"
            placeholder="Click to search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>}
    </div>
  );
};

export default SearchBox;
