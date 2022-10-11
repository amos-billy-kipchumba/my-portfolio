import React from 'react'
import './Portfolio.css'
import PortfolioOne from './images/sasema.png'
import PortfolioTwo from './images/realmega.png'
import PortfolioThree from './images/retu.png'
import PortfolioFour from './images/capture4.png'
import PortfolioFive from './images/capture5.png'
import PortfolioSix from './images/capture7.png'

function Portfolio() {

  return (
    <section id='portfolio'>
    <div className='portfolio-container'>
      <div className="portfolio-header">
        <h2>My Portfolio</h2>
      </div>
      <div className='portfolio-content'>
        <div className='portfolio-content-one'>
          <img src={PortfolioOne} alt="" onClick={(e)=> {window.open("https://sasemagroup.com/", "_blank"); e.preventDefault();}} />
          <div className="portfolio-links">
            <h5><a href='/' onClick={(e)=> {window.open("https://sasemagroup.com/", "_blank"); e.preventDefault();}}>Sasema Management Company</a></h5>
          </div>
        </div>
        <div className='portfolio-content-two'>
          <img src={PortfolioTwo} alt="" onClick={(e)=> {window.open("https://megapipes.com/", "_blank"); e.preventDefault(); }} />
          <div className='portfolio-links'>
          <h5><a href='/' onClick={(e)=> {window.open("https://megapipes.com/", "_blank"); e.preventDefault(); }}>Megapipes Solutions Limited</a></h5>
        </div>
        </div>
        <div className='portfolio-content-three'>
          <img src={PortfolioThree} alt="" onClick={(e)=> {window.open("https://aoloutdooradventures.com/", "_blank"); e.preventDefault(); }} />
          <div className='portfolio-links'>
          <h5><a href='/' onClick={(e)=> {window.open("https://aoloutdooradventures.com/", "_blank"); e.preventDefault(); }}>AOL Out-door adventures</a></h5>
        </div>
        </div>
        <div className='portfolio-content-four'>
          <img src={PortfolioFour} alt="" onClick={(e)=> {window.open("https://stagepass.co.ke/", "_blank"); e.preventDefault(); }} />
          <div className='portfolio-links'>
          <h5><a href='/' onClick={(e)=> {window.open("https://stagepass.co.ke/", "_blank"); e.preventDefault(); }}>StagePass</a></h5>
        </div>
        </div>
        <div className='portfolio-content-five'>
          <img src={PortfolioFive} alt="" onClick={(e)=> {window.open("http://trevencleanersltd.co.ke/", "_blank"); e.preventDefault(); }} />
          <div className='portfolio-links'>
          <h5><a href='/' onClick={(e)=> {window.open("http://trevencleanersltd.co.ke/", "_blank"); e.preventDefault(); }}>Treven Cleaners ltd</a></h5>
        </div>
        </div>
        <div className='portfolio-content-six'>
          <img src={PortfolioSix} alt="" onClick={(e)=> {window.open("https://www.creationltd.co.ke/", "_blank"); e.preventDefault(); }} />
          <div className='portfolio-links'>
          <h5><a href='/' onClick={(e)=> {window.open("https://www.creationltd.co.ke/", "_blank"); e.preventDefault(); }}>Creation ltd</a></h5>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio