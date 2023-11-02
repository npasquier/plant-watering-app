"use client";

import { useSession } from "next-auth/react";
import PlantCardGarden from "./PlantCardGarden";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserGarden = ({
  naturalWatering,
  isExample,
}: {
  naturalWatering: number;
  isExample: boolean;
}) => {
  const { data: session, status } = useSession();

  const [data, setData] = useState([]);
  const [isChanged, setChanged] = useState(true);

  const userId = session?.user?.id.toString()
    ? session?.user?.id.toString()
    : "6541480c6632d9ff072c5327";

  useEffect(() => {
    fetch("/api/watering/", { method: "GET" });

    fetch("/api/garden/" + userId, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data.userPlants);
      });

    setChanged(false);
  }, [isChanged, status, userId]);

  function handleDelete(plantId: any, common_name: any) {
    fetch("/api/garden/" + userId + "/" + plantId, {
      method: "DELETE",
    }).then((res) => {
      toast.error(`${common_name} successfully deleted!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: ({ theme, type }) => <img src="/delete.svg" />,
      });
      setChanged(true);
    });
  }

  function handleWater(plantId: any, common_name: any, index: number) {
    fetch("/api/garden/" + userId + "/" + plantId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plantId: plantId,
        common_name: common_name,
        dayIndex: index,
      }),
    }).then((res) => {
      toast.info(`${common_name} successfully watered!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // icon: ({ theme, type }) => <img src="/delete.svg" />,
      });
      setChanged(true);
    });
  }

  return (
    <>
      {status === "authenticated" || isExample ? (
        data?.length > 0 ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-1 w-full gap-8 pt-3">
              {data?.map((plant: any) => (
                <PlantCardGarden
                  key={plant.id}
                  plantId={plant.id}
                  common_name={plant.common_name}
                  wateringRequested={
                    plant.wateringRequested
                      ? plant.wateringRequested
                      : "unknown"
                  }
                  currentWaterActivity={plant?.currentWaterActivity}
                  manualWateringLvl={plant?.manualWateringLvl}
                  pictureLink={plant.pictureLink || "/picture-fail.png"}
                  scienceName={plant.scienceName}
                  onDelete={handleDelete}
                  onWater={handleWater}
                  naturalWatering={naturalWatering}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">
              Ooops, no plant yet
            </h2>
          </div>
        )
      ) : (
        <div>Please log in to see your plants.</div>
      )}
    </>
  );
};

export default UserGarden;
