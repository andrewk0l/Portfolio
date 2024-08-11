import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import line from '../../assets/line.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {


  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src ={logo} alt='' />
        <ul className="nav-menu"> 
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={line} alt='' />}</li>       
            <li><AnchorLink className='anchor-link' offset={45} href='#about'><p onClick={() =>setMenu("about")}>About Me</p></AnchorLink>{menu === "about" && <img src={line} alt='' />}</li>     
            <li><AnchorLink className='anchor-link' offset={45} href='#achievements'><p onClick={() =>setMenu("achievements")}>Achievements</p></AnchorLink>{menu === "achievements" && <img src={line} alt='' />}</li>  
            <li><AnchorLink className='anchor-link' offset={45} href='#research'><p onClick={() =>setMenu("research")}>Research</p></AnchorLink>{menu === "research" && <img src={line} alt='' />}</li>  
            <li><AnchorLink className='anchor-link' offset={45} href='#contact'><p onClick={() =>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={line} alt='' />}</li>  
        </ul>
        <div className="nav-connect">Connect with me</div>

    </div>
  )
}

export default Navbar