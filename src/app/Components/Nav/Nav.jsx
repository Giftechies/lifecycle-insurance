"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav({ setIsMenuOpen, }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [InsuranceOpen, setInsuranceOpen] = useState(false);
  const [mortgageOpen, setMortgageOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    // ${show ? "translate-y-0" : "-translate-y-full"}
    <>
      <nav className="  w-full max-w-[1600px] min-w--[320px] mx-auto ">
        <div className=" w-full h-15  lg:h-20 px-4   lg:px-[3rem]  py-1  flex items-center justify-between      max-w-[1600px] mx-auto ">
          {/*logo  */}
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer w-[70px] md:w-[70px] p-1  lg:w-[90px] xl:w-[120px]  bg-white lg:p-3 mt-6 z-40 "
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              className="object-contain z-40 w-full h-full"
            />
          </div>
          <div className=" flex items-center lg:gap-3 lg:text-[14px] xl:gap-12 xl:text-[16px]">
            <div className="hidden mb:flex mb:gap-1  lg:flex gap-3  ">
              <Link href="/About-us" className="border-b-2 border-white  hover:border-b-2 hover:border-black px-4 py-2">
                About us
              </Link>

              {/* Insurance dropdown */}
              <div
                className="relative   duration-150    px-4 py-2"
                onMouseEnter={() => setInsuranceOpen(true)}
                onMouseLeave={() => setInsuranceOpen(false)}
              >
                <Link href="/Insurance">Insurance</Link>
                {InsuranceOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white  shadow-xl rounded-md z-50 p-3">
                    {[
                      "Life insurance",
                      "Trauma Recovery Cover",
                      "Total Permanent Disability Benefit Cover",
                      "Mortgage & Rent Protection Cover",
                      "Income Protection Cover",
                      "Medical Insurance",
                      "Group Insurance",
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={`/Insurance/${item
                          .toLowerCase()
                          .replace(/ & /g, "-")
                          .replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 hover:bg-gray-100 text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mortgage dropdown */}
              <div
                className="relative   px-4 py-2"
                onMouseEnter={() => setMortgageOpen(true)}
                onMouseLeave={() => setMortgageOpen(false)}
              >
                <Link href="/Mortgage">Mortgage</Link>
                {mortgageOpen && (
                  <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-md z-50 p-3">
                    {[
                      "Home Loan",
                      "Refinance",
                      "Investment Loan",
                      "Business Loan",
                      "Construction Loan",
                      "Commercial Loan",
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={`/Mortgage/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-3 py-2 hover:bg-gray-100 text-black"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="hover:border-b-2 hover:border-black px-4 py-2">
                <Link href="/Case-study">Case Study</Link>
              </div>
              <div className="hover:border-b-2 hover:border-black px-4 py-2">
                <Link href="/Calculator">Calculator</Link>
              </div>
              <div className="hover:border-b-2 hover:border-black px-4 py-2">
                <Link href="/Interest-rate">Interest Rate</Link>
              </div>
            </div>
            <div>
              <i
                onClick={() => setIsMenuOpen(true)}
                className="text-[1.5rem] py-2 px-2 lg:hidden bg-black text-white rounded-[5px] tracking-tighter ri-menu-line"
              ></i>
              <Link
                href="/Enquire"
                className="hidden lg:block py-3 px-5  text-[14px] text-center   rounded-full bg-[var(--primg)] text-white  hover:text-black hover:mb-2
           xl transition-all duration-400 ease-in-out"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <div
        class="fixed left-0 bottom-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-lg z-[9999]"
        bis_skin_checked="1"
      >
        <div class="relative" bis_skin_checked="1">
          <div class="grid grid-cols-5 h-16" bis_skin_checked="1">
            <a
              href="tel:+15874355005"
              class="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span class="text-xs font-medium">Call</span>
            </a>
            <a
               href="mailto:harpreet@lifecyclefinancial.co.nz"
              class="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span class="text-xs font-medium">Email</span>
            </a>
            <div
              class="flex items-center justify-center relative"
              bis_skin_checked="1"
            >
              <a
                class="absolute -top-6 w-14 h-14 bg-[var(--primg)] rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-house"
                  aria-hidden="true"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </a>
              <span class="text-xs font-medium text-gray-700 mt-6">Home</span>
            </div>
            <a
              class="flex flex-col items-center justify-center gap-1 transition-all duration-200 py-2 text-gray-600 hover:text-[var(--primary)]"
              href="/services"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-grid3x3 lucide-grid-3x3"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
                <path d="M9 3v18"></path>
                <path d="M15 3v18"></path>
              </svg>
              <span class="text-xs font-medium">Services</span>
            </a>
            <a
              class="flex flex-col items-center justify-center gap-1 transition-all duration-200 py-2 text-gray-600 hover:text-[var(--primary)]"
              href="/Enquire"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-circle"
                aria-hidden="true"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              <span class="text-xs font-medium">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
