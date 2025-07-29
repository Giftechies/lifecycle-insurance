"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [setting, setSetting] = useState()
  const [loading, setloading] = useState(true)
  //  useEffect(() => {
  //       async function fetchData() {
  //         try {
  //           const res = await HomeData("settings");
  //           if (res?.success) {
  //       setSetting(res.data);
  //     }
           
  //         } catch (error) {
  //           console.log("error", error);
  //         } finally {
  //           setloading(false);
  //         }
  //       }
  //       fetchData();
  //     }, []);
  return (
    <>
      {/* footer */}
      <footer className="footer bg-[var(--tri)] overflow-hidden">
        <main className="w-full h-full max-w-[1600px] mx-auto  p-4  lg:p-[3rem]  tracking-wide  max-lg:pb-26  font-light">
          <div
            className="content border-b pb-4  border-dotted border-white/50 text-white/90
              grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[300px_150px_150px_180px_300px]  justify-between  space-y-5  lg:items-start "
          >
            {/* Insurance */}
            <div className="shrink-0 lg:pt-0   ">
              <Link  href='/Insurance' className="text-[18px] font-medium mb-3 lg:mb-0 text-white">Insurance</Link>
              <div className="flex flex-col space-y-4 mt-3">
                <Link href="/Insurance/life-insurance" className="text-white/90 hover:text-white transition-colors">Life Insurance</Link>
                <Link href="/Insurance/trauma-recovery-cover" className="text-white/90 hover:text-white transition-colors">Trauma Recovery Cover</Link>
                <Link href="/Insurance/total-permanent-disability-benefit-cover" className="text-white/90 hover:text-white transition-colors">Total Permanent Disability Benefit Cover</Link>
                <Link href="/Insurance/mortgage-rent-protection-cover" className="text-white/90 hover:text-white transition-colors">Mortgage & Rent Protection Cover</Link>
                <Link href="/Insurance/income-protection-cover" className="text-white/90 hover:text-white transition-colors">Income Protection Cover</Link>
                <Link href="/Insurance/medical-insurance" className="text-white/90 hover:text-white transition-colors">Medical Insurance</Link>
                <Link href="/Insurance/group-insurance" className="text-white/90 hover:text-white transition-colors">Group Insurance</Link>
              </div>
            </div>

            {/* Mortgage */}
            <div className=" lg:pt-0  ">
              <Link  href='/Mortgage'  className="!text-[18px] font-medium mb-3 text-white">Mortgage</Link>
              <div className="flex flex-col space-y-4 mt-3">
                <Link href="/Mortgage/home-loan" className="text-white/90 hover:text-white transition-colors">Home Loan</Link>
                <Link href="/Mortgage/refinance" className="text-white/90 hover:text-white transition-colors">Refinance</Link>
                <Link href="/Mortgage/investment-loan" className="text-white/90 hover:text-white transition-colors">Investment Loan</Link>
                <Link href="/Mortgage/business-loan" className="text-white/90 hover:text-white transition-colors">Business Loan</Link>
                <Link href="/Mortgage/construction-loan" className="text-white/90 hover:text-white transition-colors">Construction Loan</Link>
                <Link href="/Mortgage/commercial-loan" className="text-white/90 hover:text-white transition-colors">Commercial Loan</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="shrink-0 lg:pt-0    ">
              <h3 className="text-[18px] font-medium mb-3 text-white">Quick Links</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                <Link href="/About-us" className="text-white/90 hover:text-white transition-colors">About Us</Link>
                <Link href="/Insurance" className="text-white/90 hover:text-white transition-colors">Insurance</Link>
                <Link href="/Mortgage" className="text-white/90 hover:text-white transition-colors">Mortgage</Link>
                <Link href="/Case-study" className="text-white/90 hover:text-white transition-colors">Case Study</Link>
                <Link href="/Calculator" className="text-white/90 hover:text-white transition-colors">Calculator</Link>
              </div>
            </div>

            {/* Important Links */}
            <div className="shrink-0 lg:pt-0 ">
              <h3 className="text-[18px] font-medium mb-3 text-white">Important Links</h3>
              <div className="flex flex-col space-y-4">
                <Link href="/Calculator" className="text-white/90 hover:text-white transition-colors">Calculator</Link>
                <Link href="/Interest-rate" className="text-white/90 hover:text-white transition-colors">Interest Rates</Link>
                <Link href="/Public-available-disclosure" className="text-white/90 hover:text-white transition-colors lg:w-[70%]">Public Available Disclosure</Link>
                <Link href="/Make-a-complaint" className="text-white/90 hover:text-white transition-colors">Make a Complaint</Link>
                <Link href="/Privacy-Policy" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>

            {/* Reach Us */}
            <div className="lg:pt-0 shrink-0  min-w-[250px] lg:mb-6  ">
              <h3 className="text-[18px] font-medium mb-3 text-white">Reach Us</h3>
              <div className="flex flex-col text-[14px] flex-wrap space-y-4">
                <div className="flex items-start gap-1">
                  <i className="ri-phone-line text-2lg"></i>
                  <a href="tel:0800507770" className="text-white/90 hover:text-white transition-colors">
                  {/* {setting?.phone_1 || "Loading..." } */}0800 507 770
                  </a>
                </div>
                <div className="flex items-start gap-1">
                  <i className="ri-mail-line text-2lg"></i>
                  <a href="mailto:harpreet@lifecyclefinancial.co.nz" className="text-white/90 hover:text-white transition-colors tracking-wider ">
                  {/* { setting?.email || "Loading..."} */}
                  harpreet@lifecyclefinancial.co.nz
                  </a>
                </div>
                <div className="flex items-start ">
                  <i className="ri-map-pin-line mr-2  text-2lg"></i>
                  <span>
                  {/* {setting?.address || "Loading..."} */}
                  3 Otaota way, Flat Bush, Auckland
                  </span>
                </div>
                <div className="w-full border-t  pt-4 border-dotted border-white/30   text-2xl flex gap-5  ">
                 <Link
  href="https://www.facebook.com/Lifecyclefinancial"
  target="_blank"
  rel="noopener noreferrer"
  className="size-10 rounded-full bg-white/30 flex items-center justify-center"
>
  <i className="ri-facebook-circle-line"></i>
</Link>

<Link
  href="https://www.instagram.com/lifecycle_financial_services?igsh=YXk5Z2NwaXFidm1k"
  target="_blank"
  rel="noopener noreferrer"
  className="size-10 rounded-full bg-white/30 flex items-center justify-center"
>
  <i className="ri-instagram-line"></i>
</Link>
                  {/* <Link href="#" className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                    <i className="ri-youtube-line"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-white font-medium tracking-widest text-center mt-4 lg:mt-[3rem]">
            Copyright © 2025 Lifecycle Financial. All Rights Reserved.
          </h1>
        </main>
      </footer>
    </>
  );
}
