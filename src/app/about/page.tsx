import Header from "../Components/Header/Header";

export default function about() {
  return (
    <>
      <Header title="About us" />
      <main className=" ">
        <section className="section-1 max-w-[1600px] mx-auto w-[100%]  lg:px-[3rem] lg:py-[3rem]  xl:px-[9rem] ">
          <main className="  w-full lg:flex ">
            <div className="Left lg:w-[50%]  max-lg:hidden  ">
              <div className="img lg:h-[105%] xl:h-[105%]  w-[100%]  rounded-2xl overflow-hidden ">
                <img
                  src="./about-pic1.jpg"
                  className=" w-full  h-full  object-cover object-center "
                  alt=""
                />
              </div>
            </div>
            <div className="Right w-full   lg:w-[55%] xl:w-[50vw] max-lg:flex flex-col gap-5  max-lg:p-6   ">
              <div className="uppercontent    lg:pl-5 xl:px-8  ">
                <div className="left w-[100%]  ">
                  <p className="text-[var(--primg)]  text-[16px] ">
                    <i className="   ri-record-circle-line mr-1 "></i>About us
                  </p>
                  <p className="text-black text-[20px] lg:text-[24px]   mt-4 leading-7  xl:leading-9 font-semibold">
                    Operating since 2006 in this Industry.
                  </p>
                </div>
                <div className="right  ">
                  <p className="  text-[14px]  font-extralight tracking-wider leading-6  text-justify    mt-3 ">
                    Lifecycle Financial is proudly affiliated with KAN (Kiwi
                    Advisor Network), one of New Zealand’s largest and most
                    trusted financial groups specializing in mortgage and
                    Insurence distribution. As a committed member of the
                    Auckland Chamber of Commerce, we uphold the highest
                    standards of service and ethics. We are also an active
                    contributor to the Insurence & Financial Services Ombudsman
                    Scheme, ensuring transparency, accountability, and
                    customer-focused support in everything we do.
                  </p>
                </div>
              </div>

              {/* image */}
              <div className="img w-full sm:h-[40vw]  rounded-2xl overflow-hidden lg:hidden ">
                <img
                  src="./about-pic1.jpg"
                  className=" w-full h-full object-cover  "
                  alt=""
                />
              </div>

              <div className="lowercontent p-4 text-white  bg-[var(--primg)] w-full max-lg:rounded-2xl lg:mt-8 xl:w-[100%]   xl:mt-8  xl:px-8 xl:py-6 lg:rounded-r-4xl ">
                <h1 className="  lg:leading-6 font-semibold  text-[20px]  xl:leading-8 w-[90%] ">
                  Comprehensive Financial Solutions, Tailored to Your Needs
                </h1>
                <p className=" text-[14px]  mt-3 text-justify  ">
                  {" "}
                  Lifecycle Financial is proudly affiliated with KAN (Kiwi
                  Advisor Network), one of New Zealand’s largest and most
                  trusted financial groups specializing in mortgage and
                  Insurence distribution. As a committed member of the Auckland
                  Chamber of Commerce, we uphold the highest standards of
                  service and ethics. We are also an active contributor to the
                  Insurence & Financial Services Ombudsman Scheme, ensuring
                  transparency, accountability, and customer-focused support in
                  everything we do.
                </p>
              </div>
            </div>
          </main>
        </section>

        {/* section 2 */}
        <section className="section_2   w-full overflow-hidden  ">
          <main className="   max-w-[1600px] max-lg:space-y-4  max-lg:p-4 lg:h-[47rem] xl:h-[40rem]  mx-auto  relative  ">
            

            {/* part 1 */}
            <div className=" border p-[1rem] max-lg:rounded-2xl bg-[var(--tri)] max-lg:flex-col flex gap-2 lg:gap-3 text-white lg:px-[2.8rem] xl:px-[7rem] lg:absolute lg:h-[50%] xl-px-[8rem] z-10 ">
              {/* left */}
              <div className=" w-full text-[14px] lg:w-[50%]  ">
                <i className="ri-record-circle-line"></i> Get to Know Us Better
                <p className=" text-[20px] leading-8 xl:leading-9 xl:text-[30px]  font-semibold mt-3 xl:mt-4">
                  Empowering Kiwis With Financial Confidence Since 2006
                </p>
              </div>

              {/* right */}
              <div className=" text-[14px] lg:w-[45%] lg:mt-8  xl:pl-4   text-justify xl:mt-12 ">
                {" "}
                Lifecycle Financial offers trusted mortgage and Insurence
                advice, working with leading banks and providers to help you
                make the best financial decisions for your future.
              </div>
            </div>

            {/* part 2 */}

            <div className=" w-full flex max-lg:flex-col gap-6 lg:gap-3  lg:px-[2.8rem] xl:px-[7rem] justify-around mt-3 lg:mt-14 lg:absolute  top-35  z-20 ">
              <div className=" w-full rounded-2xl text-left lg:w-[30%] bg-white p-3 shadow-2xl   ">
                <p className=" text-[25px]   font-medium ">
                  Why Lifecycle Financial?
                </p>
                <p className=" mt-3.5 text-[14px]  ">
                  <i className="ri-checkbox-blank-circle-line  "></i>{" "}
                  <span className="font-semibold ">
                    Independent and Unbiased Advice:
                  </span>
                  <p className=" ml-4 inline  text-justify text-black/70 ">
                    At Lifecycle Financial, we provide independent, need-based
                    advice, working with top banks and insurers to deliver
                    tailored mortgage and Insurence solutions. Our expert
                    brokers focus on your goals, ensuring the protection you
                    need—right when you need it. We’re committed to helping you
                    secure your future with confidence and clarity.
                  </p>
                </p>

                <p className=" mt-3.5 text-[.9rem]">
                  <i className="ri-checkbox-blank-circle-line   "></i>{" "}
                  <span className="font-bold mr-1 text-left ">
                    Expert & Proven Team:
                  </span>
                  <p className=" ml-3 inline text-justify text-black/70 ">
                    Our experienced brokers bring a proven track record in
                    delivering personalized financial and Insurence solutions.
                    With a strong focus on your needs, we ensure you receive the
                    right coverage to protect your lifestyle—when it matters
                    most.
                  </p>
                </p>
              </div>

              {/* img */}
              <div className=" w-full rounded-2xl overflow-hidden lg:w-[30%]   ">
                <img
                  src="./ab2.jpg"
                  className=" h-full w-full  object-cover"
                  alt=""
                />
              </div>
              {/* text */}
              <div className=" w-full rounded-2xl text-left lg:w-[30%] bg-white p-3  shadow-2xl">
                <p className=" text-[20px] text-white font-bold ">
                  What we do?
                </p>
                <p className=" mt-3.5 text-justify text-[14px]">
                  <i className="ri-checkbox-blank-circle-line "></i>{" "}
                  <span className="font-bold mr-1 ">
                    Your Needs, Our Insurence Expertise:
                  </span>
                  <span className="text-black/70 ">
                    We review your existing Insurence coverage to ensure it
                    aligns with your current needs and circumstances. After
                    conducting a detailed needs analysis based on the
                    information you provide, we reach out to multiple Insurence
                    providers to secure the most suitable products and deals
                    tailored specifically to your requirements.
                  </span>
                </p>

                <p className=" mt-3.5 text-[14px] text-justify md:mt-10 ">
                  <i className="ri-checkbox-blank-circle-line  "></i>{" "}
                  <span className="font-bold mr-1  ">
                    Expert Advice, Claims & Portfolio Audits:
                  </span>
                  <span className=" text-black/70  ">
                    We provide expert advice, handle claims efficiently, and
                    regularly review your Insurence portfolio to ensure it stays
                    aligned with your changing needs. Your peace of mind is our
                    priority.
                  </span>
                </p>
              </div>
            </div>
          </main>
        </section>

        {/*  */}

        {/* section 3 team */}
        <section className=" w-full px-4 py-10 xl:px-[9%]  bg-[var(--tri)]/10  max-w-[1600px] mx-auto">
          <main className=" w-full ">
            <p className=" text-[var(--primg)]  font-semibold">
              <i className="ri-record-circle-line mr-2 text-xl "></i>
              OUR TEAM
            </p>
            {/* cards */}
            <div className=" w-full  text-black/40   mt-6 flex max-md:flex-col items-start justify-around gap-5 lg:justify-start lg:gap-15 ">
              {/* card 1 */}

              {[
                {
                  Name: "Harpeet Singh",
                  title: " Financial Adviser",
                  img: "/harpreet.jpg",
                },
                {
                  Name: "Rajwinder Rattan",
                  title: "Practice Manager",
                  img: "/raji.jpg",
                },
              ].map((el) => (
                <div className="card  w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]    bg-white shadow rounded-xl flex items-center justify-center text-center p-3">
                  <div className="img w-[95%]  aspect-square">
                    <img
                      src={el.img}
                      className="w-full rounded-xl h-full object-cover object-top "
                      alt=""
                    />
                    <h1 className=" mt-4  md:text-[20px] text-black/80 font-medium ">
                      {el.Name}
                    </h1>
                    <h3 className=" text-[14px] mt-2 ">{el.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>
      </main>
    </>
  );
}
