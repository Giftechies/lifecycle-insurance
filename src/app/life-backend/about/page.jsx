import DashboardHeader from "@/lib/DashboardHeader";
import { getAboutData } from "@/actions/about.actions";
import AboutForm from "./components/AboutForm";

export default async function AboutPage() {
  const { data } = await getAboutData();

  return (
    <>
      <DashboardHeader text="About Section" url="/life-backend" />
      <AboutForm initialData={data} />
    </>
  );
}
