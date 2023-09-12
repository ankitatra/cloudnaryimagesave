import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:7000'); // Replace with your Socket.io server URL

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for 'chat message' events from the server
    socket.on('chat message', (msg) => {
        console.log("msghghghgh",msg)
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up the socket connection on component unmount (optional)
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Emit a 'chat message' event to the server
    socket.emit('chat message', message);

    // Clear the input field
    setMessage('');
  };
 console.log(message)
 console.log(messages)
  return (
    <div>
      <h2>Chat Room</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
