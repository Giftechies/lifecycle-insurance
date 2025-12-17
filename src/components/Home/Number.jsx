"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Number(){
    const sec3 = useRef()
      const sec3_cards = [
        {
          img: "/target.svg",
          number: "90%",
          content: " Application approval rate ",
        },
        {
          img: "/family.svg",
          number: "6+",
          content: " Insurance providers  partnered with    ",
        },
        {
          img: "/timer.svg",
          number: "$200M+",
          content: "   In mortgage  arranged  ",
        },
        {
          img: "/bank.svg",
          number: "20+",
          content: `Mortgage providers to  choose from  `,
        },
      ];
    
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
    

    return(
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
                  <span className=" text-[36px]   font-bold tracking-normal  leading-9 text-white ">
                   Numbers That Speak for Themselves
                  </span>
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
                        <h4 className=" text-[17px]  text-black  w-[80%]  ">
                          {" "}
                          {e.content}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="right max-lg:hidden lg:w-[30%]  relative flex ">
              <div className=" w-full  flex-grow  rounded-2xl overflow-hidden    ">
                <img
                  src="/12.jpg"
                  className=" h-full w-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </main>
        </section>
    )
}