import Breadcrumb from "../Components/Breadcumb/page";
import Header from "../Components/Header/page";

export default function about() {
  return (
    <>
      <Header tittle="About us" />
      <main className=" ">
        {/* section 1 */}
        <section className="section_1  w-full overflow-hidden max-w-[1500px] mx-auto   ">
          <main className="main_1  py-4  w-full px-4  lg:relative lg:h-[47em]  lg:px-[9%] ">
            {/* Part-2 */}
            <div className="part_2   rounded-[15px] lg:mb-4 w-full  lg:absolute lg:h-[10em] lg:top-7 lg:w-[36%] lg:right-60  ">
              <p className="text-[var(--primg)]  text-[14px] ">
                {" "}
                <i className=" mr-2   ri-record-circle-line "></i>About us
              </p>
              <p className="text-black text-[26px]  mt-2 leading-7 lg:mt-4  lg:text-[30px] lg:leading-9 font-semibold">
                Operating since 2006 in this Industry.
              </p>
              <p className="   mt-1 font-extralight tracking-wider leading-6 text-justify  text-[14px]  ">
                Lifecycle Financial is proudly affiliated with KAN (Kiwi Advisor
                Network), one of New Zealand’s largest and most trusted
                financial groups specializing in mortgage and insurance
                distribution. As a committed member of the Auckland Chamber of
                Commerce, we uphold the highest standards of service and ethics.
                We are also an active contributor to the Insurance & Financial
                Services Ombudsman Scheme, ensuring transparency,
                accountability, and customer-focused support in everything we
                do.
              </p>
            </div>

            {/* image */}
            <div className="part_1  mt-2 h-[22em] w-full rounded-[20px] mb-4  overflow-hidden lg:absolute lg:w-[35%] lg:h-[40em] lg:z-10">
              <img
                src="./about1.jpg"
                className=" h-full w-full object-cover "
                alt=""
              />
            </div>

            <div className="   w-full p-5 md:h-[40%] rounded-tl-[25px] rounded-br-[25px] lg:w-[46%] lg:rounded-r-[40px] bg-[var(--primg)] lg:absolute lg:right-45 lg:bottom-25 md:flex items-center flex-col gap-4 py-8 lg:pl-20 lg:px-16 ">
              <p className=" text-white text-[26px] leading-7  lg:text-[30px] lg:leading-9 font-semibold">
                Comprehensive Financial Solutions, Tailored to Your Needs
              </p>
              <p className="   mt-1 font-extralight tracking-wider text-justify text-[14px]  text-white ">
                Lifecycle Financial is proudly affiliated with KAN (Kiwi Advisor
                Network), one of New Zealand’s largest and most trusted
                financial groups specializing in mortgage and insurance
                distribution. As a committed member of the Auckland Chamber of
                Commerce, we uphold the highest standards of service and ethics.
                We are also an active contributor to the Insurance & Financial
                Services Ombudsman Scheme, ensuring transparency,
                accountability, and customer-focused support in everything we
                do.
              </p>
            </div>
          </main>
        </section>

        {/* section 2 */}
        <section className="section_2  lg:pb-55 w-full overflow-hidden  ">
          <div className=" bg-[var(--tri)]  max-w-[1600px] mx-auto  ">
            <div className="  p-4  lg:h-[33em] lg:px-[9%] lg:py-[50px] relative  ">
              {/* text */}
              <div className="  lg:text-left lg:flex gap-10 text-white">
                {/* left */}
                <div className=" w-full text-[14px] lg:w-[55%]  ">
                  <i className="ri-record-circle-line"></i> Get to Know Us
                  Better
                  <p className=" text-[26px] leading-8 lg:leading-11 lg:text-[40px]  font-semibold mt-3 lg:mt-8">
                    Empowering Kiwis With Financial Confidence Since 2006
                  </p>
                </div>

                {/* right */}
                <div className=" lg:w-[40%] lg:pl-4 lg:pt-10  text-justify lg:mt-5 ">
                  {" "}
                  Lifecycle Financial offers trusted mortgage and insurance
                  advice, working with leading banks and providers to help you
                  make the best financial decisions for your future.
                </div>
              </div>
              {/* pic */}
              <div
                className=" sm:flex md:relative   w-full md:mt-82
               lg:absolute lg:w-[85%] lg:flex justify-between  lg:-top-10 tracking-normal text-white "
              >
                {/* img */}
                <div className=" w-full   mt-3 rounded-[10px] sm:w-full sm:h-70 md:-top-75 lg:h-[25em] lg:w-[32%] lg:rounded-[20px] overflow-hidden sm:absolute lg:left-[34%] lg:-top-10 ">
                  <img
                    src="./ab2.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className="  mt-3 sm:w-[46%] lg:h-[26em] lg:w-[32%] rounded-[20px] overflow-hidden bg-[var(--primg)] py-6 px-6 ">
                  <p className=" text-[25px] text-white font-bold ">
                    Why Lifecycle Financial?
                  </p>
                  <p className=" mt-3.5 text-justify text-[14px]">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1">
                      Independent and Unbiased Advice:
                    </span>
                    At Lifecycle Financial, we provide independent, need-based
                    advice, working with top banks and insurers to deliver
                    tailored mortgage and insurance solutions. Our expert
                    brokers focus on your goals, ensuring the protection you
                    need—right when you need it. We’re committed to helping you
                    secure your future with confidence and clarity.
                  </p>

                  <p className=" mt-3.5 text-justify text-[14px]">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1">
                      Expert & Proven Team:
                    </span>
                    Our experienced brokers bring a proven track record in
                    delivering personalized financial and insurance solutions.
                    With a strong focus on your needs, we ensure you receive the
                    right coverage to protect your lifestyle—when it matters
                    most.
                  </p>
                </div>

                <div className="  mt-3  sm:w-[46%] lg:h-[26em] lg:w-[32%] rounded-[20px] overflow-hidden bg-[var(--primg)] py-6 px-6 ">
                  <p className=" text-[25px] text-white font-bold ">
                    What we do?
                  </p>
                  <p className=" mt-3.5 text-justify text-[14px]">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1">
                      Your Needs, Our Insurance Expertise:
                    </span>
                    We review your existing insurance coverage to ensure it
                    aligns with your current needs and circumstances. After
                    conducting a detailed needs analysis based on the
                    information you provide, we reach out to multiple insurance
                    providers to secure the most suitable products and deals
                    tailored specifically to your requirements.
                  </p>

                  <p className=" mt-3.5 text-justify text-[14px]">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1">
                      Expert Advice, Claims & Portfolio Audits:
                    </span>
                    We provide expert advice, handle claims efficiently, and
                    regularly review your insurance portfolio to ensure it stays
                    aligned with your changing needs. Your peace of mind is our
                    priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        {/* section 3 team */}
        <section className=" w-full px-4 py-10 lg:px-[9%]  bg-[var(--tri)]/10  max-w-[1600px] mx-auto">
          <main className=" w-full ">
            <p className=" text-[var(--primg)] ">
            <i className="ri-record-circle-line mr-2 text-lg font-extralight "></i>
            OUR TEAM
          </p>
          {/* cards */}
          <div className=" md:flex  w-full h-[35em] mb-25 sm:mb-0  text-black/40  items-center justify-center gap-14 mt-1.5 ">
          {/* card 1 */}
            <div className=" w-full h-[60%] md:h-90 bg-white md:w-80  shadow-lg rounded-[30px] overflow-hidden  relative ">
              <div className="h-40 z-20 w-full bg-[var(--primg)]  "></div>
              <div className=" h-full  z-10 b w-full  absolute inset-0 flex flex-col items-center justify-center ">
                {/* img */}
                <div className=" h-56 w-56 overflow-hidden rounded-full border-8 border-[var(--primg)] ">
                  <img
                    src="/harpreet.jpg"
                    className="  h-full w-full object-top "
                  />
                </div>
                <h1 className="text-2lg text-black font-bold mt-5 ">
                  Harpreet Singh
                </h1>
                <p className=" tracking-tighter text-[14px] ">
                  Financial Adviser
                </p>
              </div>
            </div>
            {/* card2 */}
            <div className=" w-full h-[60%] mt-3.5 md:h-90 bg-white md:w-80  shadow-lg rounded-[30px] overflow-hidden  relative hover:scale-101 duration-300 ">
              <div className="h-40 w-full bg-[var(--primg)] "></div>
              <div className=" h-full w-full absolute inset-0 flex flex-col items-center justify-center ">
                {/* img */}
                <div className=" h-56 w-56 overflow-hidden rounded-full border-8 border-[var(--primg)] ">
                  <img
                    src="/raji.jpg"
                    className="  h-full w-full object-top "
                  />
                </div>
                <h1 className="text-2lg text-black font-bold mt-5 ">
                  Rajwinder Rattan
                </h1>
                <p className=" tracking-tighter text-[14px]">
                  Practice Manager
                </p>
              </div>
            </div>

          </div>
          </main>
        </section>
      </main>
    </>
  );
}
