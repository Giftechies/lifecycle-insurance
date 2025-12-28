import Link from 'next/link';
import Banner from '../Components/Banner/Banner';
import {getCaseStudyIndex} from "../../actions/caseStudyIndex.actions"
import {getCaseStudies} from '../../actions/caseStudy.actions'
import Image from 'next/image';



export default async function CaseStudy() {

  const caseData = await (await getCaseStudyIndex()).data
  const Studies = await (await getCaseStudies()).studies

  return (
  <>
  <Banner title='Case Study' image={caseData?.image} />
    <section className="w-full px-4 py-6 lg:px-[3rem] lg:py-10 mx-auto leading-7 tracking-wider">
      <div className="w-full lg:flex ">
        <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
          <i className="ri-record-circle-line"></i> Case Study
          <h1 className="leading-9 text-black text-[26px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
         {caseData?.heading}
          </h1>
        </div>

        <div className="w-full mt-2 lg:w-[40%] lg:mt-10 lg:text-[14px] text-justify">
          <h4>
          {caseData?.content}
          </h4>
        </div>
      </div>

      <div className="mx-auto grid gap-15 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-12">
        {Studies?.map((el, index) => (
          <div
            key={index}
            className="w-full p-[20px]  bg-white rounded-[16px] shadow-xl overflow-hidden relative transition-transform hover:scale-[0.95] duration-300 ease-in-out"
          >
            <Link href={`/case-study/${el.slug}`}>
              <div className="w-full h-[15em] rounded-[12px] overflow-hidden">
                <Image
                width={250}
                height={250}
                  src={el.image}
                  alt={el.heading}
                  className="w-full cursor-pointer h-full object-cover"
                />
              </div>
            </Link>

            <div className="relative mt-[20px]">
              <Link href={`/Case-study/${el.slug}`}>
                <h4 className="text-[20px] font-medium leading-6 text-gray-900">
                  {el.heading}
                </h4>
              </Link>

              <p className="text-gray-700 mt-2">{el.shortcontent}</p>

              <Link
                href={`/Case-study/${el.slug}`}
                className="text-[var(--primg)] font-semibold text-sm hover:underline flex items-center gap-1 mt-4"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section></>
  );
}
