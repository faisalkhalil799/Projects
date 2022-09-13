import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar/Navbar';
// import SectionA from './SectionA/SectionA';
// import Showcase from './Showcase/Showcase';
// import SectionB from './SectionB/SectionB';
// import SectionC from './SectionC/SectionC';
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';
import Home from './Home/Home';
import Route from './Route';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar home="Home" about="About Us" blog="Blog" contact="Contact" />

                <Route path="/">
                    <Home
                        heading_line_1="CHECK OUR VIDEO"
                        heading_line_2="LEARNING IN 6 WEEKS"
                        heading_home="SERVICES"
                        text_1_Line_1="Recording" text_1_Line_2="Services" icon1={icon1}
                        text_2_Line_1="Get a Printed" text_2_Line_2="Certificate" icon2={icon2}
                        text_3_Line_1="Lessons Via" text_3_Line_2="Skype" icon3={icon3}
                        heading_lesson="OUR LESSONS ARE EASY"
                        text1="GRATITUDE ATTRACTS MORE OF THE THINGS YOU WANT IN LIFE"
                        text2="NO DREAM IS TOO BIG"
                        text3="LISTEN TO YOUR HEART AND INTUTION"
                        heading_project="OUR PROJECTS" sizeText="150 X 150"
                    />
                </Route>
                <Route path="/about"><About /></Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/blog"><Blog/></Route>

            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));