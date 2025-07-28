"use client";

import { useForm } from "react-hook-form";
import Banner from "../Components/Banner/Banner";
import { useState, useEffect } from "react";


export default function EnquiryNow() {
  const [setting, setSetting] = useState()
const [enquiries, setEnquiries] = useState([]);
  const { register, handleSubmit, reset } = useForm();


  //  useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const res = await HomeData("settings");
  //         if (res?.success) {
  //       setSetting(res);//if not working use .data
  //     }
  //       } catch (error) {
  //         console.log("error", error);
  //       } finally {
  //         setloading(false);
  //       }
  //     }
  //     fetchData();
  //   }, []);


const onSubmit = async (formData) => {
  try {
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  service: formData.service,
  message: formData.message,
}),

    });

    const data = await response.json();

    if (data.success) {
      console.log('✅ Email sent successfully');
      alert('Your message has been sent!');
    } else {
      console.error('❌ Email failed:', data.message);
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('❌ Network or server error:', error);
    alert('An error occurred. Please check your connection and try again.');
  }

  // Optional: clear the form if using react-hook-form
  reset();
};




  return (
    <>
      <Banner title="Enquire " />
      <section className=" p-8 md:p-[3rem] bg-[var(--secgr)]/10  text-[var(--secgr)] space-y-8 ">
        <div className="Enquire  text-center ">
          <h1 className=" text-center text-[36px] font-semibold mb-6 text-[var(--primg)] ">
            Contact us
          </h1>
          <div className=" mx-auto  grid  md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            {/* Phone */}
            <div className="Enquire-box  bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col   items-center">
              <div className=" ibox bg-[var(--primg)] py-3 px-4 rounded-full mb-4 text-white">
                <i className="ri-phone-line text-3xl cursor-pointer  "></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:0800507770" className="text-gray-600  transition">
                0800 507 770
              </a>
            </div>

            {/* Email */}
            <div className="Enquire-box  bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col   items-center">
              <div className=" ibox bg-[var(--primg)]  px-4 py-3 rounded-full mb-4 text-white">
                <i className=" ri-mail-line text-3xl cursor-pointer "></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:harpreet@lifecyclefinancial.co.nz"
                className="text-gray-600  transition  break-words text-center  w-full "
              >
                harpreet@lifecyclefinancial.co.nz
              </a>
            </div>

            {/* Address */}
            <div className="Enquire-box   bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col   items-center">
              <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
                <i className="ri-map-pin-line text-3xl cursor-pointer"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <a className="text-gray-600">3 Otaota way, Flat Bush, Auckland</a>
            </div>
            {/* Business  */}
            <div className="Enquire-box   bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col   items-center">
              <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
                <i className="ri-time-line text-3xl cursor-pointer"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <a className="text-gray-600">Mon -Fri 9:00 AM - 6:00 PM</a>
            </div>
          </div>
        </div>

        <div className="flex  max-lg:flex-col   justify-evenly w-full  gap-8 lg:gap-10   ">
          <div className="flex flex-col  lg:w-[50%] shadow-2xl rounded-xl bg-white  p-4 md:p-8 space-y-5 ">
            <h4 className="  text-lg font-semibold  leading-7 lg:leading-9  ">
              Feel free to enquire about any questions you got
            </h4>
            <div className=" flex-grow rounded-2xl overflow-hidden ">
              {" "}
              <img
                src="./customercare.jpg"
                className=" w-full h-full object-cover object-center"
                alt=""
              />{" "}
            </div>
          </div>

          <div className="form  bg-white  lg:w-[50%] p-8 rounded-xl shadow-2xl">
            <h1 className="text-lg font-semibold mt-2">
              Let’s Connect and Get in Touch With Us.
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-4 flex flex-col gap-8 placeholder-[#A9A8A9] text-[var(--secgr)]"
            >
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full h-12 pl-4 bg-[#F2F2F2] rounded-[5px] text-[14px] border border-[#E0E1E0] outline-0"
              />

              <div className="flex flex-col md:flex-row gap-8">
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
                className=  "  py-2 px-6 rounded-[5px] bg-[var(--primg)] outline-0 text-white font-semibold hover:bg-opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <div
          className="map w-[100%]  p-4  flex flex-col  bg-white  rounded overflow-hidden
"
        >
          <h1 className="text-[36px] flex-grow font-semibold ">Get Direction</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.7834505210967!2d174.93835157549714!3d-36.967228372199926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72b32d2654a2c5%3A0x74d5fe6dac1cda3!2s3%20Otaota%20Way%2C%20Flat%20Bush%2C%20Auckland%202019%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1752840495893!5m2!1sen!2sin"
            className="w-ful h-[400px] border-0 rounded-xl md:mt-4 "
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
