import DashboardHeader from "@/lib/DashboardHeader";
import CaseStudyForm from "../component/CaseStudyForm";

export default function AddCaseStudyPage() {
  return (
    <>
      <DashboardHeader text="Add Case Study" url="/life-backend/case-study" />
      <CaseStudyForm />
    </>
  );
}
