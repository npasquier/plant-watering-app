"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MorePlantsBtn = ({ query }: { query: string }) => {
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

  useEffect(() => {
    setMaxCards(12);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("nb", "8");
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  }, [query]);

  return (
    <button
      onClick={() => {
        setMaxCards((maxCards) => maxCards + 4);
        increaseMax();
      }}
      className="flex justify-between mx-auto bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      More plants (+4)
    </button>
  );
};

export default MorePlantsBtn;
