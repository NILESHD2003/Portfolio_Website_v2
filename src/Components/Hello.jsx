import React from 'react'
import './Hello.css'
// TODO: Try to import the image from the assets folder
// const img = require('../assets//profile.png')

function Hello() {
  return (
    <div className='content'>
      <section className='content-left'>
        <p className='text-18px text-soft-gray'>Hi all. I am</p>
        <p className='text-62px text-soft-gray'>Nilesh Deshpande</p>
        <p className='text-32px text-plum'>&gt; Full Stack Web Developer</p>

        <div className='connect-me'>
          <p className='text-16px text-dusk'>// connect me</p>
          <p className='text-16px'><span className='text-plum'>const </span><span className='text-accent-green'>githubLink</span><span className='text-snow'> = </span><a className='link-no-decoration' href='https://github.com/NILESHD2003' target='_blank'>
            <span className='text-accent-coral'>"https://github.com/NILESHD2003"</span>
          </a></p>
          <p className='text-16px'><span className='text-plum'>const </span><span className='text-accent-green'>linkedinLink</span><span className='text-snow'> = </span><a className='link-no-decoration' href='https://www.linkedin.com/in/nilesh-deshpande2003' target='_blank'><span className='text-accent-coral'>"https://www.linkedin.com/in/nilesh-deshpande2003"</span></a></p>
        </div>
      </section>
      <section className='content-right'>
        <img src='https://avatars.githubusercontent.com/u/102912100?s=400&u=c7a6f03915c0785eebbb37031ac3e62f38c8592e&v=4' alt='Nilesh Deshpande' />
      </section>
    </div>
  )
}

export default Hello