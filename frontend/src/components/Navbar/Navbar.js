import React from 'react';
import './Navbar.css';
import { assets } from '../../Assets/assets';
// import logo from '../../assets';
// import searchIcon from '../../Assets/search_icon.png';
// import basketIcon from '../../Assets/basket_icon.png'; // Import the basket icon

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" className="search-icon" />
        <div className="navbar-search-icon"></div>
        <img src={assets.basket_icon} alt="Basket_Icon" className="basket_icon" /> {/* Added alt text */}
        <div className="dot"></div>
      </div>
      <button>sign in</button>
    </div>
  );
};

export default Navbar;


