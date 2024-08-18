import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import line from '../../assets/line.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {


  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }


  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='' />
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" && <img src={line} alt='' />}</li>
        <li><AnchorLink className='anchor-link' offset={0} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" && <img src={line} alt='' />}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#achievements'><p onClick={() => setMenu("achievements")}>Achievements</p></AnchorLink>{menu === "achievements" && <img src={line} alt='' />}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#research'><p onClick={() => setMenu("research")}>Research</p></AnchorLink>{menu === "research" && <img src={line} alt='' />}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" && <img src={line} alt='' />}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={45} href='#contact'>Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar