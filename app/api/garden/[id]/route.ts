import { PlantModel, UserModel } from "@/models/user";
import { getWeekNumber } from "@/utils";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

/*
// GET 
*/

export async function GET(request: NextRequest, { params }: any) {
  await connectToDB();
  const userId = params.id;

  if (userId !== "undefined") {
    const user = await UserModel.findById(userId);

    if (!user) {
      return NextResponse.json(["User not found"]);
    }

    const userPlants = user?.garden;

    const userCity = user?.city;

    // Reset watering levels upon fecthing on a new week
    const currentDate = new Date();
    const currentWeekNumberSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60 * 60 * 24 * 7));

    const shouldReset = user.weekLog === undefined || currentWeekNumberSinceEpoch > user.weekLog

    if (shouldReset) {
      user?.garden?.forEach((plant) => {
        plant.totalWateringLvl = 0;
        plant.currentWaterActivity.forEach((day) => (day.shouldWater = false));
        plant.currentWaterActivity.forEach((day) => (day.manualWater = false));
        plant.currentWaterActivity.forEach((day) => (day.precip = -1));
      });

      user.weekLog = currentWeekNumberSinceEpoch;

      await user.save();

      console.log("Reset watering levels");
    } else {
      user?.save();
    }

    return NextResponse.json({ userPlants, userCity });
  } else {
    return NextResponse.json([""]);
  }
}

/*
// POST 
*/

export async function POST(request: NextRequest, { params }: any) {
  const data = await request.json();

  await connectToDB();

  const id = params.id;

  const plantExist = await PlantModel.findOne({ id: data.plantId });

  const user = await UserModel.findOne({ _id: id });

  if (
    user?.garden?.filter((plant) => plant.id === data.plantId).length === 0 &&
    plantExist === null
  ) {
    user?.garden?.push({
      id: data.plantId,
      common_name: data.common_name,
      pictureLink: data.pictureLink,
      currentWaterActivity: [
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
      ],
      wateringRequested: data.wateringRequested,
      totalWateringLvl: data.totalWateringLvl,
      scienceName: data.scienceName,
      plantDetails: data.plantDetails,
    });

    user?.save();

    console.log("Plant Added to user and plant collection");

    return NextResponse.json(
      { message: "Plant Added to user and plant collection" },
      { status: 201 }
    );
  }
  if (
    user?.garden?.filter((plant) => plant.id === data.plantId).length === 0 &&
    plantExist?.id > 0
  ) {
    user?.garden?.push({
      id: data.plantId,
      common_name: data.common_name,
      pictureLink: data.pictureLink,
      currentWaterActivity: [
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
        { precip: -1, manualWater: false, shouldWater: false },
      ],
      wateringRequested: data.wateringRequested,
      totalWateringLvl: data.totalWateringLvl,
      scienceName: data.scienceName,
      plantDetails: data.plantDetails,
    });
    user?.save();

    await PlantModel.findOneAndDelete({ id: data.plantId }).exec();

    console.log("Plant Added to user but not to the collection");

    return NextResponse.json(
      { message: "Plant Added to user but not to the collection" },
      { status: 201 }
    );
  } else {
    await PlantModel.findOneAndDelete({ id: data.plantId }).exec();

    return NextResponse.json(
      { message: "Plant already exists and already in user garden" },
      { status: 208 }
    );
  }
}
