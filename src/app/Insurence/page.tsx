"use client"
import Header from "../Components/Header/Header";
import Link from "next/link";

export default function Insurance() {

    const card= [
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        heading:"Life Insurance",
        li:"/Insurence/life-insurance",
        content:"Protect your loved ones with tailored life insurance. Ensure their financial security with affordable, flexible cover. Peace of mind for all stages of life."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        li:'/Insurence/trauma-recovery-cover',
        heading:"Trauma Recovery Cover",
        content:"Get support when it matters most. Trauma cover offers financial security after serious illness or injury so you can focus fully on recovery."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        li:'/Insurence/total-permanent-disability-benefit-cover',
        heading:" Total Permanent Disability Benefit Cover ",
        content:"Financial peace of mind if you're unable to work due to permanent disability."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        heading:" Mortgage & Rent Protection Cover ",
        li:"/Insurence/mortgage-rent-protection-cover",
        content:"Keep your home secure if illness or injury stops you working. Mortgage & Rent Protection covers your payments when life gets tough."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        heading:" Income Protection Cover ",
        li:"/Insurence/income-protection-cover",
        content:"Replace lost income during illness or injury. Maintain your lifestyle and meet your commitments with our flexible income protection plans."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        heading:" Medical Insurance ",
        li:"/Insurence/medical-insurance",
        content:"Access quality healthcare when you need it most. Our medical insurance plans offer peace of mind and protection for your health and budget."
      },
      {
        img:"8.jpg",
        date:20,
        month:'jun',
        heading:" Group Insurance ",
        li:"/Insurence/group-insurance",
        content:"Protect your team with affordable group cover. Flexible plans for businesses that value their employees’ wellbeing and security. Boost morale."
      },
    ];

  return (
    <main className="max-w-[1700px] m-auto">
      <Header title="Insurance" />

      {/* Section 1 */}
      <section className="w-full px-4 bg-[#F7F4FB] overflow-hidden lg:flex flex-col items-center justify-center lg:px-[9%] lg:py-10 max-w-[1500px] mx-auto leading-7 tracking-wider">
        {/* Text */}
        <div className="h-[20%] w-full mt-8 lg:flex gap-10">
          <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> Insurance
            <p className="leading-9 text-black text-[18px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
              Personalised Insurance Solutions Tailored to Your Life
            </p>
          </div>

          <div className="w-full lg:w-[40%] mt-10 lg:text-[14px] text-justify">
            Lifecycle Financial offers trusted mortgage and insurance advice,
            working with leading banks and providers to help you make the best
            financial decisions for your future.
          </div>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[97%] mt-10 lg:flex flex-wrap gap-14 mb-">
          {card.map((el, index) => (
            <div
              key={index}
              className="w-full lg:w-[30%] mt-4 bg-white rounded-2xl shadow-xl overflow-hidden relative"
            >
              {/* Image */}
              <div className="rounded-b-4lg overflow-hidden">
                <img
                  src={el.img}
                  alt={el.heading}
                  className="w-full h-[15em] object-cover"
                />
              </div>

              {/* Content */}
              <div className="px-[35px] py-4 relative h-70">
                <h3 className="text-[25px] font-medium leading-7 text-gray-900 mb-2">
                  {el.heading}
                </h3>
                <p className="text-gray-700 text-[14px] text-justify mb-[20px]">
                  {el.content}
                </p>

                {/* Read More */}
                <Link
                  href={el.li}
                  className="text-[var(--primg)] font-semibold text-sm hover:underline absolute bottom-9 left-9 flex items-center gap-1"
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
