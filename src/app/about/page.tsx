
import Header from "../Components/Header/Header";

export default function about() {
  
  return (
    <>
      <Header title="About us" />
      <main className=" ">
        <section className="section-1 max-w-[1600px] mx-auto w-[100%]  lg:px-[3rem] lg:py-[3rem]  xl:px-[9rem] ">
          <main className="  w-full lg:flex " >
            
           <div className="Left lg:w-[50%]  xl:w-[30vw] max-lg:hidden  ">
           <div className="img  lg:aspect-[.7] xl:aspect-[3/4] w-[100%]  rounded-2xl overflow-hidden ">
           <img src="./about1.jpg" className=" w-full  h-full  object-cover object-center " alt="" />

           </div>
           </div>
           <div className="Right w-full   lg:w-[55%] xl:w-[50vw] max-lg:flex flex-col gap-2.5  max-lg:p-6   ">
             <div className="uppercontent    lg:pl-5 xl:px-8  ">
              <div className="left w-[80%] ">
                 <p className="text-[var(--primg)]  text-[16px] ">
                <i className="   ri-record-circle-line mr-1 "></i>About us
              </p>
              <p className="text-black text-[20px] lg:text-[26px]  mt-2 leading-7  xl:leading-9 font-semibold">
                Operating since 2006 in this Industry.
              </p>

              </div>
              <div className="right  ">
                 <p className="  text-[14px]  font-extralight tracking-wider leading-6  text-justify    mt-3 ">
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
            </div>

            {/* image */}
            <div className="img w-full sm:h-[40vw]  rounded-2xl overflow-hidden lg:hidden ">
              <img src="./about1.jpg" className=" w-full h-full object-cover  " alt="" />
            </div>

            <div className="lowercontent p-4 text-white  bg-[var(--primg)] w-full max-lg:rounded-2xl lg:mt-3 xl:w-[80%]   xl:mt-8  xl:px-8 xl:py-6 lg:rounded-r-4xl ">
              <h1 className="  lg:leading-6 font-semibold  text-[20px]  xl:leading-8 w-[90%] ">Comprehensive Financial Solutions, Tailored to Your Needs</h1>
              <p className=" text-[14px]  mt-3 text-justify  ">  Lifecycle Financial is proudly affiliated with KAN (Kiwi Advisor
                Network), one of New Zealand’s largest and most trusted
                financial groups specializing in mortgage and insurance
                distribution. As a committed member of the Auckland Chamber of
                Commerce, we uphold the highest standards of service and ethics.
                We are also an active contributor to the Insurance & Financial
                Services Ombudsman Scheme, ensuring transparency,
                accountability, and customer-focused support in everything we
                do.</p>

            </div>
           </div>

          </main>

        </section>



        {/* section 2 */}
        <section className="section_2  xl:pb-55 w-full overflow-hidden  ">
          <div className=" bg-[var(--tri)]  max-w-[1600px] mx-auto  ">
            <div className="  p-4  xl:h-[33em] xl:px-[9%] xl:py-[50px] relative  ">
              {/* text */}
              <div className="  xl:text-left xl:flex gap-10 text-white">
                {/* left */}
                <div className=" w-full text-[14px] xl:w-[55%]  ">
                  <i className="ri-record-circle-line"></i> Get to Know Us
                  Better
                  <p className=" text-[26px] leading-8 xl:leading-11 xl:text-[40px]  font-semibold mt-3 xl:mt-8">
                    Empowering Kiwis With Financial Confidence Since 2006
                  </p>
                </div>

                {/* right */}
                <div className=" xl:w-[40%] xl:pl-4 xl:pt-10  text-justify xl:mt-5 ">
                  {" "}
                  Lifecycle Financial offers trusted mortgage and insurance
                  advice, working with leading banks and providers to help you
                  make the best financial decisions for your future.
                </div>
              </div>
              {/* pic */}
              <div
                className=" md:flex md:gap-5 md:relative   w-full md:mt-82 xl:absolute xl:w-[85%]  justify-between  xl:-top-10 tracking-normal text-white "
              >
                {/* img */}
                <div className=" w-full   mt-3 rounded-[10px]  sm:h-70 md:-top-75 xl:h-[25em] md:absolute md:w-[100%] xl:w-[32%] xl:rounded-[20px] overflow-hidden  xl:left-[34%] xl:-top-10 ">
                  <img
                    src="./ab2.jpg"
                    className=" h-full w-full  object-cover"
                    alt=""
                  />
                </div>
                <div className="  mt-3 w-[100%] xl:h-[26em] xl:w-[32%] rounded-[20px] overflow-hidden bg-[var(--primg)] py-6 px-6 ">
                  <p className=" text-[25px] md:text-[24px]  text-white font-bold ">
                    Why Lifecycle Financial?
                  </p>
                  <p className=" mt-3.5 text-justify text-[.9rem]">
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

                  <p className=" mt-3.5 text-justify text-[.9rem]">
                    <i className="ri-checkbox-blank-circle-line text-white  "></i>{" "}
                    <span className="font-bold mr-1 text-left ">
                      Expert & Proven Team:
                    </span>
                    Our experienced brokers bring a proven track record in
                    delivering personalized financial and insurance solutions.
                    With a strong focus on your needs, we ensure you receive the
                    right coverage to protect your lifestyle—when it matters
                    most.
                  </p>
                </div>

                <div className="  mt-3  w-[100%] xl:h-[26em] xl:w-[32%] rounded-[20px] overflow-hidden bg-[var(--primg)] py-6 px-6 ">
                  <p className=" text-[25px] text-white font-bold ">
                    What we do?
                  </p>
                  <p className=" mt-3.5 text-justify text-[14px]">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1 ">
                      Your Needs, Our Insurance Expertise:
                    </span>
                    We review your existing insurance coverage to ensure it
                    aligns with your current needs and circumstances. After
                    conducting a detailed needs analysis based on the
                    information you provide, we reach out to multiple insurance
                    providers to secure the most suitable products and deals
                    tailored specifically to your requirements.
                  </p>

                  <p className=" mt-3.5 text-[14px] text-justify md:mt-10">
                    <i className="ri-checkbox-blank-circle-line text-white "></i>{" "}
                    <span className="font-bold mr-1  ">
                      Expert Advice, Claims & Portfolio Audits:
                    </span>
                    <span className=" text-justify ">
                      We provide expert advice, handle claims efficiently, and
                    regularly review your insurance portfolio to ensure it stays
                    aligned with your changing needs. Your peace of mind is our
                    priority.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          <div className=" w-full  text-black/40   mt-6 flex max-md:flex-col items-center justify-around gap-5 lg:justify-center lg:gap-15 ">
          {/* card 1 */}

          {[
            {Name:"Harpeet Singh",
            title:" Financial Adviser",
            img:'/harpreet.jpg'
          },
            {Name:"Rajwinder Rattan",
            title:"Practice Manager",
            img:'/raji.jpg'
          },
          ].map((el)=>(
            <div className="card  w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]    bg-white shadow rounded-xl flex items-center justify-center text-center p-3">
            <div className="img w-[95%]  aspect-square">
              <img src={el.img} className="w-full rounded-xl h-full object-cover object-top " alt="" />
              <h1 className=" mt-4  md:text-[20px] text-black/80 font-medium ">{el.Name}</h1>
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
