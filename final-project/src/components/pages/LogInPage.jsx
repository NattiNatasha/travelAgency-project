import React, {useState} from "react";
import '../../App.css';
import App from '../../App.js'
import LoginForm from '../LoginForm/LoginForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LogInPage () {
        return (
            <>
                <Header />
                <LoginForm />
                <Footer />
            </>
        );
  }

export default LogInPage;
