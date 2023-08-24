import React, { useState } from 'react';
import './Sidebar.css';
import Timebar from './Timebar';

function Sidebar({ regionInfo }) {
    return (
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='logo'>
                    <img src='/images/family_icon.jpg' alt='Family Icon' />
                    <span className='logo-text'>Situation alimentaire et nutritionelle</span>
                </div>
                <div><Timebar /></div>
                <div className='region-info'>
                    {/* Display information about the hovered region */}
                    {regionInfo && (
                        <div>
                            <h2>{regionInfo.name}</h2>
                            <div className='info-row'>
                                <h4>Total population:</h4>
                                <p>{formatNumber(regionInfo.population)}</p>
                                <p></p>
                            </div>
                            <div className='info-row'>
                                <h4>Phase 1:</h4>
                                <p>{formatNumber(regionInfo.phase1)}</p>
                                <p>{calculatePercentage(regionInfo.phase1, regionInfo.population)}%</p>
                            </div>
                            <div className='info-row'>
                                <h4>Phase 2:</h4>
                                <p>{formatNumber(regionInfo.phase2)} </p>
                                <p>  {calculatePercentage(regionInfo.phase2, regionInfo.population)}%</p>
                            </div>
                            <div className='info-row'>
                                <h4>Phase 3:</h4>
                                <p>{formatNumber(regionInfo.phase3)} </p>
                                <p>{calculatePercentage(regionInfo.phase3, regionInfo.population)}%</p> 
                            </div>
                            <div className='info-row'>
                                <h4>Phase 4:</h4>
                                <p>{formatNumber(regionInfo.phase4)}</p>
                                <p>{calculatePercentage(regionInfo.phase4, regionInfo.population)}%</p>
                            </div>
                            <div className='info-row'>
                                <h4>Phase 5:</h4>
                                <p>{formatNumber(regionInfo.phase5)}</p>
                                <p>{calculatePercentage(regionInfo.phase5, regionInfo.population)}%</p>
                            </div>
                            {/* Add more fields as needed */}
                        </div>
                    )}
                </div>
                {/* More sidebar content */}
            </div>
        </nav>
    );
}

function formatNumber(number) {
    return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function calculatePercentage(value, total) {
    const percentage = (value / total) * 100;
    return percentage.toFixed(2); // Displaying percentage with two decimal places
}

export default Sidebar;
