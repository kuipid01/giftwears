"use client";
import {
  ChevronRight,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navlinks = [
    {
      id: 1,
      name: "Shop",
      hasArrow: true,
    },
    {
      id: 2,
      name: "New In",
      hasArrow: false,
    },
    {
      id: 3,
      name: "In focus",
      hasArrow: false,
    },
    {
      id: 4,
      name: "Sale",
      hasArrow: false,
    },
    {
      id: 5,
      name: "About",
      hasArrow: false,
    },
    {
      id: 6,
      name: "Account",
      hasArrow: true,
    },
  ];
  return (
    <nav className="flex relative bg-light  border-b-2 border-light-gray w-full h-[10vh] justify-between ">
      <div className=" md:hidden flex w-[20%] justify-center items-center ">
        {menuOpen ? (
          <X onClick={() => setMenuOpen(!menuOpen)} />
        ) : (
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>
      <div className=" md:border-r-2  flex-1 border-light-gray flex w-[20%] justify-center items-center">
        <h1>Giftwears</h1>
      </div>
      <ul className="hidden  h-full md:flex items-center justify-between w-[60%]">
        <li className="flex-1 flex justify-center items-center border-r-2 border-light-gray h-full">
          Shop
        </li>
        <li className="flex-1 flex justify-center items-center border-r-2 border-light-gray h-full">
          New In
        </li>
        <li className="flex-1 flex justify-center items-center border-r-2 border-light-gray h-full">
          In Focus
        </li>
        <li className="flex-1 flex justify-center items-center border-r-2 border-light-gray h-full">
          About
        </li>
      </ul>
      <div className="flex w-[20%] justify-between items-center">
        <div className="flex-1 flex justify-center items-center md:border-r-2 border-light-gray h-full">
          <Search />
        </div>
        <div className="hidden flex-1 md:flex justify-center items-center md:border-r-2 border-light-gray h-full">
          <User />
        </div>
        <div className="flex-1 flex justify-center items-center  border-light-gray h-full">
          <ShoppingCart />
        </div>
      </div>
      {menuOpen && (
        <div className=" z-[500] border-b-2  border-dark/20 absolute top-[10vh] left-0 w-full bg-light h-screen">
          <ul className=" flex flex-col gap-2">
            {Navlinks.map((link) => (
              <li
                className={` px-3 py-3 border-b-2 border-b-light-gray ${
                  link.hasArrow ? " flex justify-between items-center" : ""
                }`}
                key={link.id}
              >
                {" "}
                {link.name} {link.hasArrow && <ChevronRight color="#5c5c5c" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
