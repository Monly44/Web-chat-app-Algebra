import React from "react";

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
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

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
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
