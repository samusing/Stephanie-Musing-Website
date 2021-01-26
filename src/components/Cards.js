import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import image1 from './FYDP.png';
import image2 from './procreate.png';

console.log(image1);
console.log(image2);

function Cards() {
    return (
        <div className='cards'>
            <h1 className='title'>Checkout the projects I've worked on at school!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {/* <CardItem 
                        src={image1}
                        text="Explore the projects I've worked on"
                        label="PM at Loblaw Digital"
                        path='/projects'
                        /> */}
                        <CardItem 
                        src={image1}
                        text="Redesigning the flyer in a digital age"
                        label="Fourth Year Design Project"
                        path='/projects'
                        />
                        <CardItem 
                        src={image2}
                        text="How I like to get my creative juices flowing"
                        label="Doodles"
                        path='/doodle'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
