"use client";

import { AnimatePresence, easeIn, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const Animate = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathName}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0 , y : 20}}
          transition={{ duration: 1, easeIn }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
