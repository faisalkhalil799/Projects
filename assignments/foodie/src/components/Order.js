import React, { useEffect, useState } from 'react';
import CommonCotainer from './CommonContainer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMenu } from '../action';
import Menu from './Menu';


const Order = (props) => {

    const [active, setActive] = useState("Full Menu");

    useEffect(() => {
        props.fetchMenu("");
    },[]);

    const MENU = props.menu;

    return (
        <div>
            <CommonCotainer heading={"Get your food"} span={"delivered"} heading2={"or"} span2={"pick-up"} heading3={"in store."} />
            <div className="menu-container">
               
                <div className="menu-items no-bg">
                    <div className="buttons">
                        <button className={"Full Menu" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu(""); setActive("Full Menu") }}>Full Menu</button>
                        <button className={"Burgers" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Burgers"); setActive("Burgers"); }}>Burgers</button>
                        <button className={"Sides" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Sides"); setActive("Sides"); }}>sides</button>
                        <button className={"Drinks" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Drinks"); setActive("Drinks"); }}>Drinks</button>
                    </div>
                    <Menu menu={MENU} />
                    
                </div>

            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { menu: state.menu };
}

export default connect(mapStateToProps,{fetchMenu})(Order);