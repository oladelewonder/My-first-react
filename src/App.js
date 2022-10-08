import React from 'react';
import Title from './components/Title'
import Links from './components/Links'
import About from './components/About';
import Interests from './components/Interest';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className='content_body'>
      <Title />
      <Links />
      <About />
      <Interests />
      <Footer />
  </div>
  )
  
    
    
}

