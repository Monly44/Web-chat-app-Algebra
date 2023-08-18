import React from "react";
import "../../src/Style/Messages.css";

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    const reversedMessages = messages.slice().reverse();

    return (
      <ul className="Messages-list">
        {reversedMessages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text, timestamp } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const isImage = text.startsWith("data:image/");
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    const formattedDate = timestamp.toLocaleDateString();
    const formattedTime = timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const capitalizedUsername =
      member.clientData.username.charAt(0).toUpperCase() +
      member.clientData.username.slice(1);

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
          <div className="username">{capitalizedUsername}</div>
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
