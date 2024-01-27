'use client'
// Filename: ./app/index.tsx
// Filename: ./app/index.tsx
import Image from "next/image";
import Landingpage from "./components/Landingpage";
import New from "./components/New";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
 

  return (
    <main  className=" relative">
      <Landingpage />
      <New />
    </main>
  );
};

export default Home;
