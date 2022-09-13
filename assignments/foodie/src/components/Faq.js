import React, { useEffect, useState } from 'react';
import '../style/Faq.scss';
import { connect } from 'react-redux';
import { fetchFaq } from '../action';
import CommonCotainer from './CommonContainer';
import FaqItem from '../components/FaqItem';

const Faq = (props) => {

    const [active, setActive] = useState("Our Food");

    useEffect(() => {
        props.fetchFaq("food");
    }, []);

    const FAQ = props.faq;
    
    return (
        <div>
            <CommonCotainer heading={"Frequently Asked"} span={"Questions"} />

            <div className="faq-container">
                <div className="faq-buttons">
                    <button className={"Our Food" === active ? 'active button' : 'button'} onClick={() => {props.fetchFaq("food"); setActive("Our Food"); }}>Our Food</button>
                    <button className={"Our Delivery" === active ? 'active button' : 'button'} onClick={() => { props.fetchFaq("Delivery"); setActive("Our Delivery") }}>Our Delivery</button>
                    <button className={"Our Company" === active ? 'active button' : 'button'} onClick={() => { props.fetchFaq("Company"); setActive("Our Company") }}>Our Company</button>
                </div>

                <div className="faq-items">
                    {
                        FAQ ?
                            <>{
                                FAQ.map((faq, idx) => (

                                    <FaqItem question={faq.question} key={idx}/>
                            
                                ))
                            } </> :
                            <>{
                                <div></div>
                            }</>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { faq: state.faq};
}

export default connect(mapStateToProps, { fetchFaq })(Faq);