// components/Sidebar.js

import Header from "@/app/Components/Header/Header";
import Slideri from "@/app/Components/Slideri/Slideri";
import {
  ShieldCheck,
  HeartPulse,
  Activity,
  Home,
  Wallet,
  Stethoscope,
  Users,
  Phone,
} from "lucide-react";

const Sidebar = () => {
  const items = [
    { label: "Life Insurance", icon: <ShieldCheck size={20} /> },
    { label: "Trauma Recovery Cover", icon: <HeartPulse size={20} /> },
    {
      label: "Total Permanent Disability Benefit Cover",
      icon: <Activity size={20} />,
    },
    { label: "Mortgage & Rent Protection Cover", icon: <Home size={20} /> },
    { label: "Income Protection Cover", icon: <Wallet size={20} /> },
    { label: "Medical Insurance", icon: <Stethoscope size={20} /> },
    { label: "Group Insurance", icon: <Users size={20} /> },
  ];

  const premium = [
    {
      title: "",
      content: " More than 118,000 New Zealanders suffer from angina.  ",
    },
    {
      title: "  ",
      content:
        " Heart surgery waiting lists have doubled in the last ﬁve years.  ",
    },
    {
      title: "",
      content:
        "  During this time, 60% of all Insurance claims were for individuals aged 30–59. ",
    },
    {
      title: "",
      content:
        " More than 2,896 people did not receive treatment within six months, despite being given a commitment to treatment.  ",
    },
    {
      title: "",
      content:
        " An average of 4,726 people a month have been waiting longer than six months for their ﬁrst specialist assessment through the public health system.  ",
    },
  ];

  const reason = [
    {
      content:
        "You have a greater choice of when, where and how you get treated, in consultation with your doctor",
    },
    {
      content: " No added stress about how to pay for the health bills ",
    },
    {
      content:
        " Avoid long delays in waiting for treatment in the public health system ",
    },
    {
      content:
        " Cover now for many unknown health issues that may arise in the future ",
    },
    {
      content:
        " Access to many of the latest recognised medical procedures and technology ",
    },
  ];
  const problem = [
    { content: " waiting may mean : " },
    { content: " Your condition could deteriorate " },
    { content: " Prlonged periods in pain and discomfort " },
    { content: " Loss of income because you can’t work " },
    {
      content: " Strain on your family through emotional and finacial stress ",
    },
    { content: " Your life could go on hold until you receive treatment " },
  ];
  const afford = [
    { content: " Taking out or increasing a loan " },
    { content: " Using savings or retirement funds " },
    { content: " selling assets " },
    { content: " Borrowing from family " },
  ];
  const easy = [
    {
      content:
        " Making the right choice on which health Insurance policy is not always easy. The aim is to find a good balance between cover and cost. Some key factors to look for in a policy are :",
    },
    {
      content:
        "High coverage lomits on both surgical and medical ( non-surgical ) treatment ",
    },
    { content: "Provision for Non-Pharmac drugs coverage " },
    { content: "Worldwide Coverage " },
    {
      content:
        "Specialist and tests covered ( before and after hospital treatment ) ",
    },
    { content: " Clarity of what is covered and what is not" },
    {
      content:
        " A trusted insurer with a proven history as health Insurance provider",
    },
  ];

  return (
    <>
      <Header title="Medical Insurance" />
      <main className="w-full flex px-4 lg:px-[50px] py-5 gap-10  relative  max-w-[1600px] mx-auto leading-7 tracking-wider ">
        {/* Content Div */}
        <div className="contentdiv  lg:w-[85%] py-5">
          {/* section 1 */}
          <section className=" section_1 w-full   ">
            {/*upper Content */}
            <div className="upperContent w-full ">
              <h1 className=" text-[var(--primg)]  ">
                <i className="ri-record-circle-line mr-1.5 "></i>Medical
                Insurance
              </h1>

              <p className=" mt-1 lg:mt-4 text-[14px] tracking-wider text-justify ">
                Nothing is more important than the health of you and your
                family. And that’s what makes health Insurance such an important
                part of your life. Unexpected health problems can impact your
                family’s life, lifestyle and finances. By Choosing health
                Insurance you and your family can get on with enjoying life to
                the full, with the security of knowing that you have protection
                and options should you need them.
              </p>
            </div>

            {/* lower content */}
            <div className="LowerContent w-full   mt-4   lg:flex gap-8">
              {/* left content */}
              <div className="leftcontent w-[100%] lg:w-[55%]  ">
                {/* content 1 */}
                <div className="flex mt-2">
                  <div className=" text-black/60 ">
                    <h1 className=" text-[18px] lg:text-[26px] text-black font-semibold ">
                      Did you know?
                    </h1>
                    <p className="mb-2"></p>

                    {premium.map((el) => (
                      <>
                        <div className=" flex  items-start mt-1 text-black/80">
                          <i className="ri-arrow-right-s-line mr-1 mt-1 shrink-0 "></i>
                          <p className=" text-[14px] text-justify">
                            <span className="font-medium text-[16px] lg:text-[20px] text-black ">
                              {el.title}
                            </span>
                            {el.content}
                          </p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>

                {/* content 2 */}
                <div className=" text-black/60 mt-4 ">
                  <h1 className="  text-[18px] lg:text-[26px] lg:leading-8 text-black font-semibold ">
                    Five important reasons to have health Insurance
                  </h1>
                  {reason.map((el) => (
                    <div className=" flex items-start mt-1 text-black/80 ">
                      <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                      <p className=" text-[14px]">{el.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content image */}
              <div className="RightContent  md:w-[100%]  md:h-[20em] lg:w-[45%] lg:h-[35em] mt-4 overflow-hidden rounded-lg ">
                <img
                  src="/8.jpg"
                  className=" h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section className="section_2  w-full  text-justify ">
            {/* public */}
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
                Public health system vs private health Insurance
              </h1>
              <p className=" text-[14px]  mt-2 ">
                While New Zealand has an established public health system, ther
                are limitations to what it can provide. For emergency treatment,
                the public system will provide you with immediate care. But for
                other health problems, even serious ones like heart surgery, you
                may have to be continuously assessed to remain on the waiting
                list. It may take months, or even years, to be treated. The
                effects waiting can have on you and your family can range from
                being inconvenient to devastating.
              </p>
              <p className=" text-[14px] mt-3 ">
                Private health Insurance provides for those who don’t qualify
                for immediate treatment in the public system. It means you can
                choose to have treatment and access to provate healthcare when
                you need it. You don’t need to compromise your quality of life
                while you wait for treatment. You also won’t have to increase
                debst or reduce savings to pay for private treatment.
              </p>
            </div>

            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
                Can you afford not to have health Insurance ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                While New Zealand has an health system, ther are limitations to
                what it can provide. For emergency treatment, the public system
                will provide you with immediate care. But for other health
                problems, even serious ones like heart surgery, you may have to
                be continuously assessed to remain on the waiting list. It may
                take months, or even years, to be treated. The effects waiting
                can have on you and your family can range from being
                inconvenient to devastating.
              </p>
            </div>
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] lg:leading-8 text-black font-semibold">
                I am currently in good health so what is the likelihood I will
                experience a health problem ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                Nobody likes to think they will experience a health problem, but
                the reality is, may of us will. Often the facts are before our
                own eyes. Who do you know who has suffered a heart attack,
                cancer, stroke, back or knee problems or has had private
                hospital treatment ? Reality is, we usually all know someone who
                has been in theis situation and it could just as easily be you
                in the future.{" "}
              </p>
              <p className=" text-[14px]  mt-2 ">
                While New Zealand has an health system, ther are limitations to
                what it can provide. For emergency treatment, the public system
                will provide you with immediate care. But for other health
                problems, even serious ones like heart surgery, you may have to
                be continuously assessed to remain on the waiting list. It may
                take months, or even years, to be treated. The effects waiting
                can have on you and your family can range from being
                inconvenient to devastating.
              </p>
            </div>
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] lg:leading-8 text-black font-semibold">
                If I experience a health problem, won’t the public health system
                look after me ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                For emergency treatment, the public syste will provide you with
                immediate care. but if you don’t need immediate or emergency
                treatment you will go though an assessement process and if you
                qualify for treatment you are then put on a waiting list.
              </p>

              {problem.map((el) => (
                <div className=" flex items-start mt-1 text-black/80 ">
                  <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                  <p className=" text-[14px]">{el.content}</p>
                </div>
              ))}
              <p className=" text-[14px]  mt-2 ">
                An average of 3362 people per month have been waiting for longer
                than six months for their first specialist assessment through
                the public health system.{" "}
              </p>
            </div>

            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] lg:leading-8 text-black font-semibold">
                Could I cope financially if i developed a serious health
                condition and couldn’t work while I wait for treatment ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                If the unexpected happened, most people would want to cover
                their major costs such as mortgages, credit card debt, car
                loans, children’s education, childcare and day-to-day expenses (
                food, electricity, rates etc). What costs would you need to
                cover ? Ill health and lack of health Insurance is one of the
                five main causes of the people going broke.{" "}
              </p>
            </div>
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
                Couldn’t I just self insure ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                Rather than paying premiums for private health Insurance, some
                people believe they could afford private treatment if need be.
                With many hospital treatments now costing over $20,000, self
                insuring for this amount could be financially challenging.{" "}
              </p>

              <p className=" text-[14px]  mt-2 ">
                A risk with self insuring is that you ( or another family member
                )can have a series of high claims close together and you have
                not had time to financially recover from the first. Most of us
                don’t take this risk with our cars or home and contents, so
                should we risk it with our most valuable asset – our health ?{" "}
              </p>

              <p className=" text-[14px]  mt-2 ">
                Rather than taking the risk of completely self insuring, an
                option could be to share the responsibility with an insurer. By
                choosing only cover for major surgical events, you effectively
                self insure for all costs not associated with this cover. You
                could also choose an excess to further make the premiums more
                affordable.{" "}
              </p>
            </div>

            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black lg:leading-8 font-semibold">
                How would I afford to pay for one of those expensive treatments
                without Insurance ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                Many people do not realise the actual cost of private hospital
                treatment today. See diagram below, these costs are usually
                higher than most car or home and content claims. Having to pay
                for hospital treatment yourself can often mean :
              </p>

              {afford.map((el) => (
                <div className=" flex items-start mt-1 text-black/80 ">
                  <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                  <p className=" text-[14px]">{el.content}</p>
                </div>
              ))}
              <p className=" text-[14px]  mt-2 ">
                An average of 3362 people per month have been waiting for longer
                than six months for their first specialist assessment through
                the public health system.{" "}
              </p>
            </div>

            {/* easy */}
            <div>
              <h1 className="text-[18px] mt-6 lg:text-[26px] text-black font-semibold">
                How do I easily compare between different health policies ?
              </h1>
              <p className=" text-[14px]  mt-2 ">
                Making the right choice on which health Insurance policy is not
                always easy. The aim is to find a good balance between cover and
                cost. Some key factors to look for in a policy are :
              </p>

              {easy.map((el) => (
                <div className=" flex items-start mt-1 text-black/80 ">
                  <i className="ri-arrow-right-s-line mt-1 mr-1 "></i>
                  <p className=" text-[14px]">{el.content}</p>
                </div>
              ))}
              <p className=" text-[14px]  mt-2 ">
                Are you worried about you{" "}
                <span className="font-semibold">
                  Pre-Existing Conditions………. We can possibly get you some cover
                </span>{" "}
                which will cover Pre-Existing Conditions. For more information
                or a free no obligation review of your Insurance needs then
                please contact us on 0800 50 7770 or
                harpreet@lifecyclefinancial.co.nz{" "}
              </p>
            </div>
          </section>
        </div>

        {/* Centered Sidebar constrained inside main, below header and above footer */}
        <Slideri/>
      </main>
    </>
  );
};

export default Sidebar;
