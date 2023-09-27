import React from "react";
import locationIcon from "../assets/location.svg"
import picPlaceholder from "../assets/picture-placeholder.png"
import "../styles/DataBlock.css"

const DataBlock = ({ project, location, partners, detail, status }) => {
    return (
      <div className="data-block">
        <div className="picture-wrapper">
          <div className="status-indicator" style={{ color: "white", backgroundColor: status === "COMPLETED" ? "green" : "orange" }}>
            {status}
          </div>
          <img src={picPlaceholder} alt="placeHolder"/>
        </div>
        <div className="content">
          <h2 className="project-name">{project}</h2>
          <div className="location">
            <img src={locationIcon} alt="Location" />
            <span>{location}</span>
          </div>
          <p className="partners">Partners: {partners}</p>
          <a className="details-link" href={detail} target="_blank" rel="noopener noreferrer">
            <div className="more-button">More</div>
          </a>
        </div>
      </div>
    );
  };

export default DataBlock;
