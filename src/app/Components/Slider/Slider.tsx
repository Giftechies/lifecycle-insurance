"use client"

import { Home, Repeat, LineChart, Briefcase, Hammer, Building } from "lucide-react";
import { useRouter } from "next/navigation";

 
 
 export default function Slider(){
    const router = useRouter()

 const items = [
    { label: "Home Loan", icon: <Home size={20} />, li: ()=>router.push('/Mortgage/home-loans')  },
    { label: "Refinance", icon: <Repeat size={20} />, li: ()=>router.push('/Mortgage/refinance') },
    { label: "Investment Loan", icon: <LineChart size={20} />, li: ()=>router.push('/Mortgage/investment-loan')   },
    { label: "Business Loan", icon: <Briefcase size={20} /> , li: ()=>router.push('/Mortgage/business-loan')},
    { label: "Construction Loan", icon: <Hammer size={20} />, li: ()=>router.push('/Mortgage/construction-loan') },
    { label: "Commercial Loan", icon: <Building size={20} /> , li: ()=>router.push('/Mortgage/commercial-loan')},
  ];

    return(
         <div className="hidden  md:w-[50%] lg:w-[25%] md:flex flex-col  py-5 px-4 ">
          <div className="sticky top-0 w-full ">
            <aside className="w-full bg-[var(--primg)] text-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-lg font-semibold mb-6 border-b pb-2">
                Insurance
              </h2>
              <ul className="space-y-4">
                {items.map((item, idx) => (
                  <li 
                    key={idx}
                    onClick={item.li}
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
        <div className="flex items-start gap-1 mt-3  "><i className="ri-phone-line text-2lg -mt-1  "></i><h2> 0800 50 7770</h2> </div>
        <div className="flex items-start gap-1 mt-1 text-[14px] "><i className="ri-mail-line -mt-1 text-2lg"></i><h2> harpreet@lifecyclefinancial.co.nz</h2> </div>
       
        <button className="text-white bg-[var(--primg)] w-full rounded-[5px] mt-5  p-2 text-[14px]">Call Now</button>
      </div>
          </div>
        </div>
    )
}