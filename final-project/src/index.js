import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBEIp8xVGdIVWbWLEFMeDhL7gt7zM9jBUs",
    authDomain: "final-project-6d6c5.firebaseapp.com",
    databaseURL: "https://final-project-6d6c5-default-rtdb.firebaseio.com",
    projectId: "final-project-6d6c5",
    storageBucket: "final-project-6d6c5.appspot.com",
    messagingSenderId: "723074808680",
    appId: "1:723074808680:web:34dc6df53a4ec82e2db4dd"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
    <App />,
    </BrowserRouter>,
    document.getElementById('root')
);

