import { getCaseStudyById } from "@/actions/caseStudy.actions";
import CaseStudyForm from "../../component/CaseStudyForm";
import DashboardHeader from "@/lib/DashboardHeader";

export default async function EditCaseStudyPage({ params }) {
  const paramsId = await params;
  const { study } = await getCaseStudyById(paramsId.id);

  return (
    <>
      <DashboardHeader text="Edit Case Study" url="/life-backend/case-study" />
      <CaseStudyForm studies={study} />
    </>
  );
}
