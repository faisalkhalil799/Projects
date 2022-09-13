import React, { useState } from 'react';
import './SearchBar.css';

// class SearchBar extends React.Component 
const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("term",term);
        props.onSubmit(term);
    }

    
        // console.log("opopopopop",this.state.term);
        return (
            <div className="input-div">
                <label>Search News By Title</label>
                <br />
                <form onSubmit={onFormSubmit} className="form">
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)}></input>
                </form>
            </div>
        );
    
};

export default SearchBar;