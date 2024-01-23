"use client";
import React, { useEffect, useState } from "react";
import useUserServices from "../utils/userStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useUserServices();
  const handleLoginUser = () => {
    try {
      // loginUser({ email: "kuipid01@gmail.com", password: "12345678" });
    } catch (error) {}
  };
  useEffect(() => {
    handleLoginUser();
  }, []);
  const textAnim = {
    initial: {
      opacity: 0,
      x: -30,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="w-full relative h-[90vh]  bg-lighter-grey flex justify-center items-center">
      <div className="flex blur-md md:blur-sm w-full   h-full absolute left-0 top-0">
        <Image
          alt="svg"
          width={400}
          height={500}
          src="/svglogin1.svg"
          className=" absolute bottom-0 right-[100px]"
        />
        <Image
          alt="svg"
          width={100}
          height={350}
          src="/bgbox.svg"
          className=" absolute bottom-0 left-0"
        />
        <Image
          alt="svg"
          width={100}
          height={350}
          src="/bgbox.svg"
          className=" absolute bottom-0 right-0"
        />
        <Image
          alt="svg"
          width={100}
          height={350}
          src="/box2.svg"
          className=" absolute bottom-0 left-[100px]"
        />

        <Image
          alt="svg"
          width={150}
          height={150}
          src="/tv.svg"
          className=" absolute bottom-[30%] left-[10%]"
        />
        <Image
          alt="svg"
          width={100}
          height={80}
          src="/tv.svg"
          className=" absolute top-[30%] right-[20%]"
        />
        <Image
          alt="svg"
          width={40}
          height={40}
          src="/circle.svg"
          className=" absolute top-[40%] left-[3%]"
        />
        <Image
          alt="svg"
          width={40}
          height={40}
          src="/circle.svg"
          className=" absolute top-[9%] right-[2%]"
        />
        <Image
          alt="svg"
          width={20}
          height={20}
          src="/circle.svg"
          className=" absolute top-[37%] left-[20%]"
        />
        <Image
          alt="svg"
          width={40}
          height={40}
          src="/circle.svg"
          className=" absolute top-[10%] left-[30%]"
        />
        <Image
          alt="svg"
          width={40}
          height={40}
          src="/circle.svg"
          className=" absolute top-[30%] right-[20%]"
        />
      </div>
      <form className=" shadow-lg items-center w-[80%] z-[300] md:max-w-[350px] h-fit  md:min-h-[60vh] py-[25px] px-[30px] flex flex-col rounded-2xl bg-white ">
        <h1 className="font-bold text-xl">User Login</h1>
        <p className="text-center text-[15px]  font-light my-3 ">
          Her Enter your details to get to sign in to your account
        </p>
        <motion.input
          variants={textAnim}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            type: "linear",
          }}
          name="email"
          type="email"
          className="w-full placeholder:text-dark outline-dark px-3 rounded-lg border border-lighter-grey bg-lighter-grey/20 shadow py-2"
          placeholder="Enter Email"
        />
        <div className="relative w-full my-3 outline-dark px-3 rounded-lg border border-lighter-grey bg-lighter-grey/20 shadow py-2">
          <motion.input
            variants={textAnim}
            initial="initial"
            animate="animate"
            transition={{
              duration: 1,
              type: "linear",
            }}
            name="password"
            type={showPassword ? "text" : "password"}
            className="w-full placeholder:text-dark outline-none  "
            placeholder="Enter Password"
          />
          <div
            onClick={handleTogglePasswordVisibility}
            className="absolute  w-fit h-[20px] cursor-pointer top-1/2 -translate-y-1/2  right-2 flex items-center focus:outline-none"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </div>
        </div>

        <button
          type="submit"
          className=" w-full h-[45px] font-medium rounded-lg bg-dark text-white"
        >
          Log In{" "}
        </button>

        <p className=" font-light my-3">
          Don't have an account?{" "}
          <Link className=" text-dark text-[15px] font-medium " href="">
            {" "}
            Sign Up
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
