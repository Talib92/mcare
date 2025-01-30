import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import './App.css';
import Footer from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
