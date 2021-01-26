import React from 'react'
import { Button } from './Button';
import './Project1.css';
import '../App.css';
// import logo from './headshot-new.png';

function Project1(){
    return (
        <div className='project1'>
            <div className='project1-wrapper'>
                <ul className="project1-items">
                    <div className="project1-image">
                        <h1 className="projectTitle">Insert project 1 image here</h1>
                        {/* <img className="headshot" src={logo} alt="My headshot"/> */}
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