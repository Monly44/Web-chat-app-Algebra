import React, { Component } from "react";
import "./Style/Input.css";
import imageIcon from "./Style/plus-circle-fill.svg"; // Provide the path to your image

class Input extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSendMessage(this.state.text);
    this.setState({ text: "" });
  };

  handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    this.props.handleImageChange(selectedImage);
  };

  closePreview = () => {
    this.props.handleImageChange(null); // Clear the selected image
  };

  render() {
    const inputContainerClassName = this.props.selectedImage
      ? "input-container"
      : "input-container overlay-active";

    return (
      <div className={inputContainerClassName}>
        <form onSubmit={this.onSubmit}>
          <div className="input-wrapper">
            <input
              className="Input-msg"
              onChange={this.onChange}
              value={this.state.text}
              type="text"
              placeholder="Write your message here"
              autoFocus={true}
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
          <button className="send-btn">Send</button>
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
