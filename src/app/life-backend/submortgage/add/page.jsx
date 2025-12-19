import DashboardHeader from "@/lib/DashboardHeader";
// import { getMortgageNames } from "@/actions/mortgage.actions";
import SubMortgageForm from "../components/SubMortgageForm";

export default async function SubMortgageAddPage(){
    // const {data} = await getMortgageNames();
    return (
        <>
            <DashboardHeader text="Add Submortgage" url="/life-backend/submortgage" />
            <SubMortgageForm initialData={null}  />
        </>
    )
}