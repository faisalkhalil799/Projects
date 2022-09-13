import React from 'react';
import photo2 from '../images/photo-2.jpg';
import './About.css';
import person1 from '../images/person-1.jpg';
import person2 from '../images/person-2.jpg';

const About = () => {
    return (
        <div>
            <section id="about-info" className="bg-light py-3">
                <h1 className="l-heading"><span className="text-primary">About</span> Hotel BT</h1>
                <div className="container-2">
                    <img src={photo2}></img>
                </div>
            </section>

            <section id="testimonials" className="py-3">
                <h2 className="l-heading">What Our Guests Say</h2>
                <div className="container-3">

                    <div className="testimonial bg-primary">
                        <img src={person1}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
                    </div>

                    <div className="testimonial bg-primary">
                        <img src={person2}></img>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id amet odio laboriosam sit iusto tempore fugit exercitationem, a dolore quo maiores nisi!</p>
                    </div>
                </div>
            </section>


            <footer id="main-footer">
                <p>Hotel BT &copy; 2019, All RIghts Reserved</p>
            </footer>
        </div >
    );
};
export default About;