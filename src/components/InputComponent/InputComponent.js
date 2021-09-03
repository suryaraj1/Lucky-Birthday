import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    render() {
        const { inputType } = this.props;
        return (
            <div className='input-wrapper'>
                <p className='input-label'>{
                    inputType === 'Date' ? 'Date of Birth 🗓' : 
                    'Lucky Number ✨'
                }</p>
                <input 
                    className='input-box'
                    type={inputType === 'date' && 'date'} 
                />
            </div>
        )
    }
}

export default InputComponent;