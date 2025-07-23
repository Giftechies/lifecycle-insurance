import CategoryPage from "../Components/category";

const cardData = [
  {
    title: "Home Buyer Case Study",
    paragraph_1:
      "See how Lifecycle Financial helped a first-time buyer navigate lending hurdles and secure their dream home with tailored mortgage...",
    featured_image: "8.jpg",
    link: "#",
  },
  {
    title: "Trauma Cover Success Story",
    paragraph_1:
      "Discover how timely trauma recovery cover ensured one family could focus...",
    featured_image: "8.jpg",
    link: "#",
  },
  {
    title: "Self-Employed Client Journey",
    paragraph_1:
      "Explore how our flexible income protection helped a self-employed designer stay financially...",
    featured_image: "8.jpg",
    link: "#",
  },
  {
    title: "Group Cover for a Startup",
    paragraph_1:
      "Learn how a growing tech startup implemented group insurance to protect its team and boost employee...",
    featured_image: "8.jpg",
    link: "#",
  },
];

export default function CaseStudy() {
  return (
    <CategoryPage
      title="Case Study"
      subtitle="Real People. Real Results."
      description="Explore how our personalised mortgage and insurance solutions have made a difference in the lives of individuals, families, and businesses across New Zealand."
      cards={cardData}
      basePath="/casestudy"
    />
  );
}
