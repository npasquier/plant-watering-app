"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [startingJounrey, setStartingJourney] = useState(false);

  return (
    <div className="flex lg:flex-row flex-wrap-reverse max-width h-screen bg-nice-plant-color">
      <div className="lg:flex-1 xl:pt-48 lg:pt-72  xl:px-16 px-8 max-md:text-center">
        <h1 className="xl:text-[68px] md:text-[52px] text-[40px] font-extrabold xl:mt-10 font-darkGreen-color gif">
          Plant care began with raindrops.
        </h1>
        <p className="xl:text-[27px] text-[22px] font-light mt-5 font-darkGreen-color gif-delayed">
          Use the weather to water your plants.
        </p>
        <p className="my-6">
          The{" "}
          <span className="text-green-700 font-semibold">
            Plant Watering App
          </span>{" "}
          enables users to track weather precipitations and watering activities
          to ensure a seamless, efficient and sustainable gardening experience.
          🌱 🌎
        </p>

        <Link href={`/guide?sim=true`} scroll={false}>
          <button
            onClick={() => setStartingJourney(true)}
            className="anim-bg-gradient font-bold py-2 px-4 rounded-full shadow-lg my-4 xl:w-48"
          >
            {!startingJounrey ? (
              "Start your journey"
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                "Loading..."
              </>
            )}
          </button>
        </Link>
        

        <button
          onClick={() => signIn()}
          className="ml-6 inline text-green-500  hover:text-green-600 hover:bg-slate-200 rounded-full bg-slate-100 py-2 px-4 shadow-lg font-bold "
        >
          Sign In{" "}
          {/* <Image
                height={30}
                width={30}
                src="/google.svg"
                alt="google image"
                className="ml-2"
              /> */}
        </button>
      </div>

      <div className="xl:flex-[1.5] flex-[1] z-0">
        <div className="gooey-rec xl:mx-auto xl:mt-48 lg:mt-72 mt-24 mb-0 max-lg:mx-auto">
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
