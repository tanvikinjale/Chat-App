import React from 'react'
import avatar from "../photos/avatar.jpg";

const Navbar = () => {
  return (
    <div className='flex bg-[#2f2d52] text-white h-[50px] px-3 items-center justify-between text-sm'>
      <span className="font-bold"> Chat App</span>
      <div className='flex items-center'>
        <img  className= "h-7 w-7 rounded-full " src={avatar} alt=""></img>
        <span className="px-2">Tanvi Kinjale</span>
        <button className="bg-[#5d5b8d] text-sm rounded-md p-1  ">Logout</button>
      </div>
    </div>
  )
}

export default Navbar