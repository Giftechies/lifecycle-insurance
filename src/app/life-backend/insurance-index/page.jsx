import DashboardHeader from "@/lib/DashboardHeader";
import InsuranceIndexForm from "./components/InsuranceIndexForm";
import { getInsuranceIndex } from "@/actions/insuranceIndex.model";

export default async function InsuranceIndexPage() {
    const {data} = await getInsuranceIndex();
    console.log("main data",data)
    return (
        <>
            <DashboardHeader text={"Insurance Index"} url={`/aws-backend/insurance`} />
            <InsuranceIndexForm initialData={data} />
        </>
    )
}