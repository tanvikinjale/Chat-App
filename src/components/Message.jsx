import React from "react";
import avatar from "../photos/avatar.jpg";

const Message = () => {
  return (
    <div className="">
      {/* <div className="bg-[#ddddf7] p-[10px] flex">
      <div className="flex flex-col text-grey text-xs mx-2">
        <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
        <span >just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-2 ">
        <p className="bg-white px-3 py-1 rounded-r-xl rounded-bl-xl">hello</p>
        <img src={avatar} alt=""></img>
      </div>
      </div> */}

     <div className="bg-[#ddddf7] p-[10px] flex flex-row-reverse">
      <div className="flex flex-col text-grey text-xs mx-2">
        <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
        <span >just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-2 items-end">
        <p className="bg-[#8da4f1] px-3 py-1 rounded-l-xl rounded-br-xl">hello</p>
        <img src={avatar} alt=""></img>
      </div>
      </div>
    </div>
  );
};

export default Message;
