import React from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
     <Home id="hero"/>
     <About id="about"/>
     <Portfolio id="portfolio"/>
     <Contact id="contact"/>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
