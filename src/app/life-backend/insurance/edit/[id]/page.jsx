import { getInsuranceById } from "@/actions/insurance.actions";
import InsuranceForm from "../../components/InsuranceForm";
import DashboardHeader from "@/lib/DashboardHeader";

export default async function EditInsurance({ params }) {
    const paramsId = await params;
    const { data } = await getInsuranceById(paramsId.id);
    return (
        <>
            <DashboardHeader
                text="Edit Insurance"
                url="/aws-backend/insurance"
            />
            <InsuranceForm initialData={data} />
        </>
    );
}