// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa2mDKnwF72yZsjOEGkddx6g8lY4VZfns",
  authDomain: "private-route-60159.firebaseapp.com",
  projectId: "private-route-60159",
  storageBucket: "private-route-60159.appspot.com",
  messagingSenderId: "740738951651",
  appId: "1:740738951651:web:ca956459c3d2c2164e98d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;