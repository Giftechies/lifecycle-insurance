import DashboardHeader from "@/lib/DashboardHeader";
import MortgageForm from "../components/MortgageForm";

export default function Page() {
  return (
    <>
      <DashboardHeader text="Add Mortgage" url="/life-backend/mortgage" />
      <MortgageForm initialData={null} />
    </>
  );
}
