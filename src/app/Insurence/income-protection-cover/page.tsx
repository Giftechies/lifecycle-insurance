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
 

  const cover = [
    {
      title: " ",
      content:
        " 1 in 9 men and 1 in 5 women are likely be disabled and off work for more than 12 months before the age of 65 ",
    },
    {
      title: " ",
      content:
        " 5 in 10 men and 7 in 10 women are likely to become disabled due to an illness or accident before they turn 65, preventing them from working for at least 1 month. Of these, nearly a third will still be on claim 12 months after ",
    },
    {
      title: " ",
      content:
        " Diseases or illnesses are the most common reasons for disability among adults. ",
    },
    {
      title: " ",
      content:
        " Accidents or injuries are the cause of disability for an estimated $166,300 adults in New Zealand, and the most common type of accident or injury causing disability is one that occurs at work. ",
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

  const type = [
    {title:" Agreed Value :  ",
      content:"  The annual benefit is set at time of proposal and is based on up to 75% of the life Assured’s total income package, including salary or wages and fringe benefits received from company and other rewards after business expenses and before tax, which would be affected by the disability. The claim benefit is the amount as specified on the policy schedule, less any applicable offsets, for example ACC and income from other sources. "
    },
    {title:" Indemnity Value :   ",
      content:" Indemnity: The benefit is calculated as a proportion of income at the time you make a claim. it pays the lesser of the monthly insured benefit or 75% of your earnings prior to going on claim less offsets. "
    },
    {title:"  Loss of Earning : ",
      content:" This option gives you’re the best of both wolrds. Company agree on a monthly benefit when you apply and will pay you the greater of that monthly benefit minus any income you receive while you are disabled, such as ACC support, or 75% of your actual loss of income at the time you claim. This is useful for people with fluctuating incomes such as small business owners. "
    },
    {title:"  Waiting periods :  ",
      content:" you have a choice of seven waiting periods, before you receive  the benefit: 2, 4, 8, 13, 26, 52 or 104 weeks. "
    },
    {title:" Benefit payment periods :   ",
      content:" The benefit payment period – the amount of time you  receive the benefit – can be for one, two or five years or to age 65 or 70. "
    },
    {title:"  Worldwide Cover :  ",
      content:" Provides cover anywhere in the world, 24 hours a day "
    },
    {title:" Waiver of Premium :   ",
      content:"  removes the burden of paying premiums when you are unable to work due to total disability, saving you money when you need it most. (This benefit must be taken with your Disability income Protection policy). "
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
      <Header title="Income Protection Cover" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Income Protection Cover
              </h1>
              <h2 className="  text-[26px] leading-6 text-[18px] lg:text-[26px]  lg:mt-8 font-semibold mt-3 ">
               What is IP Cover ?
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify text-[14px] ">Income protection cover pays you a regular monthly payment if you are unable to work temporarily or permanently because you are sick or injured. Income protection cover is designed to provide you with money to live on while you are not receiving your salary or wages. This cover will pay you until you can return to work, or reach the payment period on your policy. This can be up to the age of 70.

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
                Did you Know……..
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
                   What do most people use income protection cover for ?
                  </h1>
                  <p className=" text-[14px] text-justify mt-2 ">People can use their income protection cover when they have to take more than two weeks unpaid leave from work because of illness or injury. A combination of sick leave and annual leave will help most employed people cope without working for up to four to six weeks, but what will happen if the disability continues beyond six weeks ? What if the condition renders you unable to work for months or even years?</p>
                 
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-8 " >
                
              <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[70vh] mt-8 overflow-hidden rounded-lg ">
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
              How does Income Protection cover work ?
            </h1>
            <p className=" text-[14px] ">A benefit is paid to you if you continue to be disabled after a pre-determined waiting period. You choose how long you want the waiting period to be, most people choose between 30-90 days. The longer the waiting period, the lower your premiums will be.
            </p>
            </div>
           {/* type */}
           <div className=" mt-4 ">
             <h1 className="text-[18px] mt-2 lg:text-[26px] text-black font-semibold">
            Types of Income Protection
            </h1>
            <p className=" text-[14px] ">A benefit is paid to you if you continue to be disabled after a pre-determined waiting period. You choose how long you want the waiting period to be, most people choose between 30-90 days. The longer the waiting period, the lower your premiums will be..</p>
            {type.map((el)=>(
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
       <Slideri/>
      </main>
    </>
  );
};

export default Sidebar;
