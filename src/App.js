import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent/InputComponent';
import LeftSection from './components/LeftSection/LeftSection';

const App = () => {
    return (
        <div>
            <LeftSection />
            <InputComponent />
        </div>
    )
}

export default App;