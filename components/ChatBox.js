import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const chats = [
  { message: 'Hello Qavi!', time: new Date(), type: 'incoming' },
  {
    message: "How are you? Let's go out side",
    time: new Date(),
    type: 'incoming',
  },
  {
    message: "Yes I am coming it's design will take too much time yet.",
    time: new Date(),
    type: 'outgoing',
  },
  { message: 'Hello Qavi!', time: new Date(), type: 'incoming' },
  {
    message: "How are you? Let's go out side",
    time: new Date(),
    type: 'incoming',
  },
  {
    message: "Yes I am coming it's design will take too much time yet.",
    time: new Date(),
    type: 'outgoing',
  },
  { message: 'Hello Qavi!', time: new Date(), type: 'incoming' },
  {
    message: "How are you? Let's go out side",
    time: new Date(),
    type: 'incoming',
  },
  {
    message: "Yes I am coming it's design will take too much time yet.",
    time: new Date(),
    type: 'outgoing',
  },
  { message: 'Hello Qavi!', time: new Date(), type: 'incoming' },
  {
    message: "How are you? Let's go out side",
    time: new Date(),
    type: 'incoming',
  },
  {
    message: "Yes I am coming it's design will take too much time yet.",
    time: new Date(),
    type: 'outgoing',
  },
];

const ChatBox = () => {
  return (
    <div className="h-[calc(100vh-120px)] lg:max-h-[calc(100vh-152px)] py-4 px-[8%] bg-panel-header-background overflow-y-auto">
      <div className="">
        {chats.map((chat) => {
          if (chat.type === 'incoming') {
            return (
              <div
                key={chat.time}
                className="bg-white my-1 p-3 rounded-xl rounded-tl-none relative w-fit max-w-[90%]"
              >
                <div className="absolute top-0 left-[-8px] text-white">
                  <svg viewBox="0 0 8 13" width="8" height="13">
                    <path
                      opacity=".13"
                      fill="#0000000"
                      d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                    ></path>
                  </svg>
                </div>
                <p className="text-[15px]">{chat.message}</p>
                <p className="text-right text-[13px]">
                  {chat.time.getHours() + ':' + chat.time.getMinutes()}
                </p>
              </div>
            );
          } else {
            return (
              <div className="rtl-direction">
                <div
                  key={chat.time}
                  className="ltr-direction bg-green-300 my-1 p-3 rounded-xl rounded-tr-none relative w-fit max-w-[90%] "
                >
                  <div className="absolute top-0 right-[-8px] text-green-300">
                    <svg viewBox="0 0 8 13" width="8" height="13">
                      <path
                        opacity=".13"
                        d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-[15px]">{chat.message}</p>
                  <p className="text-right text-[13px]">
                    {chat.time.getHours() + ':' + chat.time.getMinutes()}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatBox;
