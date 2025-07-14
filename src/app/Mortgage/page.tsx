"use client";
import { useRef } from "react";
import Header from "../Components/Header/Header";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Mortgage() {
  const router = useRouter();
  const card = [
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
      date: 20,
      month: "jun",
      heading: "Home Loan",
      li: ()=> router.push( '/Mortgage/home-Loan'),
      content:
        "Make your dream of home ownership a reality with our flexible home loan solutions. Enjoy competitive rates and personalized service to guide you every step of the way.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678139636101-d9eeee5c67f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2lhbCUyMGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      date: 20,
      month: "jun",
      heading: "Refinance",
      li:    ()=> router.push( '/Mortgage/refinance') ,
      content:
        "Save more with our easy refinancing options. Lower your interest rate, reduce monthly payments, and simplify your finances without the hassle.",
    },
    {
      img: "https://media.istockphoto.com/id/2198966747/photo/couple-closing-real-estate-contract-with-real-estate-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRupwwS_sR21cACmOIEPxd5ykbXbZsxLoc_oKUsaNhc=",
      date: 20,
      month: "jun",
      heading: "Investment Loan",
      li: ()=> router.push( "/Mortgage/investment-loan"),
      content:
        "Build your wealth with our tailored investment Loan. We help you maximize returns and grow your property portfolio with expert advice.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661499804385-da9ba8357b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwb2ZmaWNlfGVufDB8fDB8fHww",
      date: 20,
      month: "jun",
      heading: "Business Loan",
      li: ()=> router.push(  "/Mortgage/business-loan"),
      content:
        "Fuel your business ambitions with fast, flexible financing. Whether expanding or managing cash flow, our business Loan adapt to your goals.",
    },
    {
      img: "https://media.istockphoto.com/id/2173981229/photo/blurred-image-engineer-is-giving-advice-and-consulting-with-the-designer-to-find-out.webp?a=1&b=1&s=612x612&w=0&k=20&c=Has6w_cyklwmYGPZh5cUBXxb3C7uJ__9JkAwozKYNbY=",
      date: 20,
      month: "jun",
      heading: "Construction Loan",
      li: ()=> router.push( "/Mortgage/construction-loan" ),
      content:
        "Bring your building plans to life with structured funding at every stage. Our construction Loan ensure your project stays on track and on budget.",
    },
    {
      img: "https://images.unsplash.com/photo-1599580546666-c26f15e00933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      date: 20,
      month: "jun",
      heading: "Commercial Loan" ,
      li:  ()=> router.push( "/Mortgage/commercial-loan"),
      content:
        "Finance commercial properties with confidence. We offer competitive rates and expert support for your business growth and investment needs.",
    },
  ];

  const carda = useRef<(HTMLDivElement | null)[]>([]);

  carda.current = [];

  const animate = (index: number) => {
    const target = carda.current[index];
    gsap.to(target, {
      scale: 0.95,
      ease: "power2.inOut",
    });
  };

  const animatend = (index: number) => {
    const target = carda.current[index];
    gsap.to(target, {
      scale: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <main className="max-w-[1600px] m-auto">
      <Header title="Mortgage" />

      {/* section 1 */}
      <section className="w-full p-4 bg-[#F7F4FB] overflow-hidden lg:flex flex-col items-center justify-center lg:px-[9%] lg:py-10 max-w-[1600px] mx-auto tracking-wider">
        {/* text */}
        <div className="h-[20%] w-full  lg:flex gap-10">
          {/* left */}
          <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> Mortgage
            <p className="text-[26px] leading-9 text-black lg:text-[36px] font-semibold mt-3 lg:leading-11">
              Mortgage Solutions Crafted for Your Life.
            </p>
          </div>

          {/* right */}
          <div className="w-full lg:w-[40%] mt-2 lg:mt-10 text-justify">
            Get expert guidance and flexible options to make home ownership
            easy. We’re here to help you finance your dreams with confidence.
          </div>
        </div>

        {/* cards */}
        <div  className="w-full lg:w-[100%]  mt-10 flex flex-wrap justify-evenly gap-8 ">
          {card.map((el, index) => (
            <div
              key={index}
              onMouseEnter={() => animate(index)}
              onMouseLeave={() => animatend(index)}
              onClick={el.li }
              ref={(elRef) => {
                carda.current[index] = elRef;
              }}
              className="w-full md:w-[45%] lg:w-[30%] mt-4 bg-white rounded-2xl shadow-xl overflow-hidden relative"
            >
              {/* Image section */}
              <div className="rounded-b-xl shadow-2xs overflow-hidden">
                <img
                  src={el.img}
                  alt="Event"
                  className="w-full h-[15em] object-cover"
                />

               
              </div>

              {/* Content */}
              <div className="p-[35px] ">
                <h3 className="text-[25px] cursor-pointer font-medium leading-7 text-gray-900 mb-2">
                  {el.heading}
                </h3>
                <p className="text-gray-700 text-[14px]  mt-2 text-justify">
                  {el.content}
                </p>

                {/* Read More */}
                <Link
                  href='#'
                  className="text-[var(--primg)] font-semibold mt-4 text-sm hover:underline flex items-center gap-1 "
                >
                  Read More
                  <span className="inline-block transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
