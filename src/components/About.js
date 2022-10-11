import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/fontawesome-free-solid'
import AboutPic from './images/pexels-photo.jpg'
import ProfileOne from './images/hero-remove.png'
const About = () => {
  return (
      <section id='about'>
    <div className='about-container'>
        <div className='about-left'>
            <div className='about-left-left'></div>
            <div className='about-left-right'>
                <img src={AboutPic} alt="" />
            </div>
        </div>
        <div className='about-right'>
            <h1>About Me</h1>
            <h2>I am a web developer from Kilifi, Kenya.</h2>
            <h3>I believe in Equality and fairness. I also believe in trust, that there can be some agreeable arrangements between two or more parties towards the completion of a goal.</h3>
            <div className='about-right-div'>
                <div className='about-right-div-left'>
                    <img src={ProfileOne} alt="" />
                </div>
                <div className='about-right-div-right'>
                    <h3>My Skills are...</h3>
                    <h4><FontAwesomeIcon icon={faAngleRight} /><span>Web Development</span></h4>
                    <h4><FontAwesomeIcon icon={faAngleRight} /><span>Graphic design</span></h4>
                    <h4><FontAwesomeIcon icon={faAngleRight} /><span>Video Editing</span></h4>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About