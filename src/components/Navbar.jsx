import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CompCss/Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // Toggle Category Dropdown
  console.log(isLoggedIn)
  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close Menu Automatically After Clicking a Link
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCategoryOpen(false); // Close category dropdown as well
  };

  return (
    <>
       
        {
           isLoggedIn ? (<> 
           
           
                
           </>) :(<> 
           
           
              <div className="navbar_first_dev">
        <div className="navbar_nav">
          {/* Left Branding Section */}
          <div className="navbar_left_bar">
            <Link to="/">the geeky</Link>
          </div>
          {/* Right Navigation Section */}
          <div className={`nav_bar_right ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              
              <li>
                <Link to="/scholarsip" onClick={closeMenu}>
                  Scholarship
                </Link>
              </li>
              <li>
                <Link to="/post" onClick={closeMenu}>
                  New Blog
                </Link>
              </li>
              {/* Category Dropdown */}
              <li className="category-item" onClick={toggleCategory}>
                <span>Category</span>
                {isCategoryOpen && (
                  <ul className="category-dropdown">
                    <li>
                      <Link to="/category/technology" onClick={closeMenu}>
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/lifeStyle" onClick={closeMenu}>
                        Lifestyle
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/Travel" onClick={closeMenu}>
                        Travel
                      </Link>

                    </li>
                    <li>
                      <Link to="/category/Crypto" onClick={closeMenu}>
                        cryptoWord
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/food" onClick={closeMenu}>
                        Food
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/education" onClick={closeMenu}>
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/Home&Living" onClick={closeMenu}>
                      Living
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/cryptoWord" onClick={closeMenu}>
                        crypto
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/health" onClick={closeMenu}>
                        Health
                      </Link>
                      <Link to={'/category/ai-machine-learning'} onClick={closeMenu}>
                       Ai And Machine Learning 
                      </Link>
                    </li>
                     <li>
                       <Link to={'/category/brand'} onclick={closeMenu}>
                        New Brand
                       </Link> 
                        </li>
                  </ul>
                )}
              </li>
              <li>
                
                <Link to="/login-admin" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                {/* <Link to="/signup" onClick={closeMenu}>
                  Signup
                </Link> */}
              </li>
            </ul>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
           
           
           </>) 
        }
   
    </>
  );
};

export default Navbar;