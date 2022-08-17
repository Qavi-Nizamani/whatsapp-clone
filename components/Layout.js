import React from 'react';
import { Contacts } from './Contacts';
import Messages from './Messages';

const Layout = () => {
  return (
    <div className="max-w-[1600px] m-auto flex bg-green-300 h-screen lg:py-[16px]">
      <Contacts />
      <Messages />
    </div>
  );
};

export default Layout;
