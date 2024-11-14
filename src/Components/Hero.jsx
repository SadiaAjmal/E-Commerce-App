import React from "react";
import hand from "../../src/assets/hand_icon.png";
import hero_icon from "../../src/assets/hero_image.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="bg-custom-gradient mt-20 md:h-screen md:flex items-center justify-evenly font">
      <div className=" space-y-3 m-5 py-10 px-3 flex flex-col items-center">
        <div className="items-start">
          <p className=" font-semibold">NEW ARRIVALS ONLY</p>
          <div className=" flex gap-5 items-center">
            <p className=" text-3xl md:text-5xl font-semibold">new</p>
            <img src={hand} alt="" className=" w-12" />
          </div>
          <div>
            <p className=" text-3xl md:text-5xl font-semibold">collections</p>
          </div>
          <div>
            <p className=" text-3xl md:text-5xl font-semibold">for everyone</p>
          </div>
        </div>{" "}
        <div className="">
          <button className=" flex items-center justify-center gap-3 bg-red-500 text-white md:px-10 px-3 py-3 rounded-full mt-5 hover:bg-red-600 font-semibold text-xl border-none">
            Latest Collection
            <FaArrowRightLong className=" text-2xl" />
          </button>
        </div>
      </div>

      <div className=" flex  justify-center items-center">
        <img src={hero_icon} alt="" className=" w-96" />
      </div>
    </div>
  );
}

export default Hero;
