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

export default function Slider() {
  const router = useRouter();


  const caseStudies = {
  "trauma-cover-impact": {
    slug: "trauma-cover-impact",
    title: "Trauma Cover Impact",
    summary:
      "A powerful reminder of how the right advice and timely action can make all the difference when life takes an unexpected turn.",
    content: [
    "A husband and wife approached us with the goal of purchasing their first home, but faced significant challenges: poor credit history, multiple debts, and only a 5% deposit. Their household income also made them ineligible for the First Home Loan scheme.",
      "We created a tailored 3–4 month action plan to help them restructure their debts, clear overdue bills, improve their credit score, and build better savings habits. With regular support and consistent effort, they were soon in a position to apply."
    ],
    result:" A major bank approved their $880,000 loan at a competitive 6.09% interest rate, with just a 5% deposit. They successfully purchased their dream home for $928,000—proving that with the right strategy and guidance, homeownership is achievable even in tough circumstances.",
    category: "Insurance",
    coverImage: "trauma.webp",
    date: "2025-07-24",
  },
    "making-home-ownership-possible": {
    slug: "making-home-ownership-possible",
    title: "Making Home Ownership Possible",
    summary:
      "A powerful reminder of how the right advice and timely action can make all the difference when life takes an unexpected turn.",
    content: [
    "We carried out a thorough review of a client’s existing insurance policy, which had originally been set up by another adviser. After identifying key gaps in their trauma cover, we recommended them additional protection and , a $100,000 Trauma policy to better safeguard their financial future.",
      "In a truly unfortunate turn of events, the client was diagnosed with cancer less than a month after the new cover was put in place. Thankfully, the Trauma policy had already been approved and in force, providing immediate financial support during a very challenging time."
    ],
    result:"The payout provided essential financial support during a highly stressful and emotional time, helping them to focus on recovery without the added burden of financial strain.",
    category: "Insurance",
    coverImage: "about-pic1.jpg",
    date: "2025-07-24",
  },
    "timely-advice-trauma-cover": {
    slug: "timely-advice-trauma-cover",
    title: "Timely Advice Trauma Cover",
    summary:
      "turning dream into reality with just 5% deposit despite having multiple debts, bad credit history and minimal deposit ",
    content: [
    "During an annual insurance review with a husband and wife in their early 40s, the husband expressed interest in removing his wife's trauma cover to save on premiums. Given their age group and the increasing health risks that can arise in the 40s, I strongly advised against cancelling the cover. After discussing the long-term implications and the importance of financial protection, the couple decided to retain the policy.",
      "Just six months later, the wife was unexpectedly diagnosed with a tumor. Fortunately, her trauma cover was still in place, and a claim was successfully lodged—resulting in a $110,000 payout. This financial support allowed the family to focus entirely on her treatment and recovery without the added stress of financial strain."
    ],
    result:"The good news is that she made a full recovery, and the family is now even more appreciative of the importance of maintaining comprehensive insurance cover. This situation reinforces how critical it is to have the right protections in place—especially when they’re needed most.",
    category: "Insurance",
    coverImage: "time.webp",
    date: "2025-07-24",
  },
  // Add more case studies here
};
  const menuTitle = "Case study";


  return (
    <div className="hidden lg:flex  lg:w-[30%] xl:w-[25%] flex-col">
      <div className="sticky top-0 w-full space-y-8">
        {/* Dynamic Menu */}
        {(
          <aside className="w-full bg-[var(--primg)] text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-6 border-b border-white/30 pb-2">
              <a href={`/${menuTitle}`}>{menuTitle}</a>
            </h2>
            <ul className="space-y-4">
              {Object.values(caseStudies).map((item, idx) => (
             <Link
             href={`/Case-study/${item.slug}`}
             >
                <li
                  key={idx}
                
                  className="flex items-center gap-3 p-2 hover:bg-white hover:text-[var(--primg)] rounded-lg cursor-pointer transition-all duration-200"
                >
                  <div className=' h-20 w-30 bg-white rounded-xl overflow-hidden '><img src={item.coverImage} alt="" className=' h-full w-full object-cover' /></div>
                <div className='w-[90%]'>  <span className="text-sm font-medium">{item.title}</span></div>
                </li>
             </Link>
              ))}
            </ul>
          </aside>
        )}

       
      </div>
    </div>
  );
}
