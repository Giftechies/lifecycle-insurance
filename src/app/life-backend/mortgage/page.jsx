import Link from "next/link";

import MortgageTable from "./components/MortgageTable";
import { getMortage } from "@/actions/mortgage.actions";

export default async function Page() {
  const { data } = await getMortage();
  return (
    <>
      <div className="dashboard-header">
        <h3>Mortgage</h3>
        <Link href="/aws-backend/mortgage/add">Add Mortgage</Link>
      </div>
      <MortgageTable mortgages={data} />
    </>
  );
}
