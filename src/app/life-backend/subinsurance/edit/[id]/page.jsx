import DashboardHeader from "@/lib/DashboardHeader";
import SubInsuranceForm from "../../components/SubInsuranceForm";
import { getSubInsuranceById } from "@/actions/subInsurance.actions";
import { getInsuranceNames } from "@/actions/insurance.actions";

export default async function EditSubInsurancePage({ params }) {
  const paramsId = await params;
  const [subInsurance, { data: categories }] = await Promise.all([
    getSubInsuranceById(paramsId.id),
    getInsuranceNames(),
  ]);
  return (
    <>
      <DashboardHeader
        text="Edit Sub Insurance"
        url="/aws-backend/subinsurance"
      />
      <SubInsuranceForm
        initialData={subInsurance.data}
        categories={categories}
      />
    </>
  );
}
