import CategoryPage from "../Components/category"
import {getSubMortgage} from "@/actions/subMortgage.actions"
export default async function Mortgage() {
   
   const res = await getSubMortgage()
   console.log(res);
   const cardData = res?.data?.map((type)=>({
     title:type?.slug,
    slug:type?.slug,
    paragraph_1:type?.shortContent,
    featured_image:type?.image,
    alt:type?.imageAlt,
    link:`/mortgage/${type.slug}`
  }))
  
  console.log(cardData);
  
   
  return (
   <CategoryPage
  title="Mortgage"
  subtitle="Mortgage Solutions Crafted for Your Life."
  description="With more than a decade of experience, our company provides expert mortgage solutions, to help you turn your dream home into reality."
  cards={cardData}
  basePath="/Mortgage"
/>
  );
}
