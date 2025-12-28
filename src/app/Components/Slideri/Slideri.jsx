"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Slider({studies=[]}) {
  const menuTitle = "Case study";
  return (
    <div className="hidden lg:flex  lg:w-[30%] xl:w-[25%] flex-col">
      <div className="sticky top-0 w-full space-y-8">
        {/* Dynamic Menu */}
        {(
          <aside className="w-full bg-[var(--primg)] text-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-6 border-b border-white/30 pb-2">
              <Link href={`/case-study`}>{menuTitle}</Link>
            </h2>
            <ul className="space-y-4">
              {studies.map((item, idx) => (
             <Link
             href={`/case-study/${item?.slug}`}
             >
                <li
                  key={idx}
                
                  className="flex items-center gap-3 p-2 hover:bg-white hover:text-[var(--primg)] rounded-lg cursor-pointer transition-all duration-200"
                >
                  <div className=' h-20 w-30 bg-white rounded-xl overflow-hidden '>
                    <Image src={item?.image} alt="" width={250} height={250} className=' h-full w-full object-cover' />
                  </div>
                <div className='w-[90%]'>  <span className="text-sm font-medium">{item?.heading}</span></div>
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
