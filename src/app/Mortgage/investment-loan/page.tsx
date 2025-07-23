// components/Sidebar.js

import Header from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "Interest-only repayments",
    },
    {
      content:
        "Tax-deductible interest",
    },
    {
      content:
        "Flexible loan terms ",
    },
    {
      content:
        "Leveraging existing equity ",
    },
  ];









  return (
    <>
      <Header title="Investment Loan" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Investment Loan
              </h1>
              <h2 className="   leading-6 text-[18px] lg:text-[26px]  lg:mt-6 font-semibold mt-3 ">
                Investment Loan For Those Who Love To Invest And Build Long-Term Wealth
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Investment is the best way to make your money earn for you, but not everyone has enough money to invest. This is where investment Loan come into the picture. At LifeCycle Financial, we are your one-stop choice when it comes to hunting the unmatched deals on investment Loan.
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
               Whether you’re planning to buy your first rental property or expanding your portfolio, our team is here to help you with a seamless process of securing the right investment loan for your goals.
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
                     Why Choose an Investment Loan?
                    </h1>
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                      Investment Loan are specialized kinds of Loan that are aimed to help smart people to buy income-generating assets, such as residential or commercial properties. Investment Loan are not like home Loan and come with unique features such as:
                    </p>

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
                     When selected after thorough research, an investment loan can be your helping hand in increasing increase returns while managing risks as you build an impressive financial portfolio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-8 ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[55vh] overflow-hidden rounded-lg ">
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
                Let’s Grow Your Portfolio, Smarter
              </h1>

              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Ready to make some smart investments and need smart investment Loan? We’re ready to be your guide!
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                 Get in touch today with our team for more. 
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
