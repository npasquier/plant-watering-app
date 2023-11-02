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
              city: user.city,
              userId: user._id,
            });
            user.save();
            console.log("... should be okay now", user.city, weeklyWeather);
            resolve(true);
          }
        });
      })
  }

  const isUpdated = await weatherUpdate()

  return NextResponse.json("Weekly weather updated!");
}
