import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./StaticFilterOptions.css";

const StaticFilterOptions = ({ title, options, selectedOptions, setSelectedOptions }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dropdownRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
  };

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredOptions = options
    .filter(option => option != null)
    .filter((option) => option.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="filter-container">
      <label>{title}:</label>
      <div className="search-dropdown" ref={dropdownRef}>
        <input
          type="text"
          placeholder={`Search by ${title}`}
          value={searchText}
          onChange={handleSearchChange}
          onClick={() => setShowDropdown(true)}
        />
        {showDropdown && (
          <div className="checkbox-list">
            <div>
              <input
                type="checkbox"
                id={`selectAll${title}`}
                value={`selectAll${title}`}
                checked={selectedOptions.length === options.length}
                onChange={handleSelectAll}
              />
              <label htmlFor={`selectAll${title}`}>Select All</label>
            </div>
            {filteredOptions.map((option) => (
              <div key={option}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                />
                <label htmlFor={option}>
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

StaticFilterOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedOptions: PropTypes.func.isRequired,
};

export default StaticFilterOptions;