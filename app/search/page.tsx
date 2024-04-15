"use client";
import { db } from "@/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Product, cardVariant } from "../components/New";
import Image from "next/image";
import Link from "next/link";
import Loadingshimmer from "../components/Loadingshimmer";

const Page = () => {
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [searchWord, setSearchWord] = useState("");

  const [data, setData] = useState<Product[]>([]);
  const fetchPaginatedData = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("timeAdded", "desc"));

      const querySnapshot = await getDocs(q);

      // Extract the data from the documents

      const latestProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      if (!searchWord) {
        setData(latestProducts);
      }
      if (searchWord) {
        const searchedProduct = latestProducts.filter((product) =>
          product.title.includes(searchWord)
        );
        setData(searchedProduct);
        return;
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching paginated data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaginatedData();
    setLoading(true);
    setIsClient(true);
  }, [searchWord]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <>
      <div className="border-b border-light z-[7000] bg-light-gray flex flex-col gap-[30px] py-[50px] px-[10px] min-h-screen">
        <div className="flex border-y-2 gap-[20px] border-dark py-2 overflow-x-hidden">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((word, i) => (
            <h1
              className="-translate-x-[50px] flex uppercase text-[35px] md:text-[50px] font-light tracking-wide"
              key={i}
            >
              SEARCH
            </h1>
          ))}
        </div>

        <div className=" w-full flex h-fit">
          <input
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Enter Search Keyword"
            type="search"
            className=" flex-1 h-[60px]  rounded-[40px] outline-none  placeholder:text-dark placeholder:text-[20px] bg-transparent border-2 border-dark px-4"
          />
        </div>
        <div>
          <div
            ref={containerRef}
            className="w-full flex min-h-screen relative flex-wrap gap-[10px] md:gap-[20px] justify-evenly"
          >
            {loading
              ? [0, 1, 2, 3, 4, 5].map((item, i) => <Loadingshimmer key={i} />)
              : data.slice(0, 50).map((item, i) => (
                  <motion.div
                    variants={cardVariant}
                    initial="initial"
                    animate={isInView ? "animate" : " initial"}
                    transition={{
                      delay: i * 0.25,
                      duration: 0.5,
                    }}
                    key={item.id}
                    className="flex relative border border-light  w-[calc(50%-10px)] md:w-[calc(33.3333%-20px)] flex-col justify-between h-[350px] md:h-[500px]"
                  >
                    <Link
                      className="w-full h-full"
                      href={`/product/${item?.id}`}
                      key={i}
                    >
                      <div className="w-full h-[70%]  relative">
                        <Image
                          src={item?.images[0] ?? "/model.jpg"}
                          alt="Your Image"
                          fill
                          style={{ objectFit: "cover" }}
                          objectPosition="top"
                        />
                      </div>
                      <div className="p-3 flex flex-col justify-between capitalize font-normal text-[18px] md:text-[20px]">
                        <span className="text-base md:text-lg">
                          {item.title.slice(0, 30)}
                        </span>
                        <span className="font-bold">#{item.price}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
