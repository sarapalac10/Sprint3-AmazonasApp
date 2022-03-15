import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoZ8jSWjBSR-tbUouaiJRAjIWQpuYacxA",
  authDomain: "sara-asapp.firebaseapp.com",
  projectId: "sara-asapp",
  storageBucket: "sara-asapp.appspot.com",
  messagingSenderId: "89509361893",
  appId: "1:89509361893:web:db8f5b0c24e965307d7c0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db,
    facebook
}
