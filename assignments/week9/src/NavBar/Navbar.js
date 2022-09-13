import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

    return (
        <nav id="main-nav">
            <div className="container">
                <div className="nav-items">
                    <ul>
                        <li><a href="">{props.home}</a></li>
                        <li><a href="#">{props.about}</a></li>
                        <li><a href="#">{props.lesson}</a></li>
                        <li><a href="#">{props.portfolio}</a></li>
                        <li><a href="#">{props.blog}</a></li>
                        <li><a href="#">{props.contact}</a></li>
                        <li className="timer">00:0{props.minute}:{props.seconds}</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;