"use client";

import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { plantCommonNames } from "@/constants";
import { CheckIcon } from "@heroicons/react/20/solid";

interface PlantCommonNameProps {
  plantCommonName: string;
  setPlantCommonName: (plantCommonName: string) => void;
}

const SearchPlantCommonName = ({
  plantCommonName,
  setPlantCommonName,
}: PlantCommonNameProps) => {
  const [query, setQuery] = useState("");

  const filteredPlantCommonNames =
    query === ""
      ? //Note that I sliced the item array to show only
        plantCommonNames.slice(0, 10)
      : plantCommonNames.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={plantCommonName} onChange={setPlantCommonName} nullable>
        <div className="relative w-full pr-4">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/plant-logo.svg"
              alt="Plant logo"
              width={20}
              height={20}
            />
          </Combobox.Button>

          <Combobox.Input
            autoComplete="off"
            className="ml-8 z-10 w-full h-[48px] pl-12 p-4 rounded-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Plant name..."
            displayValue={(plantCommonName: string | undefined) =>
              plantCommonName || ""
            }
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10  max-h-60 w-[90%] left-14 overflow-auto rounded-b-2xl bg-white shadow-lg">
              {query.length > 0 && (
                <Combobox.Option
                  value={query}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-700 text-white" : "text-gray-900"
                    }`
                  }
                >
                  Personal query: "{query}"
                </Combobox.Option>
              )}
              {filteredPlantCommonNames.slice(0, 10).map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-700 text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    );
                  }}
                </Combobox.Option>
              ))}
              {["..."].map((item) => (
                <Combobox.Option
                  key={item}
                  className={`relative cursor-default select-none py-2 pl-10 pr-4 "text-gray-900"}`}
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchPlantCommonName;
