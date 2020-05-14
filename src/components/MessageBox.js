import React, { useRef, useEffect } from "react";
import "../App.css";

export const MessageBox = props => {
  let messagesEnd = useRef();
  useEffect(() => {
    messagesEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <ul className="message-box">
      {props.messages.map((message, index) => {
        const { senderId, text, time } = message;
        return (
          <li
            key={index}
            className={senderId === "Mayur" ? "mayur-msg" : "priy-msg"}
          >
            <div>{senderId}</div>
            <div>
              <span className="user-msg">
                {text}
                <div>
                  <sub>{time}</sub>
                </div>
              </span>
            </div>
          </li>
        );
      })}
      <div
        ref={el => {
          messagesEnd = el;
        }}
      />
    </ul>
  );
};
