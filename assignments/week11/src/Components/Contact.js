import React, { useEffect, useState } from 'react';
import './contact.css';

import axios from "axios";
const Contact = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [message,setMessage] = useState('');

    useEffect(() => {
        console.log(name);
        console.log(email);
        console.log(number);
        console.log(message);
    },[name,email,number,message]);

    let bodyToSend = {
        name: name,
        email: email,
        number: number,
        message: message
    }
    const onButtonClick = () => {
        axios.post('https://formspree.io/f/mwkyodkr', {
            details: JSON.stringify(bodyToSend)
        })
            .then((res) => console.log(res))
            .catch((err) => console.log("error is: ", err))
        alert("Message sent successfully!")
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");

    };



    return(
        <div className="form">
            <div className="contact-inputs">
                <label>Contact Us</label>
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => {setName(e.target.value)}}></input>
                <input type="email" value={email} placeholder="Enter Email" onChange={(e) => {setEmail(e.target.value)}}></input>
                <input type="text" value={number} placeholder="Enter mobile number" onChange={(e) => {setNumber(e.target.value)}}></input>
                <input type="message" value={message} placeholder="Enter Message" onChange={(e) => {setMessage(e.target.value)}}></input>
                <button type="submit" onClick={() => onButtonClick()}>Submit</button>
            </div>
        </div>
    );
};

export default Contact;