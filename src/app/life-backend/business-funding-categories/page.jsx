import Link from "next/link";
import BussinessFundingCategoriesTable from "./components/BusinessCategoryTable";
import { getBusinessCategory } from "@/actions/businessCategory.actions";

export default async function BussinessFundingCategories() {
  const { data } = await getBusinessCategory();
  return (
    <>
      <div className="dashboard-header">
        <h3>Business Funding</h3>
        <Link href="/life-backend/business-funding-categories/add">
          Add Business Funding
        </Link>
      </div>
      <BussinessFundingCategoriesTable initialData={data} />
    </>
  );
}
