import Hero from "@/components/index/Hero";
import PlantCard from "@/components/index/PlantCard";
import SearchbarCatalogue from "@/components/index/SearchbarCatalogue";
import SearchbarWeather from "@/components/index/SearchbarWeather";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchPlants, fetchYesterdayWeather } from "@/utils";
import Image from "next/image";
import MorePlantsBtn from "@/components/index/MorePlantsBtn";
import SignInTextBtn from "@/components/index/SignInTextBtn";

export default async function Home({ searchParams, session }: any) {
  const allPlants = await fetchPlants({
    plantCommonName: searchParams.q || "",
    maxCards: searchParams.nb || "8",
  });

  const isDataEmpty =
    !Array.isArray(allPlants) || allPlants.length < 1 || !allPlants;

  const weatherCity = await fetchYesterdayWeather({
    city: searchParams.city || "",
  });

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className=" mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-md shadow-xl ">
          <p className="my-3">
            <span className="mr-1">🚨</span> <strong> Watering </strong> your
            lawn for a couple of minutes <strong> every evening </strong> can
            have a <strong>detrimental effect</strong> .
          </p>

          <p className="my-3 ml-10 text-gray-700">
            -&gt; A small dose of water will not penetrate the soil and will
            stay in the top few millimeters of soil. The roots will not go down
            to look for the water, causing the grass to become weak and shallow
            rooted. This weak grass will be more{" "}
            <em>susceptible to weeds and wear.</em>
          </p>

          <p className="font-bold">
            <span className="mr-1">✅</span> You need to give your lawn a good
            soak -- 1-inch of water -- once or twice a week.
          </p>
          <p className="mt-3 ml-10 text-gray-700">
            -&gt; A good soak once or twice a week will saturate the soil and
            encourage the roots to go down looking for moisture. Deeper roots
            mean a <em>tougher healthier plant</em>!
          </p>
          <p className="mt-3">
            <span className="mr-1">💧</span> 1-inch of water{" "}
            <strong>&#8773; 25 mm of precipitations</strong>. Outdoor plants are
            thus sometimes naturally sufficiently hydrated through the weather.
          </p>

          <p className="my-3">
            <span className="mr-1">👉</span> This web app gives a quick and easy
            way to{" "}
            <strong>manage the watering activity of your outdoor plants</strong>{" "}
            given the
            <strong> weekly weather</strong>.
          </p>
          <p className="mt-3 ml-10 text-gray-700">
            -&gt;
            <strong className="ml-1">
              <SignInTextBtn />
            </strong>{" "}
            to discover its full potential: compose your own garden, access
            weekly weather precipitations, and keep track of each plant's
            watering level.
          </p>
          <p className="ml-14 text-gray-500 text-sm">
            {" "}
            Signing In with Google is secure:{" "}
            <u>Google does not share your password</u>. Your password remains a
            secret for everyone except to Google.{" "}
          </p>
        </div>
      </div>

      <div className="mt-12 padding-x padding-y max-width" id="weather">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">
            Recall the weather of yesterday?{" "}
          </h1>
          <p>
            Get a reminder of the weather in your city <em>yesterday</em> , and
            grasp the potential of having a{" "}
            <em> full weather history of precipitations</em> for watering your
            plants.
          </p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchbarWeather />
        </div>

        {searchParams?.city && weatherCity?.location?.name ? (
          <div className="flex flex-col p-3 rounded-md shadow-md">
            <div className="relative h-20 w-20 my-3 object-contain">
              <Image
                src={`https:${weatherCity?.forecast.forecastday[0].day.condition.icon}`}
                alt="Plant Picture"
                fill
                sizes="100%"
                priority
                className="object-contain border p-1 rounded-full bg-white"
              />
            </div>

            <div className="flex  mt-6">
              <h2 className="car-card__content-title">
                {weatherCity?.forecast.forecastday[0].day.condition.text}
              </h2>
            </div>
            <p className="flex mt-2 text-[32px] font-extrabold">
              <span className="self-start text-[14px] font-semibold text-gray-500 italic mr-2">
                Total Precipitation:
              </span>

              <span className="self-start text-[14px] font-semibold text-gray-500 italic">
                {weatherCity?.forecast.forecastday[0].day.totalprecip_mm} mm
              </span>
            </p>
            <p className="flex mt-2 text-[32px] font-extrabold">
              <span className="self-start text-[14px] font-semibold text-gray-500 italic mr-2">
                Temperature:
              </span>

              <span className="self-start text-[14px] font-semibold text-gray-500 italic">
                {Math.round(weatherCity?.forecast.forecastday[0].day.avgtemp_c)}
                °C
              </span>
            </p>
            <p className="flex mt-2 text-[32px] font-extrabold">
              <span className="self-end text-[14px] font-semibold text-blue-800">
                {weatherCity?.location.name}
              </span>
            </p>
          </div>
        ) : (
          weatherCity.error?.code === 602 && (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Ooops, no result</h2>
            </div>
          )
        )}
      </div>

      <div className="mt-20 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Plant Catalogue</h1>
          <p>
            Browse through the plants. And <em>once signed in</em>, select the
            ones you wish to take care of and compose your unique garden!{" "}
          </p>
          <p>
            {" "}
            <span className="mr-1">ℹ️</span> The app uses an API and only has
            access to 3 000 plants (I am working on way to get around this
            limit).
          </p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchbarCatalogue />
        </div>
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

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-1 w-full gap-8 pt-14">
              {allPlants?.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plantId={plant.id}
                  common_name={plant.common_name}
                  watering={
                    plant.watering && plant.id < 3000
                      ? plant.watering
                      : "unknown"
                  }
                  pictureLink={
                    plant.default_image?.small_url && plant.id < 3000
                      ? plant.default_image?.small_url
                      : "/picture-fail.png"
                  }
                  scienceName={plant.scientific_name}
                />
              ))}
            </div>
            <div className="mt-20 flex relative">
              <MorePlantsBtn />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
            <p>{allPlants?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}