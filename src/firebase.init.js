// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATk7AyBBld0nqWtQlJmymX1O95PMvbHU",
  authDomain: "new-e-commerce-ab26a.firebaseapp.com",
  projectId: "new-e-commerce-ab26a",
  storageBucket: "new-e-commerce-ab26a.appspot.com",
  messagingSenderId: "111152305612",
  appId: "1:111152305612:web:0e6c4ed8707181d2e63969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;
