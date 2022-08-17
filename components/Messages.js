import React from 'react';
import ChatBox from './ChatBox';
import ChatBoxFooter from './ChatBoxFooter';
import ChatBoxHeader from './ChatBoxHeader';

const Messages = () => {
  return (
    <div className="w-full">
      <ChatBoxHeader />
      <ChatBox />
      <ChatBoxFooter />
    </div>
  );
};

export default Messages;
