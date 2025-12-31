"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { getNavData } from "@/actions/nav.action";

type MobileProps = {
  setIsMenuOpen: (open: boolean) => void;
};

export default function MobileMenuOverlay({ setIsMenuOpen }: MobileProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMortgageOpen, setIsMortgageOpen] = useState(false);
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [iscal, setiscal] = useState(false);

  const [navData, setNavData] = useState<any>(null);

  /* ---------------- Fetch Nav Data ---------------- */
  useEffect(() => {
    const fetchNavData = async () => {
      try {
        const data = await getNavData();
        setNavData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNavData();
  }, []);

  /* ---------------- Close Drawer ---------------- */
  const handleclose = () => {
    if (!drawerRef.current) return;

    gsap.to(drawerRef.current, {
      x: "100%",
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => setIsMenuOpen(false),
    });
  };

  /* ---------------- Open Animation ---------------- */
  useGSAP(() => {
    if (!drawerRef.current) return;

    gsap.set(drawerRef.current, { x: "100%" });

    gsap.to(drawerRef.current, {
      x: "0%",
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  /* ---------------- Lock Scroll ---------------- */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[var(--secgr)]/50 backdrop-blur-[2px]"
        onClick={handleclose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-[70%] sm:w-[50%] bg-black/70 text-white shadow-lg p-6 overflow-y-auto"
      >
        <div className="border-b h-8 text-[18px] font-medium flex justify-between items-end">
          Menu
          <button className="text-xl" onClick={handleclose}>
            ✕
          </button>
        </div>

        <ul className="flex flex-col mt-6 gap-5">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>

          <li>
            <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>

          {/* ---------------- Insurance ---------------- */}
          <li>
            <div className="flex justify-between items-center">
              <Link href="/insurance" onClick={() => setIsMenuOpen(false)}>
                Insurance
              </Link>
              {isInsuranceOpen ? (
                <i
                  onClick={() => setIsInsuranceOpen(false)}
                  className="ri-arrow-down-s-line"
                />
              ) : (
                <i
                  onClick={() => setIsInsuranceOpen(true)}
                  className="ri-arrow-right-s-line"
                />
              )}
            </div>

            {isInsuranceOpen && (
              <ul className="pl-4 mt-6 space-y-6 text-sm">
                {navData?.subInsurance?.map((item: any) => (
                  <li key={item._id}>
                    <Link
                      href={`/insurance/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* ---------------- Mortgage ---------------- */}
          <li>
            <div className="flex justify-between items-center">
              <Link href="/mortgage" onClick={() => setIsMenuOpen(false)}>
                Mortgage
              </Link>
              {isMortgageOpen ? (
                <i
                  onClick={() => setIsMortgageOpen(false)}
                  className="ri-arrow-down-s-line"
                />
              ) : (
                <i
                  onClick={() => setIsMortgageOpen(true)}
                  className="ri-arrow-right-s-line"
                />
              )}
            </div>

            {isMortgageOpen && (
              <ul className="pl-4 mt-6 space-y-6 text-sm">
                {navData?.subMortgage?.map((item: any) => (
                  <li key={item._id}>
                    <Link
                      href={`/mortgage/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* ---------------- Case Studies ---------------- */}
          <li>
            <div className="flex justify-between items-center">
              <Link href="/case-study" onClick={() => setIsMenuOpen(false)}>
                Case Study
              </Link>
              {isCaseOpen ? (
                <i
                  onClick={() => setIsCaseOpen(false)}
                  className="ri-arrow-down-s-line"
                />
              ) : (
                <i
                  onClick={() => setIsCaseOpen(true)}
                  className="ri-arrow-right-s-line"
                />
              )}
            </div>

            {isCaseOpen && (
              <ul className="pl-4 mt-6 space-y-6 text-sm">
                {navData?.caseStudies?.map((item: any) => (
                  <li key={item._id}>
                    <Link
                      href={`/case-study/${item.slug}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.heading}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* ---------------- Calculator ---------------- */}
          <li>
            <div className="flex justify-between items-center">
              <Link href="/Calculator" onClick={() => setIsMenuOpen(false)}>
                Calculator
              </Link>
              {iscal ? (
                <i
                  onClick={() => setiscal(false)}
                  className="ri-arrow-down-s-line"
                />
              ) : (
                <i
                  onClick={() => setiscal(true)}
                  className="ri-arrow-right-s-line"
                />
              )}
            </div>

            {iscal && (
              <ul className="pl-4 mt-6 space-y-6 text-sm">
                {["Repayment Calculator", "Loan Calculator"].map((e) => (
                  <li key={e}>
                    <Link
                      href={`/Calculator/${e.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/Interest-rate" onClick={() => setIsMenuOpen(false)}>
              Interest Rate
            </Link>
          </li>

          <li>
            <Link href="/Enquire" onClick={() => setIsMenuOpen(false)}>
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
