import { getCommercialFinanceById } from "@/actions/commercialFinance.actions";
import CommercialFinanceForm from "../../components/CommercialFinanceForm";
import DashboardHeader from "@/lib/DashboardHeader";

export default async function CommercialFinanceEdit({ params }) {
    const paramsId = await params;
    const { finance } = await getCommercialFinanceById(paramsId.id);
    return (
        <>
            <DashboardHeader text="Edit Commercial Finance" url="/aws-backend/commercial-finance" />
            <CommercialFinanceForm initialData={finance} />
        </>
    )
}