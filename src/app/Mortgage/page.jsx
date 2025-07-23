import CategoryPage from "../Components/category"
const cardData = [
  {
    title: "Home Loan",
    slug: "home-loan",
    paragraph_1: "Make your dream of home ownership a reality with our flexible home loan solutions. Enjoy competitive rates and personalized service to guide you every step of the way.",
    featured_image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
    link: "/Mortgage/home-loan",
  },
  {
    title: "Refinance",
    slug: "refinance",
    paragraph_1: "Save more with our easy refinancing options. Lower your interest rate, reduce monthly payments, and simplify your finances without the hassle.",
    featured_image: "https://plus.unsplash.com/premium_photo-1678139636101-d9eeee5c67f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2lhbCUyMGRvY3VtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/Mortgage/refinance",
  },
  {
    title: "Investment Loan",
    slug: "investment-loan",
    paragraph_1: "Build your wealth with our tailored investment Loan. We help you maximize returns and grow your property portfolio with expert advice.",
    featured_image: "https://media.istockphoto.com/id/2198966747/photo/couple-closing-real-estate-contract-with-real-estate-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRupwwS_sR21cACmOIEPxd5ykbXbZsxLoc_oKUsaNhc=",
    link: "/Mortgage/investment-loan",
  },
  {
    title: "Business Loan",
    slug: "business-loan",
    paragraph_1: "Fuel your business ambitions with fast, flexible financing. Whether expanding or managing cash flow, our business Loan adapt to your goals.",
    featured_image: "https://plus.unsplash.com/premium_photo-1661499804385-da9ba8357b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzJTIwb2ZmaWNlfGVufDB8fDB8fHww",
    link: "/Mortgage/business-loan",
  },
  {
    title: "Construction Loan",
    slug: "construction-loan",
    paragraph_1: "Bring your building plans to life with structured funding at every stage. Our construction Loan ensure your project stays on track and on budget.",
    featured_image: "https://media.istockphoto.com/id/2173981229/photo/blurred-image-engineer-is-giving-advice-and-consulting-with-the-designer-to-find-out.webp?a=1&b=1&s=612x612&w=0&k=20&c=Has6w_cyklwmYGPZh5cUBXxb3C7uJ__9JkAwozKYNbY=",
    link: "/Mortgage/construction-loan",
  },
  {
    title: "Commercial Loan",
    slug: "commercial-loan",
    paragraph_1: "Finance commercial properties with confidence. We offer competitive rates and expert support for your business growth and investment needs.",
    featured_image: "https://images.unsplash.com/photo-1599580546666-c26f15e00933?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/Mortgage/commercial-loan",
  },
];


export default function Mortgage() {
  return (
   <CategoryPage
  title="Mortgage"
  subtitle="Mortgage Solutions Crafted for Your Life."
  description="Get expert guidance and flexible options to make home ownership easy. We’re here to help you finance your dreams with confidence."
  cards={cardData}
  basePath="/Mortgage"
/>
  );
}
