import Image from "next/image";

export default function({team}){

  
    return(
         <div className=" w-full px-4 py-10 xl:px-[9%]  bg-[var(--tri)]/10  ">
          <main className=" w-full flex max-w-[1600px] mx-auto  flex-col items-center ">
            <h2 className=" text-[26px]   text-[var(--secgr)]  font-semibold mb-4 ">
              {" "}
              Our Mortgage Experts
            </h2>
            <h6 className=" text-center ">
              Our expert team of mortgage and insurance specialists provides a
              seamless, one-stop solution for all your personal and business
              financial needs. Whether you're protecting your income, financing
              your first home, or securing your business assets, we’re here to
              support you every step of the way.
            </h6>

            {/* cards */}
            <div className=" w-full  text-black/40  mt-6 flex max-md:flex-col items-center justify-around gap-5 lg:justify-center lg:gap-15 ">
              {/* card 1 */}

              {team?.map((el) => (
                <div className="card  w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%] tracking-wider  mt-4  bg-white shadow rounded-xl flex items-center justify-center text-center p-4">
                  <div className="img w-[100%]  aspect-square">
                    <Image
                    width={250}
                    height={250}
                      src={el?.image}
                      className="w-full rounded-xl h-full object-cover object-top "
                      alt={el?.alt}
                    />
                    <span className=" mt-2  text-black/80 font-medium block ">
                      {el?.name}
                    </span>
                    <h4>{el.designation}</h4>
                    <a href={`tel:${el.Phone}`} className="  tracking-widest text-black/80 mt-1 block text-[14px]  ">
                      <i class="ri-phone-fill"></i> {el.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
    )
}