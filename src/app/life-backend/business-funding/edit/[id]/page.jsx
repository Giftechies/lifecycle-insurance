import { getBusinessFundingById } from "@/actions/businessFunding.actions";
import { getBusinessCategory } from "@/actions/businessCategory.actions";
import DashboardHeader from "@/lib/DashboardHeader";
import BusinessFundingForm from "../../components/BusinessFundingForm";

export default async function EditBusinessFundingPage({ params }) {
  const paramsId = await params.id;
  const { data } = await getBusinessFundingById(paramsId);
  const { data: categories } = await getBusinessCategory();

  return (
    <>
      <DashboardHeader
        text="Edit Business Funding"
        url="/life-backend/business-funding"
      />
      <BusinessFundingForm initialData={data} categories={categories} />
    </>
  );
}
