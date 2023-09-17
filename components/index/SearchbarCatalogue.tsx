"use client";

import React, { useEffect, useState } from "react";
import SearchPlantCommonName from "./SearchPlantCommonName";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses} mb-auto mt-1`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        height={40}
        width={40}
      />
    </button>
  );
};

const SearchbarCatalogue = () => {
  const [plantCommonName, setPlantCommonName] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (plantCommonName === "") {
      return alert("Ooops.. Please fill in the search bar :)");
    }

    updateSearchParams(plantCommonName?.toLowerCase());
  };

  useEffect(
    () => {
      updateSearchParams(plantCommonName?.toLowerCase());
    }
    , [plantCommonName]
  )

  const updateSearchParams = (plantCommonName: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (plantCommonName) {
      searchParams.set("q", plantCommonName);
    } else {
      searchParams.delete("q");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll : false });
  };

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchPlantCommonName
          plantCommonName={plantCommonName}
          setPlantCommonName={setPlantCommonName}
        />
        <SearchButton otherClasses="" />
      </div>
    </form>
  );
};

export default SearchbarCatalogue;
