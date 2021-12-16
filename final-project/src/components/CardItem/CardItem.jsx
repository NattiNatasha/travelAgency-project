import React from 'react';
import {Link} from "react-router-dom";

function CardItem(props) {
    const {path, label, src, text} = props;
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
                        <h5 className='cards__text'>{text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;