"use client";
import {
  ChevronRight,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import useCartServices from "../utils/store";
import Image from "next/image";

const Nav = () => {
  const { increase, items, totalPrice, decrease, remove } = useCartServices();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
        <Link href="/">
          {" "}
          <h1>Giftwears</h1>{" "}
        </Link>
      </div>
      <ul className="hidden  h-full md:flex items-center justify-between w-[60%]">
        <Link
          className="flex-1 flex justify-center items-center border-r-2 border-light-gray h-full"
          href="/products"
        >
          <li>Shop</li>
        </Link>
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
        <div
          onClick={() => setCartOpen(true)}
          className="flex-1 flex cursor-pointer  justify-center items-center  border-light-gray h-full"
        >
          <ShoppingCart className="cursor-pointer" />
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
      {cartOpen && (
        <div className=" fixed top-0 left-0 z-[500] w-full h-screen  flex justify-end">
          <div
            onClick={() => setCartOpen(false)}
            className=" w-full absolute top-0 left-0 h-full bg-light-gray opacity-50"
          ></div>

          <div className=" w-full md:w-[500px] overscroll-y-scroll px-5 relative  min-h-screen h-fit  bg-light flex flex-col gap-2">
            <div className="flex py-5 justify-between ">
              <p> Cart({items?.length}) </p>{" "}
              <X
                className=" cursor-pointer"
                onClick={() => setCartOpen(false)}
              />
            </div>
            <div className=" flex gap-4 mb-4  flex-col h-[60vh] max-h-fit overflow-y-scroll ">
              {items.length >= 1 ? (
                items.map((item, i) => (
                  <div
                    key={i}
                    className=" shrink-0 flex gap-2 w-full h-[150px]"
                  >
                    <div className=" border border-dark rounded-sm overflow-hidden relative w-1/3 h-full">
                      <Image
                        alt="cartImage"
                        style={{ objectFit: "cover" }}
                        src={item.img}
                        fill
                      />
                    </div>
                    <div className=" flex flex-col">
                      <p className=" capitalize text-[20px] text-wrap">
                        {item.name}
                      </p>
                      <p className=" font-bold"># {item.price}</p>
                      <br />

                      <p className=" tracking-wide text-[18px]">
                        Size:{item.size}
                      </p>
                      <p className=" tracking-wide text-[18px]">
                        Color:{item.color}
                      </p>
                      <p className=" tracking-wide text-[18px]">
                        Quantity:{item.qty}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <h1>Cart empty , lets go shopping</h1>
                </div>
              )}
            </div>
          </div>
          <div className=" bg-white p-5 absolute bottom-0 right-0 w-full md:w-[500px] flex justify-end">
            <div className="flex  flex-col gap-2 w-full  float-right ">
              <div className=" capitalize text-[20px] gap-3 flex flex-col ">
                <div className=" flex justify-between">
                  <span>Subtotal: </span> #{totalPrice}
                </div>
              </div>
              <hr className=" w-full h-[2px] bg-light-gray" />

              <div className="flex gap-5 ">
                <Link
                  onClick={() => setCartOpen(false)}
                  href="/cart"
                  className=" flex justify-center items-center text-[20px] w-full h-[50px] bg-dark rounded text-white"
                >
                  View Cart
                </Link>
                <Link
                  onClick={() => setCartOpen(false)}
                  href="/products"
                  className=" flex justify-center items-center text-[20px] w-full h-[50px] bg-dark rounded text-white"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
