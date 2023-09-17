"use client";

import { mapWatering } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { types } from "util";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import  Tilt  from "react-parallax-tilt";

interface Props {
  plantId: number;
  common_name: string;
  watering?: string;
  manualWateringLvl: number;
  pictureLink?: any;
  scienceName?: string;
  naturalWatering: number;
  onDelete: any;
  onWater: any;
}

const PlantCardGarden = ({
  plantId,
  common_name,
  watering,
  manualWateringLvl,
  pictureLink,
  scienceName,
  naturalWatering,
  onDelete,
  onWater,
}: Props) => {
  const baseLvl = naturalWatering + manualWateringLvl;

  const [lvl, setLvl] = useState(baseLvl);

  return (
    <Tilt>
      <motion.div variants = {fadeIn("right", "spring", 0.5, 0.75)}>

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
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">{common_name}</h2>
      </div>
      <p className="flex mt-2 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold text-gray-500 italic">
          {scienceName} ; id {plantId}
        </span>
      </p>
      <p className="flex mt-2 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          Watering: &nbsp;{" "}
        </span>
        <span className="self-end text-[14px] font-semibold text-blue-800">
          {mapWatering(watering || "").text}
        </span>
      </p>
      <div className="w-full flex justify-between items-start gap-2">
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
          <p className="text-sm font-sans">water </p>
        </button>
      </div>
      <div className="flex flex-row justify-center gap-3 relative h-10 w-40 mt-5 mx-auto object-contain">
        <div className="flex relative h-10 w-10 ">
          <Image
            src={lvl > 0 ? `/water.svg` : `/noWater.svg`}
            alt="Drop of Water Picture"
            fill
            sizes="100%"
            priority
            className="object-contain border p-1 rounded-full bg-white"
          />
        </div>
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
        )}
      </div>
    </div>
    </motion.div>
    </Tilt>
  );
};

export default PlantCardGarden;
