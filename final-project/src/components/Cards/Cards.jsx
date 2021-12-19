import React, {useContext} from "react";
import CardItem from "../CardItem/CardItem";
import './Cards.css';
import {AppContext} from "../../App";

const  Cards = () => {
    const {tours} = useContext(AppContext);

    if(!tours.length) {
        return (
            <div>Loading...</div>
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