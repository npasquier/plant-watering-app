"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScrollCatalogue = () => {
    window.scrollTo({
      top: document.getElementById("discover")?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  const handleScrollWeather = () => {
    window.scrollTo({
      top: document.getElementById("weather")?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-screen bg-nice-plant-color">
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-48 padding-x ">
        <h1 className="2xl:text-[68px] sm:text-[64px] text-[50px] font-extrabold mt-10">
          Water your plants on time!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Follow your plant watering activity with our plant watering app.
        </p>

        <div className="flex flex-wrap">
          <CustomButton
            title="Explore plants"
            containerStyles="bg-green-700 hover:bg-green-600 text-white rounded-full mt-10 mr-6 shadow-xl"
            handleClick={handleScrollCatalogue}
          />
          <CustomButton
            title="Explore weather"
            containerStyles="bg-blue-700 hover:bg-blue-600 text-white rounded-full mt-10 shadow-xl"
            handleClick={handleScrollWeather}
          />
        </div>
      </div>

      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen relative">
        <div className="relative  w-[90%] xl:h-[50%] h-[0%] z-0 my-auto">
          <Image
            src="/hero.jpeg"
            alt="hero"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto overview-hidden  rounded-full shadow-xl bg-orange-50"
            priority
          />
        </div>
        {/* <div className="absolute h-20 start-0 top-0 mt-[100px] ml-[400px] overflow-hidden ">
          <Image
            src="/drop-water.png"
            alt="drops water"
            width={60}
            height={60}
            className="object-contain"
          />
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Hero;
