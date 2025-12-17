import DashboardHeader from "@/lib/DashboardHeader";
import NewsIndexForm from "./components/page";
import { getNewsIndex } from "@/actions/newsIndex.actions";

export default async function NewsIndex(){
    const {data} = await getNewsIndex();
    return (
        <>
            <DashboardHeader text="News Index" url="/aws-backend/news" />
            <NewsIndexForm initialData={data}/>
        </>
    )
}