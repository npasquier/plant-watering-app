import { UserModel } from "@/models/user";
import connectToDB from "@/utils/database";
import { fetchUserWeather } from "@/utils/weather";
import React from "react";

async function page() {

  connectToDB();

  const user = await UserModel.findById('64fc8eca3bf7c273bf305bf2');

  console.log(user?.city);

  const city = user?.city || "";

  const weatherData = await fetchUserWeather({
    city: city,
    userId: '64fc8eca3bf7c273bf305bf2',
  });
  
  return (
    <main className="overflow-hidden">
      <div className="w-screen mt-48 mb-32 ">
        <h1 className="font-extrabold  text-center text-3xl">Weekly Weather</h1>
        <h3 className="text-center text-xl my-3">User city: {city}</h3>
      </div>
    </main>
  );
};

export default page;
