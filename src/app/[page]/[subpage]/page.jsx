// components/Sidebar.js

import Banner from "@/app/Components/Banner/Banner";
import Slider from "@/app/Components/Slider/Slider";
import {  getSubMortgageBySlug,getSubMortgage  } from "../../../actions/subMortgage.actions"
import {  getSubInsuranceBySlug,getSubInsurance  } from "../../../actions/subInsurance.actions"
import sanitizeHtml from 'sanitize-html';


export default async function Subpage({params}){
  const {subpage,page} = await params
  let Allpage
  let content
  if(params?.page?.startsWith('mortgage')){
  const data = (await getSubMortgageBySlug(subpage)).data
 Allpage = await (await getSubMortgage()).data
   content = data[0]
  console.log(content,'f');
  }else{
    const data = (await getSubInsuranceBySlug(subpage)).data
   Allpage = await (await getSubInsurance()).data
   content = data[0]
  console.log(content,'f');
  }
  const safeHTML = sanitizeHtml(content?.content || "", {
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
       
         <div dangerouslySetInnerHTML={{__html:safeHTML}} className="editor-container" />
        </div>

        {/* Centered Sidebar constrained inside main, below Banner and above footer */}
        <Slider menuItem={Allpage} title={page}  />
      </main>
    </>
  );
};





