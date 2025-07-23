"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const partnerLogos = [
  "m1.png", "m2.png", "m4.png", "m4.png", "m5.png", "m6.png",
  "m7.png", "m8.png", "m9.png", "m10.png", "m11.png",
  "7.png", "4.png", "3.png", "6.png", "1.png", "2.png", "5.png", "9.png",
];

export default function PartnerMarquee() {
  const marqueeRef = useRef();

  useGSAP(() => {
    gsap.to(".marquee-track", {
      xPercent: -100,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="marque w-full flex items-center bg-[var(--primg)] rounded-b-[30px] flex-col p-6 pt-0 lg:mt-4 xl:mt-8 lg:rounded-[30px] lg:p-10 lg:pt-0">
      <h1 className="text-center text-white text-[14px] lg:text-[30px] font-semibold my-3 md:w-[50%] lg:w-[65%] xl:w-[50%] lg:leading-9">
        Over 20 Handpicked <br /> partners to serve You Better
      </h1>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden bg-white h-[6em] lg:h-[8.5em] rounded-[20px]">
        <div ref={marqueeRef} className="marquee-track flex w-max gap-8 px-4 items-center">
          {[...partnerLogos, ...partnerLogos].map((src, i) => (
            <div
              key={i}
              className="h-[60%] w-[40%] lg:h-[90%] lg:w-[15%] flex-shrink-0"
            >
              <img
                src={src}
                alt={`partner-${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
