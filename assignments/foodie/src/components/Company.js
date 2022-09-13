import React from 'react';
import '../style/Company.scss';
import { Link } from 'react-router-dom';
import Team from '../images/Team.png';
import DrawnArrow from '../images/Drawn-Arrow.svg';
import CommonCotainer from './CommonContainer';

const Company = () => {

    const numbers = [62, 139, 34, 57];

    return (
        <div>

            <CommonCotainer heading={"Our company focuses on"} span={"food and people."} />

            <div className="company-section1">
                <div className="flex1-container">
                    <div className="heading">
                        <h1><span>The home of fresh products</span></h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <div className="company-section">
                        <Link className="link" to='/company'>Learn about us</Link>
                    </div>
                </div>
                <div className="flex2-container">
                    <img src={Team} alt="Team"></img>
                </div>
            </div>

            <div className="showcase">
                {
                    numbers.map((num,idx) => (
                        <div className="showcase-item" key={idx}>
                            <h1>{num}</h1>
                            <img src={DrawnArrow} alt="Arrow"></img>
                            <h3>Fiesty Menu Items</h3>
                        </div>
                    ))
                };
            </div>
        </div>
    );
};

export default Company;