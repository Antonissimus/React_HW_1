import React, { Component} from "react";
// import PropTypes from 'prop-types';
import './style.css';

class Header extends Component {
    // static propTypes = {
    //     items: PropTypes.array.isRequired
    // }
    
    render() {
        return (
        <div className = "header">
            <h1 className = "header__logo">Киношки</h1>
            <ul className = "header__menu">
                <li className ="header__menu_item">About</li>
                <li className ="header__menu_item">Browse</li>
                <li className ="header__menu_item">Login</li>
            </ul>
            
        </div>
        );
        
    }
}

export default Header;