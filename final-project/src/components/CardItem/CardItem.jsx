import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const CardItem = ({cards}) => {
    const {label, src, alt, country, title, subtitle, dates, duration, price} = cards;
    return (
        <>
            <li className='cards__item'>
                <div className='cards__wrap'>
                    <figure className='cards__img-wrap' data-category={label}>
                        <img
                            src={src}
                            alt={alt}
                            className='cards__img'/>
                    </figure>
                    <div className='cards__info'>
                        <h4 className='country'>Страна: {country}</h4>
                        <h4 className='title'>Тур: {title}</h4>
                        <p className='subtitle'>Описание: {subtitle}</p>
                        <p className='dates'>Даты: {dates}</p>
                        <p className='duration'>Продолжительность: {duration}</p>
                        <p className='price'>Стоимость: {price}</p>
                        <div>
                           <Link to='/order'>
                              <Button className='cards__button' buttonStyle={'btn--primary'} buttonSize='btn--medium'>ЗАКАЗАТЬ</Button>
                           </Link>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem;