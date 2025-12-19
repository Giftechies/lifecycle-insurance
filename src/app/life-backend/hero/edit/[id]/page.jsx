import DashboardHeader from "@/lib/DashboardHeader";
import HeroForm from "../../components/HeroForm";
import { getHeroBannerById } from "@/actions/heroSection.actions";
import { notFound } from "next/navigation";

export default async function EditHeroPage({ params }) {
  const paramsId = await params;
  const { data } = await getHeroBannerById(paramsId.id);

  if (!data) {
    notFound();
  }

  return (
    <>
      <DashboardHeader text="Edit Hero Banner" url="/life-backend/hero" />
      <HeroForm initialData={data} />
    </>
  );
}
