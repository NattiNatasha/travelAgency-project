import React, {useEffect, useState} from "react";
import '../../App.css';
import AuthForm from "../AuthForm/AuthForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LogIn () {
        return (
            <>
                <Header />
                <AuthForm/>
                <Footer/>
            </>
        )
    }

    export default LogIn;
