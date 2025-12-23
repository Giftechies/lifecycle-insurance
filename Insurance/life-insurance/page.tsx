// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner"
import Slider from "@/app/Components/Slider/Slider";
import {
  ShieldCheck,
  HeartPulse,
  Activity,
  Home,
  Wallet,
  Stethoscope,
  Users,
  Phone,
} from "lucide-react";

const Sidebar = () => {

  const premium = [
    {
      title: " Level Premium:",
      content:
        " Under this structure, your premiums are averaged and then guaranteed to remain the same until you reach age 65, 70, 80 or 100 at which time the premium structure automatically reverts to yearly renewable term. This is the best solution to increasing premiums each year.",
    },
    {
      title: "  Step Premium:",
      content:
        "Your premiums are based on your current age and sum insured and are adjusted each year on your policy anniversary.",
    },
  ];


  const food = [
    {
      content:
        "Stroke is the third-largest killer in New Zealand (about 2,000 people every year).",
    },
    {
      content:
        " In New Zealand, around 22 people die each week from bowel cancer..",
    },
    {
      content:
        " On average there is one death in New Zealand every 16 minutes.",
    },
    {
      content:
        "Cancer was the leading cause of death for both males and females in New Zealand in 2009 with 8,437 people having cancer recorded as the underlying cause of death.",
    },
  ];

  const use = [
    {content:'Paying off the mortgage Many people need to reduce their debt as quickly as they can if they go from two incomes to one.'},
    {content:'Providing extra income for their family after they have gone or contributed to their spouse’s retirement fund. Many people would need financial support if an income earner passed away.'},
    {content:'Paying for childcare support if the person who passed away was the primary caregiver. Many people find that, as the remaining parent, they need extra support. If they continue working, they may also need more childcare support'},
    {content:'Providing future financial support for their children: You can use part of your advance life Insurance payment, after becoming terminally ill, to pay for your children’s Tertiary education.'},
  ]

  const benfite = [
    {content:''},
    {content:''},
    {content:''},
    {content:''},
    {content:''},
  ]

  return (
    <>
      <Banner title="Life Insurance" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Life Insurance
              </h1>
              <h2 className="  text-[26px] leading-6 lg:text-[2.5vw]   font-semibold mt-4 ">
                When others depend on you
              </h2>
              <p className=" mt-1 text-[14px]  lg:mt-4 tracking-wider text-justify ">
                Have you made plans to ensure your family or business can
                survive without you? Could your family cope with paying the
                monthly bills or making mortgage repayments without your salary?
                Could your business continue without your input and expertise?
              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4 items-stretch  lg:flex gap-8">
              {/* left content */}
              <div className="leftcontent w-[100%] lg:w-[55%]  ">
                {/* content 2 */}
                <div className=" text-black/60 mt-4 ">
                  <h1 className="  text-[18px] lg:text-[26px] mb-4 text-black font-semibold ">
                    Food for Thought…
                  </h1>
                  {food.map((el) => (
                    <div className=" flex items-start mt-1 text-black/80 ">
                      <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                      <p className=" text-[14px]">{el.content}</p>
                    </div>
                  ))}
                </div>

              
              </div>

              {/* Right content image */}
              <div className="RightContent  w-full lg:w-[40%]  flex overflow-hidden rounded-lg ">
                <img
                  src="/life-insurance-policy.jpg"
                  className="max-h-80  lg:h-full w-full object-cover"
                  alt=""
                />
                
              </div>
            </div>
          </section>
          
          {/* section 2 */}
          <section className="section_2  w-full  text-justify ">
            
           <div>
             <h1 className="text-[18px] mt-2 lg:text-[26px] text-black font-semibold">
              How it works
            </h1>
            <p className=" text-[14px] mt-4 ">
              Life Cover can pay a lump sum or a monthly income, depending on
              your needs, if you die prematurely. It’s essential for those with
              family, business or other financial commitments. So why leave life
              to chance?
            </p>
            <h2 className=" text-[18px] text-black font-semibold mt-3 ">
              What do most people use Life Cover for?
            </h2>
           </div>

          {use.map((el)=>(
            <div className=" flex items-start mt-4 ">
               <i className="ri-arrow-right-s-line"></i><p className=" text-[14px] " >{el.content}</p>

            </div>
          ))}
            
          </section>
          {/* section 3 */}
          <section className="section_3  w-full  pb-5 text-justify text-[14px] ">
            <h2 className=" text-[18px] text-black font-semibold mt-3 ">
              What benefits does Life Cover include ?
            </h2>
            <div className=" flex items-start gap-2 mt-4  ">
              <i className="mt-2 shrink-0 ri-arrow-right-s-line"></i>
              <p className=" mt-2">
                {" "}
                Each Life cover is different from other, some has less benefits
                than other especially online companies and bank generally
                haven’t got as many benefits as main-stream companies have got.
                Here is list of benefits.
              </p>
            </div>
            <div className=" flex items-start gap-2  ">
              <i className="mt-2 shrink-0 ri-arrow-right-s-line"></i>
              <p className=" mt-2">
                {" "}
                <span className=" font-semibold">Death Benefit :</span> Your
                family or nominated beneficiaries will receive a lump sum of
                money if you pass away. We normally make the payment to your
                nominated bank account within two days after we receive the
                claim.
              </p>
            </div>
            <div className=" flex items-start gap-2  ">
              <i className="mt-2 shrink-0 ri-arrow-right-s-line"></i>
              <p className=" mt-2">
                {" "}
                <span className=" font-semibold">Expert Assistance : </span> you
                will receive your life payment straight way if you are given
                less than 12 months to live. This is generally paid within seven
                days after you place a claim. You can use the money for your
                immediate care and help to plan a secure future for your family.
              </p>
            </div>
            <div className=" flex items-start gap-2  ">
              <i className="mt-2 shrink-0 ri-arrow-right-s-line"></i>
              <p className=" mt-2">
                {" "}
                <span className=" font-semibold">Death Benefit :</span> Your
                family or nominated beneficiaries will receive a lump sum of
                money if you pass away. We normally make the payment to your
                nominated bank account within two days after we receive the
                claim.
              </p>
            </div>
            <div className=" flex items-start gap-2  ">
              <i className="mt-2 shrink-0 ri-arrow-right-s-line"></i>
              <p className=" mt-2">
                {" "}
                <span className="  font-semibold">Expert Assistance : </span> you
                will receive your life payment straight way if you are given
                less than 12 months to live. This is generally paid within seven
                days after you place a claim. You can use the money for your
                immediate care and help to plan a secure future for your family.
              </p>
            </div>

              {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black/60 ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                      Premium Options
                    </h1>
                    <p className="mb-2">
                      You have two premium options to choose from for your life
                      cover :
                    </p>

                    {premium.map((el) => (
                      <>
                        <div className=" flex  items-start mt-1 text-black/80">
                          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0 "></i>
                          <p className=" text-[14px] text-justify">
                            <span className="font-medium text-[16px] lg:text-[20px] text-black ">
                              {el.title}
                            </span >
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
          </section>
        </div>

{/* Centered Sidebar constrained inside main, below Banner and above footer */}
        <Slider/>
      </main>
    </>
  );
};

export default Sidebar;
