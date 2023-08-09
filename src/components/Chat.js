import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./Style/Style.css";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xfffffa).toString(16);
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("rFVOIjjevWiF8qZe", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    // ---
    const room = this.drone.subscribe("observable-room");
    // ---
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({
        member,
        text: data,
        timestamp: new Date(), // Add the timestamp property
      });
      this.setState({ messages });
    });
  }

  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor(),
    },
    selectedImage: null, // To store the selected image file
  };

  onSendMessage = (message) => {
    if (message.trim() === "" && !this.state.selectedImage) return;

    if (this.state.selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        this.drone.publish({
          room: "observable-room",
          message: imageDataUrl,
        });
        this.setState({ selectedImage: null }); // Clear selected image after sending
      };
      reader.readAsDataURL(this.state.selectedImage);
    } else {
      this.drone.publish({
        room: "observable-room",
        message,
      });
    }
  };

  handleImageChange = (selectedImage) => {
    this.setState({ selectedImage });
  };

  render() {
    return (
      <div className="App">
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
          handleImageChange={this.handleImageChange}
          selectedImage={this.state.selectedImage}
        />
      </div>
    );
  }
}

export default Chat;
