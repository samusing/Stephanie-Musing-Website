import React, {useState} from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    //Set click constant default state as false (hamburger menu)
    const [click, setClick] = useState(false); 

    //Define handleClick function: when icon is clicked, switch to the opposite of click constant (x icon)
    const handleClick = () => setClick(!click);

    //Define closeMobileMenu function
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SM <i className='fas fa-female' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li classNam='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li classNam='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
