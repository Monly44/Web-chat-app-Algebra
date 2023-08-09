import React from "react";
import "./Style/Messages.css";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text, timestamp } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const isImage = text.startsWith("data:image/"); // Check if the message is an image
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    const formattedDate = timestamp.toLocaleDateString();
    const formattedTime = timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

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
            {isImage ? (
              <div className="image-sent">
                <img src={text} alt="Received Image" />
              </div>
            ) : (
              <div className="text">{text}</div>
            )}
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
