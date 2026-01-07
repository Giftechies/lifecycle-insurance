'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP)

export default function MortgageService(){
    const router = useRouter()
    const sec5 = useRef()
     const logos = Array.from({ length: 31 }, (_, i) => ({
  img: `/mq${i + 1}.png`,
}));

  useGSAP(() => {
    const marquee = document.querySelector(".marquee");
    if (!marquee) return;

    const marqueeWidth = marquee.scrollWidth;
    const containerWidth = marquee.parentElement.offsetWidth;

    const distance = marqueeWidth;
    const speed = 70; // pixels per second (adjust as needed)

    gsap.to(".marquee", {
      x: -distance,
      duration: distance / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % distance),
      },
    });
  }, []);
    return(
        <section
          ref={sec5}
          className="section_5 w-full p-4 lg:p-[3rem] overflow-hidden max-w-[1600px] mx-auto"
        >
          <main className=" w-full   ">
            <div className="w-full flex max-lg:flex-col  max-lg:gap-8  ">
              {/* left part 1 */}
              <div className=" w-full h-[20rem] lg:w-[40%] lg:h-[37rem] rounded-xl  overflow-hidden">
                <img
                  src="/sec5.jpg  "
                  className=" h-full w-full object-cover "
                  alt=""
                />
              </div>
              {/* Right */}
              <div className="Right lg:w-[60%] flex flex-col gap-10 lg:gap-15 ">
                {/* part 2 */}
                <div className=" lg:ml-[3rem] ">
                  <h3 className="text-[var(--primg)] font-bold   ">
                    {" "}
                    <i className="ri-record-circle-line mr-2   font-medium  "></i>
                   Mortgage Services Backed by Experience
                  </h3>

                  <p
                    className="text-[14px] mt-1 
                    "
                  >
             From the first conversation through to approval and beyond, we’re with you at every step. By working closely with New Zealand’s major banks and lenders, we deliver customised loan options, expert guidance, and a smooth, stress-free experience.
                  </p>
                </div>
                {/* part 3 */}
                <div className=" w-full    ">
                  {/* icon box */}
                  <div className="icon-box   w-full  bg-[var(--primg)] flex max-md:flex-col flex-wrap items-start max-md:gap-10  md:justify-between md:gap-y-11 text-white text-[18px]  font-normal  max-lg:rounded-t-4xl tracking-wide p-12   lg:rounded-r-4xl    ">
                    <div
                      onClick={() => {
                        router.push("/mortgage/home-loan");
                      }}
                      className="icon  w-full     md:w-[30%] md:border-r border-white/50 border-dashed flex md:flex-col  gap-4  items-start   "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <span className="  cursor-pointer  ">Home Loan</span>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/mortgage/investment-loan");
                      }}
                      className=" icon w-full     md:w-[30%]     md:border-r border-white/50 border-dashed flex md:flex-col  gap-4       "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <span className="  cursor-pointer">Investment Loan</span>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/mortgage/refinance");
                      }}
                      className="icon w-full     md:w-[30%]      flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]   bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" h-full w-full object-cover  cursor-pointer"
                          alt=""
                        />
                      </div>
                      <span className="   cursor-pointer  ">Refinance</span>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/mortgage/business-loan");
                      }}
                      className="icon  w-full     md:w-[30%]     md:border-r  border-white/50 border-dashed flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <span className="  cursor-pointer   ">Business Loan</span>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/mortgage/construction-loan");
                      }}
                      className="icon w-full     md:w-[30%]     md:border-r border-white/50 border-dashed flex md:flex-col  gap-4       "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <span className="  text-[19px]  cursor-pointer   ">
                        Construction Loan
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/mortgage/commercial-loan");
                      }}
                      className="icon w-full     md:w-[30%]      flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className=" cursor-pointer  h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <span className=" cursor-pointer   ">Commercial Loan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* lg marquee box */}
            <div className="marque  w-full flex items-center bg-[var(--primg)] rounded-b-[30px] lg flex-col p-6 pt-0   lg:mt-4 xl:mt-8  lg:rounded-[30px]  lg:p-10  lg:pt-0 ">
              <span className="text-center text-[26px] font-bold  my-3 text-white md:  md:w-[50%]  md:leading-6 lg:tracking-normal lg:leading-9  lg:text-[30px] lg:w-[65%] xl:w-[50%] lg:font-semibold lg:pt-8 ">
                Over 20 Handpicked <br /> partners to serve You Better
              </span>
              {/* marquee */}
              <div className="   w-[100%] rounded-[20px]  bg-white     overflow-hidden ">
                <div className="w-full bg-white rounded-[20px] overflow-hidden">
                  <div className="marquee flex items-center gap-10 py-5 ">
                    {logos.map((logo, i) => (
                        <div
                          key={i}
                          className="h-[4em] flex items-center flex-shrink-0 px-4"
                        >
                          <img
                            src={logo.img}
                            alt='logos'
                            className="h-full w-auto object-contain"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* marquee end */}
            </div>
          </main>
        </section>
    )
}