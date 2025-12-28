'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function KnowMore({oneMoreData}) {
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

  // console.log("one more",oneMoreData);
  

    return(
        <section
          ref={sec2}
          className="section-2 w-full  p-4 lg:px-[3rem] xl:px-[3rem] lg:py-[80px] max-w-[1600px] mx-auto  "
        >
          <main className="  w-[100%]    lg:flex  relative ">
            <div className="imgLeft w-full  rounded-4xl overflow-hidden border max-md:aspect-[1.5] md:aspect-[1.8]  lg:w-[52%] lg:h-[42rem]  ">
              <Image
              width={600}
              height={600}
                src={oneMoreData?.image1 || "/about-pic1.jpg"}
                className=" w-full lg:h-full object-cover object-center"
                alt={oneMoreData?.image1Alt || "About us image"}
              />
            </div>
            <div className="contentRight max-lg:mt-3 lg:w-[55%] lg:flex gap-10 flex-col tracking-wider lg:text-justify  ">
              <div className="uppercontent w-full xl:w-[80%] leading-6 lg:ml-12  ">
                <h3 className="text-[var(--primg)] font-semibold  ">
                  {" "}
                  <i className="  ri-record-circle-line font-medium mr-2  "></i>
                {oneMoreData?.heading || "Know More About Our Services"}

                </h3>
                <p className=" text-[16px]  text-[var(--secgr)] font-normal  mt-2">
              {oneMoreData?.content || "something went wrong"}
                </p>
                <Link
                  href={oneMoreData?.buttonLink}
                  className=" flex items-center bg-[var(--primg)]  text-white px-7 py-3 rounded-full  mt-4   text-[16px] hover:text-black hover:scale-[.98] duration-300 w-fit "
                >
                  {oneMoreData?.buttonText || "Know more"}<i className="ri-arrow-right-s-line    "></i>
                </Link>
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
                     {oneMoreData?.boxheading || "All-In-One Mortgage Solution"}
                      </p>
                      <span className="  text-white/100 text-[14px] tracking-widest mt-2   ">
                      {oneMoreData?.boxcontent || 'something went wrong '}
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
                      <a href={`tel:${oneMoreData?.contact || "0800507770"}`} className=" block font-semibold">
                        Call Now
                      </a>
                      <a
                        href={`tel:${oneMoreData?.contact || "0800507770"}`}
                        className=" cursor-pointer text-[var(--secgr)] font-semibold text-[18px]"
                      >
                       {oneMoreData?.contact || "0800 50 7770"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="lowerpic sec-2-anim w-full flex flex-col items-center max-md:mt-6 md:w-[40%] lg:w-[40%]  lg:mt-8 xl:mt-3   ">
                  <div className="img">
                    <Image
                    width={300}
                    height={300}
                    src={oneMoreData?.image2 || "/sec2-pic2.jpg"}
                      className=" h-[19rem] lg:h-[16rem] xl:h-[18rem] "
                      alt={oneMoreData?.image2Alt || "Know more image"}
                    />
                  </div>

                  <div className="call text-[var(--primg)] font-medium mt-2 flex   gap-2 md:hidden ">
                    <div className="  p-4 bg-[var(--secgr)] rounded-full ">
                      <Image
                      width={80}
                      height={80}
                        src="/phone.svg"
                        className=" w-[2rem]   object-cover object-center "
                        alt=""
                      />
                    </div>

                    <div className="call">
                      <a href={`tel:${oneMoreData?.contact || "0800507770"}`} className=" block font-semibold">
                        Call Now
                      </a>
                      <a
                        href={`tel:${oneMoreData?.contact || "0800507770"}`}
                        className="  text-[var(--secgr)]"
                      >
                        {oneMoreData?.contact || "0800 50 7770"}
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