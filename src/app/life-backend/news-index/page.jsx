import DashboardHeader from "@/lib/DashboardHeader";
import NewsIndexForm from "./components/NewsIndexForm";
import { getNewsIndex } from "@/actions/newsIndex.actions";

export default async function NewsIndex(){
    const {data} = await getNewsIndex();
    return (
        <>
            <DashboardHeader text="News Index" url="/life-backend/news" />
            <NewsIndexForm initialData={data}/>
        </>
    )
}