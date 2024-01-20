"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "@/firebase";

const Products = () => {
  const [data, setData] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);

  const fetchPaginatedData = async () => {
    try {
      const q = query(
        collection(db, "products"),
        orderBy("timeAdded", "desc"),
        limit(15)
      );

      if (lastVisible) {
        const paginatedQuery = query(
          collection(db, "products"),
          orderBy("timeAdded", "desc"),
          startAfter(lastVisible),
          limit(15)
        );

        const paginatedSnapshot = await getDocs(paginatedQuery);
        const paginatedData = paginatedSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData((prevData) => [...prevData, ...paginatedData]);
        setLastVisible(
          paginatedSnapshot.docs[paginatedSnapshot.docs.length - 1]
        );
      } else {
        const initialSnapshot = await getDocs(q);
        const initialData = initialSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(initialData);
        setLastVisible(initialSnapshot.docs[initialSnapshot.docs.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching paginated data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaginatedData();
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <>
        <div className="border-b border-light z-[7000] bg-light-gray flex flex-col gap-[30px] py-[50px] px-[10%] min-h-screen">
          <div className="flex border-y-2 gap-[20px] border-dark py-2 overflow-x-hidden">
            {[1, 2, 3, 4, 5, 6].map((word, i) => (
              <h1
                className="-translate-x-[50px] uppercase text-[35px] md:text-[50px] font-light tracking-wide"
                key={i}
              >
                Outerwear
              </h1>
            ))}
          </div>

          <div className="flex gap-1 items-center">
            <span className="cursor-pointer">Shop</span>{" "}
            <ChevronRight size={20} color="#eadcdc" />
            <span className="cursor-pointer">Ready to wear</span>{" "}
            <ChevronRight size={20} color="#eadcdc" />
            <span className="cursor-pointer">Outwear</span>
          </div>

          <div>
            <div className="flex mb-3 justify-between tracking-wide uppercase font-bold text-[20px]">
              <h3>Product Views/Models</h3>
              <select className="px-3 outline-none w-fit border-b-2 border-dark">
                <option value="">FILTERS</option>
              </select>
            </div>

            <div className="w-full flex relative flex-wrap gap-[10px] md:gap-[20px] justify-evenly">
              {data.map((item, i) => (
                <Link
                  href={`/product/${item.id}`}
                  key={i}
                  className="flex relative bg-slate-500 w-[calc(50%-10px)] md:w-[calc(33.3333%-20px)] flex-col justify-between h-[500px]"
                >
                  <div className="w-full h-[90%] relative">
                    <Image
                      className="object-cover object-top"
                      src={item.images[0] ?? "/model.jpg"}
                      alt="Your Image"
                      priority
                      sizes="(max-width: 768px) 100vw"
                      fill
                    />
                  </div>
                  <div className="flex justify-center font-black uppercase  md:text-[20px]">
                    <span>{item.title}</span>
                  </div>
                  <div className="flex justify-center uppercase text-[20px]">
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                      className="tracking-widest  font-black "
                    >
                      #{item.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button
            style={{
              marginTop: "3rem",
            }}
            className="py-3 mt-6 mx-auto rounded font-bold uppercase text-center  flex text-dark hover:bg-gray-500 px-4 bg-white"
            onClick={() => fetchPaginatedData()}
          >
            Load More
          </button>
        </div>
      </>
    )
  );
};

export default Products;
