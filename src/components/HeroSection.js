import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-btns'>
                <h1 className="myName">Stephanie Musing</h1>
                <p className="valueProp"><b>A Management Engineer passionate about building inclusive and impactful products!</b></p>
            </div>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button> */}

        </div>
    )
}

export default HeroSection

