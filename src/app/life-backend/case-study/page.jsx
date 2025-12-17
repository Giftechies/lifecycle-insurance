import Link from "next/link";
import CaseStudyTable from "./component/CaseStudyTable";
import { getCaseStudies } from "@/actions/caseStudy.actions";

export default async function CaseStudyPage() {
  const { studies } = await getCaseStudies();
  return (
    <>
      <div className="dashboard-header">
        <h3>Case Studies</h3>
        <Link href="/aws-backend/case-study/add">Add Case Study</Link>
      </div>
      <CaseStudyTable studies={studies} />
    </>
  );
}
