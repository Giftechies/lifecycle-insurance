import DashboardHeader from "@/lib/DashboardHeader";
import CommercialIndexForm from "./components/CommercialIndexForm";
import { getCommercialIndex } from "@/actions/commercialIndex.actions";

export default async function CommercialFinanceIndexPage() {
    // const {data} = await getCommercialIndex();
    return (
        <>
            {/* <DashboardHeader text={"Commercial Finance"} url={`/life-backend/commercial-finance`}/>
            <CommercialIndexForm initialData={data}/> */}
        </>
    )
}