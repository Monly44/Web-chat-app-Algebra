import React from "react";
import styled from "./Style/Header.css"; // Import styled-components

const StyledHeader = styled.div`
  color: ${(props) => props.theme.primaryColor}; /* Use theme primaryColor */
  /* ... other styles ... */
`;

const Header = (props) => {
  const isLoggedIn = !!props.username;

  return (
    <StyledHeader>
      {isLoggedIn && (
        <div className="App-header">
          <h1>Welcome {props.username}</h1>
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <button onClick={props.handleLogout}>Logout</button>
              <div>
                <button onClick={() => props.handleThemeChange("#4802fa")}>
                  Blue Theme
                </button>
                <button onClick={() => props.handleThemeChange("#f44336")}>
                  Red Theme
                </button>
                {/* Add more theme options as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
