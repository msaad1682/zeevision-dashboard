import React, { useState } from 'react';
import './Sidebar.css';
import profile_icon from '../../assets/saad.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPen, faDesktop, faTable, faChartArea, faCopy, faPaw, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidebar = ({ sidebar }) => {
  const [menuStates, setMenuStates] = useState({});

  const toggleMenu = (menu) => {
    setMenuStates((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="logo">
        <FontAwesomeIcon icon={faPaw} className="logo-icon" />
        <span className="logo-name"> Gentellala Alela</span>
      </div>
      <div className="profile flex-div">
        <img src={profile_icon} alt="Profile Picture" />
        <h3 className="profile-txt">Welcome,</h3>
        <span>Saad</span>
      </div>
      <div className="sidebar-text">
        <h3 className="side-txt">General</h3>
        <div className="links" onClick={() => toggleMenu('home')}>
          <Link to='/'>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          <span className="shortcut-name">Home</span>
          </Link>
          
        </div>
        {/* {menuStates['home'] && (
          <div className="sub-menu">
            <div className="sub-menu-item">Dashboard 1</div>
            <div className="sub-menu-item">Dashboard 2</div>
            <div className="sub-menu-item">Dashboard 3</div>
          </div>
        )} */}
        {/* <div className="links" onClick={() => toggleMenu('forms')}>
          <FontAwesomeIcon icon={faPen} className="icon" />
          <span className="shortcut-name">Forms</span>
          <FontAwesomeIcon icon={menuStates['forms'] ? faChevronUp : faChevronDown} className="chevron-icon" />
        </div>
        {menuStates['forms'] && (
          <div className="sub-menu">
            <div className="sub-menu-item">General Form</div>
            <div className="sub-menu-item">Form Validation</div>
            <div className="sub-menu-item">Form Button</div>
          </div>
        )} */}
         <div className="links" onClick={() => toggleMenu('tables')}>
          <FontAwesomeIcon icon={faTable} className="icon" />
          <span className="shortcut-name">Tables</span>
          <FontAwesomeIcon icon={menuStates['tables'] ? faChevronUp : faChevronDown} className="chevron-icon" />
        </div>
        {menuStates['tables'] && (
          <div className="sub-menu">
            <Link to="/List" className="sub-menu-item shortcut-name">List</Link>           
          </div>
        )}
        <div className="links" onClick={() => toggleMenu('layouts')}>
          <FontAwesomeIcon icon={faCopy} className="icon" />
          <span className="shortcut-name">Users</span>
          <FontAwesomeIcon icon={menuStates['layouts'] ? faChevronUp : faChevronDown} className="chevron-icon" />
        </div>
        {menuStates['layouts'] && (
          <div className="sub-menu">
            {/* Link to the new page */}
            <Link to="/Layout" className="sub-menu-item shortcut-name">
              Add User
            </Link>
            <Link to="/Role" className="sub-menu-item shortcut-name">
              Add User Role
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
