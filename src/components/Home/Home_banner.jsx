
'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";



gsap.registerPlugin(ScrollTrigger,useGSAP)

export default function HomeBanner({data=[]}){
 console.log("home banner data:", data);
  
    const homeIconBox = useRef()
      useGSAP(() => {
        if (!homeIconBox.current) return;
        gsap.from(".home-icon-box ", {
          opacity: 0,
          x: -100,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger:".home-icon-box ",
            start:"top center+=300",
          },
        });
      },  );

    return(
         <div className="relative  overflow-hidden">
          {/* Background Image */}
          <img
            src="/main-banner.jpg"
            alt="Hero Banner"
            className="absolute inset-0 h-full w-full object-cover z-0"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black   to-[var(--secgr)]/40 z-10" />

          {/* Text + Icon Content */}
          <div className=" relative  w-full h-full max-w-[1600px] mx-auto z-30">
            <div className="relative pt-25 px-4 md:px-[1.5rem]  lg:px-[3.5rem] xl:px-[3rem] lg:pt-50 pb-10 z-20 text-white ">
              <p className="animate-fadeInUp text-gray-300 text-sm md:text-base font-semibold mb-2">
                <i className="ri-record-circle-line mr-2 text-lg font-extralight text-white   "></i>
             {data?.title}
              </p>

              <div className=" text-[26px] md:text-[46px] lg:text-[58px] font-semibold tracking-normal leading-tight">
                <span className=" mt-6  ">
                  From Smart 
                  <span className="text-[var(--primg)]"> Financing</span> To<br/>
               
                  Dream <span className="text-[var(--primg)]">Mortgages</span>.<br/>
                We Cover It All</span>
              </div>

              <h4 className="mt-4 text-[14px] lg:w-[65%] text-white tracking-wider ">
                Lifecycle Financial is a Leading independent Financial Advisory
                Company providing a wide range of financial services to the
                clients including Mortgages both Residential & Commercial,
              </h4>

              <button
                onClick={() => {
                  router.push("/Enquire");
                }}
                className="mt-6 tracking-widest py-3 px-6 cursor-pointer text-sm mb-10 border border-white rounded-full hover:text-[var(--primg)] hover:bg-white/10 hover:scale-[.98] transition-all duration-300 "
              >
                Request An Appraisal{" "}
                <i className="ml-1 ri-arrow-right-wide-fill"></i>
              </button>

              {/* Icon Box */}
              <div
                ref={homeIconBox}
                className="home-icon-box   grid  sm:grid-cols-3 w-[min(800px,80%)] max-sm:mx-auto border border-dashed border-white/40  rounded-3xl   p-4 gap-6"
              >
                {/* Card 1 */}
                <div className="flex  flex-col items-center text-center flex-1 border-b sm:border-b-0 sm:border-r border-dashed border-white/40 p-4">
                  <Image
                  width={250}
                  height={250}
                    src={data?.boximage1}
                    alt="Rating"
                    className="w-12  h-12"
                  />
                  <span className="  text-white  font-semibold mt-3 text-sm">{data?.boxtitle1}</span>
                
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center flex-1 border-b sm:border-b-0 sm:border-r border-dashed border-white/40 p-4">
                  <Image
                  width={250}
                  height={250}
                   src={data?.boximage2}
                    alt="Clients"
                    className="w-12 h-12"
                  />
                  <span className="text-white font-semibold mt-3 text-sm">
                   {data?.boxtitle2}
                  </span>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center flex-1 p-4">
                  <Image
                  width={250}
                  height={250}
                     src={data?.boximage3}
                    alt="Satisfaction"
                    className="w-12 h-12"
                  />
                  <span className="text-white font-semibold mt-3 text-sm">
                   {data?.boxtitle3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}