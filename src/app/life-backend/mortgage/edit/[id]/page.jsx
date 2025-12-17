import { getMortgageById } from "@/actions/mortgage.actions";
import DashboardHeader from "@/lib/DashboardHeader";
import MortgageForm from "../../components/MortgageForm";

export default async function EditMortage({ params }) {
  const paramsId = await params;
  const { data } = await getMortgageById(paramsId.id);
  return (
    <>
      <DashboardHeader text="Edit Mortgage" url="/aws-backend/mortgage" />
      <MortgageForm initialData={data} />
    </>
  );
}
