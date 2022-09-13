import React from 'react';
import './Home.css'
import banner1 from '../images/banner-1.png';
import banner2 from '../images/banner-2.png';
import Box from '../Components/Box';

const Home = (props) => {

    const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="home-div">

            <div className="banner1">
                <img src={banner1} alt="Banner1" />
                <div className="showcase-text">
                    <h1>{props.heading_line_1}</h1>
                    <h1 className="not-bold">{props.heading_line_2}</h1>
                </div>
            </div>

            <section id="section-a">
                <div className="section-a-heading">
                    <h2 className="my-2">{props.heading_home}</h2>
                </div>

                <div id="services">
                    <div id="my-1" className="icon">
                        <img src={props.icon1} alt="Image1" />
                        <p>{props.text_1_Line_1}</p>
                        <p>{props.text_1_Line_2}</p>
                    </div>
                    <div id="my-1" className="icon">
                        <img src={props.icon2} alt="Image2" />
                        <p>{props.text_2_Line_1}</p>
                        <p>{props.text_2_Line_2}</p>
                    </div>
                    <div id="my-1" className="icon">
                        <div>
                            <img src={props.icon3} alt="Image3" />
                        </div>
                        <p>{props.text_3_Line_1}</p>
                        <p>{props.text_3_Line_2}</p>
                    </div>
                </div>
            </section>

            <div id="container-banner2">
                <img src={banner2} alt="banner2" ></img>
                <div id="showcase-content">
                    <h1 className="my-3 my-2 white-color">{props.heading_lesson}</h1>
                    <p className="my-3">{props.text1}</p>
                    <p className="my-3">{props.text2}</p>
                    <p className="my-3">{props.text3}</p>
                </div>
            </div>

            <section id="section-c">
                <div id="section-c-container">
                    <h2 className="my-2 my-3">{props.heading_project}</h2>
                </div>

                <div className="grid">
                    {boxArray.map((idx) => (
                        <Box key={idx}/>
                    ))}
                </div>

            </section>
        </div>

    );
};

export default Home;