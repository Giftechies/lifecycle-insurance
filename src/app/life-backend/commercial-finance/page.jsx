import Link from "next/link";
import CommercialFinanceTable from "./components/CommercialFinanceTable";
import { getCommercialFinances } from "@/actions/commercialFinance.actions";

export default async function CommercialFinance() {
    const { data } = await getCommercialFinances();
    return (
        <>
            <div className="dashboard-header">
                <h3>Commercial Finance</h3>
                <Link href="/aws-backend/commercial-finance/add">Add Commercial Finance</Link>
            </div>
            <CommercialFinanceTable initialData={data} />
        </>
    );
}