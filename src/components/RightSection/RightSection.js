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
            isLucky: false,
            clickCount: 0
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

    validateInput = (birthDate, luckyNumber) => {
        const checkDate = !isNaN(Date.parse(birthDate));
        const checkNumber = !isNaN(luckyNumber) && luckyNumber !== '';
        console.log(checkDate, checkNumber);
        return (checkDate && checkNumber);
    }

    onClickHandler = () => {
        const { birthDate, luckyNumber } = this.state;
        if (this.validateInput(birthDate, luckyNumber)) {
            const isBirthdayLucky = this.isLuckyBirthday(birthDate, luckyNumber);

            this.setState({
                isLucky: isBirthdayLucky,
                clickCount: this.state.clickCount + 1
            })
        }
    }

    render() {
        const { isLucky, clickCount } = this.state;
        return (
            <div className='right-section-wrapper'>
                <div className='right-section-container'>
                    <InputComponent inputType='date' handler={this.birthDateHandler}/>
                    <InputComponent handler={this.luckyNumberHandler}/>
                    <CheckButton clickHandler={this.onClickHandler}/>
                    {clickCount > 0 && <AlertTile success={isLucky}/>}
                </div>
            </div>
        )
    }
}

export default RightSection;