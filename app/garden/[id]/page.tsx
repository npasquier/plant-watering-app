import UserGarden from "@/components/garden/UserGarden";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { UserWeather } from "@/components/garden/UserWeather";
import { fetchUserWeather } from "@/utils/weather";
import Chat from "@/components/chat/Chat";
import {
  transferWeatherToUserPlants,
  updateWateringLevels,
} from "@/utils/watering";

 async function getUserData(searchParams: any) {
  const userWeatherAndCityData = await fetchUserWeather({
    userId: searchParams.params.id,
  });

  if (userWeatherAndCityData) {
    const transferResponse = await transferWeatherToUserPlants({
      userId: searchParams.params.id,
      userWeatherData: userWeatherAndCityData,
    });

    const transferDone = await Promise.resolve(transferResponse).then(
      async () => {
        try {
          updateWateringLevels({
            userId: searchParams.params.id,
          });
          return true;
        } catch (err) {
          console.log(err);
        }
      }
    );

    return Promise.resolve(transferDone).then((transferDone) => {
      console.log(
        "Update and transfer done before giving data: ",
        transferDone
      );
      return userWeatherAndCityData;
    });
  } else {
    console.log("Error in getting user data...");
  }
}

export default async function page(searchParams: any) {
  const userData = await getUserData(searchParams);

  const naturalWateringThreshold = 25;

  const city = userData?.city || "";

  const weatherData = userData?.weather;

  return (
    <main className="overflow-hidden">
      <Chat />
      <section className="my-20">
        <div className="flex flex-row gap-2 mt-32  padding-x padding-y max-width ">
          <Image
            src="/gardener.svg"
            width={80}
            height={80}
            priority
            alt="Picture of gardener AI"
          />
          <div className="bubble-wide mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-3xl shadow-xl  bubble-bottom-left">
            <p className="font-semibold">
              Hi {userData?.name}! I'm Lily -- your AI gardener support for this web
              application.
            </p>

            <p className="my-1">
              I will remind you every day which plant to water.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row mt-0 padding-x padding-y max-width"
          id="myGarden"
        >
          <div className="flex flex-col flex-wrap items-start justify-start gap-y-2.5 text-black-100 my-auto">
            <h1 className="flex flex-item text-4xl font-extrabold">
              My Garden
            </h1>
            <p className="my-2">
              You need to give your lawn a good soak -- 1-inch of water -- once
              or twice a week.
            </p>
            <ul className="list-disc ml-20 mt-3">
              <li>Span the plants you own</li>
              <li>Check their watering requirement and levels</li>
              <li>Water them if necessary</li>
            </ul>
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

          <UserGarden isExample={false} />
        </div>

        <div className="mt-32 padding-x padding-y max-width" id="weather">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
            <h1 className="text-4xl font-extrabold">Weather of the week</h1>
            <p>Get to know the weather in your city this week </p>
          </div>
          <UserWeather
            isExample={false}
            weatherData={weatherData}
            city={city}
            naturalWateringThreshold={naturalWateringThreshold}
          />
        </div>
      </section>
    </main>
  );
}
