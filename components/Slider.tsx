"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
// Helps get the screen width & height

const carouselItems = [
  { content: "/IMG_1978.jpg" },
  { content: "/IMG_1979.jpg" },
  { content: "/IMG_1980.jpg" },
  { content: "/IMG_1981.jpg" },
  { content: "/IMG_1983.jpg" },
  { content: "/IMG_1984.jpg" },
  { content: "/IMG_2007.jpg" },
  { content: "/IMG_2006.jpg" },
  { content: "/IMG_2005.jpg" },
  { content: "/IMG_2004.jpg" },
  { content: "/IMG_2003.jpg" },
  { content: "/IMG_2002.jpg" },
  { content: "/IMG_2001.jpg" },
  { content: "/IMG_1999.jpg" },
];

const marqueeVariants = {
  animateLeft: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
  animateRight: {
    x: ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
};

const ImageCarousel = () => {
  const topRow = carouselItems.slice(0, 7);
  const bottomRow = carouselItems.slice(7, 14);
  // const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowConfetti(false), 30000); // Show confetti for 4 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setShowConfetti(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="z-20 overflow-hidden w-full">
      {/* {showConfetti && ( */}
      {isClient && showConfetti && (
        <div className="fixed top-0 left-0 z-1000 flex items-center justify-center">
          <Confetti
            width={window.innerWidth || 300}
            height={window.innerHeight || 300}
            numberOfPieces={30}
            initialVelocityY={50}
            wind={0.05}
            gravity={0.5}
          />
        </div>
      )}

      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white my-8">
        Photos of Juliet
      </h2>

      <div className="relative w-full h-[50rem] overflow-hidden">
        {/* Top Row (Moving Left) */}
        <motion.div
          className="flex"
          style={{ position: "absolute", top: "0" }}
          variants={marqueeVariants}
          animate="animateLeft"
        >
          {[...topRow, ...topRow].map((item, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[22rem] mx-2 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={item.content}
                alt={`Image ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row (Moving Right) */}
        <motion.div
          className="flex"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(50px)",
          }}
          variants={marqueeVariants}
          animate="animateRight"
        >
          {[...bottomRow, ...bottomRow].map((item, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[22rem] mx-2 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={item.content}
                alt={`Image ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;
