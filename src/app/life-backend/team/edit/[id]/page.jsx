import { getTeamMemberById } from "@/actions/team.actions";
import DashboardHeader from "@/lib/DashboardHeader";
import TeamForm from "../../components/TeamForm";

export default async function EditTeamPage({ params }){
    const paramsId = await params;
    const { data } = await getTeamMemberById(paramsId.id);

    return (
        <>
            <DashboardHeader text="Edit Team Member" url="/aws-backend/team" />
            <TeamForm initialData={data} />
        </>
    )
}