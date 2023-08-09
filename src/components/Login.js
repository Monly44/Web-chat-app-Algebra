import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Login.css";

const Login = (props) => {
  const [usernameText, setUserNameText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(usernameText);
    navigate("/web-chat-app/");
  };
  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <h1>Login</h1>
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter your username"
          required
          value={usernameText}
          onChange={(e) => setUserNameText(e.target.value)}
        ></input>
        <button className="login-btn">Enter</button>
      </form>
    </div>
  );
};

export default Login;
