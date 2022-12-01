
import {React, useState} from "react";
import { useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { Link } from "react-router-dom";

const Login =() =>{
     
    const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;

    // try {
    //    await createUserWithEmailAndPassword(auth, email, password)
    //      navigate("/login")
    
    // } catch (err) {
    //   setErr(true);
    // }
  };


    return(
        <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
            <div className=" bg-white flex flex-col items-center px-12 py-8 rounded-2xl  gap-y-5">
                <h1 className="text-blue text-3xl font-bold ">Chat App</h1>
                <h1 className="font-bold">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 text-sm w-[16rem] ">
                    <input className=" border-b-[0.1rem] pb-3" type="email" placeholder="email"/>
                    <input className=" border-b-[0.1rem] pb-3"type="password" placeholder="password"/>
                    <button className="bg-blue text-white py-2 font-bold">Sign in</button>
                    {err && <span>something went wrong</span>}

                </form>
                <h1 className="text-sm text-blue">You don't have an account? <Link to="/register">Register</Link></h1>
            </div>
        </div>
    )
}

export default Login;