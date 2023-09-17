"use client";

import { useSession } from "next-auth/react";
import PlantCardGarden from "./PlantCardGarden";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserGarden = ({naturalWatering}: {naturalWatering: number}) => {

  const { data: session, status } = useSession();

  const [data, setData] = useState([]);
  const [isChanged, setChanged] = useState(true);

 
  useEffect(() => {

  fetch("/api/garden/" + session?.user?.id, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data.userPlants);
      })
      setChanged(false);
    
  }, [isChanged, status]);

  function handleDelete(plantId: any, common_name: any) {
    fetch("/api/garden/" + session?.user?.id + "/" + plantId, {
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

  function handleWater(plantId: any, common_name: any) {
    fetch("/api/garden/" + session?.user?.id + "/" + plantId, {
      method: "PATCH",
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
      {status === "authenticated" ? (
        data?.length > 0 ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-1 w-full gap-8 pt-14">
              {data?.map((plant: any) => (
                <PlantCardGarden
                  key={plant.id}
                  plantId={plant.id}
                  common_name={plant.common_name}
                  watering={plant.watering ? plant.watering : "unknown"}
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
