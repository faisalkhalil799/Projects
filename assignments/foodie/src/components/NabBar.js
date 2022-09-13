import React, { useEffect, useState } from 'react';
import '../style/NavBar.scss';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { fetchCart } from '../action';
import { connect } from 'react-redux';
import Cart from './Cart';

const NavBar = () => {

    const [active, setActive] = useState("Home");

    const links = [
        {
            link: "Home",
            path: "/"
        },
        {
            link: "Order",
            path: "/order"
        },
        {
            link: "Company",
            path: "/company"
        },
        {
            link: "FAQ",
            path: "/faq"
        },
        {
            link: "Contact",
            path: "/contact"
        }
    ];


    return (
        <div className="container">
            <div className="bannar">
                <div className="banner-wrap">
                    <div className="info">
                        We're open and available for takeaway & delivery.
                        <a className="order-link"> Order Now</a>
                    </div>
                </div>
            </div>

            <div className="nav-container">
                <div className="container-div">
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt='logo'></img>
                        </Link>
                    </div>
                    <div className="nav-links">

                        {
                            links.map((link,idx) => (
                                <Link key={idx}
                                    className={link.link === active ? 'active nav-link' : 'nav-link'} to={link.path}
                                    onClick={(e) => setActive(link.link)}
                                >
                                    {link.link}
                                </Link>
                            ))
                        }

                        
                        <Cart isNavBar={true}/>

                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { cart : state.cart}
};

export default connect(mapStateToProps,{ fetchCart })(NavBar);