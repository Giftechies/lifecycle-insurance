import Header from "../Components/Header/page";

export default function Case_study(){
    const card = [
        {
           img:"8.jpg",
            heading:'Heading1',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {img:'8.jpg',
            heading:'Heading2',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {heading:'Heading3',
            img:'8.jpg',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
          img:"8.jpg",
            heading:'Heading4',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
         img:"8.jpg",
            heading:'Heading5',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
           img:"8.jpg",
            heading:'Heading6',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
          img:"8.jpg",
            heading:'Heading7',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
        {
          img:"8.jpg",
            heading:'Heading8',
         content:"Lorem ipsum dolor sit amet consectetur adipisicing."
        },
    ]

    return (
       <>
    
    <Header tittle='Case Study' />
    <main className=" w-full h-full max-w-[1500px] mx-auto ">
        <section className="Section_1  w-full h-full px-4 md:px-[9%] ">
            {/* Heading text */}
               <div className=" h-[20%] w-full   mt-8 lg:flex gap-10">
          {/* left */}
          <div className=" w-full text-[var(--primg)]  text-[16px] lg:w-[55%] font-medium ">
            <i className="ri-record-circle-line"></i> Case Study
            <p className=" text-black text-[26px] leading-8  lg:text-[40px] font-semibold mt-3 lg:leading-11">
                Personalised Insurance Solutions Tailored to Your Life
            </p>
          </div>

          {/* right */}
          <div className=" w-full mt-2 lg:mt-0 lg:w-[40%]   text-justify">
            {" "}
            Lifecycle Financial offers trusted mortgage and insurance advice,
            working with leading banks and providers to help you make the best
            financial decisions for your future.
          </div>
        </div>

        {/* cards */}
        <div className="Cards w-full h-full py-6  md:p-6 rounded-[20px]   md:flex flex-wrap gap-10 ">

        {/* card */}
        {card.map((el)=>(
               <div className="card1 w-full md:w-[45%]  mt-6 lg:w-[30%] h-100 shadow-lg rounded-[20px] bg-white relative overflow-hidden  ">
            <div className="img w-[100%] h-[50%]  overflow-hidden absolute  z-0 "><img src={el.img} className=" h-full w-full object-cover  "  alt="" />
            </div><div className=" h-[50%] w-full absolute z-20 bg-gradient-to-t from-black/50 via-black/10 to-transparent "></div>
            {/* text */}
            <div className="text w-[95%] h-[50%]  absolute bottom-4 left-2.5  z-20  p-4 text-justify">
            <h1 className=" text-[22px] lg:text-[24px] font-semibold mt-3">{el.heading}</h1>
            <p className=" text-black/80 text-[12px] lg:text-[14px] mt-3 ">{el.content}</p>
          

            <button className=" bg-[var(--primg)] rounded-[20px] px-3 py-2 mt-12 text-white text-[14px] ">Read More<i class="ri-arrow-right-line"></i></button>
            
            </div>

           
        </div>
         
        

        ))}

        


        
        

        </div>
        </section>

    </main>
       </>
    )
}