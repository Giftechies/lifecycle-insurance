import DashboardHeader from "@/lib/DashboardHeader";
import HeroForm from "../components/HeroForm";

export default function AddHeroPage() {
  return (
    <>
      <DashboardHeader text="Add Hero Banner" url="/aws-backend/hero" />
      <HeroForm initialData={null} />
    </>
  );
}
