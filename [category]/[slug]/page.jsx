// components/ChildDetailPage.js
"use client"
import Header from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";
import { getCategoryPages } from "../../lib/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


const ChildDetailPage = () => {

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
const {category,slug} = useParams() // "/cat=insurance/slug= life-insurance"
const [data, setdata] = useState([])

useEffect(( )=>{
   async function fetchData(){
        try {
           const res = await getCategoryPages(slug)
           console.log("res>>>",res);
           setdata(res)
            
        } catch (error) {
            console.log(error)
            
        }
    }
    fetchData()
},[slug])


  return (
    <>
      <Header title={data.title} />
      <main className="w-full flex p-4 lg:p-[3rem]  gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv  md:w-[60%]  lg:w-[70%] xl:w-[75%] ">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)] left-9 ">
                <i className="ri-record-circle-line mr-1.5 "></i>{data.title}
              </h1>
              <h2 className="  text-[26px] leading-9 lg:text-[2.5vw]  lg:mt-4 font-semibold  ">
               {data.subtitle_1 || " When others depend on you - test"}
              </h2>
              <p className=" mt-1 text-[14px]  lg:mt-4 tracking-wider text-justify ">
               {data.paragraph_1 || " Have you made plans to ensure your family or business can survive without you? Could your family cope with paying the monthly bills or making mortgage repayments without your salary? Could your business continue without your input and expertise test?"}
              </p>
            </div>
          </section>
           <div className="  " dangerouslySetInnerHTML={{__html:data.content}} />
        </div>
        <Slider />
      </main>
    </>
  );
};

export default ChildDetailPage;
