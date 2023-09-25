"use client";

import { ReactNode, useEffect, useRef } from "react";

const InfoGifRight = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ref.current?.classList.add("gif-right");
        observer.unobserve(ref.current!);
      }
    });
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-0 padding-x padding-y max-width">
      <div className=" mx-30 p-0  font-sans  ">
        <p className="my-0"></p>
        {children}
      </div>
    </div>
  );
};

export default InfoGifRight;
