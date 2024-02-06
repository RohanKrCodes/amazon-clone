// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsuVfl9CL811yT5bQ5R5sDovRbTxnqGL4",
  authDomain: "r-c9037.firebaseapp.com",
  projectId: "r-c9037",
  storageBucket: "r-c9037.appspot.com",
  messagingSenderId: "987354942876",
  appId: "1:987354942876:web:1afaedbd4066fa8db9cc59",
  measurementId: "G-HH695G1XQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.db;
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function

export { db,auth };
