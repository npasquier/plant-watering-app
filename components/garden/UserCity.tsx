"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        height={40}
        width={40}
      />
    </button>
  );
};

const UserCity = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city === "") {
      return alert("Ooops.. Please fill in the search bar :)");
    }

    updateSearchParams(city.toLowerCase());
  };

  const updateSearchParams = (city: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (city) {
      searchParams.set("city", city);
    } else {
      searchParams.delete("city");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname, { scroll : false });
  };

  return (
    <form className="searchflex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xlbar" onSubmit={handleSearch}>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
      <Image
              src="/city.svg"
              alt="City logo"
              width={20}
              height={20}
            />
        <input autoComplete="off"
            className="w-[200px] h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="City..."
            value={city} 
            onChange={(e) => setCity(e.target.value)}
             />
        <SearchButton otherClasses="" />
      </div>
    </form>
  );
};

export default UserCity;