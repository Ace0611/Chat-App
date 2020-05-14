import React, { useState } from "react";
import "./App.css";
import { Title } from "./components/Title";
import { SendMessage } from "./components/SendMessage";
import { MessageBox } from "./components/MessageBox";

function App() {
  const replies = [
    "I am fine too, I should tell you that I have predefined texts",
    "I dont know the context you are talking about",
    "Seriously, I am not understanding your texts",
    "Ok bye, I am going offline, too much data for me to process",
    "My array is now out of context so i am using mod operator to start same replies"
  ];
  let time = new Date();
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([
    {
      senderId: "Mayur",
      text: "Hi Priyanka, How are you?",
      time: time.toLocaleTimeString()
    }
  ]);
  const sendMessage = text => {
    setCount(count + 1);
    setMessages([
      ...messages,
      {
        senderId: "Priyanka",
        text,
        time: time.toLocaleTimeString()
      },
      {
        senderId: "Mayur",
        text: replies[count % 5],
        time: time.toLocaleTimeString()
      }
    ]);
  };

  return (
    <div className="App">
      <Title />
      <MessageBox messages={messages} />
      <SendMessage sendMessage={sendMessage} />
    </div>
  );
}

export default App;
