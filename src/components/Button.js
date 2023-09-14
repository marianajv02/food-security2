import React from 'react';

export const ExpendableButton = ({ isOpen, toggle, countryName }) => {
  return (
    <button onClick={() => toggle(countryName)}>
      <span
        className="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: 'all 0.25s',
        }}
      >
        expand_more
      </span>
    </button>
  );
};
