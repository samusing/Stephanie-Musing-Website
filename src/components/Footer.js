import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    Contact Me
                </p>
            </section> */}
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Socials</h2>
                        <Link className="linkedin-logo"
                        to='/' 
                        target="_blank"
                        aria-label="LinkedIn"
                        > 
                        <i class="fab fa-linkedin"></i>
                        LinkedIn
                        </Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>GitHub</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Me</h2>
                        <Link className="linkedin-logo"
                        to='/' 
                        target="_blank"
                        aria-label="LinkedIn"
                        > 
                        <i class="fab fa-linkedin"></i> </Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>GitHub</Link>
                    </div>
                </div>
            </div>
            <section className="built-by-section">
                <div className="built-by">
                    <p>Designed and built by Stephanie Musing using javascript, react, CSS</p>
                </div>
            </section>
        </div>
    )
}

export default Footer
