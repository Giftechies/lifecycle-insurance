import Breadcrumb from "../Breadcumb/Breadcumb"
export default function Header({title}:{title:string}){
    return(
        <>
           {/* section 1 */}
      <section className="relative  w-full  bg-black  overflow-hidden  ">
        {/* Hero Section Container */}
        <div className="relative h-[12em]  md:h-[15em] lg:h-[20em]   w-full overflow-hidden">
          {/* Background Image */}
          <img
            src="/main-banner.jpg"
            alt="Hero Banner"
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          {/* Gradient Overlay */}
          <div className="absolute  inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

          {/* text */}
          <div className=" h-[25%]    w-[100%] flex flex-col items-center justify-center text-center border-white z-20 absolute top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2  text-white">
            <p className="animate-fadeInUp text-[1.8rem] mt-6 lg:mt-8 md:text-[40px] lg:text-[56px] leading-tight md:text-base font-semibold mb-2">
              
              {title}
            <p className=" flex  justify-center "><Breadcrumb /></p>
            </p>
            
          </div>
        </div>
      </section>
        </>
    )
}