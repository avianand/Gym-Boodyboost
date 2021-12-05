// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVCWAAH1hn3yqVif8W99mT7Y5AUFGmcFc",
  authDomain: "bodyboost-gym.firebaseapp.com",
  projectId: "bodyboost-gym",
  storageBucket: "bodyboost-gym.appspot.com",
  messagingSenderId: "830396752524",
  appId: "1:830396752524:web:d3a3a737031c056fd491a9",
  measurementId: "G-6FQSEPLHTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
