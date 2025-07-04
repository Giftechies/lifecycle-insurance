"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
type NavProps = {
  setIsMenuOpen: (open: boolean) => void;
  setIsEnquireOpen: (open: boolean) => void;
};

export default function Nav({ setIsMenuOpen, setIsEnquireOpen }: NavProps) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
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
        <div className=" w-full h-15  lg:h-20  px-[2.5rem] py-1 flex items-center justify-between   lg:justify-around   max-w-[1600px] mx-auto ">
          {/*logo  */}
          <div
            onClick={() => router.push("/")}
            className=" cursor-pointer w-[70px] md:w-[70px]   lg:w-[85px]  bg-white p-1 mt-4 z-40 "
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              className="object-contain z-40 w-full h-full"
            />
          </div>

          <div className="hidden mb:flex mb:gap-1  lg:flex gap-3  ">
            <div className="border-b-2 border-white hover:border-b-2 hover:border-black px-4 py-2">
              <Link href="/about">About Us</Link>
            </div>

            {/* Insurance dropdown */}
            <div
              className="relative   duration-150   px-4 py-2"
              onMouseEnter={() => setInsuranceOpen(true)}
              onMouseLeave={() => setInsuranceOpen(false)}
            >
              <Link href="/Insurence">Insurance</Link>
              {insuranceOpen && (
                <div className="absolute top-full left-0 w-64 bg-white  shadow-xl rounded-md z-50 p-3">
                  {[
                    "Life Insurance",
                    "Trauma Recovery Cover",
                    "Total Permanent Disability Benefit Cover",
                    "Mortgage & Rent Protection Cover",
                    "Income Protection Cover",
                    "Medical Insurance",
                    "Group Insurance",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={`/Insurence/${item
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
                    "Home Loans",
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
              <Link href="/contact">Calculator</Link>
            </div>
          </div>
          <div>
            <i
              onClick={() => setIsMenuOpen(true)}
              className="text-[1.5rem] py-2 px-2 lg:hidden bg-black text-white rounded-[5px] tracking-tighter ri-menu-line"
            ></i>
            <Link
            href="#"
              onClick={()=>setIsEnquireOpen(true)}
              className="hidden lg:block py-3 text-center hover:scale-[.9] w-[10em] rounded-full bg-[var(--primg)] text-white  hover:shadow-2
           xl transition-all duration-400 ease-in-out"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="w-full max-w-[1600px] mx-auto lg:hidden text-[12px] ">
        {/* Mobile Navbar (Bottom) */}
        <div className=" fixed bottom-0 w-full bg-white border-t z-50 flex justify-evenly gap-4 items-center h-[10vh] px-4 shadow-xl text-black">
          {/* Left Item */}
          <a
            href="tel:0800507770"
            className="flex flex-col items-center text-[12px]"
          >
            <div className=" logo  mb-1">
              <img src="/navc.svg" className=" w-[18px]"  alt="" />
            </div>
            Call
          </a>

          {/* Left Item */}
          <a
            href="mailto:harpreet@lifecyclefinancial.co.nz"
            className="flex flex-col items-center  t"
          >
            <div className=" logo   mb-1 ">
              <img src="/navm.svg"className=" w-[18px]"  alt="" />
            </div>
            Email
          </a>

          {/* Center Logo */}
          <div
            onClick={() => router.push("/")}
            className="  p-1 flex flex-col items-center rounded-full mb-6 ml-1  borde cursor-pointer"
          >
            <div className=" h-[9vh] w-[9vh] flex items-center justify-center rounded-full  bg-[var(--primg)]   ">
              <img src="/navh.svg" alt="" className=" logo w-[18px]  " />
            </div>
            <span className=" mt-1  text-[12px] text-[var(--primg)] ">
              Home
            </span>
          </div>

          {/* Right Item */}
          <Link href="/Mortgage" className="flex flex-col items-center  ">
            <div className=" logo mb-1  ">
              <img src="/navs.svg" className=" w-[18px]" alt="" />
            </div>
            Services
          </Link>
          {/* Right Item */}
          <Link
            href="#"
              onClick={()=>setIsEnquireOpen(true)}
            
            className="flex flex-col items-center text-[12px] "
          >
            <div className=" logo    mb-1 ">
              <img src="/navco.svg" className=" w-[18px]"  alt="" />
            </div>
            contact
          </Link>
        </div>
      </nav>
    </>
  );
}
