import React from 'react'
import './Navbar.css'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'
import { RiMenuFill, RiCloseFill } from '@remixicon/react'

function Navbar() {
  const { isMenuOpen, toggleMenu } = React.useContext(AppContext);
  return (
    <>
      <div className='navbar-desktop'>
        <div className='navbar-desktop-left'>
          <div className='navbar-name text-dusk'>nilesh-deshpande</div>
          <NavLink className='text-dusk' to='/'><div>_hello</div></NavLink>
          <NavLink className='text-dusk' to='/about'><div>_about-me</div></NavLink>
          <NavLink className='text-dusk' to='/projects'><div>_projects</div></NavLink>
        </div>
        <div className='navbar-desktop-right'>
          <NavLink className='text-dusk' to='/contact'><div>_contact</div></NavLink>
        </div>
      </div>
      <div className='navbar-mobile text-dusk text-16px'>
        <div>nilesh-deshpande</div>
        {
          isMenuOpen ?
            <RiCloseFill size={24} onClick={() => toggleMenu()}></RiCloseFill> :
            <RiMenuFill size={24} onClick={() => toggleMenu()}></RiMenuFill>
        }
      </div>

    </>
  )
}

export default Navbar