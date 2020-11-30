import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout the projects I've worked on at school!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='./images/LD-logo.png'
                        text="Explore the projects I've worked on"
                        label="Loblaw Digital"
                        path='/projects'
                        />
                        <CardItem 
                        src='./images/flipp_logo.png'
                        text="Work at Flipp"
                        label="Flipp"
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
