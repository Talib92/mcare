import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images-and-videos/front_logo.jpeg";

const Header = () => {
  return (
    <div className='nav-bar'>
      <div className='logo-nav'>
        <Link to="/">
          <img className='logo' src={logo} alt="Company logo" />
        </Link>
      </div>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to="/" className="nav-link">Home</Link> 
        </li>
        <li className='nav-item'>
          <Link to="/about" className="nav-link">About us</Link> 
        </li>
        <li className='nav-item'>
          <Link to="/contact" className="nav-link">Contact us</Link> 
        </li>
      </ul>
    </div>
  );
}

export default Header;
