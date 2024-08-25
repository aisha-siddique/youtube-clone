import React from 'react';
import './Navbar.css';
import { FiMenu } from 'react-icons/fi';
import { FaSearch, FaMicrophone, FaVideo, FaBell } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';

function Navbar({ toggleSideMenu }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FiMenu className="menu-icon" onClick={toggleSideMenu} /> {/* Add onClick */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
          className="youtube-logo"
        />
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <FaMicrophone className="microphone-icon" />
      </div>
      <div className="navbar-right">
        <FaVideo className="icon" />
        <FaBell className="icon" />
        <MdAccountCircle className="icon user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
