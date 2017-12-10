import React, { Component } from "react";
import PropTypes from 'prop-types';
import './style.css';


class Gallery extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    }
    
    render() {
        
        return (
           <ul className = "gallery">
                {this.props.items.map(item =>
                <li className ="gallery__item" key ={item.id}>
                <h2>{item.title}</h2>
                <p>описание: {item.description}</p>
                <p>рейтинг: {item.rating}/10</p>
                <ul className ="chips">
                    {item.genres.map((item,idx) =>
                        <li className = "chips__item" key = {idx}>{item}</li>)
                    }
                </ul>
                <button className ="button__del">DELETE</button>
                </li>
                )}
           </ul> 
        );

    }
}

export default Gallery;