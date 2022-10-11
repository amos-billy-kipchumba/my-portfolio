import React from 'react'
import {FaPhone, FaEnvelope, FaLocationArrow, FaStar, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <div className='footer-top-one'>
          <h2>Amos Billy.</h2>
          <h3>"Focused and fast learner. Any opportunity to develop that comes my way. I am ready to dig deep and work it out"</h3>
          <div className='footer-top-social'>
            <div className='footer-top-social-one'>
              <span><FaFacebookF /></span>
            </div>
            <div className='footer-top-social-two'>
              <span><FaTwitter /></span>
            </div>
            <div className='footer-top-social-three'>
              <span><FaInstagram /></span>
            </div>
            <div className='footer-top-social-four'>
              <span><FaWhatsapp /></span>
            </div>
          </div>
        </div>
        <div className='footer-top-two'>
          <h2>Get in touch</h2>
          <h3><span><FaPhone /></span><a href="+254743630811">+254743630811</a></h3>
          <h3><span><FaEnvelope /></span><a href = "mailto: amosbillykipchumba@gmail.com">amosbillykipchumba@gmail.com</a></h3>
          <h3><span><FaLocationArrow /></span>Nairobi, Kenya</h3>
          <div className='contact-send-message'>
            <div className='contact-send-message-one'>
              <span><FaEnvelope /></span>
            </div>
           
            <div className='contact-send-message-two'>
            <h4><a href = "mailto: amosbillykipchumba@gmail.com">SEND A MESSAGE</a></h4> 
            </div>
           
          </div>
        </div>
        <div className='footer-top-three'>
          <h2>Services</h2>
          <h3><span><FaStar /></span>Web Design</h3>
          <h3><span><FaStar /></span>Web Redesign</h3>
          <h3><span><FaStar /></span>Web Development</h3>
          <h3><span><FaStar /></span>Graphic Design</h3>
        </div>
      </div>
      <div className='footer-bottom'>
        <h4>Copyright © 2022 <span>Amos Billy</span> All Rights Reserved</h4>
      </div>
      
    </div>
  )
}

export default Footer