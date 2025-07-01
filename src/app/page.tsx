"use client";
import Image from "next/image";
import Nav from "./Components/Nav/page";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const iconBox = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);

  // useGSAP(() => {
  //   gsap.from(".icon_box", {
  //     opacity: 0,
  //     x: -100,
  //     delay: 0.5,
  //     scrollTrigger: ".icon_box",
  //   });
  // }, []);

  // useGSAP(
  //   () => {
  //     gsap.from(".sec2part3", {
  //       opacity: 0,
  //       x: -400,
  //       z: 999,
  //       duration: 2,
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: ".sec2part3",
  //         start: "top 100%",
  //       },
  //     });
  //   },
  //   { scope: sec2 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.from(".sec3animate", {
  //       y: -250,
  //       opacity: 0,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: ".section_3",
  //         start: "top 80%",
  //       },
  //     });
  //   },
  //   { scope: sec3 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.from(".sec3animate2", {
  //       y: 250,
  //       opacity: 0,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: ".section_3",
  //         start: "top 80%",
  //       },
  //     });
  //   },
  //   { scope: sec3 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.to(".sec3animate3", {
  //       y: 300,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: ".section_3",
  //         start: "top 80%",
  //         scrub:2
  //       },
  //     });
  //   },
  //   { scope: sec3 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.from(".sec4anime", {
  //       x: -450,
  //       opacity: 0,
  //       duration: 2.5,
  //       delay: 0.5,
  //       stagger: -0.7,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: sec4.current,
  //         start: "top 50%",
  //       },
  //     });
  //   },
  //   { scope: sec4 }
  // );

  // useGSAP(() => {
  //   gsap.from(".marquee", {
  //     xPercent: -100,
  //     duration: 20,
  //     ease: "none",
  //     repeat: -1,
  //   });
  // });

  

  return (
    <>
      <main className="  tracking-widest w-full   h-full relative  ">

        {/* section 1 */}
        <section className="relative  overflow-hidden     ">
        
            {/* Background Image */}
            <img
              src="/main-banner.jpg"
              alt="Hero Banner"
              className="absolute inset-0 h-full w-full object-cover z-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

            {/* Text + Icon Content */}
            <div className="relative  w-full h-full max-w-[1500px] mx-auto">
            <div className="relative pt-25 px-4 lg:px-[9%] lg:pt-50 pb-10 z-20 text-white ">
              <p className="animate-fadeInUp text-gray-300 text-sm md:text-base font-semibold mb-2">
                <i className="ri-record-circle-line mr-2 text-lg font-extralight text-white"></i>
                LIFE CYCLE FINANCIAL
              </p>

              <div>
                <h1 className="text-[26px] md:text-[46px] lg:text-5lg font-semibold leading-tight mt-6">
                  From Smart{" "}
                  <span className="text-[var(--primg)]">Financing</span> to
                </h1>
                <h1 className="text-[26px] md:text-[46px] lg:text-5lg font-semibold leading-tight">
                  Dream <span className="text-[var(--primg)]">Mortgages</span>.
                </h1>
                <h1 className="text-[26px] md:text-[46px] lg:text-5lg font-semibold leading-tight">
                  We Cover It All
                </h1>
              </div>

              <p className="mt-4 text-sm md:text-base text-white/70 tracking-widest max-w-3lg">
                Lifecycle Financial is a leading independent financial advisory
                company providing a wide range of services including residential
                & commercial mortgages.
              </p>

              <button className="mt-6 tracking-widest py-3 px-8 text-sm mb-10 border border-white rounded-full hover:text-[var(--primg)] hover:border-[var(--primg)] transition-all duration-300">
                Request An Appraisal{" "}
                <i className="ml-2 ri-arrow-right-wide-fill"></i>
              </button>

              {/* Icon Box */}
              <div className="mt-12 w-full overflow-hidden bg-white/10 border border-dotted border-white/40 md:w-[70%] rounded-3xl flex flex-col  md:flex-row items-center lg:w-[50%] justify-between p-4 gap-6">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center flex-1 border-b md:border-b-0 md:border-r border-dotted border-white/40 p-4">
                  <img
                    src="./thumbsup.svg"
                    alt="Rating"
                    className="w-12 h-12"
                  />
                  <h1 className="text-white font-semibold mt-3 text-sm">
                    4.9 Star Ratings
                  </h1>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center flex-1 border-b md:border-b-0 md:border-r border-dotted border-white/40 p-4">
                  <img
                    src="./conversation.svg"
                    alt="Clients"
                    className="w-12 h-12"
                  />
                  <h1 className="text-white font-semibold mt-3 text-sm">
                    300+ Happy Clients
                  </h1>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center flex-1 p-4">
                  <img
                    src="./ok.svg"
                    alt="Satisfaction"
                    className="w-12 h-12"
                  />
                  <h1 className="text-white font-semibold mt-3 text-sm">
                    Satisfaction 100%
                  </h1>
                </div>
              </div>
            </div>
            </div>
          
        </section>

        {/* section 2 */}
         <section ref={sec2} className="section_2 w-screen  max-w-[1500px] mx-auto  overflow-hidden ">
          <section className="section_2 px-4  w-full py-16  md:relative lg:h-[47em]  md:px-6 lg:px-[9%] overflow-hidden    ">
            {/* Part-1 */}
            <div className="part_1 h-[22em] w-ful rounded-[40px] mb-4  overflow-hidden   lg:absolute  lg:left-30 lg:w-[35em] lg:h-[40em]   xl:left-30 xl:w-[35em] xl:h-[40em]  lg:z-10  ">
              <img
                src="./about-pic1.jpg"
                className=" h-full w-full object-cover "
                alt=""
              />
            </div>
            {/* Part-2 */}
            <div className="part_2 rounded-[15px]  lg:mb-4 w-full mt-4 lg:absolute  lg:w-[40em] lg:right-40  xl:right-30">
              <p className="text-[var(--primg)]  text-lg font-semibold">
                {" "}
                <i className=" mr-2 text-lg  ri-record-circle-line "></i>Get to
                Know Life Cycle Financial
              </p>
              <p className=" text-[14px] leading-6.5  mt-3 font-extralight text-justify tracking-wider">
                We provide wide range of financial services to the clients
                including Mortgages both Residential & Commercial, & Personal
                insurance products such as life, Health, Income Protection,
                Mortgage Protection, Redundancy cover and Trauma insurance. For
                home, contents, car and business insurance we have additional
                specialists that we call upon.
              </p>
              <button className=" bg-[var(--primg)]  text-white px-7 py-3 rounded-full  mt-4   text-sm ">
                Know more
              </button>
            </div>
            {/* Part-3 */}
           
            <div className="sec2part3 part_1 px-4  py-6  mt-6  h-[16em] rounded-[20px] mb-4   w-full md:w-[60%] md:px-10 md:py-12 bg-[var(--primg)] text-white  lg:absolute lg:w-[31%] lg:h-[40%] lg:rounded-l-none lg:right-[25%] lg:px-8 lg:py-8  lg:bottom-[15%] md:static">
              <p className=" lg:mt-5 text-[18px] font-semibold">
                {" "}
                <img src="checksquare.svg" className="h-9 w-9 mb-2   " alt="" />
                One Call Does It All
              </p>
              <h1 className="mt-3  text-white/100 text-[14px] tracking-widest text-justify ">
                From application to approval, we handle everything under one
                roof. With access to top banks and lenders across New Zealand
              </h1>
            </div>
            {/* Part -4 */}
            
            <div className="sec2part3 part_1 h-[20em]   rounded-[15px] md:mb-4  w-full flex flex-col items-center justify-cente md:absolute  md:top-135 md:-right-12 md:h-[40%] md:w-[50%] lg:w-[25%] lg:h-[60%] lg:right-0 lg:top-67   ">
              <div className="img h-[100%]  sm:h-[60%] w-[60%] mt-0 sm:w-[70%] md:w-[50%]  lg:h-[80%] lg:w-[65%]   md:mt-8 lg:mt-0">
                <img
                  src="./sec2pic2.png"
                  className="h-full w-[100%] lg:h-[100%] object-top object-cover "
                  alt=""
                />
              </div>
              <div className="sec2part3 flex  mt-2  md:absolute md:-left-80 md:-bottom-5  lg:-left-80 lg:bottom-[5.5%] ">
                <div className="bg-[var(--secgr)]  flex items-center px-2.5 rounded-[99999px] lg:px-4 lg:py-5 md:rounded-t-[30px]">
                  <img
                    src="./phone.svg"
                    className=" h-6 w-6  lg:h-8 lg:w-8"
                    alt=""
                  />
                </div>
                <div className="ml-2  ">
                  <p className="text-sm font-sans tracking-normal font-semibold text-[var(--primg)]">
                    Call now
                  </p>
                  <p className="tracking-normal">0800 50 7770</p>
                </div>
              </div>
            </div>
          </section>
        </section>

           {/* section 3 */}
        <section ref={sec3} className="section_3  bg-[var(--primg)] overflow-hidden ">
          <section className="section_3 px-4  w-full md:py-4  lg:pl-55  lg:py-20 flex relative max-w-[1500px] m-auto ">
            {/* left */}
            <div className="container   text-[20px]  md:flex md:gap-6 md:items-center md:justify-center  flex-wrap  lg:gap-6   lg:w-[50%]">
              <h1 className="text-white/80 leading-9 text-[34px]  font-sans lg:leading-9   font-bold lg:w-[90%] mt-8 mb-8 lg:mt-0 lg:mb-0">
                {" "}
                Numbers That Speak for Themselves
              </h1>
            <div className="container  md:flex md:gap-4   md:items-center md:justify-center  flex-wrap  lg:gap-8   lg:w-[100%]">
              

              <div className="sec3animate h-[11em] w-full md:w-[40%]  text-[15px]  bg-white rounded-[30px] mb-6 md:mb-0  py-8 px-10 lg:p-10 lg:w-[45%] lg:h-[13em] lg:pb-20 lg:mb-0 lg:mt-0 ">
                <img src="./target.svg" className=" h-8 w-8 mb-3" alt="" />
                <p className=" font-semibold text-[20px] text-black/50 ">95%</p>
                <p className="text-[16px] tracking-normal ">
                  Pre-approval Success rate
                </p>
              </div>
              <div className="sec3animate h-[11em] w-full md:w-[40%] text-[15px]  bg-white rounded-[30px] mb-6 md:mb-0 py-8 px-10 lg:p-10 lg:w-[45%] lg:h-[13em] lg:pb-20 lg:mb-0 lg:mt-0 ">
                <img src="./timer.svg" className=" h-8 w-8 mb-3" alt="" />
                <p className="font-semibold text-[20px] text-black/50 ">48 Hours</p>
                <p className="text-[16px] tracking-normal ">
                  Average time for loan approvals
                </p>
              </div>
              <div className="sec3animate h-[11em] w-full md:w-[40%] text-[15px]  bg-white rounded-[30px] mb-6 md:mb-0 py-8 px-10 lg:p-10 lg:w-[45%] lg:h-[13em] lg:pb-20 lg:mb-0 lg:mt-0  ">
                <img src="./family.svg" className=" h-8 w-8 mb-3" alt="" />
                <p className=" font-semibold text-[20px] text-black/50 ">2,500+</p>
                <p className="text-[16px] tracking-normal ">
                  Families helped in buying their first home
                </p>
              </div>
              <div className="sec3animate h-[11em] w-full md:w-[40%] text-[15px]  bg-white rounded-[30px] mb-6 md:mb-0 py-8 px-10 lg:p-10 lg:w-[45%] lg:h-[13em] lg:pb-20 lg:mb-0 lg:mt-0 ">
                <img src="./bank.svg" className=" h-8 w-8 mb-3" alt="" />
                <p className=" font-semibold text-[20px] text-black/50 ">20+</p>
                <p className="text-[16px] tracking-normal  ">
                  Trusted bank and insurance partners
                </p>
              </div>
              </div>
             
            </div>
            {/* right */}
            <div className="sec3animate3 hidden z-90  lg:block w-[23%] h-[100%] rounded-b-[30px]  overflow-hidden absolute -top-85 right-25">
              <img
                src="12.jpg"
                className=" h-full w-full object-cover"
                alt=""
              />
            </div>
          </section>
        </section>

         {/* section 4 */}
        <section ref={sec4} className="Section_4  lg:py-5 max-w-[1500px] m-auto overflow-hidden ">
          <main className=" pt-10 py-3 px-4 lg:px-[9%]  ">
            {/* part 1 */}
            <div className="h-[12em]  w-[100%] lg:mb-0 lg:flex  ">
              
                <div className="  lg:w-[100%]">
                  <p className="text-[var(--primg)]  lg:text-[16px]">
                    {" "}
                    <i className="ri-record-circle-line mr-1 text-2lg"></i>Our Service
                  </p>
                  <h1 className="text-[30px] font-semibold leading-8 sm:text-[30px]  mb-4 mt-3 tracking-normal md:text-[40px] md:leading-10 text-zinc-600/90  md:font-semibold lg:mt-6 lg:leading-13 ">
                    Comprehensive Financial & Mortgage Solutions
                  </h1>
                </div>
                <div className=" ">
                  <p className=" text-[14px] lg:pt-16 lg:pl-24 ">
                    {" "}
                    We have a team of experienced advisors who have already
                    proved themselves in the financial market.
                  </p>
                </div>
              
            </div>
            {/* part 2 */}
            <div className="superpart-2  w-full h-[75em] mt-10 flex flex-col gap-6 sm:mt-0 md:h-[40em] md:mt-0 lg:flex-row lg:mt-4  lg:h-[16em] ">
              {/* container 1 */}
              <div className="container1 w-full h-[49%] flex flex-col gap-6 md:flex-row md:h-[50%]  md:w-[100%]  lg:h-full lg:w-[50%]  ">
                {/* part 1 */}
                <div className="part1 w-full h-[50%] md:h-[90%]   lg:h-full lg:w-[50%] rounded-2xl overflow-hidden ">
                  <img
                  src="./pic3.jpg"
                  className=" h-full w-full  object-cover"
                  alt=""
                />
                </div>
                {/* part 2 */}
                <div className="part2 w-full h-[50%] px-8 py-16 bg-[var(--tri)] relative md:h-[90%] lg:h-full lg:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden ">
                   <p className="text-white font-semibold text-[20px] lg:mb-3">
                  INSURANCE
                </p>

                <p className=" text-[14px] text-white/80 text-justify">
                  {" "}
                  As specialist Insurance Brokers with many years of experience,
                  we are able to advise you and provide you with the solutions
                  that best suit your needs,
                </p>
                   <div className="absolute h-[4em] w-[4em] bg-white top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f]">
                  <i className="text-4lg ri-arrow-right-up-line text-black"></i>
                </div>

                </div>
              </div>
              {/* container 2 */}
              <div className="container2  w-full h-[49%]      flex flex-col   gap-6 md:flex-row-reverse md:w-[100%] md:h-[50%] lg:flex-row lg:h-full lg:w-[50%]  ">
                {/* part 3 */}
                <div className="part3 w-full h-[50%] md:h-[90%]   lg:h-full lg:w-[50%] rounded-2xl overflow-hidden  "><img
                  src="./pic4.jpg"
                  className=" h-full w-full  object-cover"
                  alt=""
                /></div>
                {/* part 4 */}
                <div className="part4 w-full h-[50%] px-8 py-16 bg-[var(--primg)] text-white relative md:h-[90%] lg:h-full lg:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  ">
                   <p className="text-[20px] font-bold ">Mortgages</p>

                <p className=" text-[14px] text-white/80  text-justify mt-2">
                  {" "}
                  A lot of lenders now require a deposit of around 20%, but we
                  are still able to get some home loans done with as little as a
                  5% deposit.
                </p>
                   <div className="absolute h-[4em] w-[4em] bg-white top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f]">
                  <i className="text-4lg ri-arrow-right-up-line text-black"></i>
                </div>
               
                </div>
              </div>

            </div>
          </main>
        </section>

          {/* section 5 */}
        <section className="section_5 h-[85em] md:h-[62em]  lg:h-[70em] overflow-hidden">
          <main className=" w-full px-4  lg:relative  lg:py-10 max-w-[1500px] mx-auto ">
            {/* part 1 */}
            <div className="h-[17em] w-[100%] rounded-[20px] mt-2  overflow-hidden lg:absolute lg:z-10 lg:top-0 lg:left-40 lg:h-[43em]  lg:w-[32%] ">
              <img
                src="./sec5.jpg  "
                className=" h-full w-full object-cover "
                alt=""
              />
            </div>

            {/* part 2 */}
            <div className="h-[17em] md:h-[10em]  w-[100%]  mt-2 mb-2 rounded-[20px] pt-3 px-4  text-black lg:absolute lg:w-[48%] lg:right-35 font-sans lg:top-12 ">
              <p className="text-[var(--primg)] font-bold text-[20px]">
                {" "}
                <i className="ri-record-circle-line mr-2  tracking-normal font-bold  text-[20px] "></i>
                Mortgage Services Backed by Experience
              </p>

              <p className="text-[16px] mt-4">
                {" "}
                From application to approval, we handle everything under one
                roof. With access to top banks and lenders across New Zealand,
                we provide custom loan options, expert advice, and stress-free
                support
              </p>
            </div>
            {/* part 3 */}
            <div className=" w-full  lg:h-260  relative ">
              {/* icon box */}
              <div className="lg:mt-8 p-4 mt-2 sm:mt-2 md:mt-2 rounded-t-[30px] lg:rounded-[30px] bg-[var(--primg)]  text-white lg:absolute lg:h-[25em] lg:w-[63%] lg:top-[10em]  lg:z-0 lg:right-23  lg:pl-30 lg:py-12 tracking-wide ">
                {/* part1 */}
                <div className="md:flex lg:mb-15  ">
                <div className="h-[6em] w-full md:h-[9em] md:p-8 p-2 md:flex-col  flex items-center md:gap-2 gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0 ">
                  <div className=" h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px] ">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium md:text-[16px] ">Home Loan</h1>
                </div>
                <div className="h-[6em] w-full md:h-[9em] md:p-8 p-2  md:flex-col flex items-center md:gap-2  gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0  ">
                  <div className=" h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px] ">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium md:text-[16px] ">Investment Loan</h1>
                </div>
                <div className="h-[6em] w-full p-2  md:h-[9em] md:p-8 md:flex-col flex items-center md:gap-2 gap-6   lg:h-[7em] lg:flex-col  lg:p-0  ">
                  <div className=" h-[63%] w-[18%]  md:w-[25%]  text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px] ">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium  md:text-[16px] ">Refinance</h1>
                </div>
              </div>
              <div className="md:flex md:mt-3 ">
                {" "}
                <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 lg:border-r  md:flex-col  flex items-center md:gap-2 gap-6  lg:h-[7em] lg:flex-col  lg:p-0  ">
                  <div className="h-[63%] w-[18%]  md:w-[25%]  text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px] ">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium  md:text-[16px] ">Business Loan</h1>
                </div>
                <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 md:flex-col flex items-center md:gap-2 gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0  ">
                  <div className="h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px] ">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium  md:text-[16px]">
                    Construction Loan
                  </h1>
                </div>
                <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 md:flex-col flex items-center gap-6 md:gap-2  lg:h-[7em] lg:flex-col  lg:p-0  ">
                  <div className="h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[16%]    bg-white/20 rounded-[10px]">
                    {" "}
                    <img
                      src="./checksquare.svg"
                      className=" h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <h1 className=" text-[20px] font-medium  md:text-[16px]">Commercial Loan</h1>
                </div>
              </div>
              </div> 
               {/* marquee box */}
              <div className="  flex items-center bg-[var(--primg)] rounded-b-[30px] lg flex-col p-2 lg:bg-[var(--primg)] lg:bottom-0 lg:w-[85%] lg:h-[20em] lg:left-35 lg:rounded-[30px] lg:absolute lg:p-12   ">
                <h1 className="text-center text-white md:text-[18px] md:w-[40%] md:leading-5 md:tracking-tight md:font-bold  my-3 lg:text-4lg lg:w-[50%] lg:font-semibold">
                  Over 20 Handpicked partners to serve You Better
                </h1>
                {/* marquee */}
                <div className="  h-[6em] w-[100%] rounded-[20px] pt-5 bg-white flex flex-wrap gap-7 flex-col   items-center justify-center    lg:h-[8.5em] overflow-hidden ">
                  <div className="marquee h-[100%] w-[100%] rounded-[20px]  border-black bg-white flex flex-wrap gap-7 flex-col   items-center justify-center  lg:h-[100%]  ">
                    <div className=" h-[6em] w-[90%] rounded-[20px] b p-4 bg-white flex flex-wrap flex-col lg:gap-10 items-center lg:justify-center justify-between lg:h-[8.5em] ">
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="7.png"
                          alt=""
                          className=" h-full w-full object-cover"
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="4.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="3.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="6.png"
                          className=" h-[100%] w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="1.png"
                          alt=""
                          className=" h-full w-full object-cover"
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="2.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="5.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[20%] ">
                        <img
                          src="9.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" h-[6em] w-[90%] rounded-[20px] b p-4 bg-white flex flex-wrap flex-col lg:gap-10 items-center lg:justify-center justify-between lg:h-[8.5em] ">
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="7.png"
                          alt=""
                          className=" h-full w-full object-cover"
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="4.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="3.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="6.png"
                          className=" h-[100%] w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[15%] ">
                        <img
                          src="1.png"
                          alt=""
                          className=" h-full w-full object-cover"
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="2.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" h-[60%] w-[40%] lg:h-[40%] lg:w-[20%] ">
                        <img
                          src="5.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className=" hidden h-[60%] w-[40%] lg:block lg:h-[90%] lg:w-[20%] ">
                        <img
                          src="9.png"
                          className=" h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* marquee end */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>

          {/* section 6 */}
        <section className="secton_6 w-full h-[70em] mt-4 lg:h-[45em] max-w-[1500px] mx-auto overflow-hidden ">
          <main className="px-4 w-full lg:flex flex-row-reverse lg:px-[9%] items-center justify-center gap-10 ">
            {/* Form Section */}
            <div className="form lg:w-[50%]">
              <p className="text-[var(--primg)]">
                <i className="ri-record-circle-line mr-2"></i> Reach Out
              </p>
              <h1 className="text-lg font-semibold mt-2">
                Let’s Connect and Get in Touch With Us.
              </h1>

              <form className="pt-4 flex flex-col gap-3 placeholder-[#A9A8A9]   text-[#A9A9A9]  ">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                />

                {/* Flex Row for Email and Phone */}
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                  />
                </div>

                <select
                  name="service"
                  className="w-full h-12 pl-4  bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                >
                  <option value="" disabled selected>
                    Service you're interested in?
                  </option>
                  <option value="Insurance">Insurance</option>
                  <option value="Mortgage">Mortgage</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Write your message."
                  className="w-full min-h-[100px] lg:min-h-[200px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                ></textarea>

                <button
                  type="submit"
                  className="py-2 px-6 rounded-lg bg-[var(--primg)] outline-0  text-white font-semibold hover:bg-opacity-90 transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Image & Box Section */}
            <div className="p-4 lg:w-[50%] lg:p-0 ">
              <div className="mt-6 h-[32em]  relative lg:h-[36em] ">
                <div className="h-[70%]  overflow-hidden rounded-[40px]">
                  <img
                    src="8.jpg"
                    className="h-full w-full object-cover"
                    alt="Contact Visual"
                  />
                </div>

                {/* Info Box */}
                <div className="h-[50%] p-3 w-[85%] bg-white/95 shadow-2lg rounded-[20px] absolute bottom-0 left-8 lg:w-[80%] lg:left-15 ">
                  <div className="w-full h-[55%] flex flex-col gap-2 items-center justify-around">
                    <i className="ri-group-fill bg-[var(--primg)] text-white text-4lg rounded-[10px] p-3"></i>
                    <h1 className="text-[var(--primg)] text-[18px] tracking-normal font-semibold ">
                      Honored to Be a Member Of
                    </h1>
                  </div>
                  <div className=" mt-4 w-full h-[35%] lg:mt-2">
                    <img
                      src="10.jpg"
                      className="h-full w-full object-cover"
                      alt="Membership Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
       
      </main>
    </>
  );
}
