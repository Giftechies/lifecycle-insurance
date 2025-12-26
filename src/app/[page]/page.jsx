import CategoryPage from "../Components/category"
// import {getSubMortgage} from "@/actions/subMortgage.actions"  
// import { getMortgageIndex } from "@/actions/mortgageIndex.actions"    
// import { getSubInsurance } from "@/actions/subInsurance.actions"
// import { getInsuranceIndex } from "@/actions/insuranceIndex.model"
import { getInsuranceIndex,getMortgageIndex,getSubInsurance,getSubMortgage } from "../../actions/subInsurance_Mortgage"

export const revalidate = 3600; // 1 hour



export default async function Page({params}) {
  const {page} = await params;
   
   
      let subpage
      let cardData
   
  if(page==='mortgage'){

    const [res,ressubpage] = await Promise.all([
      getSubMortgage(),
      getMortgageIndex()
    ])

    subpage = ressubpage.mortgageIndex
  cardData = res?.data?.map((type)=>({
     title:type?.slug,
    slug:type?.slug,
    paragraph_1:type?.shortContent,
    featured_image:type?.image,
    alt:type?.imageAlt,
    link:`/mortgage/${type.slug}`
  }))
}
if(page ==='insurance'){
  const [res,ressubpage] = await Promise.all([
      getSubInsurance(),
      getInsuranceIndex()
    ])

 cardData = res?.data?.map((type)=>({
   title:type?.heading,
    slug:type?.slug,
    paragraph_1:type?.shortContent,
    featured_image:type?.image,
    alt:type?.imageAlt,
    link:`/insurance/${type.slug}`

 }))
  subpage = ressubpage.data
}
  
   
  return (
   <CategoryPage
  title={page}
  cards={cardData}
  type={subpage}
/>
  );
}
