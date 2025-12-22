import Link from "next/link";
import BusinessFundingTable from "./components/BusinessFundingTable";
import { getBusinessFunding } from "@/actions/businessFunding.actions";

export default async function BusinessPage() {
  // const { data } = await getBusinessFunding();
  return (
    <>
      {/* <div className="dashboard-header">
        <h3>Business Funding</h3>
        <Link href="/life-backend/business-funding/add">
          Add Business Funding
        </Link>
      </div>
      <BusinessFundingTable initialData={data} /> */}
    </>
  );
}
