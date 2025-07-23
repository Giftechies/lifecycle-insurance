import CategoryPage from "../src/app/Components/category";

const cardData = [
  {
    title: "Life Insurance",
    paragraph_1:
      "Protect your loved ones with tailored life Insurance. Ensure their financial security with affordable, flexible cover. Peace of mind for all stages of life.",
    featured_image: "8.jpg",
    link: "/Insurance/life-insurance",
  },
  {
    title: "Trauma Recovery Cover",
    paragraph_1:
      "Get support when it matters most. Trauma cover offers financial security after serious illness or injury so you can focus fully on recovery.",
    featured_image: "8.jpg",
    link: "/Insurance/trauma-recovery-cover",
  },
  {
    title: "Total Permanent Disability Benefit Cover",
    paragraph_1:
      "Financial peace of mind if you're unable to work due to permanent disability.",
    featured_image: "8.jpg",
    link: "/Insurance/total-permanent-disability-benefit-cover",
  },
  {
    title: "Mortgage & Rent Protection Cover",
    paragraph_1:
      "Keep your home secure if illness or injury stops you working. Mortgage & Rent Protection covers your payments when life gets tough.",
    featured_image: "8.jpg",
    link: "/Insurance/mortgage-rent-protection-cover",
  },
  {
    title: "Income Protection Cover",
    paragraph_1:
      "Replace lost income during illness or injury. Maintain your lifestyle and meet your commitments with our flexible income protection plans, providing reliable financial support",
    featured_image: "8.jpg",
    link: "/Insurance/income-protection-cover",
  },
  {
    title: "Medical Insurance",
    paragraph_1:
      "Access quality healthcare when you need it most. Our medical insurance plans offer peace of mind and protection for your health and budget, with flexible options, expert support.",
    featured_image: "8.jpg",
    link: "/Insurance/medical-insurance",
  },
  {
    title: "Group Insurance",
    paragraph_1:
      "Protect your team with affordable group cover. Flexible plans for businesses that value their employees’ wellbeing and security. Boost morale and loyalty with comprehensive, customizable coverage options tailored to your needs.",
    featured_image: "8.jpg",
    link: "/Insurance/group-insurance",
  },
];

export default function Insurance() {
  return (
    <CategoryPage
      title="Insurance"
      subtitle="Personalised Insurance Solutions Tailored to Your Life"
      description="Lifecycle Financial offers trusted mortgage and Insurance advice, working with leading banks and providers to help you make the best financial decisions for your future."
      cards={cardData}
      basePath="/Insurance"
    />
  );
}
