import { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getMessages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      {messages.map(msg => (
        <p key={msg.id}>{msg.text}</p>
      ))}
    </div>
  );
};

export default Messages;
