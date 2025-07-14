// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "Access Lower Interest Rates",
    },
    {
      content:
        "Reduce Monthly Repayments",
    },
    {
      content:
        "Consolidate Debt",
    },
    {
      content:
        "Flexible Loan Terms ",
    },
    {
      content:
        "Independent, Expert Advice",
    },
   
  ];

 

 

 

 
  return (
    <>
      <Header title="Refinance" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Refinance
              </h1>
              <h2 className="   leading-6 text-[18px] lg:text-[26px]  lg:mt-6 font-semibold mt-3 ">
                Smart Refinance Solutions to Save You Money
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                We aim to assist Kiwis to get their finances on track through personalised refinance solutions. Refinancing your mortgage loan or personal loan can help to save huge amounts of money and allow you to be in a better financial state whether it is to reach a better interest rate, merge creditors or enjoy the benefits of better features on the Loan.
              </p>
             
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex gap-8">
              {/* left content */}
              <div
                className="leftcontent w-[100%] lg:w-[55%] 
               "
              >
                {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black ">
                     <h1 className="  text-[18px] lg:text-[26px] text-black font-semibold ">
                What Is Refinancing?
              </h1>

              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               Refinancing is when you change your existing loan with a new one- normally with a reduced interest rate, new loan tenure, or favourable features. It may be used in terms of home Loan, personal Loan, car Loan or business finance. The goal? Flexibility, reduced repayments, and cleverer money planning.
              </p>
                    
                   
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[60%] h-full   ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[30vh] mt-4 overflow-hidden rounded-lg ">
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
            <div className=" text-black/60 mt-4 ">
            <h1 className=" lg:text-[26px] text-black font-semibold ">
                      Why Refinance With Lifecycle Financial?
                    </h1>

                    {cover.map((el) => (
                      <>
                        <div className=" flex  items-start mt-2.5 text-black">
                          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0 "></i>
                          <p className=" text-[14px] text-justify">
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
             
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
              Let’s Talk About Saving You Money
              </p>
              <p className=" mt-1  tracking-wider text-[14px] text-justify ">
              Call us today or get in touch online for a free refinance consultation.
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
