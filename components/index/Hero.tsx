"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
      <div className="flex xl:flex-row flex-col gap-5 relative max-w-[1440px] mx-auto bg-nice-plant-color">
        <div className="xl:flex-1 xl:pt-48 pt-24 padding-x relative">
          <h1 className="2xl:text-[68px] sm:text-[64px] text-[50px] font-extrabold mt-10 font-darkGreen-color gif">
            Water your garden on time!
          </h1>
          <p className="text-[27px] font-light mt-5 font-darkGreen-color gif-delayed">
            Follow your garden watering level given the weekly weather.
          </p>

        </div>

        <div className="xl:flex-[1.5] flex xl:w-full xl:h-screen relative">
          <div className="gooey-rec my-auto mr-32">
            <Image
              src="/hero.jpeg"
              alt="hero"
              width="0"
              height="0"
              sizes="100vw"
              className="h-full w-auto overflow-hidden"
              priority
            />
          </div>
        </div>
      </div>
  );
};

export default Hero;
