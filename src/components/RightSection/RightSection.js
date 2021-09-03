import React from 'react';
import Button from '../Button/Button';
import InputComponent from '../InputComponent/InputComponent';
import './RightSection.css';

const RightSection = () => {
    return (
        <div className='right-section-wrapper'>
            <div className='right-section-container'>
                <InputComponent inputType='date' />
                <InputComponent />
                <Button />
            </div>
        </div>
    )
}

export default RightSection;