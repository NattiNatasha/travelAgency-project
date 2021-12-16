import React from "react";
import CardItem from "../CardItem/CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1 className='cards__title'>Туры класса "lux" на любой вкус:</h1>
            <div className='cards__container'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Франция'
                            title='Рождественский Париж'
                            subtitle='Explore the hidden waterfall deep inside the Amazon Jungle'
                            dates='01.01.2022 - 07.01.2022'
                            duration='6 дней'
                            price='600'
                            label='Adventure'
                            path='/services'/>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Explore the hidden waterfall deep inside the Amazon Jungle'
                            title=''
                            subtitle=''
                            dates=''
                            duration=''
                            price=''
                            label='Adventure'
                            path='/services'/>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Explore the hidden waterfall deep inside the Amazon Jungle'
                            title=''
                            subtitle=''
                            dates=''
                            duration=''
                            price=''
                            label='Adventure'
                            path='/services'/>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Explore the hidden waterfall deep inside the Amazon Jungle'
                            title=''
                            subtitle=''
                            dates=''
                            duration=''
                            price=''
                            label='Adventure'
                            path='/services'/>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Explore the hidden waterfall deep inside the Amazon Jungle'
                            title=''
                            subtitle=''
                            dates=''
                            duration=''
                            price=''
                            label='Adventure'
                            path='/services'/>
                        <CardItem
                            src='/img/MachuPicchu.png'
                            country='Explore the hidden waterfall deep inside the Amazon Jungle'
                            title=''
                            subtitle=''
                            dates=''
                            duration=''
                            price=''
                            label='Adventure'
                            path='/services'/>
                    </ul>
                </div>
        </div>
    )
}

export default Cards;