"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const MorePlantsBtn = () => {
  const router = useRouter();
  const [maxCards, setMaxCards] = useState(12);

   function increaseMax() {

    const searchParams = new URLSearchParams(window.location.search);

    

    searchParams.set("nb", maxCards.toString());


    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  }


  return (
    <button
      onClick={() => {setMaxCards((maxCards) => maxCards + 4) ; increaseMax()}}
      className="flex justify-between mx-auto bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      More plants (+4)
    </button>
  );
};

export default MorePlantsBtn;
