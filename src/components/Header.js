import React, { useState, useRef } from "react";
import "./Style/Header.css";
import imageMenu from "./Pictures/list.svg";

const Header = (props) => {
  const isLoggedIn = !!props.username;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownWithDelay = () => {
    setIsDropdownOpen(false);
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const formattedUsername = isLoggedIn
    ? props.username.charAt(0).toUpperCase() + props.username.slice(1)
    : "";

  return (
    <>
      {isLoggedIn && (
        <div className={`App-header ${props.theme}`}>
          <div className="header-content">
            <h1 className={`header-text ${props.theme}`}>
              Welcome {formattedUsername}
            </h1>
            <div className="dropdown">
              <button
                className={`dropbtn ${props.theme}`}
                onClick={toggleDropdown}
              >
                <img src={imageMenu} alt="Options" className="image-menu" />
              </button>
              <div
                className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}
                ref={dropdownRef}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={props.toggleTheme}>Toggle Theme</button>
                <button onClick={props.handleLogout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
