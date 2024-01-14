import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Products = () => {
  return (
    <div className=" border-b border-light bg-light-gray flex flex-col gap-[30px]  py-[50px] px-[10%] min-h-screen">
      <div className="  flex border-y-2  gap-[20px] border-dark py-2 overflow-x-hidden">
        {[1, 2, 3, 4, 5, 6].map((word, i) => (
          <h1
            className=" -translate-x-[50px] uppercase text-[35px] md:text-[50px] font-light tracking-wide"
            key={i}
          >
            Outerwear
          </h1>
        ))}
      </div>
      <div className=" flex gap-1 items-center">
        <span className=" cursor-pointer">Shop</span>{" "}
        <ChevronRight size={20} color="#eadcdc" />
        <span className=" cursor-pointer">Ready to wear</span>{" "}
        <ChevronRight size={20} color="#eadcdc" />
        <span className=" cursor-pointer">Outwear</span>
      </div>
      <div>
        <div className="flex mb-3 justify-between tracking-wide uppercase font-bold text-[20px]">
          <h3>Product Views/Models</h3>
          <select className=" px-3 outline-none w-fit border-b-2 border-dark">
            {" "}
            <option value="">FILTERS</option>{" "}
          </select>
        </div>
        <div className="w-full flex flex-wrap gap-[10px] md:gap-[20px] justify-between ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <Link
              href={`/product/${item}`}
              key={i}
              className="flex relative w-[calc(50%-10px)] md:w-[calc(33.3333%-20px)] flex-col justify-between h-[500px]"
            >
              <div className="w-full h-[90%] relative">
                <Image
                  src="/model.jpg"
                  alt="Your Image"
                  fill
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="flex  justify-center font-black uppercase  text-[20px]">
                <span>Test Shoes</span>
              </div>{" "}
              <div className="flex  justify-center uppercase font-normal text-[20px]">
                <span className="tracking-widest">#4000</span>
              </div>
            </Link>
          ))}
        </div>
        <div className=" w-fit items-center mx-auto flex flex-col justify-center mt-[30px] text-[25px]">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <Link className=" w-fit text-[15px] border-b-2 border-dark" href="/">
            SEE ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
