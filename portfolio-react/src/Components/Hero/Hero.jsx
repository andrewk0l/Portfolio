import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt='' className='profile-image'/>
        <h1><span>Oluwanifemi Ogedengbe,</span> Computer Engineering Graduate</h1>
        <p>i am a 22 year old, recently graduated with a degree in computer enginnering. i'm wonderfully inquisitive and i am looking to improve myself in anyway possible</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div> 
        </div>
    </div>
  )
}

export default Hero