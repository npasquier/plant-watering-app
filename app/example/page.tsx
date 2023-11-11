import UserGarden from "@/components/garden/UserGarden";
import { UserWeather } from "@/components/garden/UserWeather";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import Chat from "@/components/chat/Chat";
import { fetchUserWeather } from "@/utils/weather";
import {
  transferWeatherToUserPlants,
  updateWateringLevels,
} from "@/utils/watering";
import "react-toastify/dist/ReactToastify.css";

async function getExample() {
  const userWeatherAndCityData = await fetchUserWeather({
    userId: "6541480c6632d9ff072c5327",
  });

  if (userWeatherAndCityData) {
    const transferResponse = await transferWeatherToUserPlants({
      userId: "6541480c6632d9ff072c5327",
      userWeatherData: userWeatherAndCityData,
    });

    const transferDone = await Promise.resolve(transferResponse).then(
      async () => {
        try {
          updateWateringLevels({
            userId: "6541480c6632d9ff072c5327",
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
    console.log("Error in getting example data...");
  }
}

async function page() {
  const userData = await getExample();

  const naturalWateringThreshold = 25;

  const city = userData?.city || "";

  const weatherData = userData?.weather;


  return (
    <main className="overflow-hidden">
      <Chat />

      <div className="w-screen mt-20  gif">
        <div className="flex flex-row gap-2 mt-32  padding-x padding-y max-width ">
          <Image
            src="/gardener.svg"
            width={80}
            height={80}
            priority
            alt="Picture of gardener AI"
          />
          <div className="bubble-wide mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-3xl shadow-xl bubble-bottom-left">
            <p className="font-semibold">
              Hi visitor! I'm Lily -- your AI gardener support for this web
              application.
            </p>

            <p className="my-1">
              I will remind you every day which plant to water.
            </p>
          </div>
        </div>
        <div
          className="flex flex-row mt-1 padding-x padding-y max-width"
          id="myGarden"
        >
          <div className="flex flex-col flex-wrap items-start justify-start gap-y-2.5 text-black-100 my-auto">
            <h1 className="flex flex-item text-4xl font-extrabold">
              The Garden
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
          
          <UserGarden isExample={true} />
        </div>

        <div className="mt-12 padding-x padding-y max-width" id="weather">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
            <h1 className="text-4xl font-extrabold">Weakly precipitations</h1>
          </div>

          <UserWeather
            isExample={true}
            weatherData={weatherData}
            city={city}
            naturalWateringThreshold={naturalWateringThreshold}
          />
        </div>
      </div>
    </main>
  );
}

export default page;
