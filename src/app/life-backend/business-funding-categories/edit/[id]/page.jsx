import DashboardHeader from "@/lib/DashboardHeader";
import BusinessCategoryForm from "../../components/BusinessCategoryForm";
import { getBusinessCategoryById } from "@/actions/businessCategory.actions";

export default async function EditInsurance({ params }) {
  const paramsId = await params;
  const { data } = await getBusinessCategoryById(paramsId.id);
  return (
    <>
      {/*  */}
      <DashboardHeader text="Edit Insurance" url="/life-backend/insurance" />
      <BusinessCategoryForm initialData={data} />
    </>
  );
}
