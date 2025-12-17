import { getNewsStudies } from "@/actions/newStudy.actions";
import Link from "next/link";
import NewsTable from "./components/NewsTable";

export default async function News() {
  const { studies } = await getNewsStudies();
  return (
    <>
      <div className="dashboard-header">
        <h3>News Studies</h3>
        <Link href="/aws-backend/news-study/add">Add News Study</Link>
      </div>
      <NewsTable studies={studies} />
    </>
  );
}
