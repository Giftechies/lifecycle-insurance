// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
import Slideri from "@/app/Components/Slideri/Slideri";
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
  const items = [
    { label: "Life Insurance", icon: <ShieldCheck size={20} /> },
    { label: "Trauma Recovery Cover", icon: <HeartPulse size={20} /> },
    {
      label: "Total Permanent Disability Benefit Cover",
      icon: <Activity size={20} />,
    },
    { label: "Mortgage & Rent Protection Cover", icon: <Home size={20} /> },
    { label: "Income Protection Cover", icon: <Wallet size={20} /> },
    { label: "Medical Insurance", icon: <Stethoscope size={20} /> },
    { label: "Group Insurance", icon: <Users size={20} /> },
  ];

  const cover = [
    {
      title: " ",
      content:
        "Reducing Debt such as paying off the mortgage people who are permanently unable to work may find their income decreases even when they are receiving a disability benefit such as income protection. Reducing credit card and mortgage debt frees up their finances. ",
    },
    {
      title: " ",
      content:
        " Supplementing their income and future income : Most people need more income than a disability benefit if they are going to be on that benefit permanently.",
    },
    {
      title: " ",
      content:
        "  Making Lifestyle changes because of the serious injury or illness.",
    },
    {
      title: " ",
      content:
        "Paying for their spouse or another family member to take time off work. Many people need extra help and support when they are dealing with a serious illness or injury. ",
    },
    {
      title: " ",
      content:
        "  Paying for additional costs such as childcare, wheelchair ramps and travelling to medical appointments. These are common costs associated with serious illness and injury.",
    },
    
    
  ];


  const food = [
    {
      content:
        " At the time of the 2006 census twenty percent of New Zealanders lived with a disability, with accidents or injuries the most common cause of disability for adults aged 15 to 44 years.",
    },
    {
      content:
        " There are an estimated 60,000 stroke survivors in New Zealand. Many are disabled and need significant daily support.",
    },
    {
      content:
        " In New Zealand, there are approximately 300 people suffering from Motor Neurone Disease at any one time. ",
    },
    {
      content:
        " Around 100 people are diagnosed with the disease and 100 people die every year. ",
    },
   
  ];

  const How = [
    {title:" Own Occupation TPD :  ",
      content:"You can claim your TPD Cover if you are unable to return to your specific occupation. For example, if you were injured and could no longer work as a plumber, you could claim your TPD Cover even if you were able to do another job, such as working ina plumbing company office. "
    },
    {title:" Any Occupation TPD : ",
      content:" you can claim your TPD cover if you are unable to work in any job that you are reasonably suited to by training, education or experience. For example, if you are injured and could no longer workas a plumber, you could claim your TPD Cover if you were also unable to do another job, such as working in a plumbing company office."
    },
    {title:" Modified TPD : ",
      content:" A good, low cost option if you are not in paid employment, you are in a very high risk occupation or are not eligible for Own or Any Occupation TPD. Instead of using an occupation definition, modified TPD applies if your permanently:"
    },
  
  
  ]

  const Benifit  = [
     {title:"  Stand Alone :",
      content:" Your TPD cover is separate to your term life Insurance cover. A TPD claim won’t reduce the amount of life cove you have. "
    },
     {title:"Accelerated :",
      content:" Your TPD insurance is linked to your life cover. So if TPD claim is paid your life cover is reduced by that amount. However you can choose to reinstate your life cover if this happens."
    },
    
  ]

  const Payment = [
    {title:"  Level Premium payments :  ",
      content:'   You can choose a level premium payment option and lock your premium payments in so they don’t increase with age – like a fixed rate mortgage '},
    {title:" Stepped premium payments : ",
      content:' Stepped premiums start lower than level premiums but increase each year based on your age at that time. If you have an accident you should be covered by ACC, but knowing that you have other sources to help you in your disability may be beneficial. '},
    
    
  ]

  return (
    <>
      <Header title="Total Permanent Disability Benefit Cover" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Total Permanent Disability Benefit Cover
              </h1>
              <h2 className="  text-[26px] leading-6   lg:mt-8 font-semibold mt-3 text-[18px] lg:text-[26px] ">
               What is TPD Cover ?
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify lg:text-[14px] ">
                Recovery cover pays you a lump sum of money to help you recover physically and financially from a serious illness, injury or medical procedure. The most common illnesses linked to trauma insurance in New Zealand are Cancer, Hearth Attack and Stroke and the cost of recovery can have a huge impact on you, your family and your business.

              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex gap-8">
              {/* left content */}
              <div className="leftcontent w-[100%] lg:w-[55%] 
               ">
                {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black/60 ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                What do most people use TPD Cover for ?
                    </h1>
                  

                    {cover.map((el) => (
                      <>
                        <div className=" flex  items-start mt-2.5 text-black/80">
                          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0 "></i>
                          <p className=" text-[14px] text-justify">
                            <span className="font-semibold text-[16px]  text-black ">
                              {el.title}
                            </span >
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>

                {/* content 2 */}
                <div className=" text-black/60 mt-4 ">
                  <h1 className="  text-[18px] lg:text-[26px] text-black font-semibold ">
                    Food for Thought…
                  </h1>
                  {food.map((el) => (
                    <div className=" flex items-start mt-2.5 text-black/80 ">
                      <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                      <p className=" text-[14px]">{el.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-8 " >
                
              <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[90vh] mt-4 overflow-hidden rounded-lg ">
                <img
                  src="/8.jpg"
                  className=" h-full w-full object-cover"
                  alt=""
                />
              </div>
              </div>
            </div>
          </section>
          
          {/* section 2 */}
          <section className="section_2  w-full  text-justify ">

            <div>
              <h1 className="text-[18px] mt-2 lg:text-[26px] text-black font-semibold">
              Could you afford the cost of recovery?
            </h1>
            <p className=" text-[14px] ">
              Ongoing advances in medical treatment mean New Zealanders have a greater chance of surviving than ever before, and a greater need for financial support. If you suffered a serious illness, would you be able to pay the mortgage or car loan, or simply maintain your lifestyle? How hard would it be on your family?
            </p>
            </div>
           {/* How */}
           <div className=" mt-4 ">
             <h1 className="text-[18px] mt-2 lg:text-[26px] text-black font-semibold">
             How does TPD Cover work ?
            </h1>
            <p className=" text-[14px] ">There are three types of TPD Insurances….</p>
            {How.map((el)=>(
              <>
              <div className=" flex items-start mt-2.5 " >
                <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] " ><span className=" font-semibold " >{el.title}</span>{el.content}</p>

              </div>
              
             
            </>
            ))}

           </div>
           
           {/* Benifit */}
           <div className="benifit mt-4 " >
             <h2 className=" text-[18px] lg:text-[26px] text-black font-semibold mt-3 ">
             Types Of TPD :
            </h2>

          {Benifit.map((el)=>(
            <div className=" flex items-start mt-2.5 ">
               <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] mt-1.5 " ><span className="font-semibold">{el.title}</span>{el.content}</p>

            </div>
          ))}
           </div>

           {/* Payment */}
           <div className="payment  mt-4">
            <p className=" text-[18px] lg:text-[26px] font-semibold  ">What are your payment options ?</p>
            {Payment.map((el)=>(
              <div className="flex items-start gap-1">
                <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] mt-1.5 " ><span className="font-semibold">{el.title}</span>{el.content}</p>

                

              </div>
            )) }
           </div>
            
          </section>
         
        </div>

{/* Centered Sidebar constrained inside main, below header and above footer */}
       <Slideri/>
      </main>
    </>
  );
};

export default Sidebar;
