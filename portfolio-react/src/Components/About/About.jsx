import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <div className='about'>
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
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
               

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>6 MONTH INTERNSHIP AT CHEVRON</h1>
                        <p>Gained practical experience in a corporate environment, contributing to technology projects and developing problem-solving skills.</p>
                    </div>
                    <div className="about-achievement">
                        <h1>COMPLETED A COMPUTER ENGINEERING DEGREE</h1>
                        <p> acquiring a solid foundation in software development, algorithms, and computational theory.</p>
                    </div>
                    <div className="about-achievement">
                        <h1>5+ WEB DEVELOPMENT PROJECTS LAUNCHED</h1>
                        <p>Built and launched web projects, demonstrating proficiency in front-end technologies and a commitment to expanding knowledge in web development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About