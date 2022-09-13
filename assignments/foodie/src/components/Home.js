import React, { useEffect, useState } from 'react';
import '../style/Home.scss';
import Hero from '../images/Hero-Image.png';
import Trustpilot from '../images/trustpilot-logo.svg';
import Group from '../images/Group.png';

import house from '../images/house.png';
import Menu from './Menu';
import step1 from '../images/Step-01.png';
import step2 from '../images/Step-02.png';
import contentpattern from '../images/Content-Pattern.svg';
import phone from '../images/Phones.png';
import FoodTakeaway from '../images/Food-Takeaway.png';
import GroupPhoto from '../images/Group-Photo.png';
import { Link } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { fetchMenu } from '../action';

import Messages from '../Messages';

const Home = (props) => {

    const [active, setActive] = useState("Burgers");
    const [lang, setLang] = useState('French');
    const [message, setMessage] = useState('en-US');

    useEffect(() => {
        props.fetchMenu("Burgers");
    }, []);



    const tags = [
        {
            image: house,
            heading : <FormattedMessage id ="tagHeading1"/>,
            info: <FormattedMessage id = "tagInfo1"/>
        },

        {
            image: step1,
            heading: <FormattedMessage id='tagHeading2'/>,
            info: <FormattedMessage id='tagInfo2'/>
        },

        {
            image: step2,
            heading: <FormattedMessage id='tagHeading3'/>,
            info: <FormattedMessage id='tagInfo3'/>
        }
    ]


    const onChangeLanguage = (lang) => {

        if(lang === 'French') {
            setLang('English');
            setMessage('fr');
        } else {
            setLang('French');
            setMessage('en-US');
        }
    };


    const MENU = props.menu;

    return (
        <IntlProvider
        messages={Messages[message]} locale="en-US" defaultLocale='en'
        >
            <div className="container">
                <div className="primary-container">
                    <button className="switchLanguage" onClick={() => onChangeLanguage(lang)}>{lang}</button>
                    <div className="flex-part-1">
                        <div className="heading">
                            <h1> <FormattedMessage id='heading1_1'/> <span><FormattedMessage id='heading1span'/></span> <FormattedMessage id='heading1_2'/></h1>
                        </div>
                        <p><FormattedMessage id='headingContent'/></p>
                        <div className="placeOrder">
                            <Link className="link-style" to='/order'><FormattedMessage id='placeAnOrder'/></Link>
                        </div>
                        <br />
                        <img src={Trustpilot} alt="Trustpilot"></img>
                        <h3><span> <FormattedMessage id='reviewSpan'/></span><FormattedMessage id='review'/></h3>
                    </div>
                    <div className="flex-part-2">
                        <img src={Hero} alt="Hero"></img>
                    </div>
                </div>


                <div className="primary-container bg-shape-content">
                    <div className="flex-part-1 yumyum">
                        <div className="heading">
                            <h1><span><FormattedMessage id='heading2'/></span></h1>
                        </div>
                        <p><FormattedMessage id='headingContent'/></p>
                        <div className="placeOrder">
                            <Link className="link-style" to='/company'><FormattedMessage id='learnAboutUs'/></Link>
                        </div>
                    </div>
                    <div className="flex-part-2">
                        <img className="img-size" src={Group} alt="group"></img>
                    </div>
                </div>

                <div className="HowItWorks">
                    <div className="center-div">
                        <h1><FormattedMessage id='howItWorks'/></h1>
                        <div className="tag-container">

                            {
                                tags.map((tag, index) => (
                                    < div className="config" key={index}>
                                        <div className="tags">
                                            <img src={tag.image} alt="tagImage"></img>
                                            <h3>{tag.heading}</h3>
                                            <p>{tag.info}</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="menu-container">
                    <div className="title-wrap">
                        <div className="title">
                            <h1><FormattedMessage id='BrowseOurMenu'/></h1>
                            <p><FormattedMessage id='menuInfo'/></p>
                        </div>
                    </div>
                    <div className="menu-items">
                        <div className="buttons">
                            <button className={"Burgers" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Burgers"); setActive("Burgers"); }}><FormattedMessage id='burger'/></button>
                            <button className={"Sides" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Sides"); setActive("Sides"); }}><FormattedMessage id='sides'/></button>
                            <button className={"Drinks" === active ? 'button active' : 'button'} onClick={() => { props.fetchMenu("Drinks"); setActive("Drinks"); }}><FormattedMessage id='drink'/></button>
                        </div>
                        <Menu menu={MENU} />

                        <Link className="fullMenu" to="/order"><FormattedMessage id='seeFullMenu'/></Link>
                    </div>

                </div>

                <div className="primary-container no-bg">

                    <div className="flex-part-2">
                        <img src={phone} alt="phone"></img>
                        <img className="content-pattern" src={contentpattern}></img>
                    </div>
                    <div className="flex-part-1 yumyum">
                        <div className="heading">
                            <h1><span><FormattedMessage id='heading3'/></span></h1>
                        </div>
                        <p><FormattedMessage id='headingContent'/></p>
                        <div className="placeOrder">
                            <Link className="link-style" to='faq' ><FormattedMessage id='seeFaq'/></Link>
                        </div>
                    </div>
                </div>

                <div className="primary-container bg-shape-content">
                    <div className="flex-part-1 yumyum">
                        <div className="heading">
                            <h1><span><FormattedMessage id='heading4'/></span></h1>
                        </div>
                        <p><FormattedMessage id='headingContent'/></p>
                        <div className="placeOrder">
                            <Link className="link-style" to="/phone">Ph. +9126345212</Link>
                        </div>
                    </div>
                    <div className="flex-part-2">
                        <img src={FoodTakeaway} alt="Food Take Away"></img>
                    </div>
                </div>

                <div className="last-section">
                    <div className="section-items">
                        <div className="group-photo">
                            <img src={GroupPhoto} alt="Group Photo"></img>
                        </div>
                        <div className="info">
                            <h1><span><FormattedMessage id='heading5span'/> </span><FormattedMessage id='heading5'/></h1>
                            <div className="placeOrder">
                                <Link className="link-style-order" to='/order'><FormattedMessage id='orderNow'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </IntlProvider>
    );
};


const mapStateToProps = (state) => {
    return { menu: state.menu };
}

export default connect(mapStateToProps, { fetchMenu })(Home);