import React from 'react';
import './Button.css';

let isOperator = val => {
  return !isNaN(val) || val === '.' || val === '='
}

let Buttons = (props) => {
  return (
    <button 
    className={`button 
    ${isOperator(props.children) ? '' : 'operator'}`}
    onClick={()=>{props.handleClick(props.children)}}
    >
        {props.children}
    </button>
  );
};

export default Buttons;