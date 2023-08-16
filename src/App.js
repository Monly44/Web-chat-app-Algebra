import React from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import "./components/Style/Style.css"; // Import your main CSS file here
import { ThemeProvider } from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      themeColor: "#4802fa", // Default theme color
    };
  }

  handleLogin = (username) => {
    this.setState({ username });
  };

  handleLogout = () => {
    this.setState({ username: "" });
  };

  handleThemeChange = (color) => {
    this.setState({ themeColor: color });
  };

  render() {
    const { username, themeColor } = this.state;

    // Define the theme dynamically
    const theme = {
      primaryColor: themeColor,
    };

    return (
      <ThemeProvider theme={theme}>
        <div
          className="app-container"
          style={{
            background: `linear-gradient(45deg, ${themeColor}a4, ${themeColor}85, ${themeColor}75, ${themeColor}7a, ${themeColor}7b, ${themeColor}a1)`,
          }}
        >
          <Header
            username={username}
            handleLogout={this.handleLogout}
            handleThemeChange={this.handleThemeChange}
          />
          {username ? (
            <Chat username={username} />
          ) : (
            <Login onLogin={this.handleLogin} username={username} />
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
