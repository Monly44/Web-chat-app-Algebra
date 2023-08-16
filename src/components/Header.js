import React from "react";
import "./Style/Header.css";

const Header = (props) => {
  const isLoggedIn = !!props.username;

  const getPrimaryColor = () => {
    return props.theme === "dark"
      ? "--primary-color-dark"
      : "--primary-color-default";
  };

  const getSecondaryColor = () => {
    return props.theme === "dark"
      ? "--secondary-color-dark"
      : "--secondary-color-default";
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
              className="dropbtn"
              style={{ backgroundColor: `var(${getPrimaryColor()})` }}
            >
              Options
            </button>
            <div
              className="dropdown-content"
              style={{ backgroundColor: `var(${getSecondaryColor()})` }}
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
