import PlantCard from "@/components/catalogue/PlantCard";
import SearchbarCatalogue from "@/components/catalogue/SearchbarCatalogue";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchPlants } from "@/utils";
import MorePlantsBtn from "@/components/catalogue/MorePlantsBtn";

export default async function Home({ searchParams }: any) {
  const allPlants = await fetchPlants({
    plantCommonName: searchParams.q || "",
    maxCards: searchParams.nb || "8",
  });

  let isExample = false;

  if (searchParams.sim === "true") {
    isExample = true;
  }

  const isDataEmpty =
    !Array.isArray(allPlants) || allPlants.length < 1 || !allPlants;

  return (
    <main className="overflow-hidden">
      <div className="mt-40 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold"> <span className="mx-1">🌿</span> Plant Catalogue</h1>
          <ul className="list-disc ml-20 mt-3">
            <li> Browse through the plants</li>
            <li>
              {" "}
              Add some to the garden by clicking on the button {" "}
              <button className="ml-1 bg-green-700 text-white rounded-full h-6 w-6 cursor-text">
                +
              </button>
            </li>{" "}
            <li>Go to the Garden page by clicking on its Link in the Navigation Bar</li>
          </ul>
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
              {allPlants?.map(
                (plant) =>
                  plant.default_image &&
                  plant.default_image?.small_url !==
                    "https://perenual.com/storage/image/upgrade_access.jpg" && (
                    <PlantCard
                      isExample={isExample}
                      key={plant.id}
                      plantId={plant.id}
                      common_name={plant.common_name}
                      scienceName={plant.scientific_name}
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
                    />
                  )
              )}
            </div>
            <div className="mt-20 flex relative">
              <MorePlantsBtn query={searchParams.q} />
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
