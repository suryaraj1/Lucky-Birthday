import React from 'react';
import './CheckButton.css';

const Button = ({ clickHandler }) => {
    return (
        <div className='btn-wrapper'>
            <button onClick={clickHandler}>Check Number</button>
        </div>
    )
}

export default Button;