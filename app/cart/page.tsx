"use client";
import { useEffect, useState } from "react";
import useCartServices from "../utils/store";
import Image from "next/image";
import { X } from "lucide-react";
import { addToCart, removeFromCart } from "../hooks/addToCart";
import Link from "next/link";

const Cartpage = () => {
  const [mounted, setMounted] = useState(false);

  const [stagesOfPayment, setStagesOfPayment] = useState([
    { id: 1, desc: "Orders", stillOnTab: true },
    { id: 2, desc: "Payment", stillOnTab: false },
    { id: 3, desc: "Confirmation", stillOnTab: false },
  ]);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { increase, items, totalPrice, decrease, remove } = useCartServices();

  console.log(items);
  if (!mounted) return;
  return (
    <div className="border-b overflow-hidden bg-lighter-grey border-light flex flex-col gap-[30px]  py-[50px] px-[10%] min-h-screen">
      <div className=" hidden w-full py-4 md:flex justify-between">
        {stagesOfPayment.map(({ id, desc, stillOnTab }) => (
          <div className=" flex flex-1 flex-col items-start" key={id}>
            <p>{id}</p>
            <p>{desc}</p>
            <div
              className={`mt-5 relative bg-dark/10 
               w-full`}
            >
              {" "}
              <span
                className={`w-4 absolute -left-1 top-1/2 -translate-y-1/2 h-4 rounded-full ${
                  stillOnTab ? "bg-dark" : "bg-dark/50"
                }`}
              ></span>{" "}
              <div
                className={` rounded-full  w-[calc(100%-4px)]  h-2 ${
                  stillOnTab ? "bg-dark" : "bg-transparent"
                }  `}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden w-screen -translate-x-1/2 left-1/2 relative py-3 md:flex items-center justify-center overflow-hidden text-[20px] bg-light-gray  gap-5">
        {[1, 2, 3, 4].map((text) => (
          <p key={text}>Free delivery at Lagos and Abuja </p>
        ))}
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" hidden md:flex justify-between items-center py-3 border-b border-dark ">
          <div className=" w-1/2 ">Product</div>
          <div className=" flex-1 "> Quantity</div>
          <div className=" flex-1 "> Price</div>
        </div>
        <div className=" flex md:hidden w-full  py-3 border-b border-dark "></div>
        <div className=" w-full flex flex-col gap-2">
          {items.length >= 1 ? (
            items.map((item, i) => (
              <div
                key={i}
                className=" w-full   flex justify-between h-[250px] md:h-[200px] items-start py-3 border-b border-dark "
              >
                <div className="flex gap-2 w-[80%] md:w-1/2 h-full ">
                  <div className=" bg-light-gray relative w-1/2 md:w-1/3 min-h-full">
                    <Image
                      alt="cartImage"
                      objectFit="contain"
                      src={item.img}
                      fill
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className=" capitalize">{item.name}</p>
                    <p>Color:{item.color || "Not Specified"}</p>
                    <p>Size:{item.size || "Not Specified"}</p>
                    <p>Qty:{item.qty || "1"}</p>
                    <span className=" text-[20px] font-bold">
                      {" "}
                      #{item.price}
                    </span>{" "}
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-start  flex-1">
                  <button
                    onClick={() => decrease(item)}
                    className=" h-[40px] border-2 border-dark w-[40px] rounded-sm"
                  >
                    {" "}
                    -{" "}
                  </button>
                  <p className=" h-[40px] w-[40px] flex justify-center items-center">
                    {item.qty}
                  </p>
                  <button
                    onClick={() => increase(item)}
                    className=" h-[40px] border-2 border-dark w-[40px] rounded-sm"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <div className="  flex-1 flex justify-between itc">
                  <span className=" md:flex hidden text-[20px] font-bold">
                    {" "}
                    #{item.price}
                  </span>{" "}
                  <X
                    className="  cursor-pointer"
                    onClick={() => remove(item)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>Cart empty , lets go shopping</h1>
            </div>
          )}
          <div className=" flex justify-end">
            <div className="flex  flex-col gap-2 w-full md:w-1/2 float-right ">
              <div className=" capitalize text-[20px] gap-3 flex flex-col ">
                <div className=" flex justify-between">
                  <span>Subtotal: </span> #{totalPrice}
                </div>
                <div className=" flex justify-between">
                  <span>Shipping: </span> #4000
                </div>
              </div>
              <hr className=" w-full h-[2px] bg-light-gray" />
              <button className=" text-[20px] wfull h-[50px] bg-dark rounded text-white">
                Checkout
              </button>
              <Link
                href="/products"
                className=" flex justify-center items-center text-[20px] wfull h-[50px] bg-transparent border-2  border-dark rounded text-dark"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
