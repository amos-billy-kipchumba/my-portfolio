import React from 'react'
import './hero.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaMouse} from 'react-icons/fa'
import ProfileTwo from './images/profile-two.png'
import ProfileThree from './images/profile-three.png'
import CV from './cv/Amos Billy Kipchumba CV-converted.pdf'
import { HashLink as Link } from 'react-router-hash-link'
const Hero = () => {
  return (
    <section id='#hero'>
    <div className='hero-container'>
    <div className='hero-left'>
    <h1>Hi!👋</h1>
    <h2>"I am a <span>Software</span> Engineer</h2>
    <h4>who is highly motivated and resourceful<br /> with interest in Machine learning, <br /> Full stack Development and <br /> System management"</h4>
    <a href={CV} alt="" download className='cv'>Download CV</a>
    <ul className='social-icons'>
    <li className='facebook'><a href='/' className='link-tagy' onClick={(e)=> {window.open("https://www.facebook.com/profile.php?id=100064855953886", "_blank"); e.preventDefault(); }}><FaFacebookF /></a></li>
    <li className='twitter'><a href='/' className='link-tagy' onClick={(e)=> {window.open("https://twitter.com/@amosbillydev", "_blank"); e.preventDefault(); }}><FaTwitter /></a></li>
    <li className='instagram'><a href='/' className='link-tagy' onClick={(e)=> {window.open("https://www.instagram.com/amos__billy/", "_blank"); e.preventDefault(); }}><FaInstagram /></a></li>
    <li className='whatsapp'><a href="/" className='link-tagy' onClick={(e)=> {window.open("https://wa.me/<+254743630811>", "_blank"); e.preventDefault(); }}><FaWhatsapp /></a></li>
    </ul>
    <button><Link className='hire-thing' to='#contact' smooth>Hire Me</Link></button>

    <h6><Link className='hire-thing' to='#about' smooth><FaMouse /></Link></h6>
    </div>
    <div className='hero-right'>
    <div className='hero-right-two'>
    <img src={ProfileTwo} alt="" />
    </div>
    <div className='hero-right-three'>
    <img src={ProfileThree} alt="" />
    </div>
    </div>
    </div>
    </section>
  )
}

export default Hero