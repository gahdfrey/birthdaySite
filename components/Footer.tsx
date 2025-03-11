"use client";

import React from "react";
import { motion } from "motion/react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center">
      <motion.p
        className="text-[#ffffff]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => {
          // console.log("hover started!");
        }}
      >
        © {currentYear} Dleventh. All rights reserved.
      </motion.p>
    </div>
  );
}

export default Footer;
