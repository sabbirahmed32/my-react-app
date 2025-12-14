// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {
  return (
    <div className="nav_header">
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/blog'}>Blog API</Link>
      <Link to={'/product'}>Product</Link>
      <Link to={'/contarct'}>Contact Us</Link>
      
    </div>
  );
}

export default Navbar;
