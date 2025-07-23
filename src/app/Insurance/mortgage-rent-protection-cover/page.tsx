// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
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
    {title:"You can choose to cover upto 110% of your mortgage repayment on your residential property.  ",
      content:" The extra 10% is important because there are additional expenses with property, such as rates, and home and contents Insurance and the interest rate on most home Loan will rise at some stage, when fixed rates roll off or variable rates increase."
    },
    {title:" Alternatively, you can take our Mortgage cover for your investment property ",
      content:"For investment properties or for small business lending against your residential property, you can take out Mortgage cover up to the value of 40% of your gross annual income. "
    },
    {title:" You can take out Mortgage and Rent cove even if you are Renting : ",
      content:" This means you can still pay your rent if you are unable to work because your are sick or injured. You can cover up to 40% of your income, to a maximum of $3500 a month "
    },
    {title:" Your benefit payments under Mortgage and Rent cover won’t be reduced due to any ACC Claims ",
      content:"so you will get the full amount you are insured for, even if you are receiving ACC Payments. "
    },
    {title:" You can make as many claims as you need over the life of your policy. ",
      content:"You can keep the original amount you are insured for, even if your mortgage reduces : This is useful if you want to increase your mortgage, to move house or renovate, for example "
    },
   
  
  
  
  ]

  const Benifit  = [
     {title:"  Stand Alone :",
      content:" Your TPD cover is separate to your term life Insurance cover. A TPD claim won’t reduce the amount of life cove you have. "
    },
     {title:"Accelerated :",
      content:" Your TPD Insurance is linked to your life cover. So if TPD claim is paid your life cover is reduced by that amount. However you can choose to reinstate your life cover if this happens."
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
      <Header title="Mortgage & Rent Protection Cover" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 text-[18px] lg:text-[26px] "></i>Mortgage & Rent Protection Cover
              </h1>
              <h2 className="  text-[26px] leading-6 lg:text-[46px]  lg:mt-8 font-semibold mt-3 ">
              Mortgage Repayment Cover
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify lg:text-[14px] ">
                Recovery cover pay you a lump sum of money to help you recover physically and financially from a serious illness, injury or medical procedure. The most common illnesses linked to trauma Insurance in New Zealand are Cancer, Hearth Attack and Stroke and the cost of recovery can have a huge impact on you, your family and your business.


              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex flex-col gap-2">
              {/* left content */}
              <div className="leftcontent w-[100%] lg:w-[100%] 
               ">
                {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black/60 ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                What is Mortgage Cover ?
                    </h1>
                    <p className=" text-[14px]">Mortgage cover pays you a regular monthly payment if you are unable to work because you are sick or injured. This is designed to ensure you can go on living in your home while you are not receiving your salary or wages. We will pay you until you can return to work, or until you reach the end of your chosen benefit period on your policy. This can be up to the age of 65 depending on what option you choose.</p>

                  </div>
                </div>
              
                
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[100%]   h-full  mt-2 " >
                
              <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[60vh] mt-4 overflow-hidden rounded-lg ">
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

           
           {/* How */}
           <div className=" mt-4 ">
             <h1 className="text-[18px] mt-2 lg:text-[26px] text-black font-semibold">
            How does Mortgage Cover work ?
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
           
          
            
          </section>
         
        </div>

{/* Centered Sidebar constrained inside main, below header and above footer */}
       <Slider/>
      </main>
    </>
  );
};

export default Sidebar;
