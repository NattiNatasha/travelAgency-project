import React, {useState} from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './OrderForm.css';
import {Link} from "react-router-dom";


function OrderForm() {

    return (
        <>
            <main className="order-form">
                <form className="order-form__container" >
                    <h1 className="order-form__title">Заявка</h1>
                    <div className="order-form-input__mb-12 order-form-input">
                        <label htmlFor="Имя" className="order-form-input__label-email">Имя</label>
                        <div className="required">
                            <span className="asterixEmail">*</span>
                            <input type="text" name='text' className="order-form-input__input"
                                   placeholder="Как вас зовут?" />
                        </div>
                    </div>
                    <div className="order-form-input__mb-16 order-form-input">
                        <label htmlFor="password" className="order-form-input__label-password">Пароль</label>
                        <div className="required">
                            <span className="asterixPassword">*</span>
                            <input type="text" name='password' className="order-form-input__input"
                                   placeholder="Номер телефона" />
                        </div>
                    </div>
                    <div className='order-form__button'>
                        <Button
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            ОТПРАВИТЬ ЗАЯВКУ
                        </Button>
                    </div>
                </form>
            </main>
        </>
    )
}

    export default OrderForm;