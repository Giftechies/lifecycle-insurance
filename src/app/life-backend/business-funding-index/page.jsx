import DashboardHeader from "@/lib/DashboardHeader";
import BusinessFundingIndexForm from "./components/BusinessFundingIndexForm";
import { getBusinessFundingIndex } from "@/actions/businessFundingIndex.actions";

export default async function BusinessFundingIndexPage() {
    const { data } = await getBusinessFundingIndex();
    return (
        <>
            <DashboardHeader text={"Business Funding Index"} url={`/aws-backend/business-funding`} />
            <BusinessFundingIndexForm initialData={data} />
        </>
    )
}