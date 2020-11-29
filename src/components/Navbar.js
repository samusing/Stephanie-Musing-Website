import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    //Set click constant default state as false (hamburger menu)
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true); 

    //Define handleClick function: when icon is clicked, switch to the opposite of click constant (x icon)
    const handleClick = () => setClick(!click);

    //Define closeMobileMenu function
    const closeMobileMenu = () => setClick(false);

    //Display button function
    const showButton = () => {
        if(window.innerwidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    //Only render "Let's Chat" button once and not every time the page gets refreshed
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SM
                    {/* SM  <i className='fas fa-female' /> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Let's Chat!
                        </Link>
                    </li> */}
                </ul>
                {button && <Button buttonStyle='btn--outline'>Let's Chat</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
