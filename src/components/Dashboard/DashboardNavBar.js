import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faUser} from "@fortawesome/free-solid-svg-icons";

import "./dashboard.css";

const DashboardNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className={`navbar ${showNavbar && "responsive"}`}>
        <div className="navbar-dashboard">
          <div className="logo-container-dashboard">
            <div className="logo-dashboard">
              <h2>Up</h2>
            </div>
            <div className="title">
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul className="nav-link">  
             <li >
             <Link to="/chart">Dashboard</Link>
             </li>
             <li className="link">
             <Link to="/dashboard">Manage-Post</Link>
             </li>
              <li>
                <Link to="/contact" className='profile'>
                 <div className="profile-container">
                 Profile <FontAwesomeIcon icon={faUser} className="user-icon"/>
                 </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="login">Logout</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavBar ;
