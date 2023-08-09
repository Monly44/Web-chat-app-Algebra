import React, { Component } from "react";
import "./Style/Input.css";

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

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={this.state.text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <input type="file" accept="image/*" onChange={this.handleImageChange} />
        {this.props.selectedImage && (
          <div className="image-preview">
            <img
              src={URL.createObjectURL(this.props.selectedImage)}
              alt="Preview"
            />
          </div>
        )}
        <button>Send</button>
      </form>
    );
  }
}

export default Input;
