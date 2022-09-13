import React from 'react';
import './Showcase.css';

const Showcase = (props) => {

    return (
        <div id="showcase">
            <div id="container">
                <div id="showcase-container">
                    
                    <div id="showcase-content">
                        <div>
                            <h1>{props.heading_line_1}</h1>
                            <h1 className="not-bold">{props.heading_line_2}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;