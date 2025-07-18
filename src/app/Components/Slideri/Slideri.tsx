"use client"

import {
  ShieldCheck,
  HeartPulse,
  Activity,
  Home,
  Wallet,
  Stethoscope,
  Users,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
 
 
 export default function Slideri(){
    const router = useRouter()

    const items = [
    { label: "Life Insurance", icon: <ShieldCheck size={20} />, li: ()=>router.push('/Insurance/life-insurance') },
    { label: "Trauma Recovery Cover", icon: <HeartPulse size={20} />, li: ()=>router.push('/Insurance/trauma-recovery-cover') },
    {
      label: "Total Permanent Disability Benefit Cover",
      icon: <Activity size={20} />,li: ()=>router.push('/Insurance/total-permanent-disability-benefit-cover')
    },
    { label: "Mortgage & Rent Protection Cover", icon: <Home size={20} />, li: ()=>router.push('/Insurance/mortgage-rent-protection-cover') },
    { label: "Income Protection Cover", icon: <Wallet size={20} />, li: ()=>router.push('/Insurance/income-protection-cover') },
    { label: "Medical Insurance", icon: <Stethoscope size={20} />, li: ()=>router.push('/Insurance/medical-insurance') },
    { label: "Group Insurance", icon: <Users size={20} />, li: ()=>router.push('/Insurance/group-insurance') },
  ];
    return(
         <div className=" hidden   md:w-[50%] lg:w-[25%] md:flex flex-col  px-4">
          <div className="sticky top-0  w-full ">
            <aside className="w-full bg-[var(--primg)] text-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-6 border-b pb-2">
                <a href="/Insurance">Insurance</a>
              </h2>
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li
                  onClick={item.li}
                    key={idx}
                    className="flex items-center gap-3 p-2 hover:bg-[var(--primg)] hover:text-white rounded-lg cursor-pointer transition-all duration-200"
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>


            {/* contact box */}
            <div className="w-[20em] bg-white rounded-[10px] p-4 text-black/60 mt-8 shadow-xl">
        <h1 className="text-[var(--primg)] text-[25px] font-semibold ">Need Expert Advice?</h1>
        <p className=" text-[14px]">Our mortgage advisers are here to help you find the best solution for your needs.</p>
        <a href="tel:0800 50 7770" className="flex items-start gap-1 mt-3  "><i className="ri-phone-line text-2xl   "></i><h2> 0800 50 7770</h2> </a>
        <a href="mailto:harpreet@lifecyclefinancial.co.nz" className="flex items-start gap-1 mt-1 text-[14px] "><i className="ri-mail-line -mt-1 text-2xl"></i><h2> harpreet@lifecyclefinancial.co.nz</h2> </a>
       
        <button className="text-white bg-[var(--primg)] w-full rounded-[5px] mt-5  p-2 text-[14px]">Call Now</button>
      </div>
          </div>
        </div>
    )
}