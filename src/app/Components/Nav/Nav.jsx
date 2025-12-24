"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenuOverlay from "../MobileMenuOverlay/MobileMenuOverlay";

export default function Nav() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [InsuranceOpen, setInsuranceOpen] = useState(false);
  const [mortgageOpen, setMortgageOpen] = useState(false);
  const [calculatorOpen, setcalculatorOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname()


  const navData = [
    {
      label: 'About us',
      path: '/about-us'
    },
    {
      label: 'Insurance',
      path: "/insurance",
      child: [
        { label: "Life insurance", path: '/insurance/life-insurance' },
        { label: "Trauma Recovery Cover", path: '/insurance/trauma-recovery-cover' },
        { label: "Total Permanent Disability Benefit Cover", path: '/insurance/total-permanent-disability-benefit-cover' },
        { label: "Mortgage & Rent Protection Cover", path: '/insurance/mortgage-rent-protection-cover' },
        { label: "Income Protection Cover ", path: '/insurance/income-protection-cover ' },
        { label: "Medical Insurance ", path: '/insurance/medical-insurance' },
        { label: " Group Insurance", path: '/insurance/group-nsurance ' },
       
      ]
    },
    {
      label: "Mortgage",
      path: '/mortgage',
      child: [
        { label: "Home Loan", path: "/mortgage/home-loan" },
        { label: "Refinance", path: "/mortgage/refinance" },
        { label: "Investment Loan", path: "/mortgage/investment-loan" },
        { label: "Business Loan", path: "/mortgage/business-loan" },
        { label: "Construction Loan", path: "/mortgage/construction-loan" },
        { label: "Commercial Loan", path: "/mortgage/commercial-loan" },
      ]
    },
    {
      label: 'Case Study',
      path: '/case-study'
    },
    {
      label: "Calculator",
      path: "/calculator",
      child: [
        {
          label: "Repayment Calculator",
          path: "/calculator/repayment-calculator"
        },
        {
          label: "Loan calculator",
          path: "/calculator/loan-calculator"
        },
      ]
    },
    {
      label: "Interest Rate",
      path: "/interest-rate"
    }
  ]

  return (
    <>
      <nav className=" flex  w-full max-w-[1600px] min-w-[320px] mx-auto justify-between items-center px-4 lg:px-[3rem] h-20 ">
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

        <div className=" flex gap-20  items-center  justify-between " >
          <div className="hidden lg:flex items-center gap-4 xl:gap-10  " >
            {
            navData?.map((item, idx) => {

              const haschild = item?.child && item?.child.length > 0
              const isChildActive = haschild ? item?.child.some((child) => child.path === path) : false
              const isActive = path === item.path || isChildActive

              return (
                <div key={idx} className="relative group " >
                  <Link href={`${item.path}`} className={cn("group flex items-center gap-2 relative ",{'font-semibold':isActive})} >
                  <div className={cn(`w-0 bg-orange-700 h-px border absolute -bottom-1 left-0 `,{'w-full':isActive})} />
          
                    {item.label}
                    {haschild && <span  >
                      <ChevronDown className=" mt-1 size-4 group-hover:rotate-180 transition-all duration-300 ease-in-out"/>

                    </span> }
                  </Link>

                  {haschild &&
                    <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-md z-50 p-3 hidden group-hover:block ">
                      {item.child.map((citem, index) => (
                        <Link
                          key={index}
                          href={citem.path}
                          className={`block px-3 py-2 hover:bg-gray-100 text-black ${path===citem.path && "bg-gray-200 rounded-lg "} `}
                        >
                          {citem.label}
                        </Link>
                      ))}
                    </div>
                  }
                </div>
              )
            })
          }
          </div>


          <div>
            <i
              onClick={() => setIsMenuOpen(true)}
              className="text-[1.5rem] py-2 px-2 lg:hidden bg-[var(--secgr)] text-white rounded-[5px] tracking-tighter ri-menu-line"
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


      </nav>

      { isMenuOpen && <MobileMenuOverlay setIsMenuOpen={setIsMenuOpen} /> }

      {/* mobile */}
      <div
        className="fixed left-0 bottom-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-lg z-[9999]"
        bis_skin_checked="1"
      >
        <div className="relative" bis_skin_checked="1">
          <div className="grid grid-cols-5 h-16" bis_skin_checked="1">
            <a
              href="tel:0800507770"
              className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span className="text-xs font-medium">Call</span>
            </a>
            <a
              href="mailto:harpreet@lifecyclefinancial.co.nz"
              className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-[var(--primary)] transition-colors duration-200 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span className="text-xs font-medium">Email</span>
            </a>
            <div
              className="flex items-center justify-center relative"
              bis_skin_checked="1"
            >
              <a
                className="absolute -top-6 w-14 h-14 bg-[var(--primg)] rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-house"
                  aria-hidden="true"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </a>
              <span className="text-xs font-medium text-gray-700 mt-6">Home</span>
            </div>
            <a
              className="flex flex-col items-center justify-center gap-1 transition-all duration-200 py-2 text-gray-600 hover:text-[var(--primary)]"
              href="/services"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-grid3x3 lucide-grid-3x3"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
                <path d="M9 3v18"></path>
                <path d="M15 3v18"></path>
              </svg>
              <span className="text-xs font-medium">Services</span>
            </a>
            <a
              className="flex flex-col items-center justify-center gap-1 transition-all duration-200 py-2 text-gray-600 hover:text-[var(--primary)]"
              href="/Enquire"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
                aria-hidden="true"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>

              {/* <img src="/call.svg" className=" size-5" alt="" /> */}
              <span className="text-xs font-medium">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
