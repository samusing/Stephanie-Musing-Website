import React from 'react'
import { Button } from './Button';
import './Project1Middle.css';
import '../App.css';
// import logo from './Flyer image-blurred.png';

function Project1Middle(){
    return (
        // <div className='project1'>
        //     <div className='project1-wrapper'>
        //         <ul className="project1-items">
        //             <div className="project1-image">
        //                 {/* <h1 className="projectTitle">Coming soon...</h1> */}
        //             </div>
        //             <div className="project1Middle">
        //                 <h1>Redesigning the Flyer in a Digital Age</h1>
        //                 <p>Fourth Year Design Project</p>
        //             </div>
        //         </ul>  
        //     </div>
        //     {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button> */}

        // </div>
        <div className='project1Middle'>
            <br></br>
            <h1 className="middleTitle">As part of the final year of my degree, I have been working with a team of 3 other 
            students in my class to solve a real, open-ended engineering design problem. We are partnered with Loblaw Digital to help 
            them reimagine the deals discovery experience. 
            </h1>
            <br></br>
            <h1 className="middleTitle">For decades, the flyer has been a cornerstone of North American consumer culture, serving as a main source 
            for deal discovery when buying groceries. Despite the numerous technological advancements we've seen, a digital solution to the flyer 
            has not seen great progress, with many customers being sent to a suboptimal experience.  
            </h1>
            <br></br>

            <div className="bigStatement"> 
                <h1 className="middleTitle">That's where we come in.</h1>
                <br></br>
                <h1 className="biggerStatement">Details coming soon... </h1>
            </div>
            <br></br>
            
            {/* <div className="bigStatement"> 
                <h1 className="biggerStatement">Problem Definition</h1>
                <h1 className="middleTitle">Our team started by reviewing exisiting research conducted by Loblaw Digital and Loblaw Companies
                in the flyer space. We used this research to to better understand how customers use a flyer during their shopping journey 
                and identify customer pain points with the current digital flyer solution.</h1>
                <br></br>
                <h1 className="middleTitle"></h1>
            </div> */}
        </div>

        
            
    )
}

export default Project1Middle;