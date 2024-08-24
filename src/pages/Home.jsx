import React from 'react'
import Header from '../components/Header'
import ChatMain from '../components/ChatMain'
import MessagingApp from '../components/MessagingApp'

const Home = () => {
    return (
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <ChatMain />
         
        </div>
        {/* <MessagingApp /> */}
      </div>
    );
  };

export default Home