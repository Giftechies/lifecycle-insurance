import Link from "next/link";
import SubInsuranceTable from "./components/SubInsuranceTable";
import { getSubInsurance } from "@/actions/subInsurance.actions";

export default async function SubInsurancePage() {
  const { data } = await getSubInsurance();
  return (
    <>
      <div className="dashboard-header">
        <h3>SubInsurance</h3>
        <Link href={"/aws-backend/subinsurance/add"}>Add SubInsurance</Link>
      </div>
      <SubInsuranceTable initialData={data} />
    </>
  );
}
