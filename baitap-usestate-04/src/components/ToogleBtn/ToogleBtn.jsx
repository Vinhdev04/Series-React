import React, { useState } from 'react';
const light = 'https://www.w3schools.com/js/pic_bulbon.gif';
const dark = 'https://www.w3schools.com/js/pic_bulboff.gif';
function ToogleBtn(props) {
    const [isOn,setIsOn] = useState(false);
    const handleBtn = () => {
        setIsOn(!isOn);
    }
    
    return (
        <div>
            <img src={isOn ? light : dark} alt="Bóng đèn" />
            <h1>{isOn ? 'Bóng đèn đang bật' : 'Bóng đèn đang tắt'}</h1>
            <button onClick={handleBtn} className={isOn ? 'active' : ''}>
                {isOn ? 'Tắt đèn' : 'Bật đèn'}
            </button>
        </div>
    );
}

export default ToogleBtn;