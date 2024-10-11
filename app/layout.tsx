import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { getApp, initializeApp } from "firebase/app";
const instru = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Gift Wears",
  description: "Gift wears",
};
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instru.className}>
        <Nav />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
