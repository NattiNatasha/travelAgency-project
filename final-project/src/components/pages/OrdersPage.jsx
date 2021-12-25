import React, {useState, useContext} from 'react';
import './OrdersPage.css'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import { Button } from '../Button/Button';
import LogInPage from '../../components/pages/LogInPage';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../../Context';
import ViewOrders from '../ViewOrders/ViewOrders'

const OrdersPage = () => {

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

    const deleteOrder=(tourName)=>{
      const filteredOrders=orders.filter((element,index)=>{
        return element.tourName !== tourName
      })
      setOrders(filteredOrders);
      }


    const {isAuth, setIsAuth} = useContext(AuthContext);

    const history = useHistory ();
    const signOut = () => {
        setIsAuth(false)
        history.push('/login')
    }

        return (
            <div className='view-container'>
                {orders.length>0&&<>
                   <Header/>
                     <table className='table'>
                       <thead>
                         <tr>
                           <th>Название тура</th>
                           <th>Имя</th>
                           <th>Телефон</th>
                           <th>Удалить</th>
                         </tr>
                       </thead>
                       <tbody>
                         <ViewOrders orders={orders} deleteOrder={deleteOrder}/>
                       </tbody>
                     </table>
                   <div className='orders-buttons'>
                        <Button className='delete-all'  buttonSize='button-medium'
                                onClick={()=>setOrders([])}>Удалить все</Button>
                        <Button
                                buttonSize=' btn__btn--large'
                                onClick={signOut}
                        >
                        LOG OUT
                        </Button>
                   </div>
                 </>}
                 {orders.length < 1 && <>
                    <Header />
                    <div className='no-orders'>
                        <h2>Пока нет заявок:(</h2>
                        <div className='no-orders-img'>
                           <img src='https://cdn4.iconfinder.com/data/icons/yellow-cats-social-life/128/sad-128.png' alt=''/>
                        </div>
                        <Button className='log-out'
                           buttonSize='btn--large'
                           onClick={signOut}
                           >
                           LOG OUT
                        </Button>
                    </div>
               </>}
            </div>
        )
    }

export default OrdersPage;