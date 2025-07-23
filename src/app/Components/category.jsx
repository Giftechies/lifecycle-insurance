"use client";

import { useRouter } from "next/navigation";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";

export default function CategoryPage({ title, subtitle, cards, description }) {
  const router = useRouter();

  return (
    <main>
      <Banner title={title || "Category"} />

      <section className="w-full px-4 py-6 lg:px-[3rem] lg:py-10 mx-auto leading-7 tracking-wider">
        <div className="w-full lg:flex gap-10">
          <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> {title}
            <h1 className="leading-9 text-black text-[26px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
              {subtitle}
            </h1>
          </div>

          <div className="w-full mt-2 lg:w-[40%] lg:mt-10 lg:text-[14px] text-justify">
            <h4>{description}</h4>
          </div>
        </div>

        <div className="w-full  lg:w-[100%] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mt-12 gap-15">
          {cards?.map((el, index) => (
            <div
              key={index}
              className="w-full p-[20px] bg-white rounded-[16px] shadow-xl overflow-hidden relative transition-transform hover:scale-[0.95] duration-300 ease-in-out"
            >
              {/* Image with link */}
              <Link href={el.link}>
                <div className="w-full h-[15em] rounded-[12px] overflow-hidden">
                  <img
                    src={el.featured_image}
                    alt={el.title}
                    className="w-full cursor-pointer h-full object-cover "
                  />
                </div>
              </Link>

              {/* Title and Read More with link */}
              <div className="relative mt-[20px]">
                <Link href={el.link}>
                  <h4 className="text-[20px] font-medium leading-6 text-gray-900 hover:underline">
                    {el.title}
                  </h4>
                </Link>

                <p className="text-gray-700 mt-2  ">{el.paragraph_1}</p>

                <Link
                  href={el.link}
                  className="text-[var(--primg)] font-semibold text-sm hover:underline flex items-center gap-1 mt-4"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
