import DashboardHeader from "@/lib/DashboardHeader";
import InsuranceIndexForm from "./components/InsuranceIndexForm";
import { getInsuranceIndex } from "@/actions/insuranceIndex.model";

export default async function InsuranceIndexPage() {
    const {data} = await getInsuranceIndex();
    return (
        <>
            <DashboardHeader text={"Insurance Index"} url={`/life-backend/insurance`} />
            <InsuranceIndexForm initialData={data} />
        </>
    )
}