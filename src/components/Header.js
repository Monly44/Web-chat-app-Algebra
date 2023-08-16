import React, { useState, useRef } from "react";
import "./Style/Header.css";

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

  return (
    <>
      {isLoggedIn && (
        <div className={`App-header ${props.theme}`}>
          <h1 className={`header-text ${props.theme}`}>
            Welcome {props.username}
          </h1>
          <div className="dropdown">
            <button
              className={`dropbtn ${props.theme}`}
              onClick={toggleDropdown}
            >
              Options
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
      )}
    </>
  );
};

export default Header;
