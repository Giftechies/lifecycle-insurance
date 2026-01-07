'use client'

import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)
export default function OurService(){
    const sec4 = useRef()
    const router = useRouter()
      useGSAP(() => {
        if (!sec4.current) return;
        gsap.from(".sec-4-card-left", {
          x: -250,
          opacity: 0,
          duration: 1.5,
          stagger: 0.5,
          ease: "power2",
          scrollTrigger: {
            trigger: ".sec-4-card-left",
            start: "top 70%",
          },
        });
      },  );
      useGSAP(() => {
        if (!sec4.current) return;
        gsap.from(".sec-4-card-right", {
          x: 250,
          opacity: 0,
          duration: 1.5,
          stagger: 0.7,
          ease: "power2",
          scrollTrigger: {
            trigger: ".sec-4-card-right",
            start: "top 70%",
          },
        });
      },  );
    return(
          <section
          ref={sec4}
          className="Section-4  lg:py-5 max-w-[1600px] mx-auto overflow-hidden  "
        >
          <main className=" pt-10 py-3 px-4 lg:px-[3rem] xl:px-[3rem]   ">
            {/* part 1 */}
            <div className="   w-[100%]  lg:flex  ">
              <div className="  lg:w-[60%]  ">
                <p className="text-[var(--primg)]  lg:text-[16px]">
                  {" "}
                  <i className="ri-record-circle-line mr-1 text-2lg"></i>Our
                  Service
                </p>
                <h2 className="!text-[26px] font-semibold leading-8 sm:!text-[38px]   mt-3 tracking-normal  md:leading-10 text-zinc-600/90  md:font-semibold xl:mt-6  sm:w-[70%] ">
                Comprehensive Mortgage & Financial Solutions
                </h2>
              </div>
              <div className="  lg:w-[40%] lg:mt-11 mt-3 ">
                <p className=" text-[14px]  ">
                  {" "}
                  Our experienced advisers bring proven expertise across the New Zealand financial market. We focus on practical advice, transparent communication, and solutions that genuinely work for you—now and in the long term.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="superpart-2  w-full h-[75em] mt-8 flex flex-col max-md:gap-6 sm:mt-0 md:h-[40em] md:mt-5 lg:gap-3 lg:flex-row lg:mt-8 lg:h-[18em]  xl:h-[16em] ">
             
              {/* container 1 */}
              <div className="container2  w-full h-[49%]      flex flex-col   gap-6 md:flex-row-reverse md:w-[100%] md:h-[50%] lg:gap-3 lg:flex-row lg:h-full lg:w-[50%]  ">
                {/* part 1 */}
                <div className="part1 sec-4-card-left w-full h-[50%] md:h-[90%]   lg:h-full md:w-[50%] rounded-2xl overflow-hidden  ">
                  <img
                    src="/pic4.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 2 */}
                <div
                  onClick={() => router.push("/mortgage")}
                  className="part2  sec-4-card-left w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--primg)] text-white relative md:h-[90%] lg:h-full md:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  "
                >
                  <h3 className="text-[20px] font-bold cursor-pointer ">
                 Mortgage
                  </h3>

                  <p className=" text-[14px] text-white/80   mt-2">
                    {" "}
                  With over a decade of experience, we provide tailored mortgage solutions to help you buy your first home, upgrade, invest, or refinance with confidence.
                  </p>
                  <div className="absolute h-[4em] w-[4em] bg-white hover:bg-zinc-100 top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f]">
                    <i className="text-4lg cursor-pointer ri-arrow-right-up-line text-black text-[25px]"></i>
                  </div>
                </div>
              </div>
               {/* container 2 */}
              <div className="container1 w-full h-[49%] flex flex-col gap-6  md:flex-row md:h-[50%]  md:w-[100%] lg:gap-3 lg:h-full lg:w-[50%]  ">
                {/* part 3 */}
                <div className="part3 sec-4-card-left w-full h-[50%] md:h-[90%]   lg:h-full md:w-[50%] rounded-2xl overflow-hidden ">
                  <img
                    src="/pic3.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 4 */}
                <div
                  onClick={() => router.push("/insurance")}
                  className="part4 sec-4-card-left w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--tri)] relative md:h-[90%] lg:h-full md:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  "
                >
                  <h3 className="text-white cursor-pointer font-semibold text-[20px] ">
                    Insurance
                  </h3>

                  <p className=" text-[14px] text-white/80 mt-2">
                    {" "}
                  As specialist insurance advisers with more than 20 years’ experience, we design protection strategies that reflect your lifestyle, responsibilities, and future goals.
                  </p>
                  <div className="absolute h-[4em] w-[4em] bg-white top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f ] hover:bg-zinc-100">
                    <i className="text-4lg cursor-pointer ri-arrow-right-up-line text-black text-[25px] "></i>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
    )
}