import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppContext } from './context/AppContext'

import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hello from './Components/Hello'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import NavMenu from './Components/NavMenu'

import './App.css'

function App() {
  const { isMenuOpen, toggleMenu } = React.useContext(AppContext);
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Navbar></Navbar>
          {!isMenuOpen ? <Routes>
            <Route path='/' element={<Hello></Hello>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/projects' element={<Projects></Projects>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
          </Routes> : <NavMenu></NavMenu>}
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
