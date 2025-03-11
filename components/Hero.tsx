import React from "react";
import VaraText from "./VaraText";
import Nav from "@/components/Nav";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <>
      <Nav />
      <div>
        <span className="text-3xl text-[#000000]">Hey Juliet,</span>{" "}
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4 }}
        >
          I scratched my head and pondered how I could make your birthday a
          memorable one... and I thought what better way than to use my craft
          and skill to let the world know how special you are{" "}
        </motion.p>
      </div>
      <br />
      <br />
      <div className="mb-2">
        So,here&lsquo;s my little gift
        <br />
      </div>
      <VaraText text={""} />
    </>
  );
};

export default Hero;
