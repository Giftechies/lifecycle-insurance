import DashboardHeader from "@/lib/DashboardHeader";
import TeamIndexForm from "./components/TeamIndexForm";
import { getTeamIndex } from "@/actions/teamIndex.actions";

export default async function TeamIndexPage(){
    const { data } = await getTeamIndex();
    return (
        <>
        <DashboardHeader text={"Team Index"} url={`/aws-backend/team`} />
        <TeamIndexForm initialData={data}/>
        </>
    )
}