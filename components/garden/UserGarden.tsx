"use client";

import { useSession } from "next-auth/react";
import PlantCardGarden from "./PlantCardGarden";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PlantCardPost from "./PlantCardPost";

const UserGarden = ({ isExample }: { isExample: boolean }) => {
  
  const { data: session, status } = useSession();

  const [data, setData] = useState([]);
  const [isChanged, setChanged] = useState(true);

  const userId =
     session?.user?.id
      ? session.user.id.toString()
      : "6541480c6632d9ff072c5327";

  useEffect(() => {

    isChanged && fetch("/api/watering/" + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });

    fetch("/api/garden/" + userId, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data.userPlants);
      });

    setChanged(false);
  }, [isChanged]);

  function handleDelete(plantId: any, common_name: any) {
    fetch("/api/garden/" + userId + "/" + plantId, {
      method: "DELETE",
    }).then(() => {
      toast.error(`${common_name} successfully deleted!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: () => <img src="/delete.svg" />,
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
    }).then(() => {
      toast.info(`${common_name} successfully watered!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setChanged(true);
    });
  }

  return (
    <>
      {status === "authenticated" || isExample ? (
        userId !== "" && data.length ? (
          data.length > 0 ? (
            <section>
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
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 w-full gap-8 pt-3">
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
                    plantDetails={plant.plantDetails}
                  />
                  
                ))}
                <PlantCardPost />
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
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Loading...</h2>
          </div>
        )
      ) : (
        <div>Please log in to see your plants.</div>
      )}
    </>
  );
};

export default UserGarden;
