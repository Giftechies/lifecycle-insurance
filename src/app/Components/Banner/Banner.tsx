"use client";
import Breadcrumb from "../Breadcumb/Breadcumb";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

export default function Banner({ title,image=''}: { title: string,image:string }) {
  const scope = useRef(null);

  useGSAP(() => {
    gsap.from(".animate", {
      y: 40,
      opacity: 0,
      duration: 1,
    });
  }, { scope });

  return (
    <div
      ref={scope}
      className="relative h-[12em] md:h-[15em] lg:h-[20em] w-full   overflow-hidden"
    >
      {/* Background Image */}
      <div className="h-full w-full absolute top-0 left-0 z-0">
        <Image
        width={250}
        height={250}
          src={`${image?image:'/main-banner.jpg'}`}
          alt="Hero Banner"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

      {/* Animated Text */}
      <div className="animate absolute z-30 w-full h-full flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-[26px] md:text-[40px] lg:text-[56px] leading-tight font-medium capitalize">
           {title}
        </h1>
        <p className="flex justify-center">
          <Breadcrumb />
        </p>
      </div>
    </div>
  );
}
