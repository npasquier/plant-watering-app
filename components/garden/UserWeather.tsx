"use client";

import React from "react";
import UserWeatherDayCard from "./UserWeatherDayCard";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export const UserWeather = ({
  city,
  weatherData,
  naturalWateringThreshold,
}: {
  city: string;
  weatherData: any;
  naturalWateringThreshold: number;
}) => {
  const { data: session, status } = useSession();

  //map dailyData with weekDay before parsing the data into the Cards.
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(status)

  if (status == "authenticated") {
    return (
      <>
        <div className="mt-8 w-full items-center flex-wrap gap-5">
          <strong>Current city: </strong> 
          <Link
            href={`/garden/${session?.user?.id}/setCity`}
          >
            <button className=" hover:text-blue-600 text-blue-800 font-bold pb-1 px-1">
              {city === "" ? "Set city" : city}{" "}
            </button>
          </Link>
          {/* <UserCity /> */}
        </div>

        <div className="grid 2xl:grid-cols-7 xl:grid-cols-7 md:grid-cols-5 grid-cols-2 sm:grid-cols-2 w-full gap-2 pt-5">
          {weekDays.map((weekDay, index) => (
            <UserWeatherDayCard
              day={weekDay}
              index={index}
              key={weekDay}
              naturalWateringThreshold={naturalWateringThreshold}
              data={
                weatherData.filter((item: any) => {
                  return item.day == index;
                })[0]
              }
            />
          ))}
        </div>

        
      </>
    );
  } 
  else if (status == "loading") {
    return <h2>Loading....</h2>;

  }
  else {
    signIn()
  }
};
