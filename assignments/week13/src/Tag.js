import React from "react";
import './Tag.css';
import { fetchNews } from './action';
import { connect } from "react-redux";

const Tag = (props) =>{

   const onClickItem = (event) => {
        
        props.fetchNews(props.item.toLowerCase());
        props.onTag('');
    }
    
       return (
            <div>
                <button onClick={onClickItem} className="items" >{props.item}</button>
            </div>
        ); 
    

};


const mapStateToProps = (state) => {
    return { news: state.news };
}


export default connect(mapStateToProps,{fetchNews})(Tag);