"use client";

import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import Header from "../Components/Header/Header"

export default function EnquiryNow() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.id = nanoid();
    const updated = [...enquiries, data];
    setEnquiries(updated);
    reset();
    console.log("submitted");
  };

  return (
  <>
    <Header title="Enquire " />  
    <main className=" p-4 md:p-[3rem] bg-[var(--secgr)]/10  ">
      
      <div className="Enquire w-full  py-8">
        <h1 className=" text-center text-[36px] font-semibold underline mb-8 text-[var(--primg)] ">
          Contact us
        </h1>
        <div className=" mx-auto  grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="Enquire-box bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-start">
            <div className=" ibox bg-[var(--primg)] py-3 px-4 rounded-full mb-4 text-white">
              <i className="ri-phone-line text-3xl cursor-pointer  "></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a href="tel:0800507770" className="text-gray-600  transition">
              0800 507 770
            </a>
          </div>

          {/* Email */}
          <div className="Enquire-box  bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-start">
            <div className=" ibox bg-[var(--primg)]  px-4 py-3 rounded-full mb-4 text-white">
              <i className=" ri-mail-line text-3xl cursor-pointer "></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:harpreet@lifecyclefinancial.co.nz"
              className="text-gray-600  transition"
            >
              harpreet@lifecyclefinancial.co.nz
            </a>
          </div>

          {/* Address */}
          <div className="Enquire-box   bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-start">
            <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
              <i className="ri-map-pin-line text-3xl cursor-pointer"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <a className="text-gray-600">
              Suite 102, Level 1, 123 Example Street, Auckland, New Zealand
            </a>
          </div>
          {/* Business  */}
          <div className="Enquire-box   bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-start">
            <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
              <i className="ri-time-line text-3xl cursor-pointer"></i>
             
            </div>
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <a className="text-gray-600">
              Mon -Fri 9:00 AM - 6:00 PM
              
            </a>
          </div>
        </div>
      </div>

      <div className="flex max-lg:flex-col p-4 max-md:mt-8  justify-evenly w-full   lg:gap-20  ">
        <div className=" lg:w-[50%] shadow-2xl rounded-xl bg-white  p-4 md:p-8 space-y-5 ">
          {/* <p className="text-[var(--primg)]">
            <i className="ri-record-circle-line mr-2"></i> Enquiry Now
          </p> */}

          <h1 className="  text-[26px] lg:text-[30px] font-semibold lg:w-[80%] leading-7 lg:leading-9  ">
            Feel free to enquire about any questions you got
          </h1>
          <h2 className=" text-justify tracking-wider text-[var(--secgr)] ">
            Have questions or ready to start your mortgage journey? Our expert
            team is here to help. Reach out for personalized guidance, expert
            advice, and a smooth, stress-free path to securing your home loan.
          </h2>
          <div className=" w-[100%] h-75 rounded-2xl overflow-hidden ">
            {" "}
            <img
              src="./8.jpg"
              className=" w-full h-full object-cover object-center"
              alt=""
            />{" "}
          </div>
        </div>

       
        <div className="form  bg-white  lg:w-[50%] p-4 rounded-xl shadow-2xl">
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
              <option value="Insurance">Insurance</option>
              <option value="Mortgage">Mortgage</option>
            </select>

            <textarea
              {...register("message", { required: true })}
              placeholder="Write your message."
              className="w-full min-h-[80px] lg:min-h-[250px] p-3 max-h-[200px] bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
            ></textarea>

            <button
              type="submit"
              className="py-2 px-6 rounded-[5px] bg-[var(--primg)] outline-0 text-white font-semibold hover:bg-opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

       <div
          className="map w-[100%] h-[500px]  p-8 md:mt-8  bg-white  rounded overflow-hidden
"
        >
          <h1 className="text-[36px]  font-semibold " >Get Direction</h1>
          <iframe
          
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.608092177796!2d174.7388247763187!3d-36.85580427993633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d48cc45b3f4db%3A0x497f13554c27ae28!2s123%20Example%20Street%2C%20Auckland%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1720674582391!5m2!1sen!2sin"
            className="w-full h-[80%] border-0 rounded-xl md:mt-4 "
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    </main>
  
  </>
  );
}
