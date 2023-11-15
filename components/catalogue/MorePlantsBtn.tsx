"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MorePlantsBtn = ({ query }: { query: string }) => {
  const router = useRouter();
  const [maxPage, setMaxPage] = useState(2);

  function increaseMax() {
    setMaxPage((maxPage) => maxPage + 1);

    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("nb", maxPage.toString());

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  }

  useEffect(() => {
    setMaxPage(2);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("nb", "1");
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  }, [query]);

  return (
    <button
      onClick={() => {
        increaseMax();
      }}
      className="flex justify-between mx-auto bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
    >
      More plants
    </button>
  );
};

export default MorePlantsBtn;
