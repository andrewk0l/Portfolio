import React from 'react'
import './Footer.css'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a href="https://github.com/andrewk0l" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> GitHub
            </a>
            <a href="https://github.com/andrewk0l/Portfolio" target="_blank" rel="noopener noreferrer">
                <FaCode className="icon" /> Source Code
            </a>
            <p className="footer-text">Oluwanifemi Ogedengbe 2024 &copy; All rights reserved</p>
        </div>
        

    );
}

export default Footer