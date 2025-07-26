// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "With a huge network of reliable lenders across New Zealand, we help your business find a loan that will meet your business objectives.",
    },
    {
      content:
        "Our team simplifies the complete process and makes your job easy by assisting you in preparing your documents and walking you through the process.",
    },
    {
      content:
        "We provide strategic solutions to enable you make the right choice of loan type presently considered as fixed or variable, short-term or long-term",
    },
    {
      content:
        "You may be a start-up, a small firm or even an expanding business, we have commercial loan packages to fit your size and sector. ",
    },
  ];









  return (
    <>
      <Banner title="Commercial Loan" />
      <main className="w-full flex p-5 lg:px-[50px] gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] ">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Commercial Loan
              </h1>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
              At Lifecycle Financial, we take pride in providing flexible and strategic commercial Loan that help New Zealand businesses flourish. Whether you want to extend your operation, buy new machines or invest in company premises, our knowledgeable experts are available who will guide you to secure the proper finances, quickly, without any hassles.
              </p>
            </div>

            {/* lower content */}
           <div className="LowerContent  w-full mt-4 md:flex gap-8 items-stretch">
  {/* Left Content */}
  <div className="leftcontent w-full md:w-[55%] flex  justify-center ">
    <div className="text-black/60">
      <h1 className="text-[18px] lg:text-[26px] text-black font-semibold">
        Did you Know……..
      </h1>

      {cover.map((el, idx) => (
        <div key={idx} className="flex items-start mt-2.5 text-black/80">
          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0"></i>
          <p className="text-[14px] text-justify">
           
            {el.content}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-[40%] mt-6 lg:mt-0">
    <div className="RightConte w-full h-[400px] border overflow-hidden rounded-lg">
      <img
        src="/8.jpg"
        className="w-full h-full object-cover"
        alt="Did you know"
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
               Why Choose Lifecycle Financial for Your Commercial Loan?
              </h1>
                {cover.map((el) => (
                      <>
                        <div className=" flex  items-start mt-2.5 text-black">
                          <i className="ri-arrow-right-s-line  shrink-0 "></i>
                          <p className=" text-[14px] text-justify">
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}

             
            </div>
          </section>
        </div>

        {/* Centered Sidebar constrained inside main, below Banner and above footer */}
        <Slider />
      </main>
    </>
  );
};

export default Sidebar;
