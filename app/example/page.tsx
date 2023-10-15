import UserGarden from "@/components/garden/UserGarden";
import { UserWeather } from "@/components/garden/UserWeather";
import { UserModel } from "@/models/user";
import connectToDB from "@/utils/database";
import { fetchUserWeather } from "@/utils/weather";
import React from "react";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

async function page() {

  connectToDB();

  const user = await UserModel.findById('64fc8eca3bf7c273bf305bf2');

  const naturalWateringThreshold = 25;

  let naturalWatering = 0;

  const city = user?.city || "";

  const weatherData = await fetchUserWeather({
    city: city,
    userId: '64fc8eca3bf7c273bf305bf2',
  });

  weatherData.forEach(
    (elem: {
      day: number;
      desc: string;
      precip: number;
      temp: number;
      icon: string;
    }) => {
      elem.precip > naturalWateringThreshold && naturalWatering++;
    }
  );
  
  return (
    <main className="overflow-hidden">
      <div className="w-screen mt-48  ">
        <h1 className="font-extrabold  text-center text-3xl">Simulated Garden</h1>
      

      <div className="mt-32  padding-x padding-y max-width ">
        <div className=" mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-md shadow-xl ">
          <p className="font-semibold">
            You need to give your lawn a good soak -- 1-inch of water -- once
            or twice a week.
          </p>

          <p className="my-3">
            💧 One inch of water means approximatelively 25 mm of
            precipitations. The{" "}
            <img
              src="/noWater.svg"
              alt="Drop of Water Picture"
              height={30}
              width={30}
              className="inline object-contain border p-1 rounded-full bg-white"
            />{" "}
            picture turns blue whenever daily precipitations reach this level.
          </p>
          <p>
            Set the city where your plants are situated and start the weekly management of their watering levels. Click on 
            <button
              className="bg-blue-800 text-white rounded-full mx-2 h-6 w-20 mt-auto"
            >
              <p className="text-sm font-sans text-white">water </p>
            </button>
            button to record a watering activity.
          </p>
        </div>
      </div>

      <div className="mt-12 padding-x padding-y max-width" id="weather">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Weather of the week</h1>
          <p>Get to know the weather in your city this week </p>
        </div>
        <UserWeather
          isExample={true}
          city={city}
          weatherData={weatherData}
          naturalWateringThreshold={naturalWateringThreshold}
        />
      </div>

      <div
        className="flex flex-row mt-10 padding-x padding-y max-width"
        id="myGarden"
      >
        <div className="flex flex-col flex-wrap items-start justify-start gap-y-2.5 text-black-100 my-auto">
          <h1 className="flex flex-item text-4xl font-extrabold">
            My Garden
          </h1>
          <p>Explore the plants in your garden and water them</p>
        </div>
        <div className="flex flex-item ml-auto xl:mr-20 md:mr-20">
          <Image
            src="/humaaans.png"
            alt="hero"
            height={500}
            width={500}
            className="object-contain relative -z-10 "
            priority
          />
        </div>
      </div>

      <div className="padding-x padding-y max-width">
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <UserGarden isExample={true} naturalWatering={naturalWatering}/>
      </div>
      </div>
    </main>
  );
};

export default page;
