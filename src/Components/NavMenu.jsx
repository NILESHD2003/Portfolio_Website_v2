import React from 'react'
import './NavMenu.css'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from '@remixicon/react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function NavMenu() {
    const { toggleMenu } = React.useContext(AppContext);
    return (
        <div className='NavMenu'>
            <div className='verticalMenu'>
                <NavLink className='text-dusk' to='/' onClick={()=>{toggleMenu()}}><div>_hello</div></NavLink>
                <NavLink className='text-dusk' to='/about' onClick={()=>{toggleMenu()}}><div>_about-me</div></NavLink>
                <NavLink className='text-dusk' to='/projects' onClick={()=>{toggleMenu()}}><div>_projects</div></NavLink>
                <NavLink className='text-dusk' to='/contact' onClick={()=>{toggleMenu()}}><div>_contact</div></NavLink>
            </div>
            <div className='text-dusk footer-mobile'>
                <div className='footer-left'>
                    <div><p>find me in: </p></div>
                    <div><a className='link-no-decoration text-dusk' href='https://www.linkedin.com/in/nilesh-deshpande2003' target='_blank'><RiLinkedinBoxFill></RiLinkedinBoxFill></a></div>
                    <div><a className='link-no-decoration text-dusk' href='https://x.com/_nilesh2003' target='_blank'><RiTwitterXFill></RiTwitterXFill></a></div>
                    <div><a className='link-no-decoration text-dusk' href='https://github.com/NILESHD2003' target='_blank'><RiGithubFill className='githubLogo'></RiGithubFill></a></div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu