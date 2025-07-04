"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useEnquiryContext, EnquiryData } from "./Context/EnquiryContext";
import { nanoid } from "nanoid";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const iconBox = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);

  useGSAP(() => {
    gsap.from(".icon_box", {
      opacity: 0,
      x: -100,
      delay: 0.5,
      scrollTrigger: ".icon_box",
    });
  }, []);

  useGSAP(
    () => {
      gsap.from(".sec2part3", {
        opacity: 0,
        x: -400,
        z: 999,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".sec2part3",
          start: "top 100%",
        },
      });
    },
    { scope: sec2 }
  );

  useGSAP(
    () => {
      gsap.from(".sec3animate", {
        y: -250,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".section_3",
          start: "top 80%",
        },
      });
    },
    { scope: sec3 }
  );

  useGSAP(
    () => {
      gsap.from(".sec3animate2", {
        y: 250,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".section_3",
          start: "top 80%",
        },
      });
    },
    { scope: sec3 }
  );

  useGSAP(
    () => {
      gsap.to(".sec3animate3", {
        y: 300,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".section_3",
          start: "top 80%",
          scrub: 2,
        },
      });
    },
    { scope: sec3 }
  );

  useGSAP(
    () => {
      gsap.from(".sec4anime", {
        x: -450,
        opacity: 0,
        duration: 2.5,
        delay: 0.5,
        stagger: -0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sec4.current,
          start: "top 50%",
        },
      });
    },
    { scope: sec4 }
  );

  useGSAP(() => {
    gsap.from(".marquee", {
      xPercent: -100,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  const { setEnquiries, enquiries } = useEnquiryContext();

  const { register, handleSubmit, reset } = useForm<EnquiryData>();

  const onSubmit = (data: EnquiryData) => {
    data.id = nanoid();
    const updated = [...enquiries, data];
    setEnquiries(updated);
    reset();
    console.log("submited");
  };

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
          <div className="relative  w-full h-full max-w-[1600px] mx-auto">
            <div className="relative pt-25 px-4 md:px-[2.5rem]  lg:px-[3.5rem] xl:px-[9%] lg:pt-50 pb-10 z-20 text-white ">
              <p className="animate-fadeInUp text-gray-300 text-sm md:text-base font-semibold mb-2">
                <i className="ri-record-circle-line mr-2 text-lg font-extralight text-white"></i>
                LIFE CYCLE FINANCIAL
              </p>

              <div>
                <h1 className="text-[26px] md:text-[46px] lg:text-5lg font-semibold leading-tight mt-6  ">
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

              <p className="mt-4 text-sm md:text-base lg:w-[70%] text-white/70 tracking-widest max-w-3lg">
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
        <section className="section-2 max-w-[1600px] mx-auto  ">
          <main className="  w-full p-4  lg:px-[3rem] lg:flex  relative ">
            <div className="imgLeft w-full  rounded-4xl overflow-hidden border max-md:aspect-[1.5] md:aspect-[1.8]  lg:w-[44%] lg:h-[37rem]  ">
              <img
                src="./about-pic1.jpg"
                className=" w-full lg:h-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="contentRight lg:w-[55%] lg:flex flex-col   ">
              <div className="uppercontent  lg:w-[90%] lg:ml-8 xl:ml-16 ">
                <h1 className="text-[var(--primg)] font-semibold text-[18px] ">
                  {" "}
                  <i className="  ri-record-circle-line font-medium mr-1  "></i>
                  Get to Know Life Cycle Financial
                </h1>
                <p className=" text-[14px] text-justify text-[var(--secgr)] mt-2">
                  We provide wide range of financial services to the clients
                  including Mortgages both Residential & Commercial, & Personal
                  insurance products such as life, Health, Income Protection,
                  Mortgage Protection, Redundancy cover and Trauma insurance.
                  For home, contents, car and business insurance we have
                  additional specialists that we call upon.
                </p>
                <button className=" bg-[var(--primg)]  text-white/80 px-7 py-3 rounded-full  mt-4   text-[12px] ">
                  Know more
                </button>
              </div>

              <div className="middel md:flex gap-10 ">
                <div className="text bg-[var(--primg)] text-white mt-6 max-lg:rounded-4xl  p-6 md:w-[55%] md:p-12 md:flex md:flex-col lg:py-3 lg:px-6 xl:px-16 lg:w-[60%] max-lg:justify-center lg:rounded-r-4xl    ">
                  <p className=" lg:mt-5  text-[18px] font-semibold">
                    {" "}
                    <img
                      src="checksquare.svg"
                      className="h-9 w-9 mb-2   "
                      alt=""
                    />
                    One Call Does It All
                  </p>
                  <h1 className="mt-3  text-white/100 text-[14px] tracking-widest md:text-justify l  ">
                    From application to approval, we handle everything under one
                    roof. With access to top banks and lenders across New
                    Zealand
                  </h1>
                </div>

                <div className="lowerpic w-full flex flex-col items-center mt-6 md:w-[40%] lg:w-[30%]  ">
                  <div className="img">
                    <img
                      src="./sec2pic2.png"
                      className=" h-[19rem] lg:h-[16rem] xl:h-[18rem] "
                      alt=""
                    />
                  </div>

                  <div className="call text-[var(--primg)] font-medium mt-2 flex   gap-2 md:hidden ">
                    <div className="  p-4 bg-[var(--secgr)] rounded-full ">
                      <img
                        src="./phone.svg"
                        className=" w-[2rem]   object-cover object-center "
                        alt=""
                      />
                    </div>

                    <div className="call">
                      <p className=" font-semibold">Call Now</p>
                      <p>0800 50 7770</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="call text-[var(--primg)] font-medium mt-2 flex  absolute  bottom-6 left-130 xl:left-190 xl:bottom-9 gap-2 max-lg:hidden ">
                    <div className="  p-4 bg-[var(--secgr)] rounded-b-full ">
                      <img
                        src="./phone.svg"
                        className=" w-[2rem]   object-cover object-center "
                        alt=""
                      />
                    </div>

                    <div className="call">
                      <p className=" font-semibold">Call Now</p>
                      <p>0800 50 7770</p>
                    </div>
                  </div>
          </main>
        </section>

        {/* section 3 */}
        <section
          ref={sec3}
          className="section-3  bg-[var(--primg)] w-full overflow-hidden   font-sans "
        >
          <main className="  w-full max-w-[1600px] mx-auto p-6 flex lg:p-15 lg:py-22   xl:p-25   ">
            <div className="right  w-[100%]  flex max-md:flex-col max-md:justify-center border-black gap-4  lg:w-[65%] xl:w-[60%]">
              <div className="line w-full md:w-[10%]   gap-4 flex md:flex-col items-center text-white justify-center">
                <div className=" h-3 w-3 lg:h-5 lg:w-5 rounded-full aspect-auto bg-white  "></div>
                <div className=" w-full border-t md:w-0.5 md:border-r border-dotted h-[85%] mt-8"></div>
              </div>
              <div className="cards    w-full  max-md:flex-col  gap-8   md:flex-wrap lg:gap-6  xl:w-[80%] flex ">
                <h1 className=" text-[36px] lg:text-[32px]  font-bold tracking-norma  leading-9 text-white/80 ">
                  Numbers That Speak for Themselves
                </h1>
                <div className="card  max-md:p-8  md:w-[45%]  md:aspect-[1.5] lg:w-[47%] lg:aspect-[1.2] xl:aspect-[1.4] flex flex-col justify-center items-center   ">
                  <div className=" w-[80%] lg:w-[75%] xl:w-[65%] tracking-normal ">
                    <img src="./family.svg" className=" h-8 w-8 mb-3" alt="" />
                    <p className=" text-[20px]  text-[var(--secgr)] font-bold ">
                      2,500+
                    </p>
                    <p className=" font-medium  text-black/60 ">
                      {" "}
                      Pre-approval Success rate{" "}
                    </p>
                  </div>
                </div>
                <div className="card  max-md:p-8   md:w-[45%]  md:aspect-[1.5] lg:w-[47%] lg:aspect-[1.2] xl:aspect-[1.4] flex flex-col justify-center items-center   ">
                  <div className="w-[80%]lg:w-[75%]  lg:w-[65%] tracking-normal ">
                    <img src="./timer.svg" className=" h-8 w-8 mb-3" alt="" />
                    <p className=" text-[20px]  text-[var(--secgr)] font-bold ">
                      45 Hours
                    </p>
                    <p className=" font-medium  text-black/60 ">
                      {" "}
                      Average time for loan approvals
                    </p>
                  </div>
                </div>
                <div className="card  max-md:p-8  md:w-[45%]  md:aspect-[1.5] lg:w-[47%] lg:aspect-[1.2] xl:aspect-[1.4] flex flex-col justify-center items-center   ">
                  <div className=" w-[80%] lg:w-[75%]  xl:w-[65%] tracking-normal ">
                    <img src="./family.svg" className=" h-8 w-8 mb-3" alt="" />
                    <p className=" text-[20px]  text-[var(--secgr)] font-bold ">
                      2,500+
                    </p>
                    <p className=" font-medium  text-black/60 ">
                      {" "}
                      Families helped in buying their first home
                    </p>
                  </div>
                </div>
                <div className="card  max-md:p-8  md:w-[45%]  md:aspect-[1.5] lg:w-[47%] lg:aspect-[1.2] xl:aspect-[1.4] flex flex-col justify-center items-center   ">
                  <div className=" w-[80%] lg:w-[75%]  xl:w-[65%] tracking-normal ">
                    <img src="./bank.svg" className=" h-8 w-8 mb-3" alt="" />
                    <p className=" text-[20px]  text-[var(--secgr)] font-bold ">
                      20+
                    </p>
                    <p className=" font-medium  text-black/60 ">
                      {" "}
                      Trusted bank and insurance partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="left md:hidden lg:block lg:w-[40%]    relative ">
              <div className="  img sec3animate3  absolute bg-red-500   lg:w-[90%] xl:w-[70%] aspect-[.5] bottom-55 right-0   rounded-4xl overflow-hidden    ">
                <img
                  src="12.jpg"
                  className=" h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </main>
        </section>

        {/* section 4 */}
        <section
          ref={sec4}
          className="Section_4  lg:py-5 max-w-[1600px] mx-auto overflow-hidden "
        >
          <main className=" pt-10 py-3 px-4 lg:px-[3.3rem] xl:px-[9%]  ">
            {/* part 1 */}
            <div className="h-[12em]   w-[100%]  lg:flex  ">
              <div className="  lg:w-[60%]  ">
                <p className="text-[var(--primg)]  lg:text-[16px]">
                  {" "}
                  <i className="ri-record-circle-line mr-1 text-2lg"></i>Our
                  Service
                </p>
                <h1 className="text-[30px] font-semibold leading-8 sm:text-[30px]  mb-4 mt-3 tracking-normal md:text-[40px] md:leading-10 text-zinc-600/90  md:font-semibold xl:mt-6 lg:leading-13 ">
                  Comprehensive Financial & Mortgage Solutions
                </h1>
              </div>
              <div className="  lg:w-[40%] lg:mt-11 ">
                <p className=" text-[14px]  ">
                  {" "}
                  We have a team of experienced advisors who have already proved
                  themselves in the financial market.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="superpart-2  w-full h-[75em] mt-10 flex flex-col gap-6 sm:mt-0 md:h-[40em] md:mt-0 lg:gap-3 lg:flex-row lg:mt-4 lg:h-[18em]  xl:h-[16em] ">
              {/* container 1 */}
              <div className="container1 w-full h-[49%] flex flex-col gap-6  md:flex-row md:h-[50%]  md:w-[100%] lg:gap-3 lg:h-full lg:w-[50%]  ">
                {/* part 1 */}
                <div className="part1 w-full h-[50%] md:h-[90%]   lg:h-full lg:w-[50%] rounded-2xl overflow-hidden ">
                  <img
                    src="./pic3.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 2 */}
                <div className="part2 w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--tri)] relative md:h-[90%] lg:h-full lg:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden ">
                  <p className="text-white font-semibold text-[20px] lg:mb-3">
                    INSURANCE
                  </p>

                  <p className=" text-[14px] text-white/80 text-justify mt-2">
                    {" "}
                    As specialist Insurance Brokers with many years of
                    experience, we are able to advise you and provide you with
                    the solutions that best suit your needs,
                  </p>
                  <div className="absolute h-[4em] w-[4em] bg-white top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f]">
                    <i className="text-4lg ri-arrow-right-up-line text-black"></i>
                  </div>
                </div>
              </div>
              {/* container 2 */}
              <div className="container2  w-full h-[49%]      flex flex-col   gap-6 md:flex-row-reverse md:w-[100%] md:h-[50%] lg:gap-3 lg:flex-row lg:h-full lg:w-[50%]  ">
                {/* part 3 */}
                <div className="part3 w-full h-[50%] md:h-[90%]   lg:h-full lg:w-[50%] rounded-2xl overflow-hidden  ">
                  <img
                    src="./pic4.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 4 */}
                <div className="part4 w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--primg)] text-white relative md:h-[90%] lg:h-full lg:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  ">
                  <p className="text-[20px] font-bold ">Mortgages</p>

                  <p className=" text-[14px] text-white/80  text-justify mt-2">
                    {" "}
                    A lot of lenders now require a deposit of around 20%, but we
                    are still able to get some home loans done with as little as
                    a 5% deposit.
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
        <section className="section_5  h-[87em] md:h-[62em]  lg:h-[66em] overflow-hidden">
          <main className=" w-full px-4  p lg:relative  lg:py-10 max-w-[1600px] mx-auto ">
            {/* part 1 */}
            <div className="h-[17em] w-[100%] rounded-[20px] mt-2  overflow-hidden lg:absolute lg:z-10  lg:h-[40em]   lg:w-[22em] lg:top-0 lg:left-13  xl:h-[43em] xl:w-[33%] xl:top-0 xl:left-32 ">
              <img
                src="./sec5.jpg  "
                className=" h-full w-full object-cover "
                alt=""
              />
            </div>

            {/* part 2 */}
            <div className="h-[14em] md:h-[10em]   w-[100%]  mt-2 mb-2 rounded-[20px] pt-3 px-4  text-black lg:absolute lg:w-[50%] lg:right-22 lg:top-10 xl:w-[45%] xl:right-35 font-sans xl:top-12 ">
              <p className="text-[var(--primg)] font-bold  text-[20px]">
                {" "}
                <i className="ri-record-circle-line mr-2  tracking-normal font-medium  text-[20px] "></i>
                Mortgage Services Backed by Experience
              </p>

              <p className="text-[14px]  mt-4">
                {" "}
                From application to approval, we handle everything under one
                roof. With access to top banks and lenders across New Zealand,
                we provide custom loan options, expert advice, and stress-free
                support
              </p>
            </div>
            {/* part 3 */}
            <div className=" w-full  xl:h-260  relative ">
              {/* icon box */}
              <div className="lg:mt-8  p-4 mt-2 sm:mt-2 md:mt-2 max-lg:rounded-t-4xl   bg-[var(--primg)]  text-white lg:absolute lg:h-[23em] lg:w-[55%] lg:right-15 lg:rounded-r-4xl  lg:top-[10em]  lg:z-0 xl:right-23   lg:py-12 tracking-wide ">
                {/* part1 */}
                <div className="md:flex lg:mb-15  ">
                  <div className="h-[6em]  w-full md:h-[9em] md:p-8 p-2 md:flex-col  flex items-center md:gap-2 gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className=" h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[28%]  xl:px-3 xl:h-13 xl:w-15   bg-white/20 rounded-[10px] ">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium md:text-[14px] ">
                      Home Loan
                    </h1>
                  </div>
                  <div className="h-[6em] w-full md:h-[9em] md:p-8 p-2  md:flex-col flex items-center md:gap-2  gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className=" h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[25%]  xl:px-3 xl:h-13 xl:w-15    bg-white/20 rounded-[10px] ">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium md:text-[14px] ">
                      Investment Loan
                    </h1>
                  </div>
                  <div className="h-[6em] w-full p-2  md:h-[9em] md:p-8 md:flex-col flex items-center md:gap-2 gap-6   lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className=" h-[63%] w-[18%]  md:w-[25%]  text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[25%]  xl:px-3 xl:h-13 xl:w-15    bg-white/20 rounded-[10px] ">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium  md:text-[14px] ">
                      Refinance
                    </h1>
                  </div>
                </div>
                <div className="md:flex md:mt-3 ">
                  {" "}
                  <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 lg:border-r  md:flex-col  flex items-center md:gap-2 gap-6  lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className="h-[63%] w-[18%]  md:w-[25%]  text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[25%]  xl:px-3 xl:h-13 xl:w-15    bg-white/20 rounded-[10px] ">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium  md:text-[14px] ">
                      Business Loan
                    </h1>
                  </div>
                  <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 md:flex-col flex items-center md:gap-2 gap-6 lg:border-r lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className="h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[25%]  xl:px-3 xl:h-13 xl:w-15    bg-white/20 rounded-[10px] ">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium  md:text-[14px]">
                      Construction Loan
                    </h1>
                  </div>
                  <div className="h-[6em] w-full p-2 md:h-[9em] md:p-8 md:flex-col flex items-center gap-6 md:gap-2  lg:h-[7em] lg:flex-col  lg:p-0  ">
                    <div className="h-[63%] w-[18%] md:w-[25%]   text-center p-3 lg:p-2 lg:px-3 lg:h-10 lg:w-[25%]  xl:px-3 xl:h-13 xl:w-15    bg-white/20 rounded-[10px]">
                      {" "}
                      <img
                        src="./checksquare.svg"
                        className=" h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className=" text-[20px] font-medium  md:text-[14px]">
                      Commercial Loan
                    </h1>
                  </div>
                </div>
              </div>
              {/* marquee box */}
              <div className="marque   flex items-center bg-[var(--primg)] rounded-b-[30px] lg flex-col p-2 lg:bg-[var(--primg)] lg:top-165 xl:top-175 lg:w-[95%] xl:w-[86%] lg:h-[20em] xl:left-28 lg:left-5 lg:rounded-[30px] lg:absolute lg:p-12   ">
                <h1 className="text-center text-white md:text-[18px] md:w-[40%] md:leading-5 md:tracking-tight md:font-bold  my-3 lg:text-[32px] lg:w-[60%] xl:w-[50%] lg:font-semibold lg:leading-11">
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
        <section className="secton_6 w-full h-[63em] mt-4 lg:h-[41em] max-w-[1600px] mx-auto overflow-hidden ">
          <main className="px-4 w-full lg:flex flex-row-reverse lg:px-[3rem] xl:px-[9%] items-center justify-center gap-10 ">
            {/* Form Section */}
            <div className="form lg:w-1/2">
              <p className="text-[var(--primg)]">
                <i className="ri-record-circle-line mr-2"></i> Enquiry Now
              </p>
              <h1 className="text-lg font-semibold mt-2">
                Let’s Connect and Get in Touch With Us.
              </h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="pt-4 flex flex-col gap-3 placeholder-[#A9A8A9] text-[#A9A9A9]"
              >
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                />

                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    {...register("email", { required: true })}
                    placeholder="Your Email"
                    className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                  />
                  <input
                    {...register("phone", { required: true })}
                    placeholder="Phone Number"
                    className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                  />
                </div>

                <select
                  {...register("service", { required: true })}
                  defaultValue=""
                  className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                >
                  <option value="" disabled>
                    Service you're interested in?
                  </option>
                  <option value="Insurance">Insurance</option>
                  <option value="Mortgage">Mortgage</option>
                </select>

                <textarea
                  {...register("message", { required: true })}
                  placeholder="Write your message."
                  className="w-full min-h-[100px] lg:min-h-[200px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                ></textarea>

                <button
                  type="submit"
                  className="py-2 px-6 rounded-lg bg-[var(--primg)] outline-0 text-white font-semibold hover:bg-opacity-90 transition"
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
                <div className="h-[50%] p-3 w-[85%] bg-white/95 shadow-2xl rounded-[20px] absolute bottom-0 left-8 lg:w-[80%] lg:left-15 ">
                  <div className="w-full h-[55%] flex flex-col gap-2 items-center justify-around">
                    <i className="ri-group-fill bg-[var(--primg)] text-white text-4xl rounded-[10px] py-3 px-4"></i>
                    <h1 className="text-[var(--primg)] text-[18px] tracking-normal font-semibold ">
                      Honored to Be a Member Of
                    </h1>
                  </div>
                  <div className=" mt-4 w-full h-[33%] lg:mt-2">
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
