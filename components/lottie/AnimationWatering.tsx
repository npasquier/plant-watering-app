"use client";

import Lottie from "lottie-react";
import wateringAnimation from "@/lotties/animation-watering.json";

const AnimationWatering = () => {
  return (
      <Lottie animationData={wateringAnimation}  className="h-70 rounded-2xl overflow-hidden"/>
  );
};

export default AnimationWatering;
