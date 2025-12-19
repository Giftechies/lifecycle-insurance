import { getInsurance } from "@/actions/insurance.actions";
import InsuranceTable from "./components/InsuranceTable";
import Link from "next/link";

export default async function InsurancePage() {
  const { data } = await getInsurance();
  return (
    <>
      <div className="dashboard-header">
        <h3>Insurance</h3>
        <Link href="/life-backend/insurance/add">Add Insurance</Link>
      </div>
      <InsuranceTable initialData={data} />
    </>
  );
}
