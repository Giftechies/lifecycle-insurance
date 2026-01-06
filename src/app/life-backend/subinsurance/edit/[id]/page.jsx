import DashboardHeader from "@/lib/DashboardHeader";
import SubInsuranceForm from "../../components/SubInsuranceForm";
import { getSubInsuranceById } from "@/actions/subInsurance.actions";
import { getInsuranceNames } from "@/actions/insurance.actions";
import { getSubInsurance } from "../../../../../actions/subInsurance.actions";

export default async function EditSubInsurancePage({ params }) {
  const paramsId = await params;
  const [subInsurance, { data: categories },subInsuranceNumber] = await Promise.all([
    getSubInsuranceById(paramsId.id),
    getInsuranceNames(),
    getSubInsurance(),
  ]);
  return (
    <>
      <DashboardHeader
        text="Edit Sub Insurance"
        url="/life-backend/subinsurance"
      />
      <SubInsuranceForm
        initialData={subInsurance.data}
        categories={categories}
        orderLength={subInsuranceNumber?.data?.length}
      />
    </>
  );
}
