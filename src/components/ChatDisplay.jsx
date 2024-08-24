import React from "react";

const ChatDisplay = ({messages}) => {
    // const messages = [
    //     { id: 1, text: 'Hello, how are you?', sender: 'recipient' },
    //     { id: 2, text: 'I am good, thanks! How about you?', sender: 'sender' },
    //     // Add more messages here
    //   ];
  return (
    <>
      <div className="flex-1 bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="bg-gray-700 text-white p-4">Chat Header</div>
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <p>This is where the messages will be displayed.</p>
          </div> */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md"> */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start mb-4 ${
                  message.sender === "sender" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={
                      message.sender === "sender"
                        ? "/path/to/sender-image.jpg"
                        : "/path/to/recipient-image.jpg"
                    }
                    alt={message.sender}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div
                  className={`ml-3 p-2 rounded-lg ${
                    message.sender === "sender"
                      ? "bg-teal-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          
        </div>
        {/* Message Input */}
        <div className="p-4 bg-gray-200 border-t">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-white p-2 rounded w-full border"
          />
        </div>
      </div>
    </>
  );
};

export default ChatDisplay;
