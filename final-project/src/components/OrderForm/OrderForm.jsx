import React, {useState} from 'react';
import './OrderForm.css';
import {useParams} from "react-router-dom";
import { Button } from '../Button/Button';

const OrderForm = () => {

    const {tourId} = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function sendUserData(e) {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('tourId',tourId)
    }

    return (
        <div className='order-form-container'>
            <form className="order-form" onSubmit={sendUserData}>
                <div className='order-form-inner'>
                    <h1>Заявка</h1>
                    <div className='order-form-group'>
                        <label htmlFor='name'>Имя:</label>
                        <input type='text' name='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='order-form-group'>
                        <label htmlFor='phone'>Телефон:</label>
                        <input type='text' name='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <Button
                       buttonSize='btn--large'
                       >
                       ОТПРАВИТЬ ЗАЯВКУ
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default OrderForm;