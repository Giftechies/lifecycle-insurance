import DashboardHeader from "@/lib/DashboardHeader";
import SubMortgageForm from "../../components/SubMortgageForm";
import { getMortgageNames } from "@/actions/mortgage.actions";
import { getSubMortgageById } from "@/actions/subMortgage.actions";

export default async function EditSubMortgage({ params }) {
    const paramsId = await params;
    const [{ data,total }, categories] = await Promise.all([
        getSubMortgageById(paramsId.id),
        getMortgageNames(),
    ]);
    console.log(total,'ddfd');
    
    return (
        <>
            <DashboardHeader
                text="Edit Submortgage"
                url="/life-backend/submortgage"
            />
            <SubMortgageForm initialData={data} categories={categories.data} OrderLenght={total} />
        </>
    );
}