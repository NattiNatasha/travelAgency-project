import React, {useState,useEffect} from 'react';
import './OrderForm.css';
import {useHistory} from "react-router-dom";
import { Button } from '../Button/Button';

const OrderForm = () => {

    const history = useHistory();
    const getDataFromLS=()=>{
          const data = localStorage.getItem('orders');
          if(data){
            return JSON.parse(data);
          }
          else{
            return []
          }
        }

        const [orders, setOrders]=useState(getDataFromLS());

    const [tourName, setTourName] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleSendOrderSubmit = (e) => {
        e.preventDefault()
        let order = {
            tourName,
            name,
            phone
        }
        setOrders([...orders, order]);
        setTourName('');
        setName('');
        setPhone('');

    }

      useEffect(()=>{
        localStorage.setItem('orders',JSON.stringify(orders));
      },[orders])

    return (
        <div className='order-form-container'>
            <form className="order-form" onSubmit={handleSendOrderSubmit}>
                <div className='order-form-inner'>
                    <h1>Заявка</h1>
                    <div className='order-form-group'>
                        <label htmlFor='tour-name'>Название тура:</label>
                        <input type='text' name='text' id='tour-name' value={tourName} onChange={(e) => setTourName(e.target.value)}/>
                        </div>
                    <div className='order-form-group'>
                        <label htmlFor='name'>Имя:</label>
                        <input type='text' name='text' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='order-form-group'>
                        <label htmlFor='phone'>Телефон:</label>
                        <input type='text' name='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <Button
                       type='submit'
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