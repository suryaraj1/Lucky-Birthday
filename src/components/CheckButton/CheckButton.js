import React from 'react';
import './CheckButton.css';

const Button = ({ clickHandler, validator }) => {
    return (
        <div className='btn-wrapper'>
            <button className={`${!validator ? 'disabled': 'active'}`} onClick={clickHandler} disabled={!validator}>Check Number</button>
        </div>
    )
}

export default Button;