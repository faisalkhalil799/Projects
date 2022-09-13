import React from 'react';
import './NavBar.css';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import Tag from './Tag';
import api from './api';



class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data : [] , searchInput : ''};
    }




    componentDidMount() {
        this.onItemClick('all');
    }


    onItemClick = async (item) => {

        const res = await api.get("/news",{
            params : {category : item.toLowerCase()}
        });

        this.setState({data : res.data.data});
    };


    onInputChange = (input) => {
        this.setState({searchInput : input});
    }



    render() {

        const tags = ['All', 'National', 'Business', 'Sports', 'World', 'Politics', 'Technology', 'Startup', 'Entertainment', 'miscellaneous', 'Hatke', 'Science', 'Automobile'];


        return (
            <div>
                <SearchBar onSubmit={this.onInputChange}/>
                <div id="main-nav">
                    <div className="container">
                        <div className="nav-items">
                            <ul>
                                {tags.map((item, index) => (
                                    <Tag item={item} key={index} onClick={this.onItemClick}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <NewsCard data={this.state.data} searchInput={this.state.searchInput}/>
            </div>
        )
    }


};

export default NavBar;