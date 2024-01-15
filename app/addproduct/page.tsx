"use client";
import { useState } from "react";

const page = () => {
  type Stagearray = {
    id: number;
    stage: boolean;
  };
  const [indexTobePassed, setIndexTobePassed] = useState(1);
  const [stage, setStage] = useState([
    {
      id: 1,
      stage: true,
    },
    {
      id: 2,
      stage: false,
    },
    {
      id: 3,

      stage: false,
    },
    {
      id: 4,

      stage: false,
    },
    {
      id: 5,
      stage: false,
    },
  ]);
  const handleStageForward = (index: number) => {
    if (indexTobePassed >= stage.length) return;
    console.log(index);
    setStage((prev) =>
      prev.map((item) =>
        item.id - 1 === index ? { ...item, stage: true } : { ...item }
      )
    );
    setIndexTobePassed((prev) => prev + 1);
  };

  return (
    <section className="min-h-screen text-[20px] flex flex-col bg-light justify-center items-center">
      <div className=" py-5 w-[80%] md:w-1/3 px-3 rounded gap-3  bg-light-gray  ">
        <div className=" flex flex-col gap-3 ">
          <label htmlFor="title">Enter Product Title</label>
          <input
            className=" focus:outline-dark outline-none py-2 px-3  rounded"
            type="text"
            placeholder="Red Shirt"
          />
        </div>
        <div className=" flex flex-col gap-3 ">
          <label htmlFor="price">Enter Product Price</label>
          <input
            className=" outline-none focus:outline-dark py-2 px-3  rounded"
            type="number"
            placeholder="4000"
          />
        </div>
      </div>
      <button
        onClick={() => handleStageForward(indexTobePassed)}
        className=" bg-dark w-[200px] mt-4 py-3 rounded text-white "
      >
        Next
      </button>
      <div className=" w-[80%] md:w-1/3 gap-[20px] mt-5 h-3 bg-dark/30  rounded-md flex justify-between items-center">
        {stage.map((item, i) => (
          <div
            className={` flex-1 h-full rounded-md ${
              item.stage ? "bg-green-500" : " bg-dark/50"
            }  `}
            key={i}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default page;
