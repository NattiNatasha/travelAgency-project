import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import {Link} from "react-router-dom";
import './MainContent.css';

function MainContent() {
    return (
        <div className='content__container'>
            <h1 className='content__title'>ТУРЫ КЛАССА "LUX"</h1>
            <p className='content__subtitle'>Вы готовы отправиться в путешествие своей мечты?</p>
            <div className='content__btn'>
                <Link to='/tours'>
                <Button
                    buttonStyle='btn--outlineBisque'
                    buttonSize='btn--large'
                >
                    ВЫБРАТЬ ТУР
                </Button>
                </Link>
            </div>
        </div>
    );
}

export default MainContent;