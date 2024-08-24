import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { IoMdLogOut } from 'react-icons/io';
import SearchBar from './SearchBar';
import ChatMain from './ChatMain';

const friendsList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  // Add more friends here
];

const MessagingApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFriends = friendsList.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        {/* <ChatMain/> */}
        {/* <div className="flex items-center bg-gray-900 p-4">
          <HiSearch className="text-xl mr-2" />
         
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white p-2 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
    
        {/* Friends List */}
        {/* <div className="flex-1 overflow-y-auto p-4">
          <ul>
            {filteredFriends.map(friend => (
              <li key={friend.id} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
                {friend.name}
              </li>
            ))}
          </ul>
        </div> */}
        {/* Logout */}
        <div className="p-4 bg-gray-900 flex justify-center items-center">
          <button className="flex items-center text-red-500">
            <IoMdLogOut className="text-2xl mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="bg-gray-700 text-white p-4">Chat Header</div>
        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>This is where the messages will be displayed.</p>
          </div>
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
    </div>
  );
};

export default MessagingApp;
