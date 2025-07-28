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
//   const items = [
//     { label: "Life Insurance", icon: <ShieldCheck size={20} /> },
//     { label: "Trauma Recovery Cover", icon: <HeartPulse size={20} /> },
//     {
//       label: "Total Permanent Disability Benefit Cover",
//       icon: <Activity size={20} />,
//     },
//     { label: "Mortgage & Rent Protection Cover", icon: <Home size={20} /> },
//     { label: "Income Protection Cover", icon: <Wallet size={20} /> },
//     { label: "Medical Insurance", icon: <Stethoscope size={20} /> },
//     { label: "Group Insurance", icon: <Users size={20} /> },
//   ];

  const cover = [
    {
      title: " Taking Time off work",
      content:
        " to rest and recover. Man people recovering from a serious illness want to work reduced hours even if they are still physically able to work.",
    },
    {
      title: " Paying for your spouse",
      content:
        " or another family member to take time off work. Many people need extra help and support around the house when they have a serious illness.",
    },
    {
      title: " Paying for Alternative treatments ",
      content:
        "that aren’t covered by health Insurance. For example, many people undergoing chemotherapy choose to do alternative treatments at the same time to help them recover from the effects of the chemotherapy. Trauma Recovery cover can also help cover medical treatments that health Insurance only partly pays for.",
    },
    {
      title: "Reducing debt :",
      content:
        " most people with a serious illness find that their income reduces while their expenses increase. Reducing credit card and mortgage debt can free up their finances and left them focus on treatment and recovery.",
    },
    {
      title: " Paying for additional costs : ",
      content:
        "such as Chilcare, Wheelchair ramps and travelling to medical appointments. These are common costs associated with serious illness and injury.",
    },
   
  ];


  const food = [
    {
      content:
        "Every day about 21 New Zealanders suffer a stroke. One quarter occur in people under 65 years of age. Stroke is the major cause of adult disability in New Zealand. There are an estimated 60,000 stroke survivors in New  Zealand.",
    },
    {
      content:
        "Everyday, there are 57 new cancer cases registered and 23 deaths from cancer in New Zealand.",
    },
    {
      content:
        "Over 3,300 New Zealand men are diagnosed with prostate cancer every year.",
    },
    {
      content:
        "One in three New Zealand adults with heart disease has had a medical procedure.",
    },
  ];

  const How = [
    {title:"Stand Alone – ",
      content:"Your Trauma Cover is separate from you life cover. A Trauma claim won’t reduce the amount of life cover you have."
    },
    {title:"Accelerated –",
      content:"Your Trauma Cover is linked to your life cover. Insurance company will pay your Trauma claim out of your life Cover. However you can add a benefit to re-establish your original life cover if this happens."
    },
  ]

  const Benifit  = [
     {title:"Lump sum payment for major illness :",
      content:"You will receive a lump sum of money if you are diagnosed with a serious illness which vary from company but generally around 40-50. You will also receive your payment if you undergo any of the major types of surgery listed in you policy document.."
    },
     {title:"Early Stage Caner Benefit :",
      content:"If you or your family would like assistance with managing the proceeds of a Trauma cover claim, your Trauma cover provides a financial and legal advice benefit which reimburses the costs of a financial planner and/or Lawyer up to a maximum of $2500, which is payable in addition to your Trauma cover."
    },
     {title:"Grief Support benefit :",
      content:" This will pay you up to $900 for you or loved one to receive counseling from a professional counselor."
    },
     {title:"Special Events increase benefits :",
      content:": You can choose to increase your existing trauma cover, without any medical underwriting, whenever a special event occurs in your life- such as taking out o a mortgage or getting a pay rise."
    },
     {title:"Inflation adjustment benefit : ",
      content:"Each year Insurance company will offer to increase your sum insured by the rate of inflation, according to the consumer price index (CPI)"
    },
     {title:"Bringing you home  :",
      content:" If you have been working overseas for more than three months when you suffer a trauma and you wish to return home, your Trauma cover includes a return to home benefit which will reimburse you for the costs of bringing yourself and a companion home to New Zealand (up to certain limits)"
    },
     {title:"Free Kids Cover : ",
      content:"You can have free Trauma Insurance up to $50,000 for each of your children or grandchildren as part of your policy."
    },
     {title:"Early Trauma Benefit :",
      content:"We will receive a partial payment up to 25% of your total cover for an additional conditions such as Parkinson’s or Multiple Sclerosis. This is paid in addition to the main conditions that you are covered for with Trauma cover."
    },
     {title:"Trauma Reinstatement benefit :",
      content:"You can restore your Trauma cover after 12 months of you have claimed on it, so that you can claim it again in the future."
    },
     {title:"Life Cover Buy Back benefit : ",
      content:"You can increase your life cover back to its original amount when your trauma claim comes out of your life Insurance – when you have the accelerated version of Trauma Insurance."
    },
     {title:"We pay your Premiums’ benefit :",
      content:"This will pay your Trauma Cover premiums for you if you are ill or injured and can’t work in your usual job for more than 10 hours a week."
    },
     {title:"Needle stick benefit : ",
      content:"For those who work in the medical and emergency service industry, Needle stick benefit helps to ensure you can protect yourself against the financial impact of contracting Hepatitis B or C or HIV."
    },
     
     
    
  ]

  const Payment = [
    {title:"  Level premium payments :   ",
      content:'  You can choose a level premium payment option and lock your premium payments in so they don’t increase with age. Like a fixed rate mortgage. '},
    {title:"   Stepped premium payments :  ",
      content:' Stepped premiums start lower than Level premiums but increase each year based on your age at that time. '},
    
    
  ]

  return (
    <>
      <Banner title="Trauma recovery cover" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
 {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Trauma recovery cover
              </h1>
              <h2 className="   leading-6 text-[18px] lg:text-[26px]   font-semibold mt-4 ">
                When others depend on you
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               Trauma Recovery cover pays you a lump sum of money to help you recover physically and financially from a serious illness, injury or medical procedure. The most common illnesses linked to trauma Insurance in New Zealand are Cancer, Hearth Attack and Stroke and the cost of recovery can have a huge impact on you, your family and your business.
              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full mt-4 lg:flex gap-8 items-stretch">
  {/* Left content */}
  <div className="leftcontent w-full  lg:w-[55%]">
    {/* content 1 */}
    <div className="flex mt-2">
      <div className="text-black/60">
        <h1 className="text-[18px] lg:text-[26px] text-black font-semibold">
          What do most people use Trauma Recovery Cover for?
        </h1>
         {cover.map((el, idx) => (
          <div key={idx} className="flex items-start mt-2.5 text-black/80">
            <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0"></i>
            <p className="text-[14px] text-justify">
              <span className="font-semibold text-[16px] text-black">
                {el.title}
              </span>
              {el.content}
            </p>
          </div>
        ))}
       

      
      </div>
    </div>
  </div>

  {/* Right content image */}
  <div className="w-full  lg:w-[40%] flex">
    <div className="RightContent flex-grow overflow-hidden rounded-lg">
      <img
        src="/trauma.webp"
        className=" max-md:h-60 lg:h-full w-full object-cover"
        alt="Right content"
      />
    </div>
  </div>
</div>

          </section>
          
          {/* section 2 */}
          <section className="section_2  w-full  text-justify ">
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
              Could you afford the cost of recovery?
            </h1>
            <p className=" text-[14px] mt-2 tracking-wider ">
              Ongoing advances in medical treatment mean New Zealanders have a greater chance of surviving than ever before, and a greater need for financial support. If you suffered a serious illness, would you be able to pay the mortgage or car loan, or simply maintain your lifestyle? How hard would it be on your family?
            </p>
            </div>
             
        <div className=" text-black mt-6 ">
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
  

            {/* content 2 */}
                

            
           {/* How */}
           <div className=" mt-4 ">
             <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
              How it works
            </h1>
            {How.map((el)=>(
              <>
              <div className=" flex items-start mt-2.5 " >
                <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] " ><span className=" font-semibold " >{el.title}</span>{el.content}</p>

              </div>
              
             
            </>
            ))}

           </div>
           
           {/* Benifit */}
           <div className="benifit mt-6 " >
             <h2 className=" text-[18px] lg:text-[26px] text-black font-semibold mt-3 ">
             What benefits does Trauma Cover Include ?
            </h2>

          {Benifit.map((el)=>(
            <div className=" flex items-start mt-2 ">
               <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] mt-1.5 " ><span className="font-semibold">{el.title}</span>{el.content}</p>

            </div>
          ))}
           </div>

           {/* Payment */}
           <div className="payment  mt-6">
            <p className=" text-[18px] lg:text-[26px] font-semibold  ">What are your payment options ?</p>
            {Payment.map((el)=>(
              <div className="flex items-start mt-2 gap-1">
                <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] mt-1.5 " ><span className="font-semibold">{el.title}</span>{el.content}</p>

                

              </div>
            )) }
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
