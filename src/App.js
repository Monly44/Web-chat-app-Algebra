import React, { useState } from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import "./components/Style/Style.css";

function App() {
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("default");

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleLogout = () => {
    setUsername("");
  };

  const toggleTheme = () => {
    setTheme(theme === "default" ? "dark" : "default");
  };

  return (
    <div className={`app-container ${theme}`}>
      <Header
        username={username}
        handleLogout={handleLogout}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      {username ? (
        <Chat username={username} theme={theme} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
