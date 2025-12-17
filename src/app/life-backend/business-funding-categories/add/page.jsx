import DashboardHeader from "@/lib/DashboardHeader";
import BusinessCategoryForm from "../components/BusinessCategoryForm";

export default function AddInsurancePage() {
  return (
    <>
      <DashboardHeader
        text="Add Business Category"
        url="/aws-backend/business-funding-categories"
      />
      <BusinessCategoryForm initialData={null} />
    </>
  );
}
