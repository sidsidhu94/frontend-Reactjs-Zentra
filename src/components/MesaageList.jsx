import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages</p>
      ) : (
        messages.map((message, index) => (
          <div
            key={index}
            className="p-2 mb-2 bg-gray-200 rounded shadow-sm"
          >
            <p className="font-bold">{message.user}</p>
            <p>{message.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;
