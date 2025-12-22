'use client'

import { useForm } from "react-hook-form";
import {  useState } from "react";;
import { useEnquiryContext } from "@/app/Context/EnquiryContext";

export default function Connect( ){


    const { register, handleSubmit, reset } = useForm();

 const [status, setStatus] = useState(''); // State to display success/error messages
  const [loading, setLoading] = useState(false); // State for button loading

      const onSubmit = async (formData) => {
    setLoading(true); // Start loading state
    setStatus('Sending your message...'); // Initial feedback

    try {
      const response = await fetch('/api/sendmail', { // Use your existing API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData?.name,
          email: formData?.email,
          phone: formData?.phone,    // These fields match your Enquiry form
          service: formData?.service,  // These fields match your Enquiry form
          message: formData?.message,
          sourcePage: "Home Page"
        }),
      });

      const data = await response.json(); // Parse the response from your API route

      if (response.ok && data.success) { // Check for successful API response
        console.log('✅ Email sent successfully from homepage (Frontend):', data.message);
        toast.success('Your message has been sent successfully!')
        setStatus('Your message has been sent successfully!');
        reset(); // Clear the form fields
      } else {
        console.error('❌ Email failed from homepage (Frontend):', data.message); toast.error(`Failed to send message: ${data.message || 'Unknown error'}. Please try again.`);
        setStatus(`Failed to send message: ${data.message || 'Unknown error'}. Please try again.`);
      }
    } catch (error) {
      console.error('❌ Network or server error from homepage (Frontend):', error);
      toast.error('An error occurred. Please check your internet connection and try again.');
      
      setStatus('An error occurred. Please check your internet connection and try again.');
    } finally {
      setLoading(false); // Always stop loading
    }
  };
    return(
        <section className="secton_6 w-full h-[66.5rem] md:h-[62rem]  mt-4 lg:h-[41em] max-w-[1600px] mx-auto overflow-hidden ">
          <main className="p-4 w-full lg:flex flex-row-reverse lg:px-[3rem] xl:px-[3rem] items-center justify-center gap-10 ">
            {/* Form Section */}
            <div className="form lg:w-1/2">
              <p className="text-[var(--primg)]">
                <i className="ri-record-circle-line mr-2"></i> Enquiry Now
              </p>
              <span className="text-lg font-semibold mt-2">
                Let’s Connect and Get in Touch With Us.
              </span>

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
                  <option value="Insurance">Insurance</option>
                  <option value="Mortgage">Mortgage</option>
                </select>

                <textarea
                  {...register("message", { required: true })}
                  placeholder="Write your message."
                  className="w-full min-h-[100px] lg:min-h-[200px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
                ></textarea>

                <button
                  type="submit"
                  className="py-2 px-6 rounded-lg bg-[var(--primg)] outline-0 text-white font-semibold hover:bg-opacity-90 transition"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Image & Box Section */}
            <div className=" lg:w-[50%] lg:p-0  ">
              <div className="mt-6 h-[32em]  relative lg:h-[36em] ">
                <div className="h-[70%]  overflow-hidden rounded-[40px]">
                  <img
                    src="/8.jpg"
                    className="h-full w-full object-cover"
                    alt="Contact Visual"
                  />
                </div>

                {/* Info Box */}
                <div className=" p-3 w-[85%]  bg-white/95 shadow-2xl rounded-[20px] absolute  bottom-10  left-1/2 transform -translate-x-1/2 ">
                  <div className="w-full h-[55%] flex flex-col gap-2 items-center justify-around">
                    <i className="ri-group-fill bg-[var(--primg)] text-white text-4xl rounded-[10px] py-3 px-4"></i>
                    <span className="text-[var(--primg)]  font-semibold ">
                      Honored to Be a Member Of
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-[var(--secgr)] w-full ">
                    <div className="  flex flex-col items-center justify-center overflow-hidden p-2">
                     <div className=" h-24   place-items-center flex overflow-hidden">
                       <img
                        src= "/financial-logo.png "
                        alt="Membership Logo"
                      />
                     </div>
                      <h6 className="text-center mt-2"> Financial Ombudsman service </h6>
                    </div>

                    <div className="  flex flex-col items-center justify-center p-2 ">
                   <div className="h-24 flex overflow-hidden  ">
                       <img
                        src="/KAN-Logo.png"
                        alt="Membership Logo"
                      />
                   </div>
                      <h6 className="text-center ">
                         Kiwi Adviser Network
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
    )
}