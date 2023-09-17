"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

const ChangeCity = ({ city, setCity }: any) => {
  const router = useRouter()
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      console.log(formData.get("cityName"));
      const response = await fetch(
        "/api/garden/" + session?.user?.id + "/setCity",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cityName: formData.get("cityName"),
          }),
        }
      );

      // Handle response if necessary
      const data = await response.json();
      
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setIsLoading(false);
      router.refresh();

      router.replace('/garden/'+session?.user?.id);
      // Set loading to false when the request completes
    }
  }

  return (
    <div className="flex flex-col gap-2 my-32 p-10 ">
      <div className=" mx-auto">
        <h1 className=" text-xl font-extrabold mx-auto">
          You can modify the city of which you want the weather
        </h1>
      </div>
      <div className="flex justify-between mx-auto">
        <p>
          🚨 Be aware that it will reset the weather of the week and the watering
          level
        </p>
      </div>

      <form className="w-full max-w-sm mx-auto my-10" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="cityName"
            placeholder={city}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>

          
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={() => 
                router.replace('/garden/'+session?.user?.id)
              }
            >
              Cancel
            </button>
          
        </div>
      </form>
    </div>
  );
};

export default ChangeCity;
