import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt='' className='profile-image'/>
        <h1><span>Oluwanifemi Ogedengbe,</span> Computer Engineering Graduate</h1>
        <p>i am a 22 year old,Computer Engineer and Web Developer. i'm wonderfully inquisitive and i am looking to improve myself in anyway possible</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={45} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume">My Resume</div> 
        </div>
    </div>
  )
}

export default Hero