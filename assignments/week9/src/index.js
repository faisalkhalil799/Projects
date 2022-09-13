import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavBar/Navbar';
import SectionA from './SectionA/SectionA';
import Showcase from './Showcase/Showcase';
import SectionB from './SectionB/SectionB';
import SectionC from './SectionC/SectionC';
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon3 from './images/icon-3.png';

class App extends React.Component {

    state = { minute : 0 , seconds : 0};

    componentDidMount() {
        let timer = setInterval(() => {
            if(this.state.minute === 5) {
                window.clearInterval(timer);
            }
            else if(this.state.seconds === 60) {
                this.setState({minute : this.state.minute+1});
                this.setState({seconds : 0});
            } else {
                    this.setState({seconds :  this.state.seconds+1});
                
            }
            
        },1000);
    };

    render() {
        return (
            <div>
                <Navbar home="Home" about="About Us" lesson="Lessons" portfolio="Portfolio" blog="Blog" contact="Contact" minute={this.state.minute} seconds={this.state.seconds}/>

                <Showcase heading_line_1="CHECK OUR VIDEO" heading_line_2="LEARNING IN 6 WEEKS"/>

                <SectionA heading="SERVICES"
                    text_1_Line_1="Recording" text_1_Line_2="Services" icon1={icon1}
                    text_2_Line_1="Get a Printed" text_2_Line_2="Certificate" icon2={icon2}
                    text_3_Line_1="Lessons Via" text_3_Line_2="Skype" icon3={icon3}/>

                <SectionB
                    heading="OUR LESSONS ARE EASY"
                    text1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, consequatur!"
                    text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quod."
                    text3="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, maxime!" />

                <SectionC heading="Our Projects" sizeText="150 X 150" />
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));