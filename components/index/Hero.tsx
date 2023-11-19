"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-wrap-reverse h-screen bg-nice-plant-color">
      <div className="lg:flex-1 xl:pt-48 lg:pt-72  xl:px-16 px-8 max-md:text-center">
        <h1 className="xl:text-[68px] md:text-[52px] text-[40px] font-extrabold xl:mt-10 font-darkGreen-color gif">
          Plant care begins with raindrops
        </h1>
        <p className="xl:text-[27px] text-[22px] font-light mt-5 font-darkGreen-color gif-delayed">
          Build on weather precipitations to water your plants.
        </p>
      </div>

      <div className="xl:flex-[1.5] flex  z-0">
        <div className="gooey-rec xl:mx-auto xl:mt-48 lg:mt-72 mt-32 mb-0 max-md:ml-8 max-lg:mx-auto">
          <Image
            src="/hero.jpeg"
            alt="hero"
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
