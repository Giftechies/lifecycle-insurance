// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
import Slider from "@/app/Components/Slider/Slider";

const Sidebar = () => {
  const cover = [
    {
      content:
        "We work with different financial institutions to secure competitive rates and flexible terms.",
    },
    {
      content:
        "Our team will handle everything from pre-approval to settlement to make it a seamless experience.",
    },
    {
      content:
        "We provide tailored financial advice to self-employed and working professionals.",
    },
  ];

  const food = [
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
    {
      content:
        "Every day about 21 New Zealanders suffer a stroke. One quarter occur in people under 65 years of age. Stroke is the major cause of adult disability in New Zealand. There are an estimated 60,000 stroke survivors in New  Zealand.",
    },
  ];

  const How = [
    {
      title: "Stand Alone – ",
      content:
        "Your Trauma Cover is separate from you life cover. A Trauma claim won’t reduce the amount of life cover you have.",
    },
    {
      title: "Accelerated –",
      content:
        "Your Trauma Cover is linked to your life cover. Insurance company will pay your Trauma claim out of your life Cover. However you can add a benefit to re-establish your original life cover if this happens.",
    },
  ];

  const Benifit = [
    {
      title: "Lump sum payment for major illness :",
      content:
        "You will receive a lump sum of money if you are diagnosed with a serious illness which vary from company but generally around 40-50. You will also receive your payment if you undergo any of the major types of surgery listed in you policy document..",
    },
    {
      title: "Early Stage Caner Benefit :",
      content:
        "If you or your family would like assistance with managing the proceeds of a Trauma cover claim, your Trauma cover provides a financial and legal advice benefit which reimburses the costs of a financial planner and/or Lawyer up to a maximum of $2500, which is payable in addition to your Trauma cover.",
    },
    {
      title: "Grief Support benefit :",
      content:
        " This will pay you up to $900 for you or loved one to receive counseling from a professional counselor.",
    },
    {
      title: "Special Events increase benefits :",
      content:
        ": You can choose to increase your existing trauma cover, without any medical underwriting, whenever a special event occurs in your life- such as taking out o a mortgage or getting a pay rise.",
    },
    {
      title: "Inflation adjustment benefit : ",
      content:
        "Each year Insurance company will offer to increase your sum insured by the rate of inflation, according to the consumer price index (CPI)",
    },
    {
      title: "Bringing you home  :",
      content:
        " If you have been working overseas for more than three months when you suffer a trauma and you wish to return home, your Trauma cover includes a return to home benefit which will reimburse you for the costs of bringing yourself and a companion home to New Zealand (up to certain limits)",
    },
    {
      title: "Free Kids Cover : ",
      content:
        "You can have free Trauma Insurance up to $50,000 for each of your children or grandchildren as part of your policy.",
    },
    {
      title: "Early Trauma Benefit :",
      content:
        "We will receive a partial payment up to 25% of your total cover for an additional conditions such as Parkinson’s or Multiple Sclerosis. This is paid in addition to the main conditions that you are covered for with Trauma cover.",
    },
    {
      title: "Trauma Reinstatement benefit :",
      content:
        "You can restore your Trauma cover after 12 months of you have claimed on it, so that you can claim it again in the future.",
    },
    {
      title: "Life Cover Buy Back benefit : ",
      content:
        "You can increase your life cover back to its original amount when your trauma claim comes out of your life Insurance – when you have the accelerated version of Trauma Insurance.",
    },
    {
      title: "We pay your Premiums’ benefit :",
      content:
        "This will pay your Trauma Cover premiums for you if you are ill or injured and can’t work in your usual job for more than 10 hours a week.",
    },
    {
      title: "Needle stick benefit : ",
      content:
        "For those who work in the medical and emergency service industry, Needle stick benefit helps to ensure you can protect yourself against the financial impact of contracting Hepatitis B or C or HIV.",
    },
  ];

  const Payment = [
    {
      title: "  Level premium payments :   ",
      content:
        "  You can choose a level premium payment option and lock your premium payments in so they don’t increase with age. Like a fixed rate mortgage. ",
    },
    {
      title: "   Stepped premium payments :  ",
      content:
        " Stepped premiums start lower than Level premiums but increase each year based on your age at that time. ",
    },
  ];

  return (
    <>
      <Header title="Home Loan" />
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
              <h2 className="   leading-6 text-[18px] lg:text-[26px]  lg:mt-6 font-semibold mt-3 ">
                Home Loan Tailored to Your Life Stage
              </h2>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Trauma Recovery cover pays you a lump sum of money to help you
                recover physically and financially from a serious illness,
                injury or medical procedure. The most common illnesses linked to
                trauma Insurance in New Zealand are Cancer, Hearth Attack and
                Stroke and the cost of recovery can have a huge impact on you,
                your family and your business.
              </p>
              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Our team consists of highly expert and trained mortgage advisers
                who closely with you to find the right home loan solutions that
                are tailored to your unique financial situation and long-term
                goals. Our goal is to simplify the process and provide clear,
                personalised advice.
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
                      Why Choose LifeCycle Financial?
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
                      As a specialist in home loan consulting services, our team
                      remains committed to making the whole process smooth,
                      transparent, and successful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content image */}
              <div className="md:w-full lg:w-[40%] h-full  mt-8 ">
                <div className="RightContent  md:w-[100%]  md:h-[20em]  lg:h-[40vh] mt-4 overflow-hidden rounded-lg ">
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
              <h1 className="  text-[18px] lg:text-[26px] text-black font-semibold ">
                Ready to secure the best home loan?
              </h1>

              <p className=" mt-1 lg:mt-4 tracking-wider text-[14px] text-justify ">
                Connect with our team today to explore the right home loan
                options for you in New Zealand. We are here to be your guide
                throughout the process.
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
