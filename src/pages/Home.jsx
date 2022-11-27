import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
    <div className='flex overflow-hidden  rounded-xl shadow-2xl w-[55rem] h-[34rem]'> 
      <Sidebar/><Chat/></div>  
    </div>
   
  )
}

export default Home