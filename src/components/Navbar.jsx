import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CompCss/Navbar.css'
import Carasoul from './Carasoul';
const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<>
<div className="navbar_first_dev">
      <div className="navbar_nav">
        <div className="navbar_left_bar">
          <Link to="/">The Writing Desk</Link>
        </div>
        <div className={`nav_bar_right ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li className="category-item" onClick={toggleCategory}>
              <span>Category</span>
              {isCategoryOpen && (
                <ul className="category-dropdown">
                  <li>
                    <Link to="/category/technology">Technology</Link>
                  </li>
                  <li>
                    <Link to="/category/lifestyle">Lifestyle</Link>
                  </li>
                  <li>
                    <Link to="/category/travel">Travel</Link>
                  </li>
                  <li>
                    <Link to="/category/food">Food</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
 
    </>
  );
};

export default Navbar;