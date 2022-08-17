import React from 'react';
import Image from 'next/image';
const Contact = () => {
  return (
    <div className="flex justify-between align-center p-3 border-t-[1px] cursor-pointer hover:bg-background-default-active">
      <div className="relative min-w-[47px] min-h-[47px] rounded-full overflow-hidden">
        <Image
          src={
            'https://pps.whatsapp.net/v/t61.24694-24/74713673_1009024156100649_6022620297437199485_n.jpg?ccb=11-4&oh=01_AVz4x-HIXNMSjRIDRGs_R2UP8tNkvHTKfenxgoBbJko30w&oe=630CF201'
          }
          alt="Profile pic"
          layout="fill"
        />
      </div>

      <div className="flex flex-col w-full justify-between pl-4">
        <div className="flex justify-between">
          <p>+92 315 3027176</p>
          <p className="text-[12px]">yesterday</p>
        </div>
        <div className="w-[250px]">
          <p className="text-black/50 text-[14px] text-ellipsis overflow-hidden whitespace-nowrap">
            Yousaf jo charger edhain knhe?Yousaf jo charger edhain knhe?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
