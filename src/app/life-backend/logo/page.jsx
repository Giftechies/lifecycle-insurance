import { getLogos } from "@/actions/logo.actions";
import LogoTable from "./components/logoTable";

export default async function Logo (){
    const res = await getLogos();
    const logos = res.success ? res.data : [];

    return (
        <LogoTable data={logos}/>
    )
}
