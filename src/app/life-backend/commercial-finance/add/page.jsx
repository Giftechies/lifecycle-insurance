import DashboardHeader from "@/lib/DashboardHeader";
import CommercialFinanceForm from "../components/CommercialFinanceForm";

export default function CommercialFinanceAdd() {
    return (
        <>
            <DashboardHeader text="Add Commercial Finance" url="/life-backend/commercial-finance" />
            <CommercialFinanceForm initialData={null} />
        </>
    )
}