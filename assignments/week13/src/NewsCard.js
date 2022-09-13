import { useEffect, useState } from 'react';
import './NewsCard.css'

const NewsCard = (props) => {

    const [term, setTerm] = useState([{}]);

    const text = props.search;

    useEffect(() => {
        setTerm(props.data);
    },[]);


    useEffect(() => {
        if (props.search) {

            const newData = props.data.filter((search) => {
                return search.title.toLowerCase().includes(props.search.toLowerCase());
            });

            setTerm(newData);
            console.log("newdaa", newData);
        }
    },[props.search]);


    return (
        <div className="flex-div">
            {props.search ?
                <>{
                    term.map((item, index) => (
                        <div key={index} className="main-div">
                            <div><img src={item.imageUrl} alt={item.title}></img></div>
                            <div className="author-time my">
                                <h5>{item.author} , {item.date}</h5>
                            </div>
                            <h2 className="title my">{item.title}</h2>
                            <p className="content my">{item.content}</p>
                        </div>
                    ))
                } </>
                :
                <>{
                    props.data.map((item, index) => (
                        <div key={index} className="main-div">
                            <div><img src={item.imageUrl} alt={item.title}></img></div>
                            <div className="author-time my">
                                <h5>{item.author} , {item.date}</h5>
                            </div>
                            <h2 className="title my">{item.title}</h2>
                            <p className="content my">{item.content}</p>
                        </div>
                    ))
                } </>
            }
        </div>
    );

};

export default NewsCard;