// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYEhi3yhwNVifesXv9pLa0wu7AiNzIk4",
  authDomain: "coffee-store-2c760.firebaseapp.com",
  projectId: "coffee-store-2c760",
  storageBucket: "coffee-store-2c760.firebasestorage.app",
  messagingSenderId: "554638963707",
  appId: "1:554638963707:web:d5ae0860a757101193d15e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;