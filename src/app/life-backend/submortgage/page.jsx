import Link from "next/link";
import { getSubMortgage } from "@/actions/subMortgage.actions";
import SubmortgageTable from "./components/SubmortgageTable";

export default async function Page() {
  const { data } = await getSubMortgage();
  return (
    <>
      <div className="dashboard-header">
        <h3>Submortgages</h3>
        <Link href="/aws-backend/submortgage/add">Add Submortgage</Link>
      </div>
      <SubmortgageTable subMortgages={data} />
    </>
  );
}
