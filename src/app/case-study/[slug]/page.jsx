

import Banner from "../../Components/Banner/Banner";
import { notFound } from "next/navigation";
import Slideri from "../../Components/Slideri/Slideri"
import { getCaseStudies } from "../../../actions/caseStudy.actions"
import sanitizeHtml from "sanitize-html";


export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;
  const studies = await (await getCaseStudies()).studies
  const data = studies?.filter((item) => item?.slug === slug)
  const study = data[0]
  // const safeHTML = DOMPurify.sanitize(study?.description)
const safeHTML = sanitizeHtml(study?.description || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*":['class','style','id'],
    },
  });
  if (!studies) return notFound();

  return (
    <>
      <Banner title={study.heading} />
      <section className=" case py-10 px-4  lg:p-[3rem]  space-y-6">
        <main className=" flex gap-5  justify-between">
          <div className=" w-[70%] editor-container " dangerouslySetInnerHTML={{ __html: safeHTML }} />
          <Slideri studies={studies} />
        </main>

      </section>
    </>
  );
}
