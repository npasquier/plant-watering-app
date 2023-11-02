"use client";

import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
// https://animate.style/


interface Props {
  plantId: number;
  common_name: string;
  watering?: string;
  pictureLink?: any;
  scienceName?: string;
}

const AddButton = ({
  plantId,
  common_name,
  watering,
  pictureLink,
  scienceName,
}: Props) => {
  const { data: session } = useSession();

  const userId = session?.user?.id.toString() ? session?.user?.id.toString() : "6541480c6632d9ff072c5327"


  async function handlePost() {
    fetch(`/api/garden/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plantId: plantId,
        common_name: common_name,
        wateringRequested: watering,
        manualWateringLvl: 0,
        pictureLink: pictureLink,
        scienceName: scienceName,
      }),
    }).then((res) => {
      if (res.status === 201) {notifySuccess()} 
      else if (res.status === 208) {notifyInfo()}
    });

    
  }

  const notifySuccess = () => toast.success(`${common_name} successfully added to garden!`, 
  {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: "🎉"
    })

    const notifyInfo = () => toast.info(`${common_name} is already in garden!`, 
    {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      })

  return (

      <button
        className="bg-green-700 text-white rounded-full ml-auto h-6 w-6"
        onClick={handlePost}
      >
        +
      </button>
  );
};

export default AddButton;
