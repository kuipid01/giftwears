// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsAKOUK27Av_d7ZPRN6FKLESPbniKsGm0",
  authDomain: "ecommerce-7307a.firebaseapp.com",
  projectId: "ecommerce-7307a",
  storageBucket: "ecommerce-7307a.appspot.com",
  messagingSenderId: "437782670917",
  appId: "1:437782670917:web:ae6a1abd71a5cc03a4fd2c"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}
export const app
export const db = getFirestore(app);
