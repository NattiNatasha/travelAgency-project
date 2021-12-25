import React from 'react';
import '../../App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SayThanks from '../SayThanks/SayThanks';
import OrderForm from '../OrderForm/OrderForm'

function SayThanksPage () {
    return (
        <>
            <Header />
            <SayThanks />
            <Footer />
        </>
    )
}

export default SayThanksPage;