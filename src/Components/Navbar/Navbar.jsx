import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import profile_icon from '../../assets/saad.jpeg';

const Navbar = ({ setSidebar, sidebar }) => {
  return (
    <nav className={`flex-div ${sidebar ? "" : "large-nav"}`}>
      <img
        className="menu-icon"
        onClick={() => {
          setSidebar(prev => !prev);
        //   alert('Menu icon clicked! Sidebar toggled.');
        }}
        src={menu_icon}
        alt="Toggle Sidebar"
      />
      <div className="nav-right flex-div">
        <img className="user-icon" src={profile_icon} alt="Profile Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
