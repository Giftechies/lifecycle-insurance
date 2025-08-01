"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
type MobileProps = {
  setIsMenuOpen: (open: boolean) => void;
};

export default function MobileMenuOverlay({ setIsMenuOpen }: MobileProps) {
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMortgageOpen, setIsMortgageOpen] = useState(false);
  const [iscal, setiscal] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const handleclose = () => {
    if (drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => setIsMenuOpen(false),
      });
    }
  };

  useGSAP(() => {
    if (drawerRef.current) {
      gsap.set(drawerRef.current, {
        x: "100%",
      });

      gsap.to(drawerRef.current, {
        x: "0%",
        duration: 0.8,
        ease: "power2.out",
      });
    }
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay background */}
      <div
        className="absolute inset-0  bg-[var(--secgr)]/50  backdrop-blur-[2px] "
        onClick={handleclose}
      />

      {/* Side Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0  h-full text-white w-[70%] sm:w-[50%]   bg-black/70 shadow-lg p-6 overflow-y-auto"
      >
        <div className="border-b w-full h-8 text-[18px] font-medium flex justify-between items-end ">
          Menu{" "}
          <button className="text-xl " onClick={handleclose}>
            ✕
          </button>
        </div>

        <ul className="flex flex-col mt-6 gap-5">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/About-us" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>

          {/* Insurance dropdown */}
          <li>
            <div className="flex justify-between items-center w-full">
              <Link href={"/Insurance"} onClick={() => setIsMenuOpen(false)}>
                <span>Insurance</span>
              </Link>
              <span>
                {isInsuranceOpen ? (
                  <i
                    onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                    className="ri-arrow-down-s-line"
                  ></i>
                ) : (
                  <i
                    onClick={() => setIsInsuranceOpen(!isInsuranceOpen)}
                    className="ri-arrow-right-s-line"
                  ></i>
                )}
              </span>
            </div>
            {isInsuranceOpen && (
              <ul className="pl-4 mt-6 space-y-6 text-sm">
                {[
                  "Life Insurance",
                  "Trauma Recovery Cover",
                  "Total Permanent Disability Benefit Cover",
                  "Mortgage & Rent Protection Cover",
                  "Income Protection Cover",
                  "Medical Insurance",
                  "Group Insurance",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/Insurance/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="  "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Mortgage dropdown */}
          <li>
            <div className="flex justify-between items-center w-full">
              <Link href={"/Mortgage"} onClick={() => setIsMenuOpen(false)}>
                <span>Mortgage</span>
              </Link>
              <span>
                {isMortgageOpen ? (
                  <i
                    onClick={() => setIsMortgageOpen(!isMortgageOpen)}
                    className="ri-arrow-down-s-line"
                  ></i>
                ) : (
                  <i
                    onClick={() => setIsMortgageOpen(!isMortgageOpen)}
                    className="ri-arrow-right-s-line"
                  ></i>
                )}
              </span>
            </div>
            {isMortgageOpen && (
              <ul className="pl-4 mt-6 space-y-6   text-sm">
                {[
                  "Home Loan",
                  "Refinance",
                  "Investment Loan",
                  "Business Loan",
                  "Construction Loan",
                  "Commercial Loan",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/Mortgage/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                      className=""
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/Case-study" onClick={() => setIsMenuOpen(false)}>
              Case Study
            </Link>
          </li>
          <li>
            <div className=" flex justify-between items-center ">
              <Link
                href="/Calculator"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Calculator
              </Link>
              <span>
                {isMortgageOpen ? (
                  <i
                    onClick={() => setiscal(!iscal)}
                    className="ri-arrow-down-s-line"
                  ></i>
                ) : (
                  <i
                    onClick={() => setiscal(!iscal)}
                    className="ri-arrow-right-s-line"
                  ></i>
                )}
              </span>
            </div>

            {iscal && (
              <ul className=" pl-4 space-y-6 mt-6 text-sm">
                {["Repayment Calculator", "Loan Calculator"].map((e, id) => {
                  return (
                    <li key={id}>
                      <Link
                        href={`/Calculator/${e.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        {e}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/Interest-rate"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Interest Rate
            </Link>
          </li>
          <li>
            <Link
              href="/Enquire"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
