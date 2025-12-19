import DashboardHeader from "@/lib/DashboardHeader";
import BusinessFundingForm from "../components/BusinessFundingForm";
import { getBusinessCategory } from "@/actions/businessCategory.actions";

export default async function AddBusinessFundingPage() {
  const { data: categories } = await getBusinessCategory();

  return (
    <>
      <DashboardHeader
        text="Add Business Funding"
        url="/life-backend/business-funding"
      />
      <BusinessFundingForm categories={categories} />
    </>
  );
}
