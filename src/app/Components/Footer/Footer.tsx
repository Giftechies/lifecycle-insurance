"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="footer bg-[var(--tri)] overflow-hidden">
        <main className="w-full h-full max-w-[1600px] mx-auto text-[14px] px-4 pb-10 lg:pb-5 lg:px-[3rem] xl:py-5 tracking-wide  font-light">
          <div
            className="content border-b border-dotted border-white/50 text-white/90
              flex flex-col 
              lg:flex-row max-xl:flex-wrap lg:justify-between gap-6 mt-7 lg:items-start xl:pb-5"
          >
            {/* Insurance */}
            <div className="shrink-0 lg:pt-0 lg:basis-[18%]">
              <h3 className="text-[20px] font-medium mb-3 lg:mb-0 text-white">Insurance</h3>
              <div className="flex flex-col space-y-4 lg:mt-4">
                <Link href="/insurance/life-insurance" className="text-white/90 hover:text-white transition-colors">Life Insurance</Link>
                <Link href="/insurance/trauma-recovery-cover" className="text-white/90 hover:text-white transition-colors">Trauma Recovery Cover</Link>
                <Link href="/insurance/total-permanent-disability-benefit-cover" className="text-white/90 hover:text-white transition-colors">Total Permanent Disability Benefit Cover</Link>
                <Link href="/insurance/mortgage-and-rent-protection-cover" className="text-white/90 hover:text-white transition-colors">Mortgage & Rent Protection Cover</Link>
                <Link href="/insurance/income-protection-cover" className="text-white/90 hover:text-white transition-colors">Income Protection Cover</Link>
                <Link href="/insurance/medical-insurance" className="text-white/90 hover:text-white transition-colors">Medical Insurance</Link>
                <Link href="/insurance/group-insurance" className="text-white/90 hover:text-white transition-colors">Group Insurance</Link>
              </div>
            </div>

            {/* Mortgage */}
            <div className="shrink-0 lg:pt-0 lg:basis-[18%]">
              <h3 className="text-[20px] font-medium mb-3 text-white">Mortgage</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/mortgage/home-loans" className="text-white/90 hover:text-white transition-colors">Home Loans</Link>
                <Link href="/mortgage/refinance" className="text-white/90 hover:text-white transition-colors">Refinance</Link>
                <Link href="/mortgage/investment-loan" className="text-white/90 hover:text-white transition-colors">Investment Loan</Link>
                <Link href="/mortgage/business-loan" className="text-white/90 hover:text-white transition-colors">Business Loan</Link>
                <Link href="/mortgage/construction-loan" className="text-white/90 hover:text-white transition-colors">Construction Loan</Link>
                <Link href="/mortgage/commercial-loan" className="text-white/90 hover:text-white transition-colors">Commercial Loan</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="shrink-0 lg:pt-0 lg:basis-[18%]">
              <h3 className="text-[20px] font-medium mb-3 text-white">Quick Links</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">About Us</Link>
                <Link href="/insurance" className="text-white/90 hover:text-white transition-colors">Insurance</Link>
                <Link href="/mortgage" className="text-white/90 hover:text-white transition-colors">Mortgage</Link>
                <Link href="/case-study" className="text-white/90 hover:text-white transition-colors">Case Study</Link>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>

            {/* Important Links */}
            <div className="shrink-0 lg:pt-0 lg:basis-[18%]">
              <h3 className="text-[20px] font-medium mb-3 text-white">Important Links</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/calculator" className="text-white/90 hover:text-white transition-colors">Calculator</Link>
                <Link href="/interest-rates" className="text-white/90 hover:text-white transition-colors">Interest Rates</Link>
                <Link href="/public-disclosure" className="text-white/90 hover:text-white transition-colors lg:w-[70%]">Public Available Disclosure</Link>
                <Link href="/make-a-complaint" className="text-white/90 hover:text-white transition-colors">Make a Complaint</Link>
                <Link href="/privacy-policy" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>

            {/* Reach Us */}
            <div className="lg:pt-0 shrink-0 lg:basis-[18%] min-w-[220px] lg:mb-6 ">
              <h3 className="text-[20px] font-medium mb-3 text-white">Reach Us</h3>
              <div className="flex flex-col text-[14px] flex-wrap space-y-4">
                <div className="flex items-start gap-1">
                  <i className="ri-phone-line text-2lg"></i>
                  <a href="tel:0800507770" className="text-white/90 hover:text-white transition-colors">0800 50 7770</a>
                </div>
                <div className="flex items-start gap-1">
                  <i className="ri-mail-line text-2lg"></i>
                  <a href="mailto:harpreet@lifecyclefinancial.co.nz" className="text-white/90 hover:text-white transition-colors">harpreet@lifecyclefinancial.co.nz</a>
                </div>
                <div className="flex items-start max-xl:flex-wrap">
                  <i className="ri-map-pin-line mr-2 mt-1 text-2lg"></i>
                  <span>
                    402 Ormiston Road, Flat Bush, Auckland, 2016, North Island, New Zealand
                  </span>
                </div>
                <div className="w-full border-t pb-8 lg:pb-0 border-dotted border-white/30 text-lg pt-4 flex gap-2">
                  <Link href="#" className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                  <Link href="#" className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                    <i className="ri-youtube-line"></i>
                  </Link>
                  <Link href="#" className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-white font-medium tracking-widest text-center mt-3 mb-12 md:mb-0">
            Copyright © 2025 Lifecycle Financial. All Rights Reserved.
          </h1>
        </main>
      </footer>
    </>
  );
}
