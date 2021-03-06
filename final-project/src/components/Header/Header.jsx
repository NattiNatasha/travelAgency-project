import React, {useState, useEffect} from 'react';
import './Header.css'
import {Link} from "react-router-dom";

function Header () {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton);
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Link to="/" className="header__logo" onClick={closeMobileMenu}>
                        <img width="107" height="49" src={'/img/logo.svg'} alt="LuxTravel"/>
                    </Link>
                    <div className='header__menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'header-menu active' : 'header-menu'}>
                        <li className='header-menu__item'>
                            <Link to='/' className='header-menu__links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='header-menu__item'>
                            <Link to='/tours' className='header-menu__links' onClick={closeMobileMenu}>
                                Туры
                            </Link>
                        </li>
                        <li className='header-menu__item'>
                            <Link to='/orders' className='header-menu__links' onClick={closeMobileMenu}>
                                CRM
                            </Link>
                        </li>
                   </ul>
                </div>
            </header>
        </>
    );
};

export default Header;