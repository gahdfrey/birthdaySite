"use client"

import React, { useEffect } from "react";
import Vara from "vara";

var idealFontSize = 48,
  idealScreenSize = 1920,
  maxFontSize = 64,
  minFontSize = 22;

export default function VaraText({ text }: { text: string }) {
  useEffect(() => {
    var fontSize =
      (window.innerWidth / idealScreenSize) * idealFontSize;
    fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize));

    var vara = new Vara("#vara-container", "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json", [
      {
        text: "HAPPY BIRTHDAY IFEYINWA",
        fontSize: fontSize,
        strokeWidth: 2,
        color: "#D2AC47",
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
    ]);
  }, []);
  
    return <div id="vara-container" className="z-[20]">
        <div>
       <span className='text-3xl text-[#D2AC47]'>Dear Ifeyinwa,</span> 
       <p className="text-lg">Here’s to all the birthdays we have celebrated together! I hope today is an amazing one and I look forward to celebrating many more together!
        I scratched my head and pondered how I could make your birthday a memorable one... and I thought what better way than to use my craft and skill to let the world know how special you are.</p>
      </div>
        {/* <div>
        <span className='text-3xl text-[#D2AC47]'>Hi Ifeyinwa,</span> I scratched my head and pondered how I could make your birthday a memorable one... and I thought what better way than to use my craft and skill to let the world know how special you are
      </div> */}
      <br />
      <br />
      <div className='mb-2 text-lg'>So,here&lsquo;s my little gift</div>
    </div>;
  }
  