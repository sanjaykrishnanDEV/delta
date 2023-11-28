import React from "react";
import Header from "./Header";
import { motion, spring } from "framer-motion";
const Publicpage = () => {
  return (
    <div>
      <Header />
      <motion.div 
      drag="y"
      whileHover={{scale:2}}
      className="h-10 bg-blue-900 w-12 mt-80 ms-10 rounded-full"
      >
        <p>sanjay</p>
      </motion.div>
    </div>
  );
};

export default Publicpage;
