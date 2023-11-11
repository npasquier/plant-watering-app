"use client";

import Link from "next/link";
import UserWeatherDayCard from "./UserWeatherDayCard";
import { signIn, useSession } from "next-auth/react";

export const UserWeather = ({
  isExample,
  weatherData,
  city,
  naturalWateringThreshold,
}: {
  isExample: boolean;
  weatherData: Object[];
  city: string;
  naturalWateringThreshold: number;
}) => {
  
  const { data: session, status } = useSession();

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (status == "authenticated" || isExample) {
    return (
      <>
        <div className="mt-8 w-full items-center flex-wrap gap-5">
          <strong>Current city: </strong>

          {isExample ? (
            <span className=" hover:text-blue-600 text-blue-800 font-bold pb-1 px-1">
              {city === "" ? "Set city" : city}{" "}
            </span>
          ) : (
            <Link href={`/garden/${session?.user?.id}/setCity`}>
              <button className=" hover:text-blue-600 text-blue-800 font-bold pb-1 px-1">
                {city === "" ? "Set city" : city}{" "}
              </button>
            </Link>
          )}
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
  } else if (status == "loading") {
    return <h2>Loading....</h2>;
  } else {
    signIn();
  }
};
