import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/Style/Login.css";
import imageSource from "./Pictures/login.png";
import imagePerson from "./Pictures/person-circle.svg";

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
            <h1 className="Login-h1">
              <img src={imagePerson} alt="Image" className="Img-h1" />{" "}
            </h1>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Username"
            required
            value={usernameText}
            onChange={(e) => setUserNameText(e.target.value)}
            className="input-field"
          />
          <button className="login-btn">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
