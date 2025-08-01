"use client";
import Banner from "../Components/Banner/Banner";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function services() {
  const calculators = [
    {
      title: "Insurance",
      content: "With more than a decade of experience, our company provides expert mortgage solutions, to help you turn your dream home into reality.",
      link: "/Insurance",
      img: "/pic3.jpg",
    },
    {
      title: "Mortgage",
      content: "With more than a decade of experience, our company provides expert mortgage solutions, to help you turn your dream home into reality.",
      link: "/Mortgage ",
      img: "/pic4.jpg",
    },
    
  ];

  return (
    <>
      <Banner title="Services" />
      <section className=" p-4 lg:p-[3rem] ">
          <div className="cards   flex flex-col sm:flex-row gap-10 justify-center items-center   ">
            {calculators.map((el, i) => {
              return (
                <div className="relative w-full max-w-[min(400px,90%)] h-72  rounded-2xl overflow-hidden shadow-lg group">
                  {/* Background Image */}
                  <img
                    src={el.img}
                    alt="Card Background"
                    className="absolute inset-0 w-full h-full object-cover transform duration-300 ease-in-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/55"></div>

                  {/* Content */}
                  <div className="relative z-10 text-white p-6 flex flex-col justify-center h-full">
                    <h2 className="text-2xl font-bold ">{el.title}</h2>
                    <p className="my-4">
                      {el.content}
                    </p>
                    <a
                      href={el.link}
                      className="bg-white  text-black px-4 py-2 rounded hover:bg-gray-200 w-fit active:bg-gray-200 "
                    >
                      Know more
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
