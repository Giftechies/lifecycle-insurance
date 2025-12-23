import Image from "next/image";
import sanitizeHtml from 'sanitize-html';

export default function({data}){

  const safeHTML = sanitizeHtml(data?.content || "", {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    '*': ['class', 'style', 'id'],
  },
});
    return(
         <section className="section-1 max-w-[1600px] mx-auto w-[100%]  lg:p-[3rem] lg:pb-[5rem] xl:pb-[3rem]   ">
          <main className=" h-full w-full lg:flex  ">
            <div className="Left lg:w-[45%]  max-lg:hidden  ">
              <div className="img lg:h-[105%] xl:h-[100%]   w-[100%]  rounded-2xl overflow-hidden ">
                <Image
                  width={250}
                  height={250}
                  src={data?.image}
                  className=" w-full  h-full  object-cover object-center "
                  alt=""
                />
              </div>
            </div>
            <div className="Right w-full space-y-6  lg:w-[55%]  flex flex-col   max-lg:p-6   ">
              <div className="uppercontent   lg:pl-10  ">
                  <p className="text-[var(--primg)]  text-[16px] ">
                    <i className="   ri-record-circle-line mr-1 "></i> {data?.heading}
                  </p>
              <div dangerouslySetInnerHTML={{__html:safeHTML}} />
              </div>

              {/* image */}
              <div className="img w-full sm:h-[40vw]  rounded-2xl overflow-hidden lg:hidden ">
                <Image
                width={250}
                height={250}
                  src={data?.image}
                  className=" w-full h-full object-cover  "
                  alt="About pic"
                />
              </div>

              <div className="lowercontent p-4 text-white  bg-[var(--primg)] w-full max-lg:rounded-2xl   lg:w-[90%] lg:p-10 lg:leading-6   lg:rounded-r-4xl ">
                <h2 className="  max-md:text-[20px] leading-8 font-semibold   w-[90%] mb-4 ">
                  {data?.boxheading}
                </h2>
                <p className=" text-[14px]   text-justify text-white/80  ">
            {data?.boxcontent}
                </p>
              </div>
            </div>
          </main>
        </section>
    )
}