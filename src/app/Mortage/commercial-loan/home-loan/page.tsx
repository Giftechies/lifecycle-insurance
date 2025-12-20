// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "Auckland $485,000",
    },
    {
      content:
        "Wellington City (this does not include Kapiti Coast, Upper Hutt, Lower Hutt and Porirua City areas), and Queenstown Lakes District $425,000",
    },
    {
      content:
        "Christchurch City and Selwyn District $400,000",
    },
    {
      content:
        "Porirua City, Hutt City, Upper Hutt, Kapiti Coast, Tasman/Nelson, Western Bay of Plenty,  Hamilton City, Tauranga City, Waimakariri, Thames/Coromandel $350,000",
    },
    {
      content:
        "All other areas $300,000",
    },
  ];

 





 

  return (
    <>
      <Banner title="Home Loan" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Home Loan
              </h1>
              <h6 className="mt-3 ">
               Now its easier to own your own home.  A Welcome Home Loan allows you to purchase a home with a lower deposit than is normally required.  A Welcome Home loan only requires a 10% deposit.
              </h6>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                The maximum amount you can borrow with a Welcome Home Loan depends on the region you are buying in. Each region has a house price cap. The maximum loan for that region is the house price cap less your 10% deposit.   For example to purchase a house in Wellington City with a price cap of $425,000 would require you to have a $42,500 deposit, and your Welcome Home Loan would be $382,500.
              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4 items-stretch lg:flex gap-8">
              {/* left content */}
              <div
                className="leftcontent w-[100%] lg:w-[55%]  
               "
              >
                {/* content 1 */}
                <div className="flex mt-2 ">
                  <div className=" text-black ">
                    <h1 className=" lg:text-[26px] text-black font-semibold ">
                     The deposit can be entirely gifted!
                    </h1>
                    <h5 className=" mt-2">There is a maximum amount on how much your home can cost: </h5>

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
                    <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                      
                    </p>
                   
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%]  flex  ">
                <div className="RightContent     overflow-hidden rounded-lg ">
                  <img
                    src="/about-pic1.jpg"
                    className=" h-[100%] w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section className="section_2  w-full  text-justify ">
            {/* content 2 */}
            <div className=" text-black/80 mt-4 ">
              <h1 className="  text-[18px] lg:text-[26px] text-black font-semibold ">
              Are you eligible for a Welcome Home Loan?
              </h1>
              <p className=" mt-4" >Welcome Home Loan has the following standard criteria: You will also need to meet the specific lending criteria of the participating lenders and applicants must be New Zealand Citizens or Permanent New Zealand Residents (holding a ‘Permanent Resident Visa’).</p>
              <p className="mt-2">You must also meet the maximum income thresholds:</p>

              <p className=" mt-1 ml-2   ">
                <i className="ri-arrow-right-s-line  shrink-0 "></i>For 1 borrower you can have a maximum yearly income of $80,000 (before tax). 
              </p>
              <p className=" ml-2" > <i className="ri-arrow-right-s-line  shrink-0 "></i>For 2 or more borrowers you can have a maximum household yearly income of $120,000 (before tax).</p>
              <p className=" mt-2" >If you think this could be a way for you to get into your own home then please contact us to discuss further options</p>
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
