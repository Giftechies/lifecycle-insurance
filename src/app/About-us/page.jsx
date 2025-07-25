"use client";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import { getCategoryPages } from "../lib/api";

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
            <div className="Right w-full space-y-6  lg:w-[55%]  flex flex-col lg:pb-10  max-lg:p-6   ">
              <div className="uppercontent   lg:pl-10  ">
                <div className="left w-[100%]  ">
                  <p className="text-[var(--primg)]  text-[16px] ">
                    <i className="   ri-record-circle-line mr-1 "></i> About us
                  </p>
                  <h2 className="text-black text-[20px] lg:text-[24px]   mt-4 leading-7  xl:leading-9 font-semibold">
                    Operating since 2006 in this Industry.
                  </h2>
                </div>
                <div className="right text-black font-semibold ">
                  <h6 className="  text-[14px]  font-extralight tracking-wider leading-6  text-justify    mt-3 ">
                    Lifecycle Financial is a part of KAN ( Kiwi Advisor Network
                    ) which is one of the biggest financial groups in Mortgage
                    and Insurance distribution. We are a member of Auckland
                    Chamber of Commerce and contribute to Insurance & Saving
                    Ombudsman Scheme.
                  </h6>
                  <h6 className="  text-[14px]  font-extralight tracking-wider leading-6  text-justify    mt-3 ">
                    Lifecycle Financial is a Leading independent Financial Advisory Company providing a wide range of financial services to the clients including Mortgages both Residential & Commercial & Personal insurance products such as life, Health, Income Protection, Mortgage Protection, Redundancy Cover, and Trauma insurance. For home, contents, car, and business insurance we have additional specialists that we call upon.
                  </h6>
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

              <div className="lowercontent p-4 text-white  bg-[var(--primg)] w-full max-lg:rounded-2xl  lg:mt-8  lg:w-[90%] lg:p-10 lg:leading-6   lg:rounded-r-4xl ">
                <h2 className="  lg:leading-6 font-semibold  text-[20px]  xl:leading-8 w-[90%] ">
                  Comprehensive Financial Solutions, Tailored to Your Needs
                </h2>
                <p className=" text-[14px]  mt-3 text-justify text-white/80  ">
              Lifecycle Financial works with most of the leading Banks, Private Lenders, and insurers in NZ, and therefore can offer the most competitive Interest rates and premiums without compromising on the quality of the products it recommends. We are a leading team of Mortgages and Insurance Specialists who can help you with all of your financial requirements. We are one point of contact for all types of personal insurances.
                </p>
              </div>
            </div>
          </main>
        </section> 
          {/* section 3 team */}
        <section className=" w-full px-4 py-10 xl:px-[9%]  bg-[var(--tri)]/10  max-w-[1600px] mx-auto">
          <main className=" w-full flex  flex-col items-center ">
            <h2 className=" text-[26px]   text-[var(--secgr)]  font-semibold ">
              {" "}
              Our Mortgage Experts
            </h2>

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
                    <h4 >{el.title}</h4>
                    <a href={`tel:${el.Phone}`} className=" text-[14px]  ">
                      <i class="ri-phone-fill"></i> {el.Phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>

        {/* section 2 */}
        <section className="section_2   w-full overflow-hidden  ">
          <main className="   max-w-[1600px] max-lg:space-y-4  max-lg:p-6   mx-auto  relative  ">
            {/* Lower div */}
            <div className=" lower w-full flex max-lg:flex-col  gap-6 lg:gap-3  lg:p-[2.8rem]  xl:p-[5rem] justify-around  ">
              <div className=" w-full rounded-2xl   lg:w-[45%] bg-white p-3 shadow-2xl  lg:p-10  styled-html ">
                <h2>Why Lifecycle Financial?</h2>
                <ul>
                  <li>
                    <strong>We are independent Advisors</strong>, not bound to
                    use any insurers, and make recommendations to clients on the
                    basis of their need analysis. In this way, we can offer
                    client type of the product and insurance company based upon
                    their requirements and benefits.
                  </li>
                  <li>
                    <strong>
                      We are one point of contact for all your financial
                      requirements
                    </strong>{" "}
                    as we deal with most of the major banks and insurance
                    companies of New Zealand, a client would like to deal with
                    and we offer all types of mortgage and insurance solutions a
                    client would need.
                  </li>
                  <li>
                    <strong>We have a team of experienced brokers</strong> who
                    have already proved themselves in the insurance market.
                  </li>
                  <li>
                    <strong>
                      Our focus is on our clients’ needs and serves them
                      accordingly
                    </strong>{" "}
                    so that when the time comes, they get what they have paid
                    for and can maintain their living standards.
                  </li>
                </ul>
              </div>

              <div className="  w-full rounded-2xl text-left lg:w-[45%] bg-white p-4 lg:p-10  shadow-2xl styled-html">
                <h2>What We Do?</h2>
                <ul>
                  <li>
                    We review old covers client has got to see whether it is
                    up-to-date as per their needs and status.
                  </li>
                  <li>
                    We do need analysis based upon the information provided by
                    client.
                  </li>
                  <li>
                    Based upon the need analysis, we contact all insurance
                    companies to get best product and deal as per clients
                    requirements.
                  </li>
                  <li>
                    We do consultation and provide advice on various insurance
                    issues.
                  </li>
                  <li>
                    We will handle all claims on your behalf to get satisfactory
                    conclusion.
                  </li>
                  <li>
                    We do frequent follow-ups and auditing of your insurance
                    portfolio.
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </section>

        {/*  */}

      
      </main>
    </>
  );
}
