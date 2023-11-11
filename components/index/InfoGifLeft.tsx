"use client";

import { ReactNode, useEffect, useRef } from "react";

const InfoGifLeft = ({ children }: { children: ReactNode }) => {
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
    <div  ref={ref} className="mt-0 padding-x padding-y max-width font-sans" >
        {children}
    </div>
  );
};

export default InfoGifLeft;
