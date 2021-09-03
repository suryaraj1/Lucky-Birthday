import React from 'react';
import './InputComponent.css';

class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onChangeHandler = event => {
        this.setState({
            value: event.target.value
        }, () => {
            const { value } = this.state;
            const { handler } = this.props;
            handler(value);
        })
    }

    render() {
        const { inputType } = this.props;
        return (
            <div className='input-wrapper'>
                <p className='input-label'>{
                    inputType === 'date' ? 'Date of Birth 🗓' : 
                    'Lucky Number ✨'
                }</p>
                <input 
                    className='input-box'
                    type={inputType === 'date' && 'date'} 
                    onChange={this.onChangeHandler}
                />
            </div>
        )
    }
}

export default InputComponent;