// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

export const db = getFirestore(app);
