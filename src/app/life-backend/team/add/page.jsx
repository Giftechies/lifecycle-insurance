import DashboardHeader from "@/lib/DashboardHeader";
import TeamForm from "../components/TeamForm";

export default function TeamAddPage(){
    return (
        <>
            <DashboardHeader text="Add Team Member" url="/life-backend/team" />
            <TeamForm initialData={null} />
        </>
    )
}