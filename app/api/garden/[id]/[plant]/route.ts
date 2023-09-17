import { UserModel } from "@/models/user";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: any) {
  await connectToDB();

  const { id, plant } = params;

  console.log(id, plant)

  const user = await UserModel.findOne({ _id: id });

  user?.garden?.pull({ id: plant });

  user?.save();

  console.log("Plant is deleted");

  return NextResponse.json({ message: "Plant Removed" }, { status: 201 });
}

export async function PATCH(request: NextRequest, { params }: any) {
  await connectToDB();

  console.log("PATCHING DATA...");

  const { id, plant } = params;

  console.log(id, plant)


  const user = await UserModel.findOne({ _id: id });

  const userPlant = user?.garden?.filter((elem) => {
    return elem.id == plant;
  });

  userPlant?.filter((elem) => {
    if (elem && typeof elem.manualWateringLvl == "number" ) {
      elem.manualWateringLvl++;
      return elem.manualWateringLvl;
    }
  });

  user?.save();
  console.log("Plant is updated");

  return NextResponse.json({ message: "Plant Removed" }, { status: 201 });
}