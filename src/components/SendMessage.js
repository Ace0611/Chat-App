import React, { useState } from "react";
import "../App.css";

export const SendMessage = props => {
  const [message, setMessage] = useState("");
  const handleChange = e => {
    setMessage(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        onChange={handleChange}
        value={message}
        placeholder="Type your message and hit enter..."
        type="text"
        className="message-input"
      />
    </form>
  );
};
