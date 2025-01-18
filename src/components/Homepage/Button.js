import React from 'react';
import './Button.css';
//need to use useNavigate now
import {useNavigate} from 'react-router-dom'

//first, take in the label and idealroute props
const Button = ({label, buttonRoute}) =>{
    //then, we need to assign useNav to a const
    const nav = useNavigate();
    //after that, we should use an event handler to the put the ideal route into useNac
    const handleClick = () => {
        nav(buttonRoute);
    };

    return (
  
        <button className="navButton" onClick={handleClick}>
            {label}
        </button>

    )
};


export default Button;