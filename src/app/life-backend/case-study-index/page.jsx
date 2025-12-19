import DashboardHeader from "@/lib/DashboardHeader";
import CaseStudyIndexForm from "./components/CaseStudyIndexForm";
import { getCaseStudyIndex } from "@/actions/caseStudyIndex.actions";

export default async function CaseStudyIndexPage(){
    const {data} = await getCaseStudyIndex();
    return (
        <>
            <DashboardHeader text={"Case Study Index"} url={`/life-backend/case-study`} />
            <CaseStudyIndexForm initialData={data}/>
        </>
    )
}