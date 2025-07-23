"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";
import { getCategoryPages } from "../lib/api";

export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const category = params?.category;

  const [categoryData, setCategoryData] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setLoading(true);
  //       setError(null);

  //       const allPages = await getCategoryPages(category);

  //       if (allPages) {
  //         setCategoryData(allPages);
  //         setCards(allPages.children || []);
  //         console.log("all>>>>>>", allPages);
  //         console.log("child>>>>>>", allPages.children);
  //       } else {
  //         setCategoryData(null);
  //         setCards([]);
  //       }
  //     } catch (err) {
  //       setError("Failed to load data. Please try again later.");
  //       console.error(" Error fetching category:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   if (category) {
  //     fetchData();
  //   }
  // }, [category]);



  return (
    <main className="">
      <Banner title={categoryData?.title || "Category"} />

      <section className="w-full px-4 py-6 lg:px-[3rem] lg:py-10 mx-auto leading-7 tracking-wider">
        {categoryData && (
          <div className="w-full lg:flex gap-10">
            <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
              <i className="ri-record-circle-line"></i> {categoryData.title}
              <h1 className="leading-9 text-black text-[26px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
                {categoryData.subtitle_1 || "Explore our tailored solutions for your needs."}
              </h1>
            </div>

            <div className="w-full mt-2 lg:w-[40%] lg:mt-10 lg:text-[14px] text-justify">
              <p>
                {categoryData.paragraph_1 ||
                  "Lifecycle Financial offers trusted mortgage and insurance advice to help you make the best decisions."}
              </p>
            </div>
          </div>
        )}

        {loading && (
          <p className="text-center w-full py-10 text-gray-500">Loading category...</p>
        )}

        {error && (
          <p className="text-center w-full py-10 text-red-500">{error}</p>
        )}

        {!loading && !error && cards.length === 0 && (
          <p className="text-center w-full py-10 text-gray-500">
            No subcategories found for this page.
          </p>
        )}

        <div className="w-full lg:w-[100%] grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-15">
          {cards.map((el, index) => (
            <div
              key={el.id}
        
              className="w-full p-[20px] bg-white rounded-[16px] shadow-xl overflow-hidden relative transition-transform hover:scale-[0.95] duration-300 ease-in-out "
            >
              <div className="w-full h-[15em] rounded-[12px] overflow-hidden">
                <img
                  onClick={() => router.push(`/${category}/${el.slug}`)}
                  src={el.featured_image || "8.jpg"}
                  alt={el.title}
                  className="w-full cursor-pointer h-full object-cover"
                />
              </div>

              <div className="relative mt-[20px]">
                <Link
                  href={`/${category}/${el.slug}`}
                  className="text-[20px] font-medium leading-6  text-gray-900"
                >
                <h2 >{el.title}</h2>
                </Link>
                <p className="text-gray-700  mt-2">
                  {el.paragraph_1}...
                </p>

                <Link
                  href={`/${category}/${el.slug}`}
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
