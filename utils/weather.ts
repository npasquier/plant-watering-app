// Yesterday Weather Data

import { UserModel } from "@/models/user";
import connectToDB from "./database";

export async function fetchUserWeather({
  city,
  userId,
}: {
  city: string;
  userId: any;
}) {
  const today = new Date();
  const todayDay = (today.getDay() + 6) % 7;

  const days = <any[]>[];

  for (let i = 1; i <= todayDay; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateISO = date.toISOString().split("T")[0];
    const dateDay = (date.getDay() + 6) % 7;
    days.push({ number: dateDay, ISO: dateISO });
  }

  await connectToDB();

  const user = await UserModel.findById(userId);

  const userWeather = user?.weather;

  const APIkeyWeather = process.env.API_KEY_WEATHERAPI;

  var setUp = 0;

  if (todayDay === 0 && setUp === 0) {
    for (let i = 1; i < 7; i++) {
      user?.weather.pop();
      setUp++;
    }
  }

  days.forEach((day) => {
    if (
      userWeather.filter((item: any) => {
        return item.day == day.number;
      }).length === 0
    ) {
      console.log("Query history...");

      fetch(
        `http://api.weatherapi.com/v1/history.json?key=${APIkeyWeather}&q=${city}&dt=${day.ISO}`,
        { cache: "no-cache" }
      )
        .then((res) => res.json())
        .then((result) => {
          const dailyData = {
            day: day.number,
            desc: result.forecast.forecastday[0].day.condition.text,
            precip: result.forecast.forecastday[0].day.totalprecip_mm,
            temp: result.forecast.forecastday[0].day.avgtemp_c,
            icon: result.forecast.forecastday[0].day.condition.icon,
          };

          userWeather.push(dailyData);
        })
        .catch((error) => console.log("error", error));
    }
  });

  const futureDAys = Math.min(7 - todayDay, 3);

  await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${APIkeyWeather}&q=${city}&days=${futureDAys}`,
    { cache: "no-cache" }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Query future");
      data.forecast.forecastday.forEach((futureDay: any) => {
        const date = new Date(futureDay.date);

        const indexToRemove = user?.weather.findIndex(function (item: any) {
          return item.day === (date.getDay() + 6) % 7;
        });

        indexToRemove > -1 && user?.weather.splice(indexToRemove, 1);

        const dailyData = {
          day: (date.getDay() + 6) % 7,
          desc: futureDay.day.condition.text,
          precip: futureDay.day.totalprecip_mm,
          temp: futureDay.day.avgtemp_c,
          icon: futureDay.day.condition.icon,
        };

        user?.weather.push(dailyData);
      });
    })
    .catch((error) => console.log("error", error));

  await user?.save();

  return userWeather;
}
