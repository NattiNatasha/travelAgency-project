import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './AuthForm.css';
import {Link} from "react-router-dom";

function AuthForm() {
    return (
        <>
            <main className="form">
                <form className="form__container">
                    <h1 className="form__title">Авторизация</h1>
                    <div className="form-input__mb-12 form-input">
                        <label htmlFor="email" className="form-input__label-email">Email</label>
                        <div className="required">
                            <span className="asterixEmail">*</span>
                            <input type="email" name="email" className="form-input__input js-input-email"
                                   placeholder="Введите e-mail" />
                        </div>
                    </div>
                    <div className="form-input__mb-16 form-input">
                        <label htmlFor="password" className="form-input__label-password">Пароль</label>
                        <div className="required">
                            <span className="asterixPassword">*</span>
                            <input type="password" id="password" className="form-input__input js-input-password"
                                   placeholder="Введите пароль" />
                        </div>
                    </div>
                    <div className='form__button'>
                        <Button
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            АВТОРИЗАЦИЯ
                        </Button>
                    </div>
                </form>
            </main>
        </>
    )
}

    export default AuthForm;