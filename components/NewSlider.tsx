"use client";

import * as React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  // Expanded list of testimonials (10 cards)
  const testimonials = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Pulvinar mollis praesent amet semper varius id enim pellentesque orci. Laoreet facilisis erat velit amet gravida et ut at.",
    date: "Date",
    name: "Name Name",
    username: `@Username${index + 1}`,
    image: "https://via.placeholder.com/50", // Placeholder image
  }));

  // Split into two rows (5 cards each for top and bottom)
  const topRow = testimonials.slice(0, 5);
  const bottomRow = testimonials.slice(5, 10);

  // Marquee animation variants
  const marqueeVariants = {
    animateLeft: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // Adjust speed here
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
          duration: 50, // Adjust speed here
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="z-20 overflow-hidden w-full">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Testimonials & Trust Indicators
      </h2>

      {/* Container for both rows */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {" "}
        {/* Height to accommodate both rows with spacing */}
        {/* Top Row (Moving Left) */}
        <motion.div
          className="flex"
          style={{
            // width: `${topRow.length * 300 * 2}px`,
            position: "absolute",
            top: "0",
          }}
          variants={marqueeVariants}
          animate="animateLeft"
        >
          {/* Render cards twice for seamless looping */}
          {[...topRow, ...topRow].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col gap-[20px] relative w-[300px] bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 py-[12px] px-[16px] rounded-lg border-2 border-blue-400 shadow-md mx-2"
              whileHover="hover"
            >
              {/* Date */}
              <div className="absolute top-2 right-2 text-sm mb-3 text-gray-600 dark:text-gray-300">
                {testimonial.date}
              </div>

              {/* Quote */}
              <div className="font-Inter text-[#000] text-[12px] dark:text-gray-200">
                {testimonial.quote}
              </div>

              {/* Name and Username */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.username}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Bottom Row (Moving Right) */}
        <motion.div
          className="flex"
          style={{
            // width: `${bottomRow.length * 300 * 2}px`,
            position: "absolute",
            top: "50%",
            transform: "translateY(50px)",
          }} // Adjusted for spacing
          variants={marqueeVariants}
          animate="animateRight"
        >
          {/* Render cards twice for seamless looping */}
          {[...bottomRow, ...bottomRow].map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex flex-col gap-[20px] relative w-[300px] bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 py-[12px] px-[16px] rounded-lg border-2 border-blue-400 shadow-md mx-2"
              whileHover="hover"
            >
              {/* Date */}
              <div className="absolute top-2 right-2 text-sm mb-3 text-gray-600 dark:text-gray-300">
                {testimonial.date}
              </div>

              {/* Quote */}
              <div className="font-Inter text-[#000] text-[12px] dark:text-gray-200">
                {testimonial.quote}
              </div>

              {/* Name and Username */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.username}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
