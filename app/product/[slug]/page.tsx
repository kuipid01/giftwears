"use client";

import useCartServices from "@/app/utils/store";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Product = () => {
  const product = {
    name: "test",
    price: 3000,
    qty: 1,
    id: "testt",
    img: "/model2.jpg",
  };
  type Item = {
    name: string;
    price: number;
    qty: number;
    size?: string;
    color?: string;
    id: string;
    img: string;
  };
  const { increase, items, decrease, remove } = useCartServices();
  const productIsInCart = items?.find((item: Item) => item.price === 3000);

  return (
    <div className=" border-b border-light bg-light-gray flex flex-col gap-[30px]  py-[50px] px-[10%] min-h-screen">
      <div className=" flex gap-1 items-center">
        <span className=" cursor-pointer">Shop</span>{" "}
        <ChevronRight size={20} color="#eadcdc" />
        <span className=" cursor-pointer">Ready to wear</span>{" "}
        <ChevronRight size={20} color="#eadcdc" />
        <span className=" cursor-pointer">Outwear</span>
      </div>
      <div className="md:h-screen h-fit flex md:flex-row flex-col gap-[20px]">
        <div className=" md:hidden">
          <Carousel>
            <CarouselContent>
              {[1, 2, 3].map((item) => (
                <CarouselItem key={item}>
                  {" "}
                  <div className="h-[500px] relative">
                    <Image
                      src="/model.jpg"
                      alt="Your Image"
                      fill
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="hidden md:flex w-full h-[500px]  md:h-full gap-[20px] md:flex-1 flex-shrink-0">
          <div className="hidden md:flex w-[30%]  flex-col gap-[20px]">
            {[1, 2, 3].map((item) => (
              <div className="h-[300px] relative" key={item}>
                <Image
                  src="/model.jpg"
                  alt="Your Image"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
            ))}
          </div>
          <div className=" relative h-full w-full md:flex-1">
            <div className=" w-full h-full">
              <Image
                src="/model2.jpg"
                alt="Your Image"
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
        <div className=" h-full text-[20px] flex flex-col gap-[10px] w-full md:w-[30%]">
          <div className=" flex items-center md:items-start w-full justify-center md:justify-start flex-col ">
            <p>Tea length Shirt</p>
            <p>#4000</p>
          </div>

          <div className=" flex rounded md:border-0 border-dark border-2 md:flex-col gap-[10px]">
            <div className="flex-1 flex items-center md:items-start justify-between px-3 md:flex-col md:px-0 md:flex-auto flex-row-reverse">
              <span>Color:Black</span>
              <div className=" w-5 h-5 rounded-sm  bg-black"></div>
            </div>
            <select
              className=" flex-1 md:flex-auto bg-transparent border-l-2 border-dark md:rounded-sm py-3  md:border-2"
              name=""
              id=""
            >
              <option value="">Select Size</option>
            </select>
          </div>
          {productIsInCart ? (
            <div className="flex items-center text-[20px]  justify-start  flex-1">
              <span className=" mr-3"> Change Quantity</span>
              <button
                onClick={() => decrease(product)}
                className=" h-[40px] border-2 border-dark w-[40px] rounded-sm"
              >
                {" "}
                -{" "}
              </button>
              <p className=" h-[40px] w-[40px] flex justify-center items-center">
                {productIsInCart?.qty}
              </p>
              <button
                onClick={() => increase(product)}
                className=" h-[40px] border-2 border-dark w-[40px] rounded-sm"
              >
                {" "}
                +{" "}
              </button>
            </div>
          ) : (
            <button
              onClick={() => increase(product)}
              className=" bg-dark text-white py-3 rounded-sm"
            >
              Add To Cart
            </button>
          )}

          <p className=" font-light leading-8 text-left text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            quaerat qui fugit perspiciatis nulla suscipit ipsa a mollitia quis
            ad quibusdam minima magni aperiam corporis impedit quam voluptates
            rerum rem.
          </p>
          <div>
            <h1>Important Details</h1>
            <ol className=" list-disc pl-[2rem]">
              <li>test desc1 </li>
              <li>test desc1 </li>
              <li>test desc1 </li>
              <li>test desc1 </li>
            </ol>
          </div>
        </div>
      </div>

      <div className=" mt-[5rem]">
        <h1 className=" text-[25px]">Others:</h1>
        <div className=" justify-between flex gap-[20px] flex-wrap ">
          {[1, 2, 3, 4].map((item, i) => (
            <div
              className="md:w-[calc(25%-20px)] w-[calc(50%-20px)]  text-[20px] h-[250px]"
              key={i}
            >
              <div className=" relative w-full h-[80%] md:h-[90%]">
                <Image
                  src="/model2.jpg"
                  alt="Your Image"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className=" flex md:flex-row flex-col mt-2 justify-between items-center">
                <span> Test T shirt for sale</span>
                <span> #40000</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
