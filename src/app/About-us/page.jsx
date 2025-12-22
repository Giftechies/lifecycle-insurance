
import Banner from "../Components/Banner/Banner";
import Link from "next/link";
import Section1 from "@/components/About/Section_1"
import Section2 from "@/components/About/Section_2"
import Section3 from "@/components/About/Section_3"
import {getTeamIndex} from '@/actions/teamIndex.actions'
import {getTeamMembers} from "@/actions/team.actions"

export default async function about() {
  const res = await getTeamIndex();
  const team = await getTeamMembers();
  
  return (
    <>
    
       <Banner title="About Us" image={pageData.image} />
       <Section1 data={res.data} />
       <Section2 team={team.data} />
       <Section3/>
    </>
  );
}
