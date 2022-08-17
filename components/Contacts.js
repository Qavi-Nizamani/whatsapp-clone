import React from 'react';
import Contact from './Contact';
import ContactNavbar from './ContactNavbar';
import Search from './Search';

export const Contacts = () => {
  return (
    <div className="border-r-[1px] border-l-black/70 max-w-[360px] min-w-[340px] w-full bg-background-default">
      <ContactNavbar />
      <Search />
      <div className="max-h-[calc(100vh-117px)] lg:max-h-[calc(100vh-148px)] overflow-y-auto">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
