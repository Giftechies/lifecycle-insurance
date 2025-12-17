import { getMortgageIndex } from "@/actions/mortgageIndex.actions";
import MortgageIndexForm from "./components/MortgageIndexForm";

export default async function MortgageIndexPage(){
    const {mortgageIndex: data} = await getMortgageIndex()    
    return <>
        <div className="dashboard-header"><h3>Mortgage Index</h3></div>
        <MortgageIndexForm initialData={data} />
    </>
}