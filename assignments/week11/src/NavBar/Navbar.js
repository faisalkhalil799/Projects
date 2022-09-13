import React from 'react';
import './Navbar.css';
import Link from '../Link';

const Navbar = (props) => {

    return (
        <div className="container">
            <div className="menu-items">
                <Link href="/" className="item">{props.home}</Link>
                <Link href="/about" className="item">{props.about}</Link>
                <Link href="/blog" className="item">{props.blog}</Link>
                <Link href="/contact" className="item">{props.contact}</Link>
            </div>
        </div>
    )
};

export default Navbar;