import React from "react";
import '../style/CommonContainer.scss';
const CommonCotainer = (props) => {

    return (
        <div className="company-container ">
            <div className="container-flex">
                <h1 className="container-width">{props.heading} <span>{props.span}</span> {props.heading2} <span>{props.span2}</span> {props.heading3}</h1>
            </div>
        </div>
    );
};

export default CommonCotainer;