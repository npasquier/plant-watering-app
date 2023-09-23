import { PlantModel, UserModel } from "@/models/user";
import { getWeekNumber } from "@/utils";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
  await connectToDB();

  const userId = params.id;

  if (userId !== "undefined") {
    const user = await UserModel.findById(userId);

    const userPlants = user?.garden;

    const userCity = user?.city;

    const weekNumber = getWeekNumber(new Date());

    if (user?.weekLog === 0 || (user?.weekLog && weekNumber > user?.weekLog)) {
      user?.garden?.forEach((plant) => {
        plant.manualWateringLvl = 0;
      });

      user.weekLog = weekNumber;

      user?.save;

      console.log("Reset watering levels");
    }

    await user?.save();

    return NextResponse.json({ userPlants, userCity });
  } else {
    return NextResponse.json([""]);
  }
}

export async function POST(request: NextRequest, { params }: any) {
  const data = await request.json();

  await connectToDB();

  console.log(params);

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
      watering: data.watering,
      manualWateringLvl: data.manualWateringLvl,
      scienceName: data.scienceName[0],
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
      watering: data.watering,
      manualWateringLvl: data.manualWateringLvl,
      scienceName: data.scienceName[0],
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