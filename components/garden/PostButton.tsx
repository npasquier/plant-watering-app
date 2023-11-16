"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
// https://animate.style/

interface Props {
  plantId: number;
  common_name: string;
  watering?: string;
  pictureLink?: any;
  scienceName?: string;
  plantDetails?: any;
}

const PostButton = ({
  plantId,
  common_name,
  watering,
  pictureLink,
  scienceName,
  plantDetails,
}: Props) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [isPosted, setPosted] = useState<boolean>(false);

  const userId = session?.user?.id.toString()
    ? session?.user?.id.toString()
    : "6541480c6632d9ff072c5327";

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
        plantDetails: plantDetails,
      }),
    }).then((res) => {
      if (res.status === 201) {
        notifySuccess();
        setLoading(false);
        setPosted(true);
      } else if (res.status === 208) {
        notifyInfo();
      }
    });
  }

  const notifySuccess = () =>
    toast.success(`${common_name} successfully added to garden!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: "🎉",
    });

  const notifyInfo = () =>
    toast.info(`${common_name} is already in garden!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  if (!isPosted && !isLoading) {
    return (
      <button
        className="bg-green-700 text-white rounded-xl h-10 w-32 shadow-2xl "
        onClick={() => {
          setLoading(true);
          handlePost();
        }}
      >
        Submit
      </button>
    );
  } else if (!isPosted && isLoading) {
    return <p>Loading....</p>;
  } else if (isPosted) {
    router.push(
      userId === "6541480c6632d9ff072c5327"
        ? "/example?sim=true"
        : `/garden/${userId}`
    );
    return( <p>Plant added! </p> )
    
  }
};

export default PostButton;
