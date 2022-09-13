import React from "react";
import './Tag.css';


class Tag extends React.Component {

    onClickItem = (event) => {
        // console.log("llllllllllllllllllllllllllllllllllll",event);
        // console.log("myprop",this.props.item);
        this.props.onClick(this.props.item);
    }

    render() {
       return (
            <div>
                <button onClick={this.onClickItem} className="items" >{this.props.item}</button>
            </div>
        ); 
    }

};

export default Tag;