"use client";

import React, { useEffect } from "react";
import Vara from "vara";

var idealFontSize = 48,
  idealScreenSize = 1920,
  maxFontSize = 64,
  minFontSize = 22;

export default function VaraText({ text }: { text: string }) {
  useEffect(() => {
    var fontSize = (window.innerWidth / idealScreenSize) * idealFontSize;
    fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize));

    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "HAPPY BIRTHDAY JULSBABY",
          fontSize: fontSize,
          strokeWidth: 2,
          color: "#ffffff",
          id: "",
          duration: 5000,
          textAlign: "left",
          x: 4,
          y: 0,
          fromCurrentPosition: {
            x: true,
            y: true,
          },
          autoAnimation: true,
          queued: true,
          delay: 40,
          letterSpacing: 4,
        },
      ]
    );
  }, []);

  return (
    <div id="vara-container" className="z-[20]">
      <div>
        <span className="text-3xl text-[#ffffff]">Dear Juliet,</span>
        <p className="text-2xl">
          Every birthday we celebrate is special, and today is no exception. I
          hope this day brings you as much joy as you bring to those around you.
          As I thought about how to make your birthday truly memorable, I
          realized the best way was to use my craft to honor you—letting the
          world know just how incredible you are. Here's to celebrating you
          today and to many more birthdays filled with love, laughter, and
          unforgettable moments!.
        </p>
      </div>

      <br />
      <br />
      <div className="mb-2 text-2xl">So,here&lsquo;s my little gift</div>
    </div>
  );
}
