import { UserModel } from "@/models/user";
import { mapWatering } from "@/utils";
import connectToDB from "@/utils/database";
import { fetchUserWeather } from "@/utils/weather";

import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  await connectToDB();

  const data = await request.json();

  const userId = data.userId;

  const user = await UserModel.findById(userId);

  if (user && user.garden) {
    //Transfer weekly weather by user

    user.garden.forEach((plant) => {
      for (let i = 0; i < user.weather.length; i++) {
        plant.currentWaterActivity[i].precip = user.weather[i].precip;
      }
    });
    console.log("...changed! ");

    // Update total watering level by user

    user.garden.forEach((plant) => {
      let totalWatering = 0;

      for (let i = 0; i < 7; i++) {
        plant.currentWaterActivity[i].manualWater &&
          (totalWatering = totalWatering + 1);
        plant.currentWaterActivity[i].precip > 25 &&
          (totalWatering = totalWatering + 1);
      }

      const today = new Date();
      // Sunday - Saturday : 0 - 6
      const todayISO = (today.getUTCDay() + 6) % 7;

      // Algo for Water Frequency of 1x/week: update shoudlWater by user
      if (
        totalWatering === 0 &&
        mapWatering(plant.wateringRequested).number === 1
      ) {
        for (let i = 0; i < 7; i++) {
          plant.currentWaterActivity[i].shouldWater = false;
        }

        if (todayISO > 1) {
          plant.currentWaterActivity[todayISO].shouldWater = true;
        } else {
          plant.currentWaterActivity[2].shouldWater = true;
        }
      }

      if (
        totalWatering === 1 &&
        mapWatering(plant.wateringRequested).number === 1
      ) {
        for (let i = 0; i < 7; i++) {
          plant.currentWaterActivity[i].shouldWater = false;
        }
      }

      // Algo for Water Frequency of 2x/week
      if (
        totalWatering === 2 &&
        mapWatering(plant.wateringRequested).number === 2
      ) {
        for (let i = 0; i < 7; i++) {
          plant.currentWaterActivity[i].shouldWater = false;
        }
      }

      if (
        totalWatering === 1 &&
        mapWatering(plant.wateringRequested).number === 2
      ) {
        const lastManualWaterDay = plant.currentWaterActivity.findIndex(
          (day) => day.manualWater === true
        );
        const lastPrecipWaterDay = plant.currentWaterActivity.findIndex(
          (day) => day.precip > 25
        );

        for (let i = 0; i < 7; i++) {
          plant.currentWaterActivity[i].shouldWater = false;
        }

        if (lastManualWaterDay >= 0) {
          const shouldWaterDay = lastManualWaterDay + 3;
          if (shouldWaterDay < 7) {
            plant.currentWaterActivity[shouldWaterDay].shouldWater = true;
          }
        }

        if (lastPrecipWaterDay >= 0) {
          const shouldWaterDay = lastPrecipWaterDay + 3;
          if (shouldWaterDay < 7) {
            plant.currentWaterActivity[shouldWaterDay].shouldWater = true;
          }
        }
      }

      if (
        totalWatering === 0 &&
        mapWatering(plant.wateringRequested).number === 2
      ) {
        for (let i = 0; i < 7; i++) {
          plant.currentWaterActivity[i].shouldWater = false;
        }

        plant.currentWaterActivity[todayISO].shouldWater = true;

        const shouldWaterDay = todayISO + 3;
        if (shouldWaterDay < 7) {
          plant.currentWaterActivity[shouldWaterDay].shouldWater = true;
        }
      }
    });
  }

  user?.save();

  return NextResponse.json("Watering activity updated!");
}
