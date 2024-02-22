import { UserModel } from "@/models/user";
import connectToDB from "@/utils/database";
import { fetchUserWeather } from "@/utils/weather";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();

  const users = await UserModel.find({});

  async function weatherUpdate() {
      return new Promise ((resolve, reject) => {
        users.forEach(async (user) => {
          if (user.city) {
            const weeklyWeather = await fetchUserWeather({
              userId: user._id.toString(),
            });
            user.save();
            resolve(true);
          }
        });
      })
  }

  const isUpdated = await weatherUpdate()

  return NextResponse.json("Weekly weather updated!");
}
