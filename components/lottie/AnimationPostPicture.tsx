"use client";

import Lottie from "lottie-react";
import postPictureAnimation from "@/lotties/post-picture.json";

const AnimationPostPicture = (passedClassNames : any ) => {
  return (
      <Lottie animationData={postPictureAnimation} className={`${passedClassNames}`} />
  );
};

export default AnimationPostPicture;