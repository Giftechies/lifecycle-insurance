import DashboardHeader from "@/lib/DashboardHeader";
import SubInsuranceForm from "../components/SubInsuranceForm";
import { getInsuranceNames } from "@/actions/insurance.actions";

export default async function AddInsurancePage() {
  const { data } = await getInsuranceNames();
  return (
    <>
      <DashboardHeader text="Add Insurance" url="/aws-backend/subinsurance" />
      <SubInsuranceForm initialData={null} categories={data} />
    </>
  );
}
