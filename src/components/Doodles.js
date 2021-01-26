import React from 'react'
import { Button } from './Button';
import '../App.css';
import './Doodles.css';
import image1 from './gingerbread.jpg';
import image2 from './be-best-you.jpg';
import image3 from './happy-days.jpg';
import image4 from './dream.jpg';
import image5 from './noodle.jpg';
import image6 from './get-back-up.jpg';
import image7 from './cactus.jpg';
import image8 from './love.jpg';
import image9 from './space.jpg';

console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);
console.log(image5);
console.log(image6);
console.log(image7);
console.log(image8);
console.log(image9);

function Doodles(){
    return (
    <div className='doodleContainer'>
        <h1 className="doodleTitle">Digital Doodles</h1>
        <h1 className="doodleDescription">After a long day, I like to relax by doodling on my iPad using Procreate.</h1>
        <div className="doodles">
            <img className="logo" src={image1} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image2} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image3} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image4} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image5} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image6} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image7} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image8} alt="be the best you drawing" />
        </div>
        <div className="doodles">
            <img className="logo" src={image9} alt="be the best you drawing" />
        </div>
    </div>      
    )
}

export default Doodles;