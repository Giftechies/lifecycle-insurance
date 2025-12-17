import DashboardHeader from "@/lib/DashboardHeader";
import MortgageForm from "../components/MortgageForm";

export default function Page() {
  return (
    <>
      <DashboardHeader text="Add Mortgage" url="/aws-backend/mortgage" />
      <MortgageForm initialData={null} />
    </>
  );
}
