import DashboardHeader from "@/lib/DashboardHeader";
import { getNewsStudyById } from "@/actions/newStudy.actions";
import NewsStudyForm from "../../components/NewsStudyForm";

export default async function EditNewsStudy({ params }) {
  const paramsId = await params;
  const { study } = await getNewsStudyById(paramsId.id);
  return (
    <>
      <DashboardHeader text="Edit News Study" url="/life-backend/news-study" />
      <NewsStudyForm studies={study} />
    </>
  );
}
