import Image from "next/image";
import Link from "next/link";

const New = () => {
  return (
    <>
      <section className="min-h-screen py-7 md:py-0 h-fit bg-light-gray flex justify-center items-center">
        <div className="w-[90%] mx-auto">
          <div className="flex mb-3 justify-between uppercase font-bold text-[20px]">
            <h3>NEW IN</h3>
            <Link className=" w-fit border-b-2 border-dark" href="/">
              SEE ALL
            </Link>
          </div>
          <div className="w-full flex flex-wrap gap-[10px] md:gap-[20px] justify-between ">
            {[1, 2, 3].map((item, i) => (
              <div
                key={i}
                className="flex relative w-[calc(50%-10px)] md:w-[calc-(33.3333% - 20px)] flex-col justify-between h-[500px]"
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
                <div className="flex justify-between uppercase font-normal text-[20px]">
                  <span>Test Shoes</span>
                  <span>#4000</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className=" w-full relative h-[40vh] md:h-[60vh] flex justify-center items-center ">
        <div className="w-full  h-full absolute top-0 left-0">
          <Image
            src="/bgFooter.jpg"
            alt="Your Image"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div
          className=" w-full  h-full absolute top-0 left-0 bg-dark opacity-50
           "
        ></div>
        <h1 className=" text-[35px] md:text-[50px] relative  font-bold text-light">
          Harmattan Collection 2024
        </h1>
      </div>
    </>
  );
};

export default New;
