"use client";

import { useState } from "react";
import AnimationPostPicture from "../lottie/AnimationPostPicture";
import Image from "next/image";
import PostButton from "./PostButton";

const AddCardForm = () => {

  const [formData, setFormData] = useState<any>({
    common_name: "",
    scienceName: "",
    watering: "",
    pictureLink: "/post-plus-picture.jpeg",
    watering_guide: "",
    sunlight_guide: "",
    pruning_guide: "",
  });


  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 w-full gap-8 pt-3">
      <div className=" flex flex-col ">
        <div className="m-8">
          <AnimationPostPicture />
        </div>
        <div className="-mt-6 mx-auto">
          {formData.common_name &&
          formData.scienceName &&
          formData.watering &&
          formData.pictureLink ? (
            <p className=" p-3 rounded-xl text-green-800 ">
              <PostButton
                plantId={Math.floor(Math.random() * 100 + Date.now())}
                common_name={formData.common_name}
                scienceName={formData.scienceName}
                pictureLink={formData.pictureLink}
                watering={formData.watering}
                plantDetails={{
                  watering_guide: formData.watering_guide,
                  sunlight_guide: formData.sunlight_guide,
                  pruning_guide: formData.pruning_guide,
                }}
              />
            </p>
          ) : (
            <p className=" p-3 rounded-xl text-green-800 ">
              Creating new PlantCard...
            </p>
          )}
        </div>
        <div className="mt-2 mx-auto">
          <button className=" p-3 rounded-xl text-gray-800">Cancel</button>
        </div>
      </div>

      <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100  hover:bg-white hover:shadow-md  group rounded-3xl shadow-md ">
        <div className="w-full flex justify-between items-start gap-2">
          <div className="flex w-full">
            <button className="relative w-10 h-10 z-10 text-white rounded-full invisible group-hover:visible">
              <div className="bg-slate-200 rounded-full mx-auto text-gray-800 text-xl ">
                ℹ
              </div>
            </button>
          </div>
        </div>

        <div className="relative place-self-center h-48 w-48 my-1 object-contain ">
          <Image
            src={formData.pictureLink}
            alt="Plant Picture"
            fill
            sizes="100%"
            priority
            className="object-contain border p-1 rounded-full bg-white"
          />
        </div>

        <div className="w-full flex justify-between items-start gap-2 mt-6 ">
          <h2 className="text-[22px] leading-[26px] font-bold capitalize">
            <input
              type="text"
              name="common_name"
              id=""
              placeholder="Common Name"
              onChange={handleInput}
              value={formData.common_name}
              className="border-2 border-gray-100"
            />
          </h2>
        </div>
        <div className="flex mt-2 text-[32px] font-extrabold">
          <div className="self-start text-[14px] font-semibold text-gray-500 italic ">
            <input
              type="text"
              name="scienceName"
              id=""
              onChange={handleInput}
              value={formData.scienceName}
              placeholder="Scientific Name"
              className="border-2 border-gray-100"
            />
          </div>
        </div>
        <div className="flex mt-2 text-[32px] font-extrabold">
          <div className="self-start text-[14px] font-semibold ">
            Watering: &nbsp;{" "}
          </div>
          <div className="self-end text-[14px] font-semibold text-blue-800 ">
            <div className="flex gap-1 pl-2">
              <input
                type="radio"
                id=""
                name="watering"
                value="Average"
                checked={formData.watering === "Average"}
                onChange={handleInput}
              />
              <label>1</label>
              <input
                type="radio"
                id=""
                name="watering"
                value="Frequent"
                checked={formData.watering === "Frequent"}
                onChange={handleInput}
              />
              <label>2</label>
              <p className="pl-2">x/week</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:col-span-2 bg-gray-100 rounded-xl border-2 border-gray-100 shadow-lg p-5">
        <div className="flex lg:flex-row flex-col gap-3 relative">
          <button className="relative w-10 h-10 z-10 text-white rounded-full  visible ">
            <div className="bg-slate-200 opacity-90 rounded-full mx-auto text-gray-800 text-xl ">
              ℹ
            </div>
          </button>
          <p className="my-auto pl-4">
            <strong> Image url: </strong>
          </p>
          <input
            type="url"
            name="pictureLink"
            id="url"
            size={35}
            placeholder="https://example.com"
            // pattern="https://.*"
            onChange={handleInput}
            value={formData.pictureLink}
          />
          
        </div>

        <div className="p-4">
          <p className="py-2">
            <strong> 💧 Watering: </strong>
          </p>
          <input
            type="text"
            name="watering_guide"
            onChange={handleInput}
            value={formData.watering_guide}
            id=""
            placeholder="..."
            className="border-2 border-gray-100 h-14"
          />
          <p className="py-2">
            <strong> ☀️ Sunlight: </strong>
          </p>
          <input
            type="text"
            name="sunlight_guide"
            onChange={handleInput}
            value={formData.sunlight_guide}
            id=""
            placeholder="..."
            className="border-2 border-gray-100 h-14"
          />

          <p className="py-2">
            <strong> 🌾 Pruning: </strong>
          </p>
          <input
            type="text"
            name="pruning_guide"
            onChange={handleInput}
            value={formData.pruning_guide}
            id=""
            placeholder="..."
            className="border-2 border-gray-100 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default AddCardForm;
