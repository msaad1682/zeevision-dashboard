import React from 'react';
import './Navbar.css';
import profile_icon from '../../assets/saad.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setSidebar, sidebar }) => {
  return (
    <nav className={`flex-div ${sidebar ? "" : "large-nav"}`}>
      <div
        className="menu"
        onClick={() => {
          setSidebar((prev) => !prev);
        }}
      >
        <FontAwesomeIcon icon={faBars} className="logo-icon" />
      </div>
      <div className="nav-right flex-div">
        <img className="user-icon" src={profile_icon} alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
