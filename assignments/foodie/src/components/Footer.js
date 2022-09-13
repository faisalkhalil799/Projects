import React from 'react';
import logo from '../images/logo.svg';
import '../style/Footer.scss';
import insta from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="left">
                        <img src={logo} alt="logo"></img>
                        <p>Takeaway & Delivery template for small - medium businesses.</p>
                    </div>
                    <div className="right">
                        <div className="flex-column">
                            <div className="tag">COMPANY</div>
                            <Link to="/">Home</Link>
                            <Link to="/order">Order</Link>
                            <Link to="/faq">FAQ</Link>
                            <a href="#">Contact</a>
                        </div>
                        <div className="flex-column">
                            <div className="tag">TEMPLATE</div>
                            <a href="#">Style guide</a>
                            <a href="#">Changeog</a>
                            <a href="#">Licence</a>
                            <a href="#">Webflow University</a>
                        </div>
                        <div className="flex-column">
                            <div className="tag">FLOWBASE</div>
                            <a>More Cloneables</a>
                        </div>
                    </div>
                </div>

                <div className="foot-col">
                    <hr />
                    <div className="foot">
                        <div className="powered">
                            Built by <a>Flowbase</a>. Powered by <a>Webflow</a>.

                        </div>
                        <div className="contact">
                            <a href="#"><img src={insta} alt="insta"></img></a>
                            <a href="#"><img src={twitter} alt="twitter"></img></a>
                            <a href="#"><img src={youtube} alt="youtube"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;