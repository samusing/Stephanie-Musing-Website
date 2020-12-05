import React from 'react';
import '../App.css';
import './Description.css';
import logo from './student-colour-400px.png';

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
                        <p className="description">I will be graduating with a Bachelor of Applied Science degree in April 2021 and am seeking full-time Product Management opportunities. 
                        </p>
                        <br></br>
                        <p className="description"> During my degree, I gained two years of valuable work experience through a co-op program in which 
                            I worked in a variety of industries including tech, healthcare, engineering consulting, and automotive. 
                        </p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Description
