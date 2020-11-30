import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-btns'>
                <h1 className="myName">Stephanie Musing</h1>
                <p className="valueProp"><b>A Management Engineer passionate about building impactful products with a focus on accessibility!</b></p>
            </div>
            {/* <div className="description-btns">
                <p className="description">I'm a Management Engineering student at the University of Waterloo who is 
                    <b> passionate about technology and excited to build impactful products!</b> 
                    I will be <b>graduating with a Bachelor of Applied Science degree in April 2021</b> and am 
                    <b>seeking full-time Product Management opportunities</b>.
                    During my degree, I have gained two years of valuable work experience through a co-op program in which 
                    I have worked in a variety of industries including tech, healthcare, engineering consulting, and automotive.  
                </p>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
            </div> */}
        </div>
    )
}

export default HeroSection

