import React from "react";
import '../../App.css';
import {Redirect} from "react-router-dom";

function OrdersPage () {
    alert('Для просмотра заявок необходимо пройти авторизацию');
    return (
        <Redirect to='/log-in' />
    )
}

export default OrdersPage;