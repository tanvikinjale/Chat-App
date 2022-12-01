import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFT2c2ghmgheS_7DInTA2BPR7L2ii0tnc",
  authDomain: "chat-app-790b0.firebaseapp.com",
  projectId: "chat-app-790b0",
  storageBucket: "chat-app-790b0.appspot.com",
  messagingSenderId: "527134889759",
  appId: "1:527134889759:web:2b32e5052dde9929ef022a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);
