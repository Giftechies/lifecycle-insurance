import { useForm } from "react-hook-form";
import { useEnquiryContext, EnquiryData } from "../Context/EnquiryContext";
import { nanoid } from "nanoid";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";



export default function Enquire({
  setIsEnquireOpen,
}: {
  setIsEnquireOpen: (open: boolean) => void;
}) {
  const { setEnquiries, enquiries } = useEnquiryContext();

  const { register, handleSubmit, reset } = useForm<EnquiryData>();

  const onSubmit = (data: EnquiryData) => {
    data.id = nanoid();
    const updated = [...enquiries, data];
    setEnquiries(updated);
    reset();
    console.log("submited");
  };

  useGSAP(
    ()=>{
        gsap.set(".formdiv",{
            scale:0
        })

        gsap.to('.formdiv',{
            scale:1,
            duration:.5,
            
        })

       
    }
  )

  const handleclose =()=>{
    gsap.to('.formdiv',{
        scale:0,
        duration:.5,
        onComplete:()=>setIsEnquireOpen(false)
    })
    
  }


  return (
    <main className=" fixed inset-0 z-99999 flex items-center justify-center ">
      <div className=" w-full h-full bg-[var(--primg)]/50  backdrop-blur-[3px] inset-0 absolute  "
      onClick={handleclose}
      
      />

        <div className="formdiv absolute bg-white lg:bottom-0 xl:bottom-10 form  lg:w-[40%]  p-8 rounded-[5px] shadow-2xl">
          <div className="uppercontent flex  justify-between ">
           <div>
             <p className="text-[var(--primg)]">
            <i className="ri-record-circle-line mr-2"></i> Enquiry Now
          </p>
          <h1 className="text-lg font-semibold mt-2">
            Let’s Connect and Get in Touch With Us.
          </h1> 
           </div>

           <i onClick={handleclose} className= " cross ri-close-line text-4xl transition-transform duration-300  "></i>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-4 flex flex-col gap-3 xl:gap-6  placeholder-[#A9A8A9] text-[#A9A9A9]"
          >
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
            />

            <div className="flex flex-col md:flex-row gap-3">
              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
                className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
              />
              <input
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                className="w-full md:w-1/2 h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
              />
            </div>

            <select
              {...register("service", { required: true })}
              defaultValue=""
              className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
            >
              <option value="" disabled>
                Service you're interested in?
              </option>
              <option value="Insurance">Insurance</option>
              <option value="Mortgage">Mortgage</option>
            </select>

            <textarea
              {...register("message", { required: true })}
              placeholder="Write your message."
              className="w-full min-h-[80px] lg:min-h-[150px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
            ></textarea>

            <button
              type="submit"
              className="py-2 px-6 rounded-[5px] bg-[var(--primg)] outline-0 text-white font-semibold hover:bg-opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
    </main>
  );
}
