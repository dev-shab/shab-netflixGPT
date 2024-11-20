// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Ah3T_E4WWPwmplbffvV1zhC4aq7yBfA",
  authDomain: "netflixgpt-1cd58.firebaseapp.com",
  projectId: "netflixgpt-1cd58",
  storageBucket: "netflixgpt-1cd58.firebasestorage.app",
  messagingSenderId: "555733027448",
  appId: "1:555733027448:web:bb0dd882a7be881ddfbb8d",
  measurementId: "G-VKHE72DVJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
