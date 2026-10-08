// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASCmmKVEY3_xWpKNJNSExourrjudBqSo4",
  authDomain: "study-bot-431f9.firebaseapp.com",
  projectId: "study-bot-431f9",
  storageBucket: "study-bot-431f9.firebasestorage.app",
  messagingSenderId: "925115069417",
  appId: "1:925115069417:web:36611edca57538d1ec5178",
  measurementId: "G-W4SHXMQ626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
