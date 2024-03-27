// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "e-court-5d5c0.firebaseapp.com",
  projectId: "e-court-5d5c0",
  storageBucket: "e-court-5d5c0.appspot.com",
  messagingSenderId: "1049727454780",
  appId: "1:1049727454780:web:c2e300a0cfccfafe4d3d39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);