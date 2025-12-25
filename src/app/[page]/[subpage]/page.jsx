// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";
import { getSubMortgageBySlug, getSubMortgage } from "../../../actions/subMortgage.actions"
import { getSubInsuranceBySlug, getSubInsurance } from "../../../actions/subInsurance.actions"
import sanitizeHtml from 'sanitize-html';
import Image from "next/image";

export const revalidate = 3600; // 1 hour

export default async function Subpage({ params }) {
  const { subpage, page } = await params
  let Allpage
  let content

  if (page?.startsWith('mortgage')) {

    const [resdata, resAllpage] = await Promise.all([
      getSubMortgageBySlug(subpage),
      getSubMortgage()

    ])
    const data = resdata?.data
    Allpage = resAllpage?.data
    content = data[0]
  }
  if (page?.startsWith('insurance')) {

    const [resdata, resAllpage] = await Promise.all([
      getSubInsuranceBySlug(subpage),
      getSubInsurance()
    ])
    const data = resdata?.data
    Allpage = resAllpage?.data
    content = data[0]
  }
  const safeHTML = sanitizeHtml(content?.content || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['class', 'style', 'id'],
    },
  });
  const safeHTML1 = sanitizeHtml(content?.content1 || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['class', 'style', 'id'],
    },
  });

  return (
    <>
      <Banner title={content?.heading} image={content?.image} />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10 relative   max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv   tracking-wider  lg:w-[85%] py-5">

          <h1 className=" text-[var(--primg)] capitalize  ">
            <i className="ri-record-circle-line mr-1.5 "></i>{content?.heading}
          </h1>

          <div className="  md:flex gap-6 items-stretch " >
            <div dangerouslySetInnerHTML={{ __html: safeHTML }} className="editor-container" />
         <div className="  w-full md:w-[40%]  md:shrink-0 flex " >
           <Image src={content?.image} alt={content?.imageAlt} width={600} height={400} className="w-full h-full  object-cover rounded-lg  " />
         </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: safeHTML1 }} className="editor-container" />
        </div>

        {/* Centered Sidebar constrained inside main, below Banner and above footer */}
        <Slider menuItem={Allpage} title={page} />
      </main>
    </>
  );
};





