import React from 'react';
import './Legend.css';

function Legend() {
    const layers = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'No data'];
    const colors = ['#53ca57', '#ffe252', '#fa890f', '#eb3333', '#900101e3','#ffffff'];

    return (
        <nav className='legend'>
            <div className='legend-container'>
                {layers.map((layer, i) => (
                    <div key={i} className='legend-item'>
                        <span className='legend-key' style={{ backgroundColor: colors[i] }} />
                        <span className='legend-value'>{layer}</span>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Legend;
