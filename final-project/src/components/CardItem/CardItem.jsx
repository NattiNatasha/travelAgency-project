import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

function CardItem(props) {
    const {path, label, src, country, title, subtitle, dates, duration, price} = props;
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__link' to={path}>
                    <figure className='cards__img-wrap' data-category={label}>
                        <img
                            src={src}
                            alt='Travel Image'
                            className='cards__img'/>
                    </figure>
                    <div className='cards__info'>
                        <h5 className='country'>Страна: {country}</h5>
                        <h5 className='title'>Тур: {title}</h5>
                        <p className='subtitle'>Описание: {subtitle}</p>
                        <p className='dates'>Даты: {dates}</p>
                        <p className='duration'>Продолжительность: {duration}</p>
                        <p className='price'>Стоимость: {price}</p>
                        <Button className='cards__button'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'
                        >
                            ЗАКАЗАТЬ
                        </Button>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;