import React, {useEffect, useState} from "react";
import '../../App.css';
import OrderForm from "../OrderForm/OrderForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function OrderFormPage () {
        return (
            <>
                <Header />
                <OrderForm/>
                <Footer/>
            </>
        )
    }

    export default OrderFormPage;
