import React from 'react'
import Hero from './hero'
import './home.css'
import HomeBackground from './images/OIP.jfif'
import Navbar from './Navbar'



const Home = () => {
  return (
    <section id='hero'>
    <div className='home-container'>
    <Navbar className='home-nav'/>
    <img src={HomeBackground} alt="" />
    <Hero />
    </div>
    </section>
  )
}

export default Home