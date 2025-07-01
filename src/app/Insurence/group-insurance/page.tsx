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


  const benefit =[
    {content:'	Employee satisfaction and retention '},
    {content:'Better brand image'},
    {content:' Affordability and multiple benefits'},
    {content:'Financial protection for workers '},
    {content:'Flexible cover options for different staff levels'},
   
  ]



  return (
    <>
      <Header title="Group Insurance" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1500px] mx-auto  leading-7 tracking-wider">
 {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Group Insurance
              </h1>
              <h2 className=" leading-11 text-[18px] lg:text-[26px]  lg:mt-8 font-semibold mt-3 ">
               Trusted Name for Group Insurances in New Zealand
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify text-[14px] ">
At LifeCycle Financial, we understand that your workers are the greatest asset for your business. Their protection and safety at the workplace is your prime goal. But what about uncertain accidents? This is where group insurances come into the picture.

              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify ">
Our group insurances are designed to support every business in New Zealand in attracting and retaining top talent while taking care of their financial security.

              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex flex-col ">
              {/* left content */}
              <div className="leftcontent w-[100%] lg:w-[100%] 
               ">
                {/* content 1 */}
                <div className="flex mt-2 tracking-wider text-justify text-[14px]  ">
                  <div className=" text-black ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                What Is Group Insurance?
                    </h1>
                     <p className=" mt-1 lg:mt-4 ">    Group insurance, as the name suggests, is a type of insurance that is ideal for businesses. This provides cover for a group of individuals, under a single policy. It is suitable for businesses to offer meaningful benefits to their team members such as life insurance, income protection, etc.          </p>
                     <p className=" mt-1 lg:mt-2 ">    Since group insurance is a combination of multiple policies in one, it offers outstanding benefits with reduced premiums.         </p>
                  

                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[100%] h-full  mt-2 " >
                
              <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[50vh] mt-4 overflow-hidden rounded-lg ">
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
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
              Benefits of Group Insurance Include:
            </h1>
             {benefit.map((el)=>(
              <>
            
              <div className=" flex items-start mt-2.5 " >
                <i className="ri-arrow-right-s-line mt-1 mr-1"></i><p className=" text-[14px] " >{el.content}</p>

              </div>
              
             
            </>
            ))}
            <p className=" text-[14px] mt-4  ">
             Give your team the peace of mind!
            </p>
            <p className=" text-[14px] mt-2 ">
             Let your team focus on what they do the best while being stress-free about their financial freedom with comprehensive group insurance solutions from LifeCycle Financial. 
            </p>
            <p className=" text-[14px] mt-2">
             We’re here to help.
            </p>
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
