import DashboardHeader from "@/lib/DashboardHeader";
import SubMortgageForm from "../../components/SubMortgageForm";
import { getMortgageNames } from "@/actions/mortgage.actions";
import { getSubMortgageById } from "@/actions/subMortgage.actions";

export default async function EditSubMortgage({ params }) {
    const paramsId = await params;
    const [{ data }, categories] = await Promise.all([
        getSubMortgageById(paramsId.id),
        getMortgageNames(),
    ]);
    return (
        <>
            <DashboardHeader
                text="Edit Submortgage"
                url="/aws-backend/submortgage"
            />
            <SubMortgageForm initialData={data} categories={categories.data} />
        </>
    );
}