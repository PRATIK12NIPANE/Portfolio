// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';
import Home from './components/Home';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => (
  <>
    <Navbar />
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <Certificates/>
    <Skills/>
    <Education/>
    <Contact/>

  

    <Footer/>
  </>
);

export default App;
