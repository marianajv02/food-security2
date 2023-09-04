
import React, { useState } from 'react';
import './Timebar.css';
import MapView from './MapView';


const Timebar = ({ onChangeYear, onChangeMonth }) => {
  const minYear = 2014;
  const maxYear = 2023;
  const [selectedYear, setSelectedYear] = useState(maxYear);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleSliderChange = (event) => {
    const yearRange = maxYear - minYear;
    const sliderValue = parseFloat(event.target.value);
    const selected = Math.round(minYear + sliderValue * yearRange);
    setSelectedYear(selected);
    if (onChangeYear) {
      onChangeYear(selected);
    }
  };

  const handleMonthButtonClick = (month) => {
    const monthMap = {
      March: 3,
      June: 6,
      November: 11,
    };

    const monthNumber = monthMap[month];
    if (monthNumber !== undefined) {
      setSelectedMonth(monthNumber);
      if (onChangeMonth) {
        onChangeMonth(monthNumber);
      }
    }
  };

  return (
    
    
    <div className="timebar">
      <div className="year-bar">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={(selectedYear - minYear) / (maxYear - minYear)}
          onChange={handleSliderChange}
          className="slider"
        />
        <div className="year-indicator">{selectedYear}</div>
      </div>
      <div className="month-buttons">
        <button
          className={selectedMonth === 3 ? 'selected' : ''}
          onClick={() => handleMonthButtonClick('March')}
        >
          March
        </button>
        <button
          className={selectedMonth === 6 ? 'selected' : ''}
          onClick={() => handleMonthButtonClick('June')}
        >
          June
        </button>
        <button
          className={selectedMonth === 11 ? 'selected' : ''}
          onClick={() => handleMonthButtonClick('November')}
        >
          November
        </button>
      </div>

    </div>
  );
};

export default Timebar;
