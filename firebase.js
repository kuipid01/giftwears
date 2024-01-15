// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANHSRQj2vvpdmows1WTfXdj3zbxjHDCto",
  authDomain: "react-netflix-clone-3723e.firebaseapp.com",
  projectId: "react-netflix-clone-3723e",
  storageBucket: "react-netflix-clone-3723e.appspot.com",
  messagingSenderId: "321165397369",
  appId: "1:321165397369:web:417d09a9149119320bb3a8",
  measurementId: "G-BT0GZ50L23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);