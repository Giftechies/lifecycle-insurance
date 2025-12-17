import DashboardHeader from "@/lib/DashboardHeader";
import NewsStudyForm from "../components/NewsStudyForm";

export default function AddNewsStudy() {
  return (
    <>
      <DashboardHeader text="Add News Study" url="/aws-backend/news-study" />
      <NewsStudyForm studies={null} />
    </>
  );
}
