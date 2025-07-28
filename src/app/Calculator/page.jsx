"use client";
import Banner from "../Components/Banner/Banner";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RepaymentCalculator() {
  const calculators = [
    {
      title: "Repayment Calculator",
      content: "Know your monthly repayments before you borrow.",
      link: "/Calculator/repayment-calculator",
      img: "/cal2.webp",
    },
    {
      title: "Loan Calculator",
      content: "Estimate your loan savings with extra repayments in seconds",
      link: "/Calculator/loan-calculator ",
      img: "/cal1.webp",
    },
    
  ];

  return (
    <>
      <Banner title="Calculator" />
      <section className=" p-4 lg:p-[3rem] ">
          <div className="cards   flex flex-col sm:flex-row gap-10 justify-center items-center   ">
            {calculators.map((el, i) => {
              return (
                <div className="relative w-full max-w-[min(400px,90%)] h-72 max-sm:mx-auto rounded-2xl overflow-hidden shadow-lg group">
                  {/* Background Image */}
                  <img
                    src={el.img}
                    alt="Card Background"
                    className="absolute inset-0 w-full h-full object-cover transform duration-300 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70"></div>

                  {/* Content */}
                  <div className="relative z-10 text-white p-6 flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold mb-2">{el.title}</h2>
                    <p className={` m-4 `}>
                      {el.content}
                    </p>
                    <a
                      href={el.link}
                      className="bg-white  text-black px-4 py-2 rounded hover:bg-gray-200 w-fit"
                    >
                      Calculate Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
       
      </section>
    </>
  );
}
