import Link from 'next/link';
import Banner from '../Components/Banner/Banner';

const cards = [
  {
    slug: 'making-home-ownership-possible',
    title: 'Making Home Ownership Possible',
    summary:
      'Turning dream into reality with just 5% deposit despite having multiple debts, bad credit history...',
    content: {
      p1: 'A husband and wife approached us with the goal of purchasing their first home...',
      p2: 'We created a tailored 3–4 month action plan to help them restructure...',
    },
    result:
      'A major bank approved their $880,000 loan at a competitive 6.09% interest rate...',
   coverImage: '/about-pic1.jpg',
  },
  {
  slug: "trauma-cover-impact", // use this for dynamic routing
  title: "Trauma Cover Impact",
  summary:
    "A powerful reminder of how the right advice and timely action can make all the difference when life ...",
  content: [
    "We carried out a thorough review of a client’s existing insurance policy, which had originally been set up by another adviser. After identifying key gaps in their trauma cover, we recommended them additional protection and a $100,000 Trauma policy to better safeguard their financial future.",
    "In a truly unfortunate turn of events, the client was diagnosed with cancer less than a month after the new cover was put in place. Thankfully, the Trauma policy had already been approved and in force, providing immediate financial support during a very challenging time.",
    "The payout provided essential financial support during a highly stressful and emotional time, helping them to focus on recovery without the added burden of financial strain."
  ],
  category: "Insurance",
  coverImage: "/trauma.webp", // Update with your actual image path
  date: "2025-07-24", // optional
},
{
  slug: "timely-advice-trauma-cover",
  title: "Timely Advice Trauma Cover",
  summary:
    "They nearly let it go. Six months later, they were thankful they didn't. That's the value of trusted...",
  content: [
    "During an annual insurance review with a husband and wife in their early 40s, the husband expressed interest in removing his wife's trauma cover to save on premiums. Given their age group and the increasing health risks that can arise in the 40s, I strongly advised against cancelling the cover. After discussing the long-term implications and the importance of financial protection, the couple decided to retain the policy.",
    "Just six months later, the wife was unexpectedly diagnosed with a tumor. Fortunately, her trauma cover was still in place, and a claim was successfully lodged—resulting in a $110,000 payout. This financial support allowed the family to focus entirely on her treatment and recovery without the added stress of financial strain.",
    "The good news is that she made a full recovery, and the family is now even more appreciative of the importance of maintaining comprehensive insurance cover. This situation reinforces how critical it is to have the right protections in place—especially when they’re needed most."
  ],
  category: "Insurance",
  coverImage: "/time.webp", // Replace with actual path
  date: "2025-07-24"
}
];

export default function CaseStudy() {
  return (
  <>
  <Banner title='Case Study'/>
    <section className="w-full px-4 py-6 lg:px-[3rem] lg:py-10 mx-auto leading-7 tracking-wider">
      <div className="w-full lg:flex ">
        <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
          <i className="ri-record-circle-line"></i> Case Study
          <h1 className="leading-9 text-black text-[26px] lg:text-[36px] font-semibold mt-3 lg:leading-11">
           Winning with the Right Advice: Real Clients, Real Transformations
          </h1>
        </div>

        <div className="w-full mt-2 lg:w-[40%] lg:mt-10 lg:text-[14px] text-justify">
          <h4>
            Explore how our personalised mortgage and insurance solutions have
            made a difference in the lives of individuals, families, and
            businesses across New Zealand.
          </h4>
        </div>
      </div>

      <div className="mx-auto grid gap-15 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  mt-12">
        {cards?.map((el, index) => (
          <div
            key={index}
            className="w-full p-[20px]  bg-white rounded-[16px] shadow-xl overflow-hidden relative transition-transform hover:scale-[0.95] duration-300 ease-in-out"
          >
            <Link href={`/Case-study/${el.slug}`}>
              <div className="w-full h-[15em] rounded-[12px] overflow-hidden">
                <img
                  src={el.coverImage}
                  alt={el.title}
                  className="w-full cursor-pointer h-full object-cover"
                />
              </div>
            </Link>

            <div className="relative mt-[20px]">
              <Link href={`/Case-study/${el.slug}`}>
                <h4 className="text-[20px] font-medium leading-6 text-gray-900">
                  {el.title}
                </h4>
              </Link>

              <p className="text-gray-700 mt-2">{el.summary}</p>

              <Link
                href={`/Case-study/${el.slug}`}
                className="text-[var(--primg)] font-semibold text-sm hover:underline flex items-center gap-1 mt-4"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section></>
  );
}
