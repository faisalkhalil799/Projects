import React, { useEffect, useState } from 'react';
import './NavBar.css';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import Tag from './Tag';
import api from './api';
import { connect } from 'react-redux';
import { fetchNews } from './action';


const NavBar = (props) =>{

    const [term , setTerm] = useState('');
    const [tagSearch,setTagSearch] = useState('Not click');

    
        useEffect(() => {
            props.fetchNews('all');
        },[]);


    const onInputChange = (input) => {
        setTerm(input);
        
    }
    
        const news = props.news;

        const tags = ['All', 'National', 'Business', 'Sports', 'World', 'Politics', 'Technology', 'Startup', 'Entertainment', 'miscellaneous', 'Hatke', 'Science', 'Automobile'];


        return (
            <div>
                <SearchBar onSubmit={onInputChange}/>
                <div id="main-nav">
                    <div className="container">
                        <div className="nav-items">
                            <ul>
                                {tags.map((item, index) => (
                                    <Tag item={item} key={index} search={term} onTag={onInputChange}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <NewsCard data={news} search={term}/>
            </div>
        )
    


};

const mapStateToProps = (state) => {
    return { news: state.news };
}

export default connect(mapStateToProps,{ fetchNews })(NavBar);