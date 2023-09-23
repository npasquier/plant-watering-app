"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import AddButton from "./AddButton";
import { mapWatering } from "@/utils";
import  Tilt  from 'react-parallax-tilt';
import {motion} from 'framer-motion';
import { fadeIn } from "@/utils/motion";



interface Props {
  isExample: boolean
  plantId: number,
  common_name: string;
  watering?: string;
  pictureLink?: any;
  scienceName?: string;
}

const PlantCard = ({
  isExample,
  plantId,
  common_name,
  watering,
  pictureLink,
  scienceName,
}: Props) => {
  const { data: session } = useSession();


  return (
    <Tilt>
      <motion.div variants = {fadeIn("right", "spring", 0.5, 0.75)}>
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100 hover:bg-white hover:shadow-md  group rounded-3xl shadow-md">
      {session?.user || isExample ? (
      <AddButton plantId= {plantId}  common_name = {common_name}  watering={watering} scienceName={scienceName} pictureLink={pictureLink} />
      ) : ""}

      <div className="relative place-self-center h-48 w-48 my-1 object-contain">
        <Image
          src={pictureLink}
          alt="Plant Picture"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="w-full h-auto object-contain border p-1 rounded-full bg-white"
        />
      </div>

      <div className="w-full flex justify-between items-start gap-2 mt-6">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">{common_name}</h2>
      </div>
      <p className="flex mt-2 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold text-gray-500 italic">
          {scienceName}
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
      </div>
      </motion.div>
    </Tilt>
  );
};

export default PlantCard;
