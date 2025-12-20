import CategoryPage from "../Components/category"
import {getSubMortgage} from "@/actions/subMortgage.actions"  
import { getMortgageIndex } from "@/actions/mortgageIndex.actions"    
import { getSubInsurance } from "@/actions/subInsurance.actions"
import { getInsuranceIndex } from "@/actions/insuranceIndex.model"



export default async function Page({params}) {
   
   
      let subpage
      let cardData
   
  if(params.page==='mortgage'){
   const res = await getSubMortgage();
    subpage = (await getMortgageIndex()).mortgageIndex
  cardData = res?.data?.map((type)=>({
     title:type?.slug,
    slug:type?.slug,
    paragraph_1:type?.shortContent,
    featured_image:type?.image,
    alt:type?.imageAlt,
    link:`/mortgage/${type.slug}`
  }))
}else{
 const res= await getSubInsurance();
 cardData = res?.data?.map((type)=>({
   title:type?.slug,
    slug:type?.slug,
    paragraph_1:type?.shortContent,
    featured_image:type?.image,
    alt:type?.imageAlt,
    link:`/insurance/${type.slug}`

 }))
  subpage = await (await getInsuranceIndex()).data
  console.log(subpage);
  
}
  
   
  return (
   <CategoryPage
  title={params.page}
  cards={cardData}
  type={subpage}
/>
  );
}
