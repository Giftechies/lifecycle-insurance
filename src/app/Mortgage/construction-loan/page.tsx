// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "Purchasing equipment or vehicles",
    },
    {
      content:
        "Expanding into new locations",
    },
    {
      content:
        "Hiring staff or contractors ",
    },
    {
      content:
        "Managing seasonal cash flow",
    },
    {
      content:
        "Investing digital infrastructure",
    },
    {
      content:
        "Covering operating expenses ",
    },
  ];

  const type = [
    {content:"Secured Business Loans "},
    {content:"Unsecured Business Loans"},
    {content:"Start-up Business Loans"},
    {content:"Short-Term Business Loans"},
    {content:"Line of Credit"},
  ]
  return (
    <>
      <Header title=" Construction Loan" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i> Construction Loan
              </h1>
              <h2 className="   leading-6 text-[18px] lg:text-[26px]  lg:mt-6 font-semibold mt-3 ">Construction Loan from LifeCycle Financial
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
              Are you planning to build a home or undertake a major renovation? It might require a lot of investment. This is where a construction loan from LifeCycle Financial comes into the picture. Our goal is to give you the required flexibility and support to bring your vision to life, without financial crunches.
              </p>
             
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4    gap-8">
              {/* left content */}
              <div
                className="leftcontent w-[100%]  
               "
              >
                {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black ">
                    <h1 className=" lg:text-[26px] text-black font-semibold ">
                    What Is a Construction Loan?
                    </h1>
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                    As the name suggests, a construction loan is a short-term, progress-based loan that is designed to fund the building or renovation of a residential or commercial property. Many people may get confused between home loans and construction loans, but they’re different. 
                    </p>
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                   At LifeCycle Financial, we are here to help you navigate the best construction loans at competitive prices so that you can focus on building with confidence. 
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[100%] h-full  mt-8 ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[50vh] overflow-hidden rounded-lg ">
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
            {/* content 2 */}
            <div className=" text-black mt-4 ">
              <h1 className="  text-[18px] lg:text-[26px] text-black font-semibold ">
                Why Choose LifeCycle Financial?
              </h1>

              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               LifeCycle Financial is your one-stop solution to find the best construction loan solutions. Whether you're planning to handle the project yourself or have hired a licensed builder, our team can help find the best plans and finances before offering customised solutions. Our team has developed strong relationships with financial institutions and banks in New Zealand, which means we’re able to find the right loan structure for your project.
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               Need help? We’re here!
              </p>
             
              
            </div>
          </section>
        </div>

        {/* Centered Sidebar constrained inside main, below header and above footer */}
        <Slider />
      </main>
    </>
  );
};

export default Sidebar;
