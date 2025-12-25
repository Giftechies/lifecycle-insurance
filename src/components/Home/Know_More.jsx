'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function KnowMore(){
    const sec2 = useRef()
    const router = useRouter()
    
      useGSAP(() => {
    if (!sec2.current) return;
    gsap.from(".sec-2-anim", {
      opacity: 0,
      x: -400,
      z: 999,
      duration: 1,
      delay: 0.5,

      scrollTrigger: {
        trigger: ".sec-2-anim",
        start: "top 95%",
      },
    });
  },  );

    return(
        <section
          ref={sec2}
          className="section-2 w-full  p-4 lg:px-[3rem] xl:px-[3rem] lg:py-[80px] max-w-[1600px] mx-auto  "
        >
          <main className="  w-[100%]    lg:flex  relative ">
            <div className="imgLeft w-full  rounded-4xl overflow-hidden border max-md:aspect-[1.5] md:aspect-[1.8]  lg:w-[52%] lg:h-[42rem]  ">
              <img
                src="/about-pic1.jpg"
                className=" w-full lg:h-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="contentRight max-lg:mt-3 lg:w-[55%] lg:flex gap-10 flex-col tracking-wider lg:text-justify  ">
              <div className="uppercontent w-full xl:w-[80%] leading-6 lg:ml-12  ">
                <h3 className="text-[var(--primg)] font-semibold  ">
                  {" "}
                  <i className="  ri-record-circle-line font-medium mr-2  "></i>
                Get to Know Life Cycle Financial

                </h3>
                <p className=" text-[16px]  text-[var(--secgr)] font-normal  mt-2">
                  We provide wide range of financial services to the clients including Mortgages both Residential & Commercial, & Personal Insurance products such as life, Health, Income Protection, Mortgage Protection, Redundancy cover and Trauma Insurance. For home, contents, car and business Insurance we have additional specialists that we call upon.
                </p>
                <button
                  onClick={() => router.push("/about-us")}
                  className=" flex items-center bg-[var(--primg)] cursor-pointer text-white px-7 py-3 rounded-full  mt-4   text-[16px] hover:text-black hover:scale-[.98] duration-300 "
                >
                  Know more <i className="ri-arrow-right-s-line    "></i>
                </button>
              </div>

              <div className="middle  md:flex max-md:gap-10  lg:gap-2 w-full  ">
                <div className="sec-2-OneBox sec-2-anim md:w-[55%]  lg:w-[80%]  ">
                  <div className="text bg-[var(--primg)] text-white mt-6 max-lg:rounded-4xl  p-6 md:w-[100%] md:p-12 md:flex md:flex-col lg:py-10 lg:px-6 xl:px-10 xl:py-16    lg:w-[100%] justify-center items-center  lg:rounded-r-4xl    ">
                    <div className="">
                      <p className=" font-semibold">
                        {" "}
                        <img
                          src="/checksquare.svg"
                          className="h-9 w-9 mb-2"
                          alt=""
                        />
                       One Call Does It All
                      </p>
                      <span className="  text-white/100 text-[14px] tracking-widest mt-2   ">
                        From application to approval, we handle everything under one roof. With access to top banks and lenders across New Zealand
                      </span>
                    </div>
                  </div>
                  <div className="call text-[var(--primg)] font-medium md:ml-15 lg:ml-6 xl:ml-16 flex  gap-2 max-md:hidden ">
                    <div className="  p-4 bg-[var(--secgr)] rounded-b-full ">
                      <img
                        src="/phone.svg"
                        className=" w-[2rem]  cursor-pointer object-cover object-center "
                        alt=""
                      />
                    </div>

                    <div className="call">
                      <a href="tel:0800507770" className=" block font-semibold">
                        Call Now
                      </a>
                      <a
                        href="tel:0800507770"
                        className=" cursor-pointer text-[var(--secgr)] font-semibold text-[18px]"
                      >
                        0800 50 7770
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lowerpic sec-2-anim w-full flex flex-col items-center max-md:mt-6 md:w-[40%] lg:w-[40%]  lg:mt-8 xl:mt-3   ">
                  <div className="img">
                    <img
                      src="/sec2pic2.png"
                      className=" h-[19rem] lg:h-[16rem] xl:h-[18rem] "
                      alt=""
                    />
                  </div>

                  <div className="call text-[var(--primg)] font-medium mt-2 flex   gap-2 md:hidden ">
                    <div className="  p-4 bg-[var(--secgr)] rounded-full ">
                      <img
                        src="/phone.svg"
                        className=" w-[2rem]   object-cover object-center "
                        alt=""
                      />
                    </div>

                    <div className="call">
                      <a href="tel:0800507770" className=" block font-semibold">
                        Call Now
                      </a>
                      <a
                        href="tel:0800507770"
                        className="  text-[var(--secgr)]"
                      >
                        0800 50 7770
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
    )
}