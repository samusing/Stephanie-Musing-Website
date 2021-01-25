import React from 'react';
import '../App.css';
import './Description.css';
import logo from './hand-wave.png';

console.log(logo);

function Description() {
    return (
        <div className="description-container">
            <div className="description-wrapper">
                <ul className="description-items">
                    <div className="description-img">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="description-btns">
                        <p className="heading"><b>Hi there, I'm Stephanie.</b></p>
                        <br></br>
                        <p className="second-heading"><b>I am passionate about building inclusive and impactful products!</b></p>
                        <br></br>
                        <p className="description">I'm in my final year studying Management Engineering at the University of Waterloo, and will be 
                        graduating at the end of April! During my degree I worked in a variety of industries through a co-op program where I found a passion 
                        for solving problems while always keeping the customer at the core. 
                        </p>
                        <br></br>
                        <p className="description">Excited by new challenges and eager to learn, I look forward to tackling big problems beyond graduation!  </p>
                        <br></br>
                        <p className="description"><b>I am currently seeking full-time product management opportunities starting May 2021.</b></p>
                        
                       
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Description
