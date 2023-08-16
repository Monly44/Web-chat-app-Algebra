import React from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import "./components/Style/Style.css"; // Import your main CSS file here

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username });
  };

  handleLogout = () => {
    this.setState({ username: "" });
  };

  render() {
    const { username } = this.state;

    return (
      <div className="app-container">
        <Header username={username} handleLogout={this.handleLogout} />
        {username ? (
          <Chat username={username} />
        ) : (
          <Login onLogin={this.handleLogin} username={username} />
        )}
      </div>
    );
  }
}

export default App;
