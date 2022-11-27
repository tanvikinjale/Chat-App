
import React from "react";

const Login =() =>{
    return(
        <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
            <div className=" bg-white flex flex-col items-center px-12 py-8 rounded-2xl  gap-y-5">
                <h1 className="text-blue text-3xl font-bold ">Chat App</h1>
                <h1 className="font-bold">Login</h1>
                <form className="flex flex-col gap-y-4 text-sm w-[16rem] ">
                    <input className=" border-b-[0.1rem] pb-3" type="email" placeholder="email"/>
                    <input className=" border-b-[0.1rem] pb-3"type="password" placeholder="password"/>
                    <button className="bg-blue text-white py-2 font-bold">Sign in</button>
                </form>
                <h1 className="text-sm text-blue">You don't have an account? Register</h1>
            </div>
        </div>
    )
}

export default Login;