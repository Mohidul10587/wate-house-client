// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNNUSU2Sdmfy4ubKYwW5LpUzqtoZpZMAo",
  authDomain: "wire-house-7eae7.firebaseapp.com",
  projectId: "wire-house-7eae7",
  storageBucket: "wire-house-7eae7.appspot.com",
  messagingSenderId: "55894643532",
  appId: "1:55894643532:web:eda2354f41c75b4a3575e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;
export default auth ;





