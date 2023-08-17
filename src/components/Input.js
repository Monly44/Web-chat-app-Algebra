import React, { Component } from "react";
import "./Style/Input.css";
import imageIcon from "./Style/image.svg";
import imageSend from "./Style/send.svg";
import "./Style/Style.css";
class Input extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text.trim() !== "") {
      this.props.onSendMessage(this.state.text);
      this.setState({ text: "" });
    } else if (this.props.selectedImage) {
      this.props.onSendImage(this.props.selectedImage);
    }
  };

  handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    this.props.handleImageChange(selectedImage);
  };

  closePreview = () => {
    this.props.handleImageChange(null);
  };

  render() {
    const inputContainerClassName = this.props.selectedImage
      ? "input-container"
      : "input-container overlay-active";

    const inputContainerBackgroundColor =
      this.props.theme === "dark"
        ? "var(--background-dark)"
        : "var(--background-light)";

    const inputTextColor =
      this.props.theme === "dark" ? "var(--text-light)" : "var(--text-dark)";

    const placeholderColor =
      this.props.theme === "dark"
        ? "var(--placeholder-dark)"
        : "var(--placeholder-light)";

    return (
      <div
        className={`${inputContainerClassName} ${
          this.props.theme === "dark" ? "dark" : ""
        }`}
        style={{ backgroundColor: inputContainerBackgroundColor }}
      >
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              className="Input-msg"
              onChange={this.onChange}
              value={this.state.text}
              type="text"
              placeholder="Write your message here"
              autoFocus={true}
              style={{
                color: inputTextColor,
                "--placeholder-color": placeholderColor,
              }}
            />
            <label htmlFor="file" className="image-upload">
              <img src={imageIcon} alt="Upload" className="image-icon" />
              <input
                type="file"
                id="file"
                name="file"
                accept="image/*"
                onChange={this.handleImageChange}
              />
            </label>
          </div>
          <button className="send-btn" type="submit">
            <img src={imageSend} alt="Send" className="image-send" />
          </button>
        </form>
        {this.props.selectedImage && (
          <div className="image-overlay">
            <div className="image-preview">
              <span className="close-preview" onClick={this.closePreview}>
                &times;
              </span>
              <img
                src={URL.createObjectURL(this.props.selectedImage)}
                alt="Preview"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Input;
