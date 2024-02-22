"use client";

import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { mapWatering } from "@/utils";

interface PlantDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  plantId: number;
  wateringRequested: string;
  plantPictureLink: string;
  common_name: string;
  scienceName: string | undefined;
}

const WateringChart = ({
  isOpen,
  closeModal,
  plantId,
  wateringRequested,
  common_name,
  scienceName,
  plantPictureLink,
}: PlantDetailsProps) => {
  const monthlyWatering = {
    January: mapWatering(wateringRequested || "").number,
    February: mapWatering(wateringRequested || "").number,
    March: mapWatering(wateringRequested || "").number,
    April: mapWatering(wateringRequested || "").number,
    May: mapWatering(wateringRequested || "").number+1,
    June: mapWatering(wateringRequested || "").number+1,
    July: mapWatering(wateringRequested || "").number+1,
    August: mapWatering(wateringRequested || "").number+1,
    September: mapWatering(wateringRequested || "").number,
    October: mapWatering(wateringRequested || "").number,
    November: mapWatering(wateringRequested || "").number,
    December: mapWatering(wateringRequested || "").number,
  };

  const data = {
    labels: Object.keys(monthlyWatering),
    datasets: [
      {
        label: `Watering times per week`,
        data: Object.values(monthlyWatering),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
                <Dialog.Panel className="relative w-full max-w-3xl - max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
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
                      

                      <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl capitalize">
                          {common_name}
                        </h2>

                        <h4 className="text-sm text-gray-400">{scienceName}</h4>

                        <div className="mt-3 flex flex-wrap gap-4">
                          <div className="flex justify-between gap-5 w-full text-right">
                            <Bar data={data} options={options} />
                          </div>
                        </div>
                      </div>
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

export default WateringChart;
