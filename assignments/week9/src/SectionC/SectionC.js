import React from 'react';
import './SectionC.css';


const SectionC = (props) => {
    return (
        <section id="section-c">
            <div id="section-c-container">
                <h2 className="my-2 my-3">{props.heading}</h2>
            </div>

            <div className="grid">
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>

                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
            </div>
            <div className="grid">
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div class="grid-items">
                    <p>{props.sizeText}</p>
                </div>
                <div className="grid-items">
                    <p>{props.sizeText}</p>
                </div>
            </div>
        </section>
    );
};

export default SectionC;