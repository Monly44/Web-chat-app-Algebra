import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import "./Style/Style.css";

const predefinedColors = [
  "#9B7EDE",
  "#2A1E5C",
  "#285EA4",
  "#6D9DC5",
  "#77aaff",
  "#99ccff",
  "#5588ff",
  "#336696",
  "#674064",
  "#e4aadf",
  "#e9c9ec",
  "#924e8f",
  "#c673bf",
];

function randomColor() {
  const randomIndex = Math.floor(Math.random() * predefinedColors.length);
  return predefinedColors[randomIndex];
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

    const room = this.drone.subscribe("observable-room");

    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({
        member,
        text: data,
        timestamp: new Date(),
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
    selectedImage: null,
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
        this.setState({ selectedImage: null });
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
        />
      </div>
    );
  }
}

export default Chat;
