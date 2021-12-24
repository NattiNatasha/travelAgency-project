import React from 'react';
import '../../App.css';
import './SayThanks.css';

function SayThanks() {
    return (
        <div className='say-thanks-container'>
            <h1 className='say-thanks-title'>Спасибо за заявку!</h1>
            <p className='say-thanks-subtitle'>Менеджер свяжется с вами для обсуждения деталей в течение 10 минут</p>
        </div>
    );
}

export default SayThanks;