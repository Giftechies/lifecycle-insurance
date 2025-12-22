// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";


const Sidebar = () => {
  const benefit = [
    { content: "	Employee satisfaction and retention " },
    { content: "Better brand image" },
    { content: " Affordability and multiple benefits" },
    { content: "Financial protection for workers " },
    { content: "Flexible cover options for different staff levels" },
  ];

  return (
    <>
      <Banner title="Group Insurance" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative  max-w-[1600px] mx-auto  leading-7 tracking-wider">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Group Insurance
              </h1>
              <h2 className=" leading-11 text-[18px] lg:text-[26px]  font-semibold mt- ">
                Trusted Name for Group Insurances in New Zealand
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify text-[14px] ">
                At LifeCycle Financial, we understand that your workers are the
                greatest asset for your business. Their protection and safety at
                the workplace is your prime goal. But what about uncertain
                accidents? This is where group Insurances come into the picture.
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-justify ">
                Our group Insurances are designed to support every business in
                New Zealand in attracting and retaining top talent while taking
                care of their financial security.
              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex justify-between   ">
              {/* left content */}
              <div
                className="leftcontent w-[100%] lg:w-[55%]  
               "
              >
                {/* content 1 */}
                <div className="flex flex-col mt-2 tracking-wider text-justify text-[14px]  ">
                  <div className=" text-black ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                      What Is Group Insurance?
                    </h1>
                    <p className=" mt-1 lg:mt-4 ">
                      {" "}
                      Group Insurance, as the name suggests, is a type of
                      Insurance that is ideal for businesses. This provides
                      cover for a group of individuals, under a single policy.
                      It is suitable for businesses to offer meaningful benefits
                      to their team members such as life Insurance, income
                      protection, etc.{" "}
                    </p>
                    <p className=" mt-1 lg:mt-2 ">
                      {" "}
                      Since group Insurance is a combination of multiple
                      policies in one, it offers outstanding benefits with
                      reduced premiums.{" "}
                    </p>
                  </div>

                    <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
                Benefits of Group Insurance Include:
              </h1>
              {benefit.map((el) => (
                <>
                  <div className=" flex items-start mt-2.5 ">
                    <i className="ri-arrow-right-s-line  mr-1"></i>
                    <p className=" text-[14px] ">{el.content}</p>
                  </div>
                </>
              ))}
             
            </div>
                  
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-2 ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[50vh] mt-4 overflow-hidden rounded-lg ">
                  <img
                    src= "/group.webp"
                    className=" h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

         <p className=" text-[14px] mt-4  ">
                Give your team the peace of mind!
              </p>
              <p className=" text-[14px] mt-2 ">
                Let your team focus on what they do the best while being
                stress-free about their financial freedom with comprehensive
                group Insurance solutions from LifeCycle Financial.
              </p>
              <p className=" text-[14px] mt-2">We’re here to help.</p>
        </div>

        {/* Centered Sidebar constrained inside main, below Banner and above footer */}
        <Slider  />
      </main>
    </>
  );
};

export default Sidebar;
