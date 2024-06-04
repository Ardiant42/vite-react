// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-2b84b.firebaseapp.com",
  projectId: "store-2b84b",
  storageBucket: "store-2b84b.appspot.com",
  messagingSenderId: "222861520020",
  appId: "1:222861520020:web:390369fc16ce7a615cd881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();