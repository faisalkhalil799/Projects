import React from "react";

const HowItWorks = (props) => {

    return(
        <div className="tag-container">
            <div>
                <img src={props.image} alt="tag Image"></img>
                <h2>{props.heading}</h2>
                <p>{props.info}</p>
            </div>

        </div>
    );
};

export default HowItWorks;