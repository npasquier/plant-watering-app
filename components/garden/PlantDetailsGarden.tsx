"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import WateringChart from "./WateringChart";
import { FaChartBar } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

interface PlantDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  wateringRequested: string;
  plantId: number;
  plantPictureLink: string;
  plantDetails: any;
  common_name: string;
  scienceName: string | undefined;
}

const PlantDetailsGarden = ({
  isOpen,
  closeModal,
  wateringRequested,
  plantId,
  common_name,
  scienceName,
  plantDetails,
  plantPictureLink,
}: PlantDetailsProps) => {
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 sclae-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl - max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <WateringChart
                    isOpen={showChart}
                    closeModal={() => {
                      setShowChart(false);
                    }}
                    plantPictureLink={plantPictureLink}
                    plantId={plantId}
                    wateringRequested={wateringRequested}
                    common_name={common_name}
                    scienceName={scienceName}
                  />
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-slate-200 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3 shadow-2xl">
                    <div className="relative w-full h-180 bg-gray-100 bg-cover bg-center rounded-2xl px-8 py-8 ">
                      <div className="relative place-self-center h-48 w-48 my-3 mx-auto object-contain ">
                        <Image
                          src={plantPictureLink}
                          alt="Plant Picture"
                          width="0"
                          height="0"
                          sizes="100vw"
                          priority
                          className="absolute w-full h-auto z-1 object-contain border p-1 rounded-full bg-white "
                        />
                      </div>
                      <div className="flex gap-2 items-center justify-center mx-auto w-20">
                        <button
                          className="group  relative w-6 h-6 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-400 text-white shadow-lg "
                          onClick={() => setShowChart(true)}
                        >
                          <FaChartBar className="text-lg" />
                          {/* Tooltip (optional) */}
                          <span className="absolute bottom-full mb-2 hidden group-hover:inline-block w-32 text-center text-sm bg-black text-white p-2 rounded-xl shadow-lg">
                            View Watering Chart
                          </span>
                        </button>

                        <button
                          className="group  relative w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-400 text-white shadow-lg "
                          onClick={() => console.log("Modify PlantCard")}
                        >
                          <FaCog className="text-lg" />{" "}
                          {/* Tooltip (optional) */}
                          <span className="absolute bottom-full mb-2 hidden group-hover:inline-block w-32 text-center text-sm bg-black text-white p-2 rounded-xl shadow-lg">
                            Modify
                          </span>
                        </button>

                        <button
                          className="group  relative w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-400 text-white shadow-lg "
                          onClick={() => console.log("Sending PlantCard to PlantExchange")}
                        >
                          <FaPaperPlane className="text-lg" />
                          {/* Tooltip (optional) */}
                          <span className="absolute bottom-full mb-2 hidden group-hover:inline-block w-32 text-center text-sm bg-black text-white p-2 rounded-xl shadow-lg">
                            Send to PlantExchange
                          </span>
                        </button>
                      </div>

                      {plantDetails ? (
                        <div className="flex-1 flex flex-col gap-2">
                          <h2 className="font-semibold text-xl capitalize">
                            {common_name}
                          </h2>

                          <h4 className="text-sm text-gray-400">
                            {scienceName}
                          </h4>

                          <div className="mt-3 flex flex-wrap gap-4">
                            <div className="flex justify-between gap-5 w-full text-right">
                              <h4 className="text-grey capitalize">
                                💧 Watering
                              </h4>
                              <p className="text-black-100 font-semibold text-justify">
                                "{plantDetails.watering_guide}"
                              </p>
                            </div>
                            <div className="flex justify-between gap-5 w-full text-right">
                              <h4 className="text-grey capitalize">
                                ☀️ Sunlight
                              </h4>
                              <p className="text-black-100 font-semibold text-justify">
                                "{plantDetails.sunlight_guide}"
                              </p>
                            </div>
                            <div className="flex justify-between gap-5 w-full text-right">
                              <h4 className="text-grey capitalize">
                                🌾 Pruning
                              </h4>
                              <p className="text-black-100 font-semibold text-justify">
                                "{plantDetails.pruning_guide}"
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div> Loading ... </div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PlantDetailsGarden;
