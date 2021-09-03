import React from 'react';
import AlertTile from '../AlertTile/AlertTile';
import CheckButton from '../CheckButton/CheckButton';
import InputComponent from '../InputComponent/InputComponent';
import './RightSection.css';

class RightSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            birthDate: "",
            luckyNumber: "",
            isLucky: false
        }
    }

    birthDateHandler = inputBirthDate => {
        this.setState({
            birthDate: inputBirthDate
        })
    }

    luckyNumberHandler = inputLuckyNumber => {
        this.setState({
            luckyNumber: inputLuckyNumber
        })
    }

    getSumOfDigits = birthDate => {
        let digitSum = 0;
        birthDate = birthDate.replaceAll('-','');
        for (let i = 0; i < birthDate.length; i += 1) {
            digitSum += birthDate.charAt(i) - '0';
        }
        return digitSum;
    }

    isLuckyBirthday(birthDate, luckyNumber) {
        return (this.getSumOfDigits(birthDate) % luckyNumber === 0);
    }

    onClickHandler = () => {
        const { birthDate, luckyNumber } = this.state;
        const isBirthdayLucky = this.isLuckyBirthday(birthDate, luckyNumber);

        this.setState({
            isLucky: isBirthdayLucky
        })
    }

    render() {
        const { isLucky } = this.state;
        return (
            <div className='right-section-wrapper'>
                <div className='right-section-container'>
                    <InputComponent inputType='date' handler={this.birthDateHandler}/>
                    <InputComponent handler={this.luckyNumberHandler}/>
                    <CheckButton clickHandler={this.onClickHandler}/>
                    <AlertTile success={isLucky}/>
                </div>
            </div>
        )
    }
}

export default RightSection;