"use client";
import Link from 'next/link';

import {
  Home,
  Repeat,
  LineChart,
  Briefcase,
  Hammer,
  Building,
  ShieldCheck,
  HeartPulse,
  Activity,
  Wallet,
  Stethoscope,
  Users,
 
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Slider({menuItem=[],title='mortgage'}) {

  return (
    <div className="hidden lg:flex  lg:w-[40%] xl:w-[30%] flex-col">
      <div className="sticky top-0 w-full space-y-8">
        {/* Dynamic Menu */}
          <aside className="w-full bg-[var(--primg)] text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-6 border-b border-white/30 pb-2 capitalize ">
              <a href={`/${title}`}>{title}</a>
            </h2>
            <ul className="space-y-4">
              {menuItem?.map((item, idx) => (
                <li
                  key={idx}
                
                >
                <Link href={`/${title}/${item?.slug}`}   className="flex items-center gap-3 p-2 hover:bg-white hover:text-[var(--primg)] rounded-lg cursor-pointer transition-all duration-200" >
                <Building size={20} />
                  <span className="text-sm font-medium">{item?.heading}</span></Link>
                </li>
              ))}
            </ul>
          </aside>
      

        {/* Contact Box */}
        <div className="w-full bg-white rounded-xl p-4 text-black/70 shadow-xl shrink">
          <h1 className="text-[var(--primg)] text-xl font-semibold mb-2">Need Expert Advice?</h1>
          <p className="text-sm mb-3">
            Our mortgage advisers are here to help you find the best solution for your needs.
          </p>

          <a href="tel:0800507770" className="flex items-center gap-2 mt-2 text-sm">
            <i className="ri-phone-line text-xl text-[var(--primg)]" />
            <span className="font-medium">0800 50 7770</span>
          </a>

          <a
            href="mailto:harpreet@lifecyclefinancial.co.nz"
            className="flex items-start gap-2 mt-2 text-sm break-all"
          >
            <i className="ri-mail-line text-xl -mt-1 text-[var(--primg)]" />
            <span className=" text-[13px] font-medium">harpreet@lifecyclefinancial.co.nz</span>
          </a>
 <Link href={'/Enquire'} passHref >
          <button className="bg-[var(--primg)] text-white w-full rounded-md mt-5 py-2 text-sm hover:opacity-90 transition">
           Enquire Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
