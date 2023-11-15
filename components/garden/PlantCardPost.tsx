"use client";

import Image from "next/image";
import Link from "next/link";

const PlantCardPost = () => {
  
  return (
    <Link href={"/garden/6541480c6632d9ff072c5327/createCard/"}>
      <div
        className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100 opacity-20 hover:opacity-40 hover:bg-gray-300 hover:shadow-md  group rounded-3xl shadow-md border-2 border-gray-300"
        onClick={() => {
          console.log("Creating new Plant Card!");
        }}
      >
        <div className="w-full flex justify-between items-start gap-2">
          <div className="flex w-full">
            <button className="relative w-10 h-10 z-10 text-white rounded-full  invisible group-hover:visible">
              <div className="bg-slate-200 opacity-90 rounded-full mx-auto text-gray-800 text-xl ">
                ℹ
              </div>
            </button>
          </div>
        </div>

        <div className="relative place-self-center h-48 w-48 my-1 object-contain ">
          <Image
            src="/post-plus-picture.jpeg"
            alt="Plant Picture"
            fill
            sizes="100%"
            priority
            className="object-contain border p-1 rounded-full bg-white opacity-20 group-hover:opacity-30"
          />
        </div>

        <div className="opacity-20 group-hover:opacity-40 w-full">
          <div className="w-full flex justify-between items-start gap-2 mt-6 ">
            <h2 className="text-[22px] leading-[26px] font-bold capitalize mx-auto">
              Create Plant
            </h2>
          </div>
          <p className="flex mt-2 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold text-gray-500 italic invisible">
              Scientific name
            </span>
          </p>
          <p className="flex mt-2 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold invisible">
              Watering Frequency: &nbsp;{" "}
            </span>
            <span className="self-end text-[14px] font-semibold text-blue-800 invisible">
              Level
            </span>
          </p>
        </div>

        <div className="flex flex-row justify-center gap-1 relative h-8 w-56 mt-5 mx-auto object-contain"></div>
      </div>
    </Link>
  );
};

export default PlantCardPost;
