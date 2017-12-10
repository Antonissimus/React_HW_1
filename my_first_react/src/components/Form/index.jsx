import React, { Component } from "react";
// import PropTypes from 'prop-types';
import './style.css';


class Form extends Component {
    // static propTypes = {
    //     items: PropTypes.array.isRequired
    // }

    render() {
        let options = num => {
            let opt = []
            for(let i = 0; i<=num; i++){
                opt[i] = <option value = {i} key = {i}>{i}</option>
            }
            return opt;
        }

        return (
        <div className="form">
            <label className="form__label">TITLE
                <input className = "form__title-input" type="text"/>
            </label>
            <label className="form__label">DESCRIPTION
                <textarea className="form__description-textarea" rows="8"></textarea>
            </label>
            <label className="form__label">RATING
                <select className ="form__rating-select">
                    {options(10)}
                </select>
            </label>
            <button className = "form__submit">SUBMIT</button>
        </div>
        );

    }
}

export default Form;