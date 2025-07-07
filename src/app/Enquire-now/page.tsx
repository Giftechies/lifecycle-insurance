"use client";

import { useForm } from "react-hook-form";
import { useEnquiryContext,EnquiryData } from "../Context/EnquiryContext";
import { nanoid } from "nanoid";

export default function EnquiryNow() {
  const { setEnquiries, enquiries } = useEnquiryContext();

  const { register, handleSubmit, reset } = useForm<EnquiryData>();

  const onSubmit = (data: EnquiryData) => {
    data.id = nanoid();
    const updated = [...enquiries, data];
    setEnquiries(updated);
    reset();
  console.log('submited');
  
  };

  return (
   <main className=" flex items-center justify-center w-full p-4 ">
     <div className="form  lg:w-[40%]  p-4 rounded-[5px] shadow-2xl">
      <p className="text-[var(--primg)]">
        <i className="ri-record-circle-line mr-2"></i> Enquiry Now
      </p>
      <h1 className="text-lg font-semibold mt-2">
        Let’s Connect and Get in Touch With Us.
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 flex flex-col gap-3 placeholder-[#A9A8A9] text-[#A9A9A9]"
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
          <option value="Insurence">Insurence</option>
          <option value="Mortgage">Mortgage</option>
        </select>

        <textarea
          {...register("message", { required: true })}
          placeholder="Write your message."
          className="w-full min-h-[100px] lg:min-h-[200px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
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
