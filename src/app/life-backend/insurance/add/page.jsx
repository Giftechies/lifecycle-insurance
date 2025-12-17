import InsuranceForm from "../components/InsuranceForm";
import DashboardHeader from "@/lib/DashboardHeader";

export default function AddInsurancePage() {
  return (
    <>
      <DashboardHeader text="Add Insurance" url="/aws-backend/insurance" />
      <InsuranceForm initialData={null} />
    </>
  );
}
