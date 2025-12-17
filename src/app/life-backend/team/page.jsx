import { getTeamMembers } from "@/actions/team.actions";
import Link from "next/link";
import TeamTable from "./components/TeamTable";

export default async function TeamPage(){
    const { data } = await getTeamMembers();
    return (
        <>
            <div className="dashboard-header">
                <h3>Team</h3>
                <Link href="/aws-backend/team/add">Add Team Member</Link>
            </div>
            <TeamTable initialData={data} />
        </>
    )
}
