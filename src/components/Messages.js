import React from "react";
import "./Style/Messages.css";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        <div></div>
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text, timestamp } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    const formattedDate = timestamp.toLocaleDateString();
    const formattedTime = timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Update chatWithInfo when receiving a message
    if (member.clientData.username !== currentMember.username) {
      this.props.updateChatWithInfo(
        member.clientData.username,
        member.clientData.avatar
      );
    }

    return (
      <li
        className={className}
        key={text + "_" + new Date().getTime().toString()}
      >
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text-container">
            <div className="text">{text}</div>
            <div className="timestamp">
              <div className="timestamp-date">{formattedDate}</div>
              <div className="timestamp-time">{formattedTime}</div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Messages;
