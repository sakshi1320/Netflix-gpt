// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN7ko_nqXVrQyR9L9PsKRuD3FUpraNwZg",
  authDomain: "netflixgpt-6ac39.firebaseapp.com",
  projectId: "netflixgpt-6ac39",
  storageBucket: "netflixgpt-6ac39.appspot.com",
  messagingSenderId: "950830533466",
  appId: "1:950830533466:web:a454330f562a4bd61fc163",
  measurementId: "G-BJW1XTPWWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
