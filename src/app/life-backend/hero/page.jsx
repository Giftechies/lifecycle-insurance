import DashboardHeader from "@/lib/DashboardHeader";
import { getAllHeroBanners } from "@/actions/heroSection.actions";
import DraggableHeroTable from "./components/DraggableHeroTable";

export default async function HeroPage() {
  // const { data } = await getAllHeroBanners();

  return (
    <>
      {/* <DashboardHeader text="Hero Banners" url="/life-backend" /> */}
      {/* <DraggableHeroTable initialData={data || []} /> */}
    </>
  );
}
