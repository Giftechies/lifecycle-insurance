import Banner from "../../Components/Banner/Banner";
import { notFound } from "next/navigation";
import Slideri from "../../Components/Slideri/Slideri";
import {
  getCaseStudies,
  getCaseStudyBySlug,
} from "../../../actions/caseStudy.actions";
import sanitizeHtml from "sanitize-html";
export const revalidate = 86400; 
export async function generateStaticParams() {
const {studies} = await getCaseStudies();
return studies?.map((item)=>({
  slug:item?.slug
}))
  
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  const study = await (await getCaseStudyBySlug(slug)).study;
  const allStudies = await (await getCaseStudies()).studies;
  const safeHTML = sanitizeHtml(study?.description || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "iframe"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "style", "id"],
    },
  });
  if (!study) return notFound();

  return (
    <>
      <Banner title={study?.heading} />
      <section className=" case py-10 px-4  lg:p-[3rem]  space-y-6">
        <main className=" flex gap-5  justify-between">
          <div
            className=" w-[70%] editor-container "
            dangerouslySetInnerHTML={{ __html: safeHTML }}
          />
          <Slideri studies={allStudies} />
        </main>
      </section>
    </>
  );
}
