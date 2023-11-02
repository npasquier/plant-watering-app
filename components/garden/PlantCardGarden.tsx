"use client";

import { mapWatering } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { types } from "util";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface DayProps {
  precip: number;
  manualWater: boolean;
  shouldWater: boolean;
}
interface Props {
  plantId: number;
  common_name: string;
  wateringRequested?: string;
  manualWateringLvl: number;
  currentWaterActivity: [DayProps];
  pictureLink?: any;
  scienceName?: string;
  naturalWatering: number;
  onDelete: any;
  onWater: any;
}

const PlantCardGarden = ({
  plantId,
  common_name,
  wateringRequested,
  manualWateringLvl,
  currentWaterActivity,
  pictureLink,
  scienceName,
  naturalWatering,
  onDelete,
  onWater,
}: Props) => {
  const baseLvl = naturalWatering + manualWateringLvl;

  const today = new Date();
  // Sunday - Saturday : 0 - 6
  const todayISO = (today.getUTCDay() + 6) % 7;

  const [lvl, setLvl] = useState(baseLvl);

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Tilt>
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}>
        <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100 hover:bg-white hover:shadow-md  group rounded-3xl shadow-md">
          <div className="w-full flex justify-between items-start gap-2">
            <button
              className="bg-red-700 text-white rounded-full ml-auto h-6 w-6"
              onClick={() => onDelete(plantId, common_name)}
            >
              -
            </button>
          </div>

          <div className="relative place-self-center h-48 w-48 my-1 object-contain">
            <Image
              src={pictureLink}
              alt="Plant Picture"
              fill
              sizes="100%"
              priority
              className="object-contain border p-1 rounded-full bg-white"
            />
          </div>

          <div className="w-full flex justify-between items-start gap-2 mt-6">
            <h2 className="text-[22px] leading-[26px] font-bold capitalize">
              {common_name}
            </h2>
          </div>
          <p className="flex mt-2 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold text-gray-500 italic">
              {scienceName}
            </span>
          </p>
          <p className="flex mt-2 text-[32px] font-extrabold">
            <span className="self-start text-[14px] font-semibold">
              Watering Frequency: &nbsp;{" "}
            </span>
            <span className="self-end text-[14px] font-semibold text-blue-800">
              {mapWatering(wateringRequested || "").text}
            </span>
          </p>
          {/* <div className="w-full flex justify-between items-start gap-2">
        <p className="flex mt-2 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">
            Watering Lvl: &nbsp;{" "}
          </span>
          <span className="self-end text-[14px] font-semibold text-blue-800">
            {lvl <= mapWatering(watering || "").number ? lvl : "Stooop!"}
          </span>
        </p>
        <button
          className="bg-blue-800 text-white rounded-full ml-3 mr-auto h-6 w-20 mt-auto"
          onClick={() => {
            onWater(plantId, common_name);
            setLvl(lvl + 1);
          }}
        >
          <p className="text-sm font-sans text-white">water </p>
        </button>
      </div> */}
          <div className="flex flex-row justify-center gap-1 relative h-8 w-56 mt-5 mx-auto object-contain">
            {/* <p className="-ml-4 my-auto">Week: </p> */}
            {currentWaterActivity.map((day, index) => (
              <button
                key={index}
                className={`flex relative h-10 w-10 cursor-default ${
                  index === todayISO &&
                  "bg-gray-200  rounded-full cursor-pointer"
                } `}
                onClick={() => {
                  index === todayISO && day.precip < 25 && onWater(plantId, common_name, index);
                }}
              >
                {day.precip > 25 || day.shouldWater || day.manualWater ? (
                  <>
                    {day.shouldWater && index == todayISO && day.precip < 25 && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    )}
                    <Image
                      src={day.precip > 25 || day.manualWater ? `/water.svg` : `/noWater.svg`}
                      alt="Drop of Water Picture"
                      fill
                      sizes="100%"
                      className={`object-contain border p-1 rounded-full bg-white 
                 `}
                    />
                  </>
                ) : (
                  <p className={`mx-auto my-auto `}>{weekDays[index][0]}</p>
                )}
              </button>
            ))}

            {/*         
        {mapWatering(watering || "").number > 1 && (
          <div className="flex relative h-10 w-10">
            <Image
              src={lvl > 1 ? `/water.svg` : `/noWater.svg`}
              alt="Drop of Water Picture"
              fill
              sizes="100%"
              priority
              className="object-contain border p-1 rounded-full bg-white"
            />
          </div>
        )} */}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default PlantCardGarden;
