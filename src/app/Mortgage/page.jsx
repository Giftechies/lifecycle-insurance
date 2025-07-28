import CategoryPage from "../Components/category"
const cardData = [
  {
    title: "Home Loan",
    slug: "home-loan",
    paragraph_1: "Make your dream of home ownership a reality with our flexible home loan solutions. Enjoy competitive rates and personalized service to guide you every step of the way.",
    featured_image: "/about-pic1.jpg",
    link: "/Mortgage/home-loan",
  },
  {
    title: "Refinance",
    slug: "refinance",
    paragraph_1: "Save more with our easy refinancing options. Lower your interest rate, reduce monthly payments, and simplify your finances without the hassle.",
    featured_image: "/main-banner.jpg ",
    link: "/Mortgage/refinance",
  },
  {
    title: "Investment Loan",
    slug: "/investment-loan",
    paragraph_1: "Build your wealth with our tailored investment Loan. We help you maximize returns and grow your property portfolio with expert advice.",
    featured_image: "/cal2.webp",
    link: "/Mortgage/investment-loan",
  },
  {
    title: "Business Loan",
    slug: "business-loan",
    paragraph_1: "Fuel your business ambitions with fast, flexible financing. Whether expanding or managing cash flow, our business Loan adapt to your goals.",
    featured_image: "/business.webp",
    link: "/Mortgage/business-loan",
  },
  {
    title: "Construction Loan",
    slug: "construction-loan",
    paragraph_1: "Bring your building plans to life with structured funding at every stage. Our construction Loan ensure your project stays on track and on budget.",
    featured_image: "/construction.webp",
    link: "/Mortgage/construction-loan",
  },
  {
    title: "Commercial Loan",
    slug: "commercial-loan",
    paragraph_1: "Finance commercial properties with confidence. We offer competitive rates and expert support for your business growth and investment needs.",
    featured_image: "/commercial.webp",
    link: "/Mortgage/commercial-loan",
  },
];


export default function Mortgage() {
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
