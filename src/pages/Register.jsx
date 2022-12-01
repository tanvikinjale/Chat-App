import React, { useState } from "react";
import AddImg from "../photos/addImg.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";


const Register = () => {
  
    const [err,setErr] = useState(false)
    const [userName, setuserName] = useState('');
    const [emaill, setemail] = useState('');
    const [paswordd, setpass] = useState('');
    const [filee, setfilee] = useState('');

    const handleSubmit=async(e)=>{
       e.preventDefault();
      
      const userN = userName;
      const email = emaill;
      const password= paswordd;
      const file = filee;
      
     

      try{

       const res= await createUserWithEmailAndPassword(auth, email, password);

       const storageRef = ref(storage,`${userName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:

    uploadTask.on(
      (error) => {
        setErr(true);
      },
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(res.user,{
           userN,
           photoURL : downloadURL,
          });
          // await setDoc(doc(db,"users",res.user.uid),{
          //   uid: res.user.uid,
          //   userName,
          //   email,
          //   photoURL : downloadURL
          // });
          await addDoc(collection(db, "users"), {
            uid: res.user.uid,
            userN,
            email,
            photoURL : downloadURL,
          })

        });
      }
    );

       }catch(err){
         setErr(true);
       }

       setuserName('');
       setemail('');
       setpass('');
       setfilee('')
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
            onChange={event => setuserName(event.target.value)}
            value={userName}
            
          />
          <h1></h1>
          <input
            className=" border-b-[0.1rem] pb-3"
            type="email"
            placeholder="email"
            onChange={event => setemail(event.target.value)}
            value={emaill}
          />
          <input
            className=" border-b-[0.1rem] pb-3"
            type="password"
            placeholder="password"
            onChange={event => setpass(event.target.value)}
            value={paswordd}
          />
          <input 
          type="file" id="file" className=""
          
          onChange={event => setfilee(event.target.value)}
            value={filee}/>
          {/* <label htmlFor="file " className="flex items-center">
             <img src={AddImg}  alt="" className="w-10"/>
             <span className="pl-4 text-blue">Add avtar</span>
          </label> */}
          {/* <input
            // {...handleSubmit("file", { required: true })}
            type="file"
           id="file"
           
          />{" "}
          <label htmlFor="file" className="flex items-center font-12px">
            <img src={AddImg} alt="" className="w-10 " />
            <span className="pl-4 text-blue">Add an avtar</span>
          </label> */}
          <button onClick={handleSubmit} className="bg-blue text-white py-2 font-bold" type="submit">
            Sign up
          </button>
          {err && <span>something went wrong</span>}
        </form>
        <h1 className="text-sm text-blue">You do have an account? <Link to="/login">Login</Link></h1>
      </div>
    </div>
  );
};

export default Register;
