import React from 'react';
import Image from 'next/image';
const ChatBoxHeader = () => {
  return (
    <div className="flex justify-between items-center bg-panel-header-background p-3 h-[60px]">
      <div className="flex items-center gap-2">
        <div className="relative min-w-[47px] min-h-[47px] rounded-full overflow-hidden">
          <Image
            src={
              'https://pps.whatsapp.net/v/t61.24694-24/74713673_1009024156100649_6022620297437199485_n.jpg?ccb=11-4&oh=01_AVz4x-HIXNMSjRIDRGs_R2UP8tNkvHTKfenxgoBbJko30w&oe=630CF201'
            }
            alt="Profile pic"
            layout="fill"
          />
        </div>
        <p>+92 315 3027176</p>
      </div>
      <ul className="flex items-center gap-2">
        <li className="cursor-pointer rounded-ful">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
            ></path>
          </svg>
        </li>
        <li className="cursor-pointer rounded-ful">
          {/* <FontAwesomeIcon icon={faListDots} className="text-[22px]" /> */}
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            ></path>
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default ChatBoxHeader;
