import React from 'react';
import './SectionA.css';

const SectionA = (props) => {

    return (
        <section id="section-a">
            <div className="section-a-heading">
                <h2 className="my-2">{props.heading}</h2>
            </div>

            <div id="services">
                <div id="my-1" className="icon">
                    <img src={props.icon1} alt="Image1"/>
                        <p>{props.text_1_Line_1}</p>
                        <p>{props.text_1_Line_2}</p>
                </div>
                <div id="my-1" className="icon">
                    <img src={props.icon2} alt="Image2"/>
                        <p>{props.text_2_Line_1}</p>
                        <p>{props.text_2_Line_2}</p>
                </div>
                <div id="my-1" className="icon">
                    <div>
                        <img src={props.icon3} alt="Image3"/>
                    </div>
                    <p>{props.text_3_Line_1}</p>
                    <p>{props.text_3_Line_2}</p>
                </div>
            </div>
        </section>
    );
};

export default SectionA;