import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
