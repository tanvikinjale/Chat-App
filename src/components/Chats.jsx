import React from "react";
import avatar from "../photos/avatar.jpg";

const Chats = () => {
  const data = [
    { name: "Jane", img: avatar, msg: "hello" },
    { name: "Jisoo", img: avatar, msg: "hel" },
    { name: "Jennie", img: avatar, msg: "how" },
    { name: "lisa", img: avatar, msg: "heo" },
  ];
  return (
    <div>
      {data.map((items) => (
        <div className="flex p-[10px] items-center gap-4 text-white">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div>
            <span>{items.name}</span>
            <p className="text-xs text-grey">{items.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
