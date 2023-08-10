import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/Login.css";
import imageSource from "./Style/login.png";
import imagePerson from "./Style/person-circle.svg";

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
      <form className="Box-login" onSubmit={handleSubmit}>
        <div className="img-box">
          <img src={imageSource} alt="Image" />
        </div>
        <div className="login-inputs">
          <label htmlFor="title">
            <h1>
              <img src={imagePerson} alt="Image" />
              Stay in touch
            </h1>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter your username"
            required
            value={usernameText}
            onChange={(e) => setUserNameText(e.target.value)}
            className="input-field"
          />
          <button className="login-btn">Enter</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
