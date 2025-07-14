"use client";

import { useRef } from "react";
import Header from "../Components/Header/Header";
import { gsap } from "gsap";
import Link from "next/link";

export default function Case_study() {
  const cardData = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60",
      heading: "Importance of Insurance",
      content: "Financial Protection: Covers unexpected losses (like car accidents or hospital bills)."
    },
    {
      img: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1170&auto=format&fit=crop",
      heading: "Types of Insurance",
      content: "Life Insurance, Health Insurance, Motor Insurance, Home Insurance, Travel Insurance, Business InsuranceMotor Insurance and Home Insurance"
    },
    {
      img: "https://images.unsplash.com/photo-1718128120413-783e25de9a3b?w=600&auto=format&fit=crop&q=60",
      heading: "How Insurance Works",
      content: "Risk Coverage:The insurer takes on the financial risk as per the policy terms.In the event of a loss,the policyholder files a claim."
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1726736437312-61096a0df6e8?w=600&auto=format&fit=crop&q=60",
      heading: "Key Features of Insurance",
      content: "Policy Coverage: Specific conditions or items covered under the Insurance. Exclusions: Events or items not covered by the policy."
    },
    {
      img: "https://images.unsplash.com/photo-1470843810958-2da815d0e041?w=600&auto=format&fit=crop&q=60",
      heading: "Benefits of Having Insurance",
      content: "Risk Transfer: Transfers risk to the insurer, protecting against major losses. Tax Benefits: Premiums paid are often eligible for valuable tax deductions and savings."
    },
    {
      img: "https://images.unsplash.com/photo-1593538312756-4e01c72f9bd1?w=600&auto=format&fit=crop&q=60",
      heading: "Choosing the Right Insurance Plan",
      content: "Assess Your Needs: Health, family protection, vehicle safety, etc. Compare Policies: Coverage, premium, benefits, exclusions."
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1723507291530-47c2f7aa9197?w=600&auto=format&fit=crop&q=60",
      heading: "Key Insurance Terms You Should Know",
      content: "Deductible: The amount you pay before insurance starts paying for covered claims. Policyholder: The legal owner of the policy and its benefits."
    },
    {
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&auto=format&fit=crop&q=60",
      heading: "Conclusion: Why Insurance is a Wise Decision",
      content: "Insurance is not just an expense—it's an essential tool for managing risks and securing your future."
    }
  ];

  const cardsRef = useRef([]);

  // Reset ref array on each render
  cardsRef.current = [];

  const animate = (index) => {
    const target = cardsRef.current[index];
    gsap.to(target, {
      scale: 0.95,
      ease: "power2.inOut",
    });
  };

  const animatend = (index) => {
    const target = cardsRef.current[index];
    gsap.to(target, {
      scale: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <Header title="Case Study" />

      <main className="w-full max-w-[1600px] mx-auto">
        <section className="p-6 w-full px-4 md:px-[9%]">
          {/* Heading */}
          <div className="w-full lg:flex gap-10">
            <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
              <i className="ri-record-circle-line"></i> Case Study
              <p className="text-black text-[26px] leading-8 lg:text-[40px] font-semibold mt-3 lg:leading-11">
                Personalised Insurance Solutions Tailored to Your Life
              </p>
            </div>
            <div className="w-full mt-2 lg:mt-10 lg:w-[43%] text-justify">
              Lifecycle Financial offers trusted mortgage and Insurance advice,
              working with leading banks and providers to help you make the best
              financial decisions for your future.
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-8 mt-4">
            {cardData.map((el, index) => (
              <div
                key={index}
                onMouseEnter={() => animate(index)}
                onMouseLeave={() => animatend(index)}
                ref={(elRef) => {
                  cardsRef.current[index] = elRef;
                }}
                className="w-full md:w-[45%] lg:w-[30%] mt-4 bg-white rounded-2xl shadow-xl overflow-hidden relative"
              >
                <div className="rounded-b-xl shadow-2xs overflow-hidden">
                  <img
                    src={el.img}
                    alt={el.heading}
                    className="w-full h-[15em] object-cover"
                  />
                 
                </div>
                <div className="p-[35px]">
                  <h3 className="text-[25px]  cursor-pointer font-medium leading-7 text-gray-900 mb-2">
                    {el.heading}
                  </h3>
                  <p className="text-gray-700 text-[14px] mt-2 ">
                    {el.content}
                  </p>
                  <Link
                    href="#"
                    className="text-[var(--primg)] cursor-pointer font-semibold mt-4 text-sm hover:underline flex items-center gap-1 "
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
    </>
  );
}
