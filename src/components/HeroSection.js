import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import logo from './headshot-new.png';

console.log(logo);

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-wrapper'>
                <ul className="hero-items">
                    <div className="hero-text">
                        <h1 className="myName">Stephanie <br></br> Musing</h1>
                        <p className="valueProp">Curiousity . Passion . Happiness</p>
                    </div>
                    <div className="hero-image">
                        <img className="headshot" src={logo} alt="My headshot"/>
                    </div>
                </ul>  
            </div>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button> */}

        </div>
    )
}

export default HeroSection

