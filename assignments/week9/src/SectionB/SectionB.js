import React from 'react';
import './SectionB.css';


const SectionB = (props) => {

    return (
        <section id="section-b">
            <div id="container">
                <div id="showcase-container">
                    <div id="showcase-content">
                        <div>
                            <h1 className="my-3 my-2">{props.heading}</h1>
                            <p className="my-3">{props.text1}</p>
                            <p className="my-3">{props.text2}</p>
                            <p className="my-3">{props.text3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionB;