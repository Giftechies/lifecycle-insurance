import Link from "next/link";

export default function (){
    return(
         <section className="section_2   w-full overflow-hidden  ">
          <main className="   max-w-[1600px] max-lg:space-y-4  max-lg:p-6   mx-auto  relative  ">
            {/* Lower div */}
            <div className=" lower w-full flex max-lg:flex-col  gap-6 lg:gap-3  lg:p-[2.8rem]  xl:p-[5rem] justify-around  ">
              <div className=" w-full rounded-2xl   lg:w-[45%] bg-white p-3 shadow-2xl  lg:p-10  styled-html  ">
                <h2>Why Lifecycle Financial?</h2>
                <ul>
                  <li>
                    We act as a single point of contact for all your financial
                    protection and lending requirements. We work with all major
                    banks and insurance providers across New Zealand, giving you
                    access to a full range of mortgage and personal insurance
                    solutions, including life, health, trauma, income
                    protection, and more.
                  </li>
                  <li>
                    Our team consists of highly experienced advisers who have
                    established a strong track record in the financial services
                    industry. We pride ourselves on building long-term
                    relationships and delivering advice you can trust.
                  </li>
                  <li>
                    At the heart of our approach is a commitment to
                    client-focused service. We ensure that when the time comes,
                    you receive the protection and support you’ve paid for—so
                    you can maintain financial security and your desired
                    standard of living.
                  </li>
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
      <Link href="/Insurance" className="hover:text-[var(--primg)] transition-colors">
        Insurance
      </Link>
    </h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li><Link href="/Insurance/life-insurance">Life Insurance</Link></li>
      <li><Link href="/Insurance/trauma-recovery-cover">Trauma Recovery Cover</Link></li>
      <li><Link href="/Insurance/total-permanent-disability-benefit-cover">Total Permanent Disability Benefit Cover</Link></li>
      <li><Link href="/Insurance/mortgage-rent-protection-cover">Mortgage & Rent Protection Cover</Link></li>
      <li><Link href="/Insurance/income-protection-cover">Income Protection Cover</Link></li>
      <li><Link href="/Insurance/medical-insurance">Medical Insurance</Link></li>
      <li><Link href="/Insurance/group-insurance">Group Insurance</Link></li>
    </ul>
  </div>

  {/* Mortgage Column */}
  <div className="  md:mx-auto"> {/* No change needed here for this issue */}
    <h3 className="text-lg mb-3">
      <Link href="/Mortgage" className="hover:text-[var(--primg)] transition-colors">
        Mortgage
      </Link>
    </h3>
    <ul className="space-y-2 text-sm text-gray-700">
      <li><Link href="/Mortgage/home-loan">Home Loan</Link></li>
      <li><Link href="/Mortgage/refinance">Refinance</Link></li>
      <li><Link href="/Mortgage/investment-loan">Investment Loan</Link></li>
      <li><Link href="/Mortgage/business-loan">Business Loan</Link></li>
      <li><Link href="/Mortgage/construction-loan">Construction Loan</Link></li>
      <li><Link href="/Mortgage/commercial-loan">Commercial Loan</Link></li>
    </ul>
  </div>
</div>
</div>

            </div>
          </main>
        </section>
    )
}