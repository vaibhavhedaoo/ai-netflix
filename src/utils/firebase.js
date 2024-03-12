// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjap43KeM6UwTW6ChFK3DL0Y5-yeRox8",
  authDomain: "ainetflixgpt.firebaseapp.com",
  projectId: "ainetflixgpt",
  storageBucket: "ainetflixgpt.appspot.com",
  messagingSenderId: "184110087595",
  appId: "1:184110087595:web:a9108e8cbc7626d71ca6ee",
  measurementId: "G-1GKJHT780S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();