import CategoryPage from "../Components/category";

const cardData = [
  {
    title: "Life Insurance",
    paragraph_1:
      "Protect your loved ones with tailored life Insurance. Ensure their financial security with affordable, flexible cover. Peace of mind....",
    featured_image: "/life-insurance-policy.jpg",
    link: "/Insurance/life-insurance",
  },
  {
    title: "Trauma Recovery Cover",
    paragraph_1:
      "Get support when it matters most. Trauma cover offers financial security after serious illness or injury so you ...",
    featured_image: "/Trauma-Insurance.jpg",
    link: "/Insurance/trauma-recovery-cover",
  },
  {
    title: "Total Permanent Disability Benefit Cover",
    paragraph_1:
      "Financial peace of mind if you're unable to work due to permanent disability...",
    featured_image: "/Permanent-Disability-Insurance.jpg",
    link: "/Insurance/total-permanent-disability-benefit-cover",
  },
  {
    title: "Mortgage & Rent Protection Cover",
    paragraph_1:
      "Keep your home secure if illness or injury stops you working. Mortgage & Rent ...",
    featured_image: "/sec5.jpg",
    link: "/Insurance/mortgage-rent-protection-cover",
  },
  {
    title: "Income Protection Cover",
    paragraph_1:
      "Replace lost income during illness or injury. Maintain your lifestyle and meet your commitments with our flexible income protection plans, providing...",
    featured_image: "/Income-Protection-Insurance.jpg",
    link: "/Insurance/income-protection-cover",
  },
  {
    title: "Medical Insurance",
    paragraph_1:
      "Access quality healthcare when you need it most. Our medical insurance plans offer peace of mind and protection for your health and ....",
    featured_image: "/medical.webp",
    link: "/Insurance/medical-insurance",
  },
  {
    title: "Group Insurance",
    paragraph_1:
      "Protect your team with affordable group cover. Flexible plans for businesses that value their employees’ wellbeing and security. Boost morale and loyalty ...",
    featured_image: "/group.webp",
    link: "/Insurance/group-insurance",
  },
];

export default function Insurance() {
  return (
    <CategoryPage
      title="Insurance"
      subtitle="Personalised Insurance Solutions Tailored to Your Life"
      description="With more than a decade of experience, our company provides expert mortgage solutions, to help you turn your dream home into reality."
      cards={cardData}
      basePath="/Insurance"
    />
  );
}
