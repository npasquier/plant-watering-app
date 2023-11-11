import { UserModel } from "@/models/user";
import { getWeekNumber } from "@/utils";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest, { params }: any) {

    await connectToDB();
    const userId = params.id;
  
    if (userId !== "undefined") {
      const user = await UserModel.findById(userId);
  
      const userWeather = user?.weather;
  
      const userCity = user?.city;
  
  
      // Reset watering levels upon fecthing on a new week
      const weekNumber = getWeekNumber(new Date());
  
      if (user?.weekLog === 0 || (user?.weekLog && weekNumber > user?.weekLog)) {
  
        user?.weather?.forEach((day : any) => {
          day.precip = -1;
          day.temp = -1;
          day.desc = "Wait for It"
        });
  
        user.weekLog = weekNumber;
  
        user.save();
  
        console.log("Reset watering levels");
  
      } else {
        user?.save();
      }
  
      return NextResponse.json({ userWeather, userCity });
    } else {
      return NextResponse.json([""]);
    }
  }