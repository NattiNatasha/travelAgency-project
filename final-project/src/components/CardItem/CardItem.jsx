import React from 'react';
import {Link} from "react-router-dom";

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
                        <h5>Страна: {country}</h5>
                        <h5 className='cards__text'>Тур: {title}</h5>
                        <p>Описание: {subtitle}</p>
                        <p>Даты: {dates}</p>
                        <p>Продолжительность: {duration}</p>
                        <p>Стоимость: {price}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;