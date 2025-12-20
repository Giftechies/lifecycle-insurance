

import Banner from "../../Components/Banner/Banner";
import { notFound } from "next/navigation";
import Slideri from "../../Components/Slideri/Slideri"
import {getCaseStudies} from "../../../actions/caseStudy.actions"
import DOMPurify from "isomorphic-dompurify";

// Simulated data (in real app, fetch from API or DB)
const caseStudies = {
  "trauma-cover-impact": {
    slug: "trauma-cover-impact",
    title: "Trauma Cover Impact",
    summary:
      "A powerful reminder of how the right advice and timely action can make all the difference when life takes an unexpected turn.",
    content: [
      "We carried out a thorough review of a client’s existing insurance policy, which had originally been set up by another adviser. After identifying key gaps in their trauma cover, we recommended them additional protection and , a $100,000 Trauma policy to better safeguard their financial future.",
      "In a truly unfortunate turn of events, the client was diagnosed with cancer less than a month after the new cover was put in place. Thankfully, the Trauma policy had already been approved and in force, providing immediate financial support during a very challenging time."
    ],
    result: " The payout provided essential financial support during a highly stressful and emotional time, helping them to focus on recovery without the added burden of financial strain.",
    category: "Insurance",
    coverImage: "/images/case-studies/trauma-cover.jpg",
    date: "2025-07-24",
  },
  "making-home-ownership-possible": {
    slug: "making-home-ownership-possible",
    title: "MAKING HOME OWNERSHIP POSSIBLE",
    summary:
      "turning dream into reality with just 5% deposit despite having multiple debts, bad credit history and minimal deposit ",
    content: [
      "A husband and wife approached us with the goal of purchasing their first home, but faced significant challenges: poor credit history, multiple debts, and only a 5% deposit. Their household income also made them ineligible for the First Home Loan scheme.",
      "We created a tailored 3–4 month action plan to help them restructure their debts, clear overdue bills, improve their credit score, and build better savings habits. With regular support and consistent effort, they were soon in a position to apply.."
    ],
    result: " A major bank approved their $880,000 loan at a competitive 6.09% interest rate, with just a 5% deposit. They successfully purchased their dream home for $928,000—proving that with the right strategy and guidance, homeownership is achievable even in tough circumstances.",
    category: "Insurance",
    coverImage: "/images/case-studies/trauma-cover.jpg",
    date: "2025-07-24",
  },
  "timely-advice-trauma-cover": {
    slug: "timely-advice-trauma-cover",
    title: "Timely Advice Trauma Cover",
    summary:
      "turning dream into reality with just 5% deposit despite having multiple debts, bad credit history and minimal deposit ",
    content: [
      "During an annual insurance review with a husband and wife in their early 40s, the husband expressed interest in removing his wife's trauma cover to save on premiums. Given their age group and the increasing health risks that can arise in the 40s, I strongly advised against cancelling the cover. After discussing the long-term implications and the importance of financial protection, the couple decided to retain the policy.",
      "Just six months later, the wife was unexpectedly diagnosed with a tumor. Fortunately, her trauma cover was still in place, and a claim was successfully lodged—resulting in a $110,000 payout. This financial support allowed the family to focus entirely on her treatment and recovery without the added stress of financial strain."
    ],
    result: "The good news is that she made a full recovery, and the family is now even more appreciative of the importance of maintaining comprehensive insurance cover. This situation reinforces how critical it is to have the right protections in place—especially when they’re needed most.",
    category: "Insurance",
    coverImage: "/images/case-studies/trauma-cover.jpg",
    date: "2025-07-24",
  },
  // Add more case studies here
};

export default async function CaseStudyDetail({ params }) {
  // const study = caseStudies[params.slug];
  const studies = await (await getCaseStudies ()).studies
  const  data = studies?.filter((item)=>item.slug===params.slug)
  const study = data[0]
  const safeHTML = DOMPurify.sanitize(study.description)
  console.log(data,'study');

  

  if (!studies) return notFound();

  return (
    <>
      <Banner title={study.heading} />
      <section className=" case py-10 px-4  lg:p-[3rem]  space-y-6">
        <main className=" flex gap-5  justify-between">
          <div className=" w-[70%] editor-container " dangerouslySetInnerHTML={{__html:safeHTML}} />
         
        

          <Slideri studies={studies} />
        </main>

      </section>
    </>
  );
}
