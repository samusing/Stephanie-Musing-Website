import React from 'react'
import { Button } from './Button';
import './Project1.css';
import '../App.css';
import logo from './Flyer image-blurred.png';

function Project1(){
    return (
        <div className='project1'>
            <div className='project1-wrapper'>
                <ul className="project1-items">
                    <div className="project1-image">
                        {/* <h1 className="projectTitle">Coming soon...</h1> */}
                        <img className="flyerimage" src={logo} alt="New flyer design, blurred out. Under construction"/>
                    </div>
                    <div className="projectTitle">
                        <h1>Redesigning the Flyer in a Digital Age</h1>
                        <p>Fourth Year Design Project</p>
                    </div>
                </ul>  
            </div>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button> */}

        </div>
    )
}

export default Project1;