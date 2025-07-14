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
    {content:"Secured Business Loan "},
    {content:"Unsecured Business Loan"},
    {content:"Start-up Business Loan"},
    {content:"Short-Term Business Loan"},
    {content:"Line of Credit"},
  ]









  return (
    <>
      <Header title="Business Loan" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Business Loan
              </h1>
              {/* <h2 className="   leading-6 text-[18px] lg:text-[26px]  lg:mt-6 font-semibold mt-3 ">
              </h2> */}
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Business Loan are the backbone of business growth. Whether you are considering purchasing new equipment or launching a new product, business Loan can help you manage your cash flow. Our team at LifeCycle Financial is here to be your guide throughout the process, helping you source and negotiate the best possible funding for businesses across New Zealand.
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               Our goal is to help your business access the capital you need—quickly and transparently.
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
                    <h1 className=" lg:text-[26px] text-black font-semibold ">
                     Why Choose a Business Loan?
                    </h1>
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                     A business loan, as the name suggests, is a type of loan that offers your business the freedom to invest in your company’s growth without compromising day-to-day operations. Common uses of business Loan include:
                    </p>

                  
                      {cover.map((el) => (
                      <>
                        <div className=" flex  items-start mt-2.5 text-black">
                          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0 "></i>
                          <p className=" text-[14px] mt-1 text-justify">
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
                 
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                     Regardless of the purpose of a business loan, our team ensures to help you find the right type of loan with flexible repayment options and competitive rates tailored to your situation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-8 ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[70vh] overflow-hidden rounded-lg ">
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
                Types of business Loan
              </h1>

              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               We are specialists in working with clients looking for a wide range of business Loan, including:
              </p>
              {type.map((el) => (
                      <>
                        <div className=" flex  items-start mt-2.5 text-black">
                          <i className="ri-arrow-right-s-line mr-1  mt-1 shrink-0 "></i>
                          <p className=" text-[14px] mt-1 text-justify">
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
               <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
             Need help? Connect with us now!
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
