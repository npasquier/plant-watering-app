"use client";

import React, { Fragment } from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-wrap-reverse gap-5 relative max-w-[1440px] h-screen mx-auto bg-nice-plant-color">
      <div className="lg:flex-1 lg:pt-48 pt-24 padding-x relative">
        <h1 className="xl:text-[68px] md:text-[52px] text-[40px] font-extrabold mt-10 font-darkGreen-color gif">
          Water your garden on time!
        </h1>
        <p className="xl:text-[27px] text-[22px] font-light mt-5 font-darkGreen-color gif-delayed">
          Follow your garden watering level given the weekly weather.
        </p>
      </div>

      <div className="xl:flex-[1.5]  xl:w-full xl:h-screen relative">
        <div className="gooey-rec my-auto xl:mr-32">
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
