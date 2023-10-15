"use client";

import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const Animate = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0 , y : 20}}
        transition={{ duration: 1, easeIn }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
