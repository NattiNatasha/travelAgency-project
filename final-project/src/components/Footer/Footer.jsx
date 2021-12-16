import React from "react";
import './Footer.css';

function Footer () {
    return (
        <footer className='footer footer'>
            <h2 className='footer__title'>Мы в социальных сетях:</h2>
            <div className='social-icons'>
                <a
                    className='social-icon__link facebook'
                    href='https://www.facebook.com/profile.php?id=100005834794691'
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a
                    className='social-icon__link instagram'
                    href='https://www.instagram.com/miss_natti_natasha/'
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    <i className='fab fa-instagram'></i>
                </a>
                <a
                    className='social-icon__link vkontakte'
                    href='https://vk.com/natasha_natti'
                    target='_blank'
                    rel='nofollow noopener noreferrer'
                >
                    <i className='fa fa-vk'></i>
                </a>
            </div>
            <small className={'footer__copyright'}>© Lux Trips, 2021</small>
        </footer>
    )
}

export default Footer;