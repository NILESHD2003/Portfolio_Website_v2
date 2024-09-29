import React from 'react'
import './Footer.css'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from '@remixicon/react'

function Footer() {
  return (
    <div className='text-dusk footer'>
      <div className='footer-left'>
        <div><p>find me in: </p></div>
        <div><a className='link-no-decoration text-dusk' href='https://www.linkedin.com/in/nilesh-deshpande2003' target='_blank'><RiLinkedinBoxFill></RiLinkedinBoxFill></a></div>
        <div><a className='link-no-decoration text-dusk' href='https://x.com/_nilesh2003' target='_blank'><RiTwitterXFill></RiTwitterXFill></a></div>
      </div>
      <div className='footer-right'>
        <div><a className='link-no-decoration text-dusk' href='https://github.com/NILESHD2003' target='_blank'>@NILESHD2003</a></div>
        <RiGithubFill className='githubLogo'></RiGithubFill>
      </div>
    </div>
  )
}

export default Footer