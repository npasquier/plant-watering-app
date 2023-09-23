"use client";

import { ReactNode, useEffect, useRef } from "react";

const InfoGifRight = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ref.current?.classList.add("gif-left");
        observer.unobserve(ref.current!);
      }
    });
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div  ref={ref} className="mt-12 padding-x padding-y max-width" >
      <div className=" mx-30 p-6 bg-gray-50 text-gray-700  font-sans rounded-md shadow-xl ">
        <p className="my-3"></p>
        {children}
      </div>
    </div>
  );
};

export default InfoGifRight;
