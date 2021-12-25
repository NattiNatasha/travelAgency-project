import React, {useContext} from "react";
import CardItem from "../CardItem/CardItem";
import './Cards.css';
import {ToursContext} from '../../Context';

const  Cards = () => {
    const {tours} = useContext(ToursContext);

    if(!tours.length) {
        return (
            <div className='loading'>
                <h2>Ищем самые лучшие предложения, вы почти у цели!</h2>
                <div className='loading-img'>
                    <img className='rot' src='https://cdn3.iconfinder.com/data/icons/internet-1-11/48/42-128.png' alt=''/>
                </div>
            </div>
        )
    }
    return (
        <div className='cards'>
            <h1 className='cards__title'>Туры класса "lux" на любой вкус:</h1>
            <div className='cards__container'>
                    <ul className='cards__items'>
                        {tours.map((cards) => {
                            return (
                                <CardItem key={cards.id} cards={cards} />
                            )
                        })}
                    </ul>
                </div>
        </div>
    )
}

export default Cards;