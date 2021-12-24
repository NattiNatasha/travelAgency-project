import React, {useState, useContext} from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './LoginForm.css';
import {Link, useHistory} from "react-router-dom";
import {users} from '../../Users'
import {AuthContext} from '../../Context';

const LoginForm = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState({});
    const [passwordError, setPasswordError] = useState({});

    const { setIsAuth } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmit = (e) => {
            e.preventDefault();
            checkValidity();
    }

    function checkValidity (){
         const loginIsValid = users.find(user => user.login == login);
         const passwordIsValid = users.find(user => user.password == password);
         const loginError = {};
         const passwordError = {};

         if (loginIsValid && passwordIsValid) {
            setIsAuth(true);
            history.push('/orders');
         }

         if (login === '') {
            loginError.loginIsEmpty = 'Не введен email!';
         } else if (!loginIsValid) {
            loginError.loginIsInvalid = 'Некорректный email!';
         }
         if (password === '') {
            passwordError.passwordIsEmpty = 'Не введен пароль';
         } else if (!passwordIsValid) {
            passwordError.passwordIsInvalid = 'Некорректный пароль';
         }
         setLoginError(loginError);
         setPasswordError(passwordError);
    }
    return (
    <div className='form-container'>
    <form className='form' onSubmit={handleSubmit}>
        <div className='form-inner'>
            <h1>Вход</h1>
            <div className='form-group'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' value={login} onChange={(e) => setLogin(e.target.value)}/>
                {Object.keys(loginError).map((key) => {
                   return <small className='error'>{loginError[key]}</small>
                })}
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Пароль:</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                {Object.keys(passwordError).map((key) => {
                    return <small className='error'>{passwordError[key]}</small>
                })}
            </div>
            <Button
               buttonSize='btn--large'
               >
               ВОЙТИ
            </Button>
        </div>
    </form>
    </div>
)
}

export default LoginForm;