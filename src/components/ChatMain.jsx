import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MessageList from './MesaageList'
import ChatDisplay from './ChatDisplay';

// const messagesData = [
//   { user: 'Alice', text: 'Hello, how are you?' },
//   { user: 'Bob', text: 'I am good, thanks! How about you?' },
//   { user: 'Charlie', text: 'Hey everyone!' },
//   // Add more messages here
// ];
const messagesData = [
    { id: 1, text: 'Hello, how are you?', sender: 'recipient' },
    { id: 2, text: 'I am good, thanks! How about you?', sender: 'sender' },
    { id: 3, text: 'Hey everyone!', sender: 'recipient' },
    // Add more messages here
  ];
  
const ChatMain = () => {
  const [messages, setMessages] = useState(messagesData);
  const [filteredMessages, setFilteredMessages] = useState(messagesData);

  const handleSearch = (query) => {
    const filtered = messages.filter(
      (message) =>
        message.user.toLowerCase().includes(query.toLowerCase()) ||
        message.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMessages(filtered);
  };

  return (
    <>
    <div className="h-screen flex flex-col">
      <SearchBar onSearch={handleSearch} />
      <MessageList messages={filteredMessages} />
    </div>
    <ChatDisplay messages = {messages}/>
    </>
  );
};

export default ChatMain;
