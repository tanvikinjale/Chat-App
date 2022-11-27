import React from "react";
import AddImg from "../photos/addImg.png";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth,storage,db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 



const Register = () => {
  const [err,setErr] = useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file =e.target[3].file[0];
    
  try{
   
   const res= await createUserWithEmailAndPassword(auth, email, password);


const storageRef = ref(storage, userName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:

uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
       userName,
       photoURL : downloadURL,
      });
      await setDoc(doc(db,"users",res.user.uid),{
        uid: res.user.uid,
        userName,
        email,
        photoURL : downloadURL,
      })
      
    });
  }
);



   }catch(err){
     setErr(true);
   }
  };
  return (
    <div className="bg-[#a7bcff] flex items-center justify-center h-screen">
      <div className=" bg-white flex flex-col items-center px-12 py-8 rounded-2xl  gap-y-5">
        <h1 className="text-blue text-3xl font-bold ">Chat App</h1>
        <h1 className="font-bold">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 text-sm w-[16rem] "
        >
          <input
            className=" border-b-[0.1rem] pb-3"
            type="text"
            placeholder="User name"
          />
          <input
            className=" border-b-[0.1rem] pb-3"
            type="email"
            placeholder="email"
          />
          <input
            className=" border-b-[0.1rem] pb-3"
            type="password"
            placeholder="password"
          />
          <input type="file" id ="filee" className="hidden"/>
          <label htmlFor="filee" className="flex items-center font-12px">
            <img src={AddImg} alt="" className="w-10 " />
            <span className="pl-4 text-blue">Add an avtar</span>
          </label>

          <button className="bg-blue text-white py-2 font-bold" type="submit">Sign up</button>
        {err && <span>something went wrong</span>}
        </form>
        <h1 className="text-sm text-blue">You do have an account? Login</h1>
      </div>
    </div>
  );
};

export default Register;
