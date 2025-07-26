"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useEnquiryContext } from "./Context/EnquiryContext";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import Testimonials from "./Components/Testimonial/Testimonials";
import { HomeData } from "./lib/api";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const homeIconBox = useRef();
  const sec2 = useRef();
  const sec3 = useRef();
  const sec4 = useRef();
  const sec5 = useRef();
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState();
 const logos = Array.from({ length: 31 }, (_, i) => ({
  img: `./mq${i + 1}.png`,
}));

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await HomeData("home-sections");
        setdata(res);

        if (data) {
          console.log("dsfsd>>>>>>", data);
          console.log("e>>>>", res);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setloading(false);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (data?.data?.[5]?.files?.length > 0) {
  //     setlogos(data?.data[5].files);
  //   }
  // }, [data]);

 

  const sec3_cards = [
    {
      img: "./target.svg",
      number: "99%",
      content: " application approval rate ",
    },
    {
      img: "./family.svg",
      number: "6+",
      content: " insurance providers  partnered with    ",
    },
    {
      img: "./timer.svg",
      number: "$200M+",
      content: "   in mortgage  arranged  ",
    },
    {
      img: "./bank.svg",
      number: "20+",
      content: `mortgage providers to  choose from  `,
    },
  ];

  // ---------------animation----------------------
   useGSAP(() => {
    if (!homeIconBox.current) return;
    gsap.from(".home-icon-box ", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.5,
      scrollTrigger: ".home-icon-box ",
    });
  },  );

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

  useGSAP(() => {
    if (!sec3.current) return;
    gsap.from(".box-anime", {
      x: -250,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box-anime",
        start: "top 60%",
      },
    });
  },  );

  useGSAP(() => {
    if (!sec3.current) return;
    gsap.from(".box-anime-1", {
      x: 250,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box-anime",
        start: "top 60%",
      },
    });
  },  );

  useGSAP(() => {
    if (!sec3.current) return;
    gsap.from(".sec3animate3", {
      x: 200,
      opacity:0,
      duration: 1,
      // scrollTrigger: {
      //   trigger: ".sec3animate3 ",
      //   start: "top 100%",
      //   scrub: 6,
      // },
    });
  },  );

  useGSAP(() => {
    if (!sec4.current) return;
    gsap.from(".sec-4-card-left", {
      x: -250,
      opacity: 0,
      duration: 1.5,
      stagger: -0.3,
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

  useGSAP(() => {
    if (!sec5.current) return;
    gsap.to(".marquee", {
      xPercent: -100,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, );
 
 

  const { setEnquiries, enquiries } = useEnquiryContext();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    formData.id = nanoid();
    const updated = [...enquiries, formData];
    setEnquiries(updated);
    reset();
    console.log("submitted");
  };

  // if (loading) {
  //   return <div>loding....</div>;
  // }
  return (
    <>
      <main className="  tracking-widest w-full    h-full relative">
        {/* section 1 */}
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
              <h3 className="animate-fadeInUp text-gray-300 text-sm md:text-base font-semibold mb-2">
                <i className="ri-record-circle-line mr-2 text-lg font-extralight text-white"></i>
                {/* {data?.data[0]?.title} */}
                LIFE CYCLE FINANCIAL
              </h3>

              <div className=" text-[26px] md:text-[46px] lg:text-[58px] font-semibold tracking-normal leading-tight">
                <h1 className=" mt-6  ">
                  From Smart{" "}
                  <span className="text-[var(--primg)]">Financing</span> To
                </h1>
                <h1 className="">
                  Dream <span className="text-[var(--primg)]">Mortgages</span>.
                </h1>
                <h1 className="">We Cover It All</h1>
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
                className="home-icon-box  max-md:mt-12 w-full  border border-dashed border-white/40 md:w-[80%] rounded-3xl flex flex-col  md:flex-row items-center lg:w-[60%] justify-between p-4 gap-6"
              >
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center flex-1   md:border-b-0 md:border-r border-dashed border-white/40 p-4">
                  <img
                    src="./thumbsup.svg"
                    alt="Rating"
                    className="w-12  h-12"
                  />
                  <h1 className="  text-white  font-semibold mt-3 text-sm">
                    20+ years combined industry experience
                  </h1>
                  <p className="border b"></p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center flex-1 border-b md:border-b-0 md:border-r border-dashed border-white/40 p-4">
                  <img
                    src="./conversation.svg"
                    alt="Clients"
                    className="w-12 h-12"
                  />
                  <h1 className="text-white font-semibold mt-3 text-sm">
                    700+ Happy Clients served
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
                    98% client satisfaction rate
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <section
          ref={sec2}
          className="section-2 w-full  p-4 lg:px-[3rem] xl:px-[3rem] lg:py-[80px] max-w-[1600px] mx-auto  "
        >
          <main className="  w-[100%]    lg:flex  relative ">
            <div className="imgLeft w-full  rounded-4xl overflow-hidden border max-md:aspect-[1.5] md:aspect-[1.8]  lg:w-[52%] lg:h-[42rem]  ">
              <img
                src="about-pic1.jpg"
                className=" w-full lg:h-full object-cover object-center"
                alt=""
              />
            </div>
            <div className="contentRight max-lg:mt-3 lg:w-[55%] lg:flex gap-10 flex-col tracking-wider text-justify  ">
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
                  onClick={() => router.push("/about")}
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
                          src="checksquare.svg"
                          className="h-9 w-9 mb-2"
                          alt=""
                        />
                       One Call Does It All
                      </p>
                      <h1 className="  text-white/100 text-[14px] tracking-widest mt-2   ">
                        From application to approval, we handle everything under one roof. With access to top banks and lenders across New Zealand
                      </h1>
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
                        src="./phone.svg"
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

        {/* section 3 */}
        <section
          ref={sec3}
          className="section-3  bg-[var(--primg)] w-full overflow-hidden   font-sans "
        >
          <main className="  w-full max-w-[1600px] mx-auto p-6 flex justify-evenly  lg:p-[3rem]   ">
            <div className="left   w-[100%]  flex max-md:flex-col max-md:justify-center   gap-6   lg:w-[60%] ">
              <div className="line w-full md:w-[10%]   gap-4 flex md:flex-col items-center text-white justify-center">
                <div className=" h-3 w-3 lg:h-5 lg:w-5 rounded-full aspect-auto bg-white  "></div>
                <div className=" w-full border-t md:w-0.5 md:border-r border-dashed h-[85%] mt-8"></div>
              </div>
              <div className="cards  flex flex-col gap-15 ">
                {/* text */}
                <div>
                  <h1 className=" text-[36px]   font-bold tracking-normal  leading-9 text-white ">
                   Numbers That Speak for Themselves
                  </h1>
                </div>
                {/* cards-box */}
                <div className=" font-normal flex-grow   grid gap-8 md:grid-cols-2 ">
                  {sec3_cards.map((e,i) => {
                    return (
                      <div key={i}  className={`card  px-10 py-10 ${i === 0 || i === 1 ? "box-anime" : "box-anime-1"}`}>
                        <img src={e.img} className=" h-12 w-12 mb-3" alt="" />
                        <h2 className="   text-[var(--secgr)] font-bold ">
                          {e.number}
                        </h2>
                        <h3 className="   text-black  w-[80%]  ">
                          {" "}
                          {e.content}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right max-lg:hidden lg:w-[30%]  relative flex ">
              <div className=" w-full  flex-grow  rounded-2xl overflow-hidden    ">
                <img
                  src="12.jpg"
                  className=" h-full w-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </main>
        </section>

        {/* section 4 */}
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
                <h1 className="text-[26px] font-semibold leading-8 sm:text-[38px]   mt-3 tracking-normal  md:leading-10 text-zinc-600/90  md:font-semibold xl:mt-6  sm:w-[70%] ">
                  Comprehensive Financial & Mortgage Solutions
                </h1>
              </div>
              <div className="  lg:w-[40%] lg:mt-11 mt-3 ">
                <p className=" text-[14px]  ">
                  {" "}
                  We have a team of experienced advisors who have already proved
                  themselves in the financial market.
                </p>
              </div>
            </div>
            {/* part 2 */}
            <div className="superpart-2  w-full h-[75em] mt-8 flex flex-col max-md:gap-6 sm:mt-0 md:h-[40em] md:mt-5 lg:gap-3 lg:flex-row lg:mt-8 lg:h-[18em]  xl:h-[16em] ">
              {/* container 1 */}
              <div className="container1 w-full h-[49%] flex flex-col gap-6  md:flex-row md:h-[50%]  md:w-[100%] lg:gap-3 lg:h-full lg:w-[50%]  ">
                {/* part 1 */}
                <div className="part1 sec-4-card-left w-full h-[50%] md:h-[90%]   lg:h-full md:w-[50%] rounded-2xl overflow-hidden ">
                  <img
                    src="./pic3.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 2 */}
                <div
                  onClick={() => router.push("/Insurance")}
                  className="part2 sec-4-card-left w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--tri)] relative md:h-[90%] lg:h-full md:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  "
                >
                  <h3 className="text-white cursor-pointer font-semibold text-[20px] ">
                    Insurance
                  </h3>

                  <p className=" text-[14px] text-white/80 text-justify mt-2">
                    {" "}
                    As specialist Insurance Brokers with many years of experience, we are able to advise you and provide you with the solutions that best suit your needs,
                  </p>
                  <div className="absolute h-[4em] w-[4em] bg-white top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f ] hover:bg-zinc-100">
                    <i className="text-4lg cursor-pointer ri-arrow-right-up-line text-black text-[25px] "></i>
                  </div>
                </div>
              </div>
              {/* container 2 */}
              <div className="container2  w-full h-[49%]      flex flex-col   gap-6 md:flex-row-reverse md:w-[100%] md:h-[50%] lg:gap-3 lg:flex-row lg:h-full lg:w-[50%]  ">
                {/* part 3 */}
                <div className="part3 sec-4-card-left w-full h-[50%] md:h-[90%]   lg:h-full md:w-[50%] rounded-2xl overflow-hidden  ">
                  <img
                    src="./pic4.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                {/* part 4 */}
                <div
                  onClick={() => router.push("/Mortgage")}
                  className="part4  sec-4-card-left w-full h-[50%] px-10 flex  flex-col  justify-center bg-[var(--primg)] text-white relative md:h-[90%] lg:h-full md:w-[50%] lg:px-6 lg:py-12  rounded-2xl overflow-hidden  "
                >
                  <h3 className="text-[20px] font-bold cursor-pointer ">
                 Mortgage
                  </h3>

                  <p className=" text-[14px] text-white/80  text-justify mt-2">
                    {" "}
                    As specialist Insurance Brokers with many years of experience, we are able to advise you and provide you with the solutions that best suit your needs,
                  </p>
                  <div className="absolute h-[4em] w-[4em] bg-white hover:bg-zinc-100 top-0 right-0 rounded-bl-[20px] flex items-center justify-center shadow-[-10px_10px_80px_0px_#46485f]">
                    <i className="text-4lg cursor-pointer ri-arrow-right-up-line text-black text-[25px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>

        {/* section 5 */}

        <section
          ref={sec5}
          className="section_5 w-full p-4 lg:p-[3rem] overflow-hidden max-w-[1600px] mx-auto"
        >
          <main className=" w-full   ">
            <div className="w-full flex max-lg:flex-col  max-lg:gap-8  ">
              {/* left part 1 */}
              <div className=" w-full h-[20rem] lg:w-[40%] lg:h-[37rem] rounded-xl  overflow-hidden">
                <img
                  src="./sec5.jpg  "
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
                   From application to approval, we handle everything under one roof. With access to top banks and lenders across New Zealand, we provide custom loan options, expert advice, and stress-free support
                  </p>
                </div>
                {/* part 3 */}
                <div className=" w-full    ">
                  {/* icon box */}
                  <div className="icon-box   w-full  bg-[var(--primg)] flex max-md:flex-col flex-wrap items-start max-md:gap-10  md:justify-between md:gap-y-11 text-white text-[18px]  font-normal  max-lg:rounded-t-4xl tracking-wide p-12   lg:rounded-r-4xl    ">
                    <div
                      onClick={() => {
                        router.push("/Mortgage/home-loan");
                      }}
                      className="icon  w-full     md:w-[30%] md:border-r border-white/50 border-dashed flex md:flex-col  gap-4  items-start   "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <h1 className="  cursor-pointer  ">Home Loan</h1>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/Mortgage/investment-loan");
                      }}
                      className=" icon w-full     md:w-[30%]     md:border-r border-white/50 border-dashed flex md:flex-col  gap-4       "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <h1 className="  cursor-pointe">Investment Loan</h1>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/Mortgage/refinance");
                      }}
                      className="icon w-full     md:w-[30%]      flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]   bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" h-full w-full object-cover  cursor-pointer"
                          alt=""
                        />
                      </div>
                      <h1 className="   cursor-pointer  ">Refinance</h1>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/Mortgage/business-loan");
                      }}
                      className="icon  w-full     md:w-[30%]     md:border-r  border-white/50 border-dashed flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <h1 className="  cursor-pointer   ">Business Loan</h1>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/Mortgage/construction-loan");
                      }}
                      className="icon w-full     md:w-[30%]     md:border-r border-white/50 border-dashed flex md:flex-col  gap-4       "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" h-full w-full object-cover cursor-pointer"
                          alt=""
                        />
                      </div>
                      <h1 className="  text-[19px]  cursor-pointer   ">
                        Construction Loan
                      </h1>
                    </div>
                    <div
                      onClick={() => {
                        router.push("/Mortgage/commercial-loan");
                      }}
                      className="icon w-full     md:w-[30%]      flex md:flex-col  gap-4      "
                    >
                      <div className=" w-[50px]    bg-white/20 rounded-[10px] p-[.7rem] ">
                        {" "}
                        <img
                          src="./checksquare.svg"
                          className=" cursor-pointer  h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <h1 className=" cursor-pointer   ">Commercial Loan</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* lg marquee box */}
            <div className="marque  w-full flex items-center bg-[var(--primg)] rounded-b-[30px] lg flex-col p-6 pt-0   lg:mt-4 xl:mt-8  lg:rounded-[30px]  lg:p-10  lg:pt-0 ">
              <h1 className="text-center text-[26px] font-bold  my-3 text-white md:  md:w-[50%]  md:leading-6 lg:tracking-normal lg:leading-9  lg:text-[30px] lg:w-[65%] xl:w-[50%] lg:font-semibold lg:pt-8 ">
                Over 20 Handpicked <br /> partners to serve You Better
              </h1>
              {/* marquee */}
              <div className="   w-[100%] rounded-[20px]  bg-white     overflow-hidden ">
                <div className="w-full bg-white rounded-[20px] overflow-hidden">
                  <div className="marquee flex items-center gap-10 py-5 animate-scroll">
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
        {/* section 6 */}
        <section className="secton_6 w-full h-[66.5rem] md:h-[62rem]  mt-4 lg:h-[41em] max-w-[1600px] mx-auto overflow-hidden ">
          <main className="p-4 w-full lg:flex flex-row-reverse lg:px-[3rem] xl:px-[3rem] items-center justify-center gap-10 ">
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
            <div className=" lg:w-[50%] lg:p-0  ">
              <div className="mt-6 h-[32em]  relative lg:h-[36em] ">
                <div className="h-[70%]  overflow-hidden rounded-[40px]">
                  <img
                    src="8.jpg"
                    className="h-full w-full object-cover"
                    alt="Contact Visual"
                  />
                </div>

                {/* Info Box */}
                <div className=" p-3 w-[85%]  bg-white/95 shadow-2xl rounded-[20px] absolute  bottom-10  left-1/2 transform -translate-x-1/2 ">
                  <div className="w-full h-[55%] flex flex-col gap-2 items-center justify-around">
                    <i className="ri-group-fill bg-[var(--primg)] text-white text-4xl rounded-[10px] py-3 px-4"></i>
                    <h1 className="text-[var(--primg)]   tracking-normal font-semibold ">
                      Honored to Be a Member Of
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-1 text-[var(--secgr)] w-full items-center">
                    <div className="  flex flex-col items-center justify-center  p-2">
                      <img
                        src= "./financial-logo.png"
                        className="h-30 w-auto object-contain"
                        alt="Membership Logo"
                      />
                      <h6 className="text-center mt-2"> Financial Ombudsman service </h6>
                    </div>

                    <div className="  flex flex-col items-center justify-center p-2">
                      <img
                        src="./KAN-Logo.png"
                        className="h-24 w-auto  object-contain"
                        alt="Membership Logo"
                      />
                      <h6 className="text-center mt-2">
                         Kiwi Adviser Network
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>

        {/* setction 7 */}
        <Testimonials />
      </main>
    </>
  );
}
