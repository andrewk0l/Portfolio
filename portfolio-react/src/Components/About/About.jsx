import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src='' alt='' />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>front-end developer exploring data science and machine learning to innovate web development with intelligent, data-driven solutions.</p>
                        <p>I'm an inquisitive and dedicated professional with a strong work ethic, known for being an innovative problem solver.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p></div>
                        <div className="about-skill"><p>React JS</p></div>
                        <div className="about-skill"><p>JavaScript</p></div>
                        <div className="about-skill"><p>Python</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About