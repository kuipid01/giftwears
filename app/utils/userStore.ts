import { create } from "zustand";
import { useToast } from "@/components/ui/use-toast";
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { persist } from "zustand/middleware";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
const firebaseConfig = {
  apiKey: "AIzaSyANHSRQj2vvpdmows1WTfXdj3zbxjHDCto",
  authDomain: "react-netflix-clone-3723e.firebaseapp.com",
  projectId: "react-netflix-clone-3723e",
  storageBucket: "react-netflix-clone-3723e.appspot.com",
  messagingSenderId: "321165397369",
  appId: "1:321165397369:web:417d09a9149119320bb3a8",
  measurementId: "G-BT0GZ50L23",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export type UserInfo = {
  email: string | null;
  password: string;
  displayName: string | null;
  id?: string;
}; // Added optional properties for displayName and id

const initialState: UserInfo = {
  email: "",
  password: "",
  displayName: "", // Added initial value for displayName
  id: "", // Added initial value for id
};

export const userStore = create<UserInfo>()(
  persist(() => initialState, {
    name: "user",
  })
);

export default function useUserServices() {
  const { toast } = useToast();
  const auth = getAuth();
  return {
    registerUser: async (userInfo: { email: string; password: string }) => {
      try {
        const { email, password } = userInfo;
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await addDoc(collection(db, "users"), {
          email,
          userId: user.uid,
        });
        const { email: emailIn, displayName, uid } = user; // Corrected destructuring
        userStore.setState({ email: emailIn, displayName, id: uid });
        console.log(user);
      } catch (error) {
        console.log(error); // Added error handling
      }
    },
    loginUser: async (userInfo: { email: string; password: string }) => {
      try {
        const { email, password } = userInfo;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const { email: emailIn, displayName, uid } = user; // Corrected destructuring
        userStore.setState({ email: emailIn, displayName, id: uid });
        console.log(user);
      } catch (error) {
        console.log(error); // Added error handling
      }
    },
    logoutUser: async () => {
      await signOut(auth);

      userStore.setState({ email: "", displayName: "", id: "" });
      console.log("success");
    },
    init: () => userStore.setState(initialState),
  };
}
