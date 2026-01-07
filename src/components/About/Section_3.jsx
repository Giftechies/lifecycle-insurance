import Link from "next/link";

export default function ({ navData = {} }) {
  console.log('about nav', navData);
  console.log('about nav', navData?.subMortgage);
  const lifeContent = [
    {
      title: "One Trusted Point of Contact",
      content: " We act as a single point of contact for all your lending and financial protection needs. By working with major banks and leading insurance providers across New Zealand, we give you access to a wide range of mortgage and personal insurance solutions—including life, health, trauma, income protection, and more."
    },
    {
      title: "Experienced Advisers You Can Rely On",
      content: " Our team of highly experienced advisers brings a proven track record in the financial services industry. We focus on building long-term relationships and delivering advice you can genuinely rely on."
    },
    {
      title: "Client-First Advice That Puts You First",
      content: "At the heart of everything we do is a strong commitment to client-first service. We make sure that when it matters most, you receive the protection and support you’ve paid for—helping you maintain financial security and the lifestyle you’ve worked hard to build. "
    },
  ]
  return (
    <section className="section_2   w-full overflow-hidden  ">
      <main className="   max-w-[1600px] max-lg:space-y-4  max-lg:p-6   mx-auto  relative  ">
        {/* Lower div */}
        <div className=" lower w-full flex max-lg:flex-col  gap-6 lg:gap-3  lg:p-[2.8rem]  xl:p-[5rem] justify-around  ">
          <div className=" w-full rounded-2xl   lg:w-[45%] bg-white p-3 shadow-2xl  lg:p-10  styled-html  ">
            <h2>Why Lifecycle Financial?</h2>
            <ul className="space-y-2" >
              {
                lifeContent?.map((el, idx) => (<li className=" text-justify " >
                  <strong className="mr-2" >{el.title} :</strong>
                  {el.content}

                </li>))
              }

            </ul>
          </div>

          <div className="w-full rounded-2xl text-left lg:w-[45%] bg-white p-4 lg:p-10 shadow-2xl styled-html">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Do?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 justify-between  px-4  "> {/* Changed gap-10 to gap-x-8 for horizontal space */}
              {/* Insurance Column */}
              <div className=" mx-auto ">
                <h3 className="text-lg mb-3">
                  <Link href="/insurance" className="hover:text-[var(--primg)] transition-colors">
                    Insurance
                  </Link>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {
                    navData?.subInsurance?.map((item) => <li><Link href={`/insurance/${item?.slug}`}>{item?.heading}</Link></li>)
                  }


                </ul>
              </div>

              {/* Mortgage Column */}
              <div className="  md:mx-auto"> {/* No change needed here for this issue */}
                <h3 className="text-lg mb-3">
                  <Link href="/mortgage" className="hover:text-[var(--primg)] transition-colors">
                    Mortgage
                  </Link>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {
                    navData?.subMortgage?.map((item) => <li><Link href={`/mortgage/${item?.slug}`}>{item?.heading}</Link></li>)
                  }


                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
    </section>
  )
}