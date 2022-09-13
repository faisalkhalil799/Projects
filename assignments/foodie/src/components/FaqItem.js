import React, { useState } from 'react';

const FaqItem = (props) => {

    const [show, setShow] = useState(false);
    const isVisible = show ? "show" : "hide";

    const toggleAnswer = (e) => {
        setShow((prevState) => !prevState);
      };

    return (
        <div className='faq' onClick={toggleAnswer} >
            <div className="faq-question" >
                <div className="question">
                    {props.question}
                </div>
                <div className={isVisible==='hide' ? 'plus' : 'cross'}>
                    +
                </div>
            </div>
            <hr />
            <div className={`${isVisible} faq-answer`} >
                {<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat. Aenean
                    faucibus nibh et justo cursus id rutrum lorem imperdiet.
                </p>
                }
            </div>
        </div>
    );
};

export default FaqItem;