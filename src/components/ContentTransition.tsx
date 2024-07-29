import React from "react";
import { motion } from "framer-motion";

interface ContentTransitionProps {
  children: React.ReactNode;
}

const contentVariants = {
  initial: {
    opacity: 0,
    y: "10%"
  },
  in: {
    opacity: 1,
    y: 0
  }
};

const contentTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.7
};

const ContentTransition: React.FC<ContentTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={contentVariants}
      transition={contentTransition}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default ContentTransition;
