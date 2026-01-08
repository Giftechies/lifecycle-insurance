import CategoryPage from "../Components/category"
import { getInsuranceIndex, getMortgageIndex, getSubInsurance, getSubMortgage } from "../../actions/subInsurance_Mortgage"
// ... other imports and generateStaticParams ...

export async function generateMetadata({ params }) {
  const { page } = await params;

  // 1. Fetch the specific SEO data for the category
  let seoData;
  if (page === 'mortgage') {
    const res = await getMortgageIndex();
    seoData = res?.mortgageIndex;
  } else if (page === 'insurance') {
    const res = await getInsuranceIndex();
    seoData = res?.data;
  }

  // 2. Fallback to a default if data isn't found
  const title = seoData?.metaTitle || `${page.charAt(0).toUpperCase() + page.slice(1)} - LifeCycle Insurance`;
  const description = seoData?.metaDescription || `Explore our ${page} solutions.`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    }
  };
}

// ... your existing Page component ...
export const revalidate = 3600; // 1 hour
export async function generateStaticParams() {
  return [
    { page: 'mortgage' },
    { page: 'insurance' }
  ];
}


export default async function Page({ params }) {
  const { page } = await params;

  let subpage
  let cardData

  if (page === 'mortgage') {
    const [res, ressubpage] = await Promise.all([
      getSubMortgage(),
      getMortgageIndex()
    ])

    subpage = ressubpage.mortgageIndex
    cardData = res?.data?.map((type) => ({
      title: type?.slug,
      slug: type?.slug,
      paragraph_1: type?.shortContent,
      featured_image: type?.image,
      alt: type?.imageAlt,
      link: `/mortgage/${type.slug}`
    }))
  }
  if (page === 'insurance') {
    const [res, ressubpage] = await Promise.all([
      getSubInsurance(),
      getInsuranceIndex()
    ])

    cardData = res?.data?.map((type) => ({
      title: type?.heading,
      slug: type?.slug,
      paragraph_1: type?.shortContent,
      featured_image: type?.image,
      alt: type?.imageAlt,
      link: `/insurance/${type.slug}`

    }))
    subpage = ressubpage.data
  }

  console.log("page",subpage);
  


  return (
    <CategoryPage
      title={page}
      cards={cardData}
      pageType={subpage}
    />
  );
}
