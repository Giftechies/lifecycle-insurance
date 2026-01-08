'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function KnowMore({ oneMoreData }) {
  const sec2 = useRef()
  const router = useRouter()

  useGSAP(() => {
    if (!sec2.current) return;
    gsap.from(".sec-2-anim", {
      opacity: 0,
      x: -400,
      z: 999,
      duration: 1,
      delay: 0.5,

      scrollTrigger: {
        trigger: ".sec-2-anim",
        start: "top 95%",
      },
    });
  },);

  console.log("one more", oneMoreData);


  return (
    <section
      ref={sec2}
      className="section-2 w-full  p-4 lg:px-[3rem] xl:px-[3rem] lg:py-[80px] max-w-[1600px] mx-auto  "
    >
      <main className="  w-[100%]    lg:flex  relative ">
        <div className="imgLeft w-full  rounded-4xl overflow-hidden border max-md:aspect-[1.5] md:aspect-[1.8]  lg:w-[52%] lg:h-[42rem]  ">
          <Image
          width={600}
          height={600}
            src={oneMoreData?.image1 || "/about-pic1.jpg"}
            className=" w-full lg:h-full object-cover object-center"
            alt={oneMoreData?.image1Alt || "About us image"}
          />
        </div>
        <div className="contentRight max-lg:mt-3 lg:w-[55%] lg:flex gap-10 flex-col tracking-wider lg:text-justify  ">
          <div className="uppercontent w-full xl:w-[80%] leading-6 lg:ml-12  ">
            <h3 className="text-[var(--primg)] font-semibold  ">
              {" "}
              <i className="  ri-record-circle-line font-medium mr-2  "></i>
            {oneMoreData?.heading || "Know More About Our Services"}

            </h3>
            <p className=" text-[16px]  text-[var(--secgr)] font-normal  mt-2">
          {oneMoreData?.content || "something went wrong"}
            </p>
            <Link
              href={oneMoreData?.buttonLink}
              className=" flex items-center bg-[var(--primg)]  text-white px-7 py-3 rounded-full  mt-4   text-[16px] hover:text-black hover:scale-[.98] duration-300 w-fit "
            >
              {oneMoreData?.buttonText || "Know more"}<i className="ri-arrow-right-s-line    "></i>
            </Link>
          </div>

          <div className="middle  md:flex max-md:gap-10  lg:gap-2 w-full  ">
            <div className="sec-2-OneBox sec-2-anim md:w-[55%]  lg:w-[80%]  ">
              <div className="text bg-[var(--primg)] text-white mt-6 max-lg:rounded-4xl  p-6 md:w-[100%] md:p-12 md:flex md:flex-col lg:py-10 lg:px-6 xl:px-10 xl:py-16    lg:w-[100%] justify-center items-center  lg:rounded-r-4xl    ">
                <div className="">
                  <p className=" font-semibold">
                    {" "}
                    <img
                      src="/checksquare.svg"
                      className="h-9 w-9 mb-2"
                      alt=""
                    />
                 {oneMoreData?.boxheading || "All-In-One Mortgage Solution"}
                  </p>
                  <span className="  text-white/100 text-[14px] tracking-widest mt-2   ">
                  {oneMoreData?.boxcontent || 'something went wrong '}
                  </span>
                </div>
              </div>
              <div className="call text-[var(--primg)] font-medium md:ml-15 lg:ml-6 xl:ml-16 flex  gap-2 max-md:hidden ">
                <div className="  p-4 bg-[var(--secgr)] rounded-b-full ">
                  <img
                    src="/phone.svg"
                    className=" w-[2rem]  cursor-pointer object-cover object-center "
                    alt=""
                  />
                </div>

                <div className="call">
                  <a href={`tel:${oneMoreData?.contact || "0800507770"}`} className=" block font-semibold">
                    Call Now
                  </a>
                  <a
                    href={`tel:${oneMoreData?.contact || "0800507770"}`}
                    className=" cursor-pointer text-[var(--secgr)] font-semibold text-[18px]"
                  >
                   {oneMoreData?.contact || "0800 50 7770"}
                  </a>
                </div>
              </div>
            </div>

            <div className="lowerpic sec-2-anim w-full flex flex-col items-center max-md:mt-6 md:w-[40%] lg:w-[40%]  lg:mt-8 xl:mt-3   ">
              <div className="img">
                <Image
                width={300}
                height={300}
                src={oneMoreData?.image2 || "/sec2-pic2.jpg"}
                  className=" h-[19rem] lg:h-[16rem] xl:h-[18rem] "
                  alt={oneMoreData?.image2Alt || "Know more image"}
                />
              </div>

              <div className="call text-[var(--primg)] font-medium mt-2 flex   gap-2 md:hidden ">
                <div className="  p-4 bg-[var(--secgr)] rounded-full ">
                  <Image
                  width={80}
                  height={80}
                    src="/phone.svg"
                    className=" w-[2rem]   object-cover object-center "
                    alt=""
                  />
                </div>

                <div className="call">
                  <a href={`tel:${oneMoreData?.contact || "0800507770"}`} className=" block font-semibold">
                    Call Now
                  </a>
                  <a
                    href={`tel:${oneMoreData?.contact || "0800507770"}`}
                    className="  text-[var(--secgr)]"
                  >
                    {oneMoreData?.contact || "0800 50 7770"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>

  //  <section className=' container flex items-stretch  ' >
  //   {/* image */}
  //   <div className = "w-[45%]  shrink-0  relative " >
  //     <Image
  //       src={oneMoreData?.image1 || "/about-pic1.jpg"}
  //       alt={oneMoreData?.imgaeAlt}
  //       className="object-cover object-center "
  //       fill
  //     />
  //   </div>
  //   <div className="border-2 border-black" >
  //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi veritatis temporibus, cumque vitae explicabo non consequatur laborum provident maiores quod est? Ratione aliquam est velit earum magnam aperiam magni consequuntur adipisci animi quibusdam delectus ut totam nemo ad, voluptas autem labore odit eaque error maxime voluptatum dolorum. Perspiciatis, eius nostrum aspernatur consectetur necessitatibus quis unde enim sint ipsum adipisci qui porro inventore, nemo facilis odit, sequi nesciunt accusantium praesentium vitae molestiae cumque reiciendis quas. Delectus recusandae aliquam laboriosam possimus similique voluptas. Mollitia, consequuntur hic officia consequatur vero adipisci esse quis maxime ullam atque minima deleniti dolorem impedit maiores a beatae perferendis sequi molestiae ab culpa facilis magni in corrupti qui. Similique porro esse sed laudantium nemo recusandae corrupti repudiandae rem illum. Delectus, consequuntur rerum officia eos eum pariatur. Sequi nesciunt placeat eum labore dicta eveniet. Vitae fugit odio libero expedita, itaque magni a enim voluptas ex ipsam. Officiis vero ab aliquam? Dicta quam facere fugit ratione voluptatem laudantium nobis necessitatibus dolorum eaque architecto placeat corporis est eius nihil maiores ad, doloremque incidunt molestiae? Laboriosam doloribus dolores, recusandae dolorem quas explicabo repellendus voluptates. Voluptatum rem reprehenderit necessitatibus atque ea qui ut aspernatur explicabo tempora alias, enim impedit sit temporibus non accusamus consequatur voluptatibus praesentium minus tenetur aliquam! Sapiente impedit officia alias, dignissimos tempore hic? Voluptates, molestias! Quas aperiam cumque cum magnam, animi similique id ullam itaque fugiat quam, porro quo esse voluptas dolores ratione quibusdam ipsa delectus quis voluptatem inventore ipsum distinctio neque quos nobis. Perspiciatis sed alias tempora quidem cum dolor repellendus rem quos ex commodi. Placeat repudiandae, voluptate voluptatibus iste suscipit atque amet molestias voluptas quidem nihil. Voluptates hic ut recusandae enim explicabo deleniti officia quibusdam consequatur omnis ullam, laboriosam cum assumenda eaque quas veniam perferendis repellendus sit aliquid aliquam. Perferendis, magni maxime dolorem animi asperiores impedit numquam?
  //   </div>
  //  </section>
  )
}