"use client";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";

export default function about() {
  return (
    <>
      <Banner title="About us" />
      <main className=" ">
        <section className="section-1 max-w-[1600px] mx-auto w-[100%]  lg:p-[3rem] lg:pb-[5rem] xl:pb-[3rem]   ">
          <main className=" h-full w-full lg:flex  ">
            <div className="Left lg:w-[45%]  max-lg:hidden  ">
              <div className="img lg:h-[105%] xl:h-[100%]   w-[100%]  rounded-2xl overflow-hidden ">
                <img
                  src="about-pic1.jpg"
                  className=" w-full  h-full  object-cover object-center "
                  alt=""
                />
              </div>
            </div>
            <div className="Right w-full space-y-6  lg:w-[55%]  flex flex-col   max-lg:p-6   ">
              <div className="uppercontent   lg:pl-10  ">
                <div className="left w-[100%]  ">
                  <p className="text-[var(--primg)]  text-[16px] ">
                    <i className="   ri-record-circle-line mr-1 "></i> About us
                  </p>
                  <h2 className="text-black text-[20px] lg:text-[24px]   mt-4 leading-7  xl:leading-9 font-semibold">
                    Welcome to Lifecycle Financial – Your Trusted Financial
                    Advisory Partner
                  </h2>
                </div>
                <div className="right text-black font-semibold ">
                  <p className="  text-[14px]  font-extralight tracking-wider leading-6  text-justify    mt-3 ">
                    Lifecycle Financial is a Trusted financial advisory firm,
                    committed to delivering a comprehensive range of financial
                    services tailored to your needs. We specialize in:
                    <br /> <strong>Mortgage Solutions</strong> – Residential and
                    Commercial
                    <br /> <strong>Personal Insurance –</strong>
                    Life, Health, Income Protection, Mortgage Protection,
                    Redundancy Cover, and Trauma Insurance
                    <br /> <strong>General Insurance –</strong>
                    Home, Contents, Car, and Business (through our network of
                    specialist partners) With strong relationships across New
                    Zealand’s top banks, private lenders, and insurance
                    providers, we’re able to offer highly competitive interest
                    rates and premiums—without compromising on the quality of
                    advice or products we recommend.
                  </p>
                </div>
              </div>

              {/* image */}
              <div className="img w-full sm:h-[40vw]  rounded-2xl overflow-hidden lg:hidden ">
                <img
                  src="about-pic1.jpg"
                  className=" w-full h-full object-cover  "
                  alt=""
                />
              </div>

              <div className="lowercontent p-4 text-white  bg-[var(--primg)] w-full max-lg:rounded-2xl   lg:w-[90%] lg:p-10 lg:leading-6   lg:rounded-r-4xl ">
                <h2 className="  max-md:text-[20px] leading-8 font-semibold   w-[90%] mb-4 ">
                  Comprehensive Financial Solutions, Tailored to Your Needs
                </h2>
                <p className=" text-[14px]   text-justify text-white/80  ">
                  At LifeCycle Financial, we are non-aligned advisers, meaning
                  we are not tied to any specific lender or insurer. This
                  independence allows us to provide objective recommendations
                  tailored solely to your needs—based on a comprehensive needs
                  analysis, not sales targets.
                </p>
              </div>
            </div>
          </main>
        </section>
        {/* section 2 team */}
        <div className=" w-full px-4 py-10 xl:px-[9%]  bg-[var(--tri)]/10  ">
          <main className=" w-full flex max-w-[1600px] mx-auto  flex-col items-center ">
            <h2 className=" text-[26px]   text-[var(--secgr)]  font-semibold mb-4 ">
              {" "}
              Our Mortgage Experts
            </h2>
            <h6 className=" text-center ">
              Our expert team of mortgage and insurance specialists provides a
              seamless, one-stop solution for all your personal and business
              financial needs. Whether you're protecting your income, financing
              your first home, or securing your business assets, we’re here to
              support you every step of the way.
            </h6>

            {/* cards */}
            <div className=" w-full  text-black/40  mt-6 flex max-md:flex-col items-center justify-around gap-5 lg:justify-center lg:gap-15 ">
              {/* card 1 */}

              {[
                {
                  Name: "Harpeet Singh Rattan",
                  title: " Financial Adviser",
                  Phone: "021408971",
                  img: "our2.jpg",
                },
                {
                  Name: "Rajwinder Rattan",
                  title: "Financial Adviser",
                  Phone: "021707246",
                  img: "our1.jpg",
                },
              ].map((el) => (
                <div className="card  w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]  mt-4  bg-white shadow rounded-xl flex items-center justify-center text-center p-4">
                  <div className="img w-[100%]  aspect-square">
                    <img
                      src={el.img}
                      className="w-full rounded-xl h-full object-cover object-top "
                      alt=""
                    />
                    <h1 className=" mt-2  text-black/80 font-medium ">
                      {el.Name}
                    </h1>
                    <h4>{el.title}</h4>
                    <a href={`tel:${el.Phone}`} className=" text-[14px]  ">
                      <i class="ri-phone-fill"></i> {el.Phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* section 2 */}
        <section className="section_2   w-full overflow-hidden  ">
          <main className="   max-w-[1600px] max-lg:space-y-4  max-lg:p-6   mx-auto  relative  ">
            {/* Lower div */}
            <div className=" lower w-full flex max-lg:flex-col  gap-6 lg:gap-3  lg:p-[2.8rem]  xl:p-[5rem] justify-around  ">
              <div className=" w-full rounded-2xl   lg:w-[45%] bg-white p-3 shadow-2xl  lg:p-10  styled-html  ">
                <h2>Why Lifecycle Financial?</h2>
                <ul>
                  <li>
                    We act as a single point of contact for all your financial
                    protection and lending requirements. We work with all major
                    banks and insurance providers across New Zealand, giving you
                    access to a full range of mortgage and personal insurance
                    solutions, including life, health, trauma, income
                    protection, and more.
                  </li>
                  <li>
                    Our team consists of highly experienced advisers who have
                    established a strong track record in the financial services
                    industry. We pride ourselves on building long-term
                    relationships and delivering advice you can trust.
                  </li>
                  <li>
                    At the heart of our approach is a commitment to
                    client-focused service. We ensure that when the time comes,
                    you receive the protection and support you’ve paid for—so
                    you can maintain financial security and your desired
                    standard of living.
                  </li>
                </ul>
              </div>

              <div className="w-full rounded-2xl text-left lg:w-[45%] bg-white p-4 lg:p-10 shadow-2xl styled-html">
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Do?</h2>
  </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 justify-between  "> {/* Changed gap-10 to gap-x-8 for horizontal space */}
  {/* Insurance Column */}
  <div className=" mx-auto "> 
    <h3 className="text-lg mb-3">
      <Link href="/Insurance" className="hover:text-[var(--primg)] transition-colors">
        Insurance
      </Link>
    </h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li><Link href="/Insurance/life-insurance">Life Insurance</Link></li>
      <li><Link href="/Insurance/trauma-recovery-cover">Trauma Recovery Cover</Link></li>
      <li><Link href="/Insurance/total-permanent-disability-benefit-cover">Total Permanent Disability Benefit Cover</Link></li>
      <li><Link href="/Insurance/mortgage-rent-protection-cover">Mortgage & Rent Protection Cover</Link></li>
      <li><Link href="/Insurance/income-protection-cover">Income Protection Cover</Link></li>
      <li><Link href="/Insurance/medical-insurance">Medical Insurance</Link></li>
      <li><Link href="/Insurance/group-insurance">Group Insurance</Link></li>
    </ul>
  </div>

  {/* Mortgage Column */}
  <div className="  mx-auto"> {/* No change needed here for this issue */}
    <h3 className="text-lg mb-3">
      <Link href="/Mortgage" className="hover:text-[var(--primg)] transition-colors">
        Mortgage
      </Link>
    </h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li><Link href="/Mortgage/home-loan">Home Loan</Link></li>
      <li><Link href="/Mortgage/refinance">Refinance</Link></li>
      <li><Link href="/Mortgage/investment-loan">Investment Loan</Link></li>
      <li><Link href="/Mortgage/business-loan">Business Loan</Link></li>
      <li><Link href="/Mortgage/construction-loan">Construction Loan</Link></li>
      <li><Link href="/Mortgage/commercial-loan">Commercial Loan</Link></li>
    </ul>
  </div>
</div>
</div>

            </div>
          </main>
        </section>

        {/*  */}
      </main>
    </>
  );
}
