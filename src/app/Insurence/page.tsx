"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Header from "../Components/Header/Header";
import Link from "next/link";

export default function Insurence() {
  const router = useRouter();

  // Same card data, just li as functions
  const card = [
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: "Life Insurence",
      li: () => router.push("/Insurence/life-Insurence"),
      content: "Protect your loved ones with tailored life Insurence. Ensure their financial security with affordable, flexible cover. Peace of mind for all stages of life."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: "Trauma Recovery Cover",
      li: () => router.push('/Insurence/trauma-recovery-cover'),
      content: "Get support when it matters most. Trauma cover offers financial security after serious illness or injury so you can focus fully on recovery."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: " Total Permanent Disability Benefit Cover ",
      li: () => router.push('/Insurence/total-permanent-disability-benefit-cover'),
      content: "Financial peace of mind if you're unable to work due to permanent disability."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: " Mortgage & Rent Protection Cover ",
      li: () => router.push("/Insurence/mortgage-rent-protection-cover"),
      content: "Keep your home secure if illness or injury stops you working. Mortgage & Rent Protection covers your payments when life gets tough."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: " Income Protection Cover ",
      li: () => router.push("/Insurence/income-protection-cover"),
      content: "Replace lost income during illness or injury. Maintain your lifestyle and meet your commitments with our flexible income protection plans."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: " Medical Insurence ",
      li: () => router.push("/Insurence/medical-Insurence"),
      content: "Access quality healthcare when you need it most. Our medical Insurence plans offer peace of mind and protection for your health and budget."
    },
    {
      img: "8.jpg",
      date: 20,
      month: 'jun',
      heading: " Group Insurence ",
      li: () => router.push("/Insurence/group-Insurence"),
      content: "Protect your team with affordable group cover. Flexible plans for businesses that value their employees’ wellbeing and security. Boost morale."
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  cardRefs.current = [];

  const animate = (index: number) => {
    const target = cardRefs.current[index];
    gsap.to(target, {
      scale: 0.95,
      ease: "power2.inOut",
    });
  };

  const animatend = (index: number) => {
    const target = cardRefs.current[index];
    gsap.to(target, {
      scale: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <main className="max-w-[1600px] m-auto">
      <Header title="Insurance" />

      {/* Section 1 */}
      <section className="w-full px-4 py-6 bg-[#F7F4FB] overflow-hidden lg:flex flex-col items-center justify-center lg:px-[9%] lg:py-10 max-w-[1600px] mx-auto leading-7 tracking-wider">
        {/* Text */}
        <div className="h-[20%] w-full lg:flex gap-10">
          <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> Insurance
            <p className="leading-9 text-black text-[26px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
              Personalised Insurence Solutions Tailored to Your Life
            </p>
          </div>

          <div className="w-full mt-2 lg:w-[40%] lg:mt-10 lg:text-[14px] text-justify">
            Lifecycle Financial offers trusted mortgage and Insurence advice,
            working with leading banks and providers to help you make the best
            financial decisions for your future.
          </div>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[100%] justify-self-start gap-8 flex flex-wrap">
          {card.map((el, index) => (
            <div
              key={index}
              onMouseEnter={() => animate(index)}
              onMouseLeave={() => animatend(index)}
              onClick={el.li}
              ref={(elRef) => {
                cardRefs.current[index] = elRef;
              }}
              className="w-full md:w-[45%] lg:w-[30%] mt-4 bg-white rounded-2xl shadow-2xs overflow-hidden relative"
            >
              {/* Image */}
              <div className="rounded-b-4lg overflow-hidden">
                <img
                  src={el.img}
                  alt={el.heading}
                  className="w-full h-[15em] object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[35px] py-4 relative">
                <h3 className="text-[25px] font-medium leading-7 text-gray-900 mb-2">
                  {el.heading}
                </h3>
                <p className="text-gray-700 text-[14px] text-justify mt-5">
                  {el.content}
                </p>

                {/* Read More */}
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    el.li();
                  }}
                  className="text-[var(--primg)] font-semibold mt-4 text-sm hover:underline flex items-center gap-1 lg:mt-8"
                >
                  Read More
                  <span className="inline-block transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
