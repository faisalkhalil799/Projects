import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {


    state = {term : ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log("term",this.state.term);
        this.props.onSubmit(this.state.term);
    }

    
    render() {
        // console.log("opopopopop",this.state.term);
        return (
            <div className="input-div">
                <label>Search News</label>
                <br />
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term : e.target.value})}></input>
                </form>
            </div>
        );
    }
};

export default SearchBar;