"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const Animate = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={path}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
