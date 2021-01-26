import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <ul>
                        <div className="footer-link-items">
                            <a target="_blank" href="https://www.linkedin.com/in/stephaniemusing/">LinkedIn</a>
                        </div>
                    </ul>
                    <ul>
                        <div className="footer-link-items">
                            <a target="_blank" href="https://github.com/samusing">GitHub</a>
                        </div>
                    </ul>
                </div>
            </div>
            <section className="built-by-section">
                <div className="built-by">
                    <p>Designed and built by Stephanie Musing using React</p>
                </div>
            </section>
        </div>
    )
}

export default Footer
