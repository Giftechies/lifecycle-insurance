"use client";

import { useForm } from "react-hook-form";
import Banner from "../Components/Banner/Banner";
import { useState, useEffect } from "react"; // useEffect is not strictly needed for the form logic itself, but kept as it was in your original code.
import { toast } from "react-toastify";

export default function EnquiryNow() {
  // const [setting, setSetting] = useState(); // Uncomment if you uncomment the fetchData useEffect
  // const [enquiries, setEnquiries] = useState([]); // Uncomment if you use this state elsewhere
  const { register, handleSubmit, reset } = useForm();

  // New states for feedback
  const [status, setStatus] = useState(''); // To display success/error messages to the user
  const [loading, setLoading] = useState(false); // To manage button state during submission

  const onSubmit = async (formData) => {
    setLoading(true); // Start loading
    setStatus('Sending your message...'); // Provide initial feedback

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
          sourcePage: "Enquire Page"
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('✅ Email sent successfully');
        toast.success('Your message has been sent successfully!');
        
        setStatus('Your message has been sent successfully!');
        reset(); // Clear the form only on success
      } else {
        // If response.ok is false, or data.success is false
        console.error('❌ Email failed:', data.message);
         toast.error(`Failed to send message: ${data.message || 'Unknown error'}. Please try again.`);
        setStatus(`Failed to send message: ${data.message || 'Unknown error'}. Please try again.`);
      }
    } catch (error) {
      console.error('❌ Network or server error:', error);
      toast.error('An error occurred. Please check your internet connection and try again.');
      setStatus('An error occurred. Please check your internet connection and try again.');
    } finally {
      setLoading(false); // End loading regardless of success or failure
    }
  };

  return (
    <>
      <Banner title="Enquire " />
      <section className="enquire p-8 md:p-[3rem] bg-[var(--secgr)]/10 text-[var(--secgr)] space-y-8 ">
        <div className="Enquire text-center ">
          <h1 className="text-center text-[36px] font-semibold mb-6 text-[var(--primg)] ">
            Contact us
          </h1>
          <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Phone */}
            <div className="Enquire-box bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-center">
              <div className="ibox bg-[var(--primg)] py-3 px-4 rounded-full mb-4 text-white">
                <i className="ri-phone-line text-3xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <a href="tel:0800507770" className="text-gray-600 transition">
                0800 507 770
              </a>
            </div>

            {/* Email */}
            <div className="Enquire-box bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-center">
              <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
                <i className="ri-mail-line text-3xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href="mailto:harpreet@lifecyclefinancial.co.nz"
                className="text-gray-600 transition break-words text-center w-full"
              >
                harpreet@lifecyclefinancial.co.nz
              </a>
            </div>

            {/* Address */}
            <div className="Enquire-box bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-center">
              <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
                <i className="ri-map-pin-line text-3xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Address</h4>
              <a className="text-gray-600">3 Otaota way, Flat Bush, Auckland</a>
            </div>
            {/* Business */}
            <div className="Enquire-box bg-white shadow rounded-lg p-6 border-b-2 border-[var(--primg)] flex flex-col items-center">
              <div className="ibox bg-[var(--primg)] px-4 py-3 rounded-full mb-4 text-white">
                <i className="ri-time-line text-3xl"></i>
              </div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <a className="text-gray-600">Mon -Fri <br /> 9:00 AM - 6:00 PM</a>
            </div>
          </div>
        </div>

        <div className="flex max-lg:flex-col justify-evenly w-full gap-8 lg:gap-10">
          <div className="flex flex-col lg:w-[50%] shadow-2xl rounded-xl bg-white p-4 md:p-8 space-y-5">
            <h4 className="font-semibold">
              Feel free to enquire about any questions you got
            </h4>
            <div className="flex-grow rounded-2xl overflow-hidden">
              <img
                src="./customercare.jpg"
                className="w-full h-full object-cover object-center"
                alt="Customer Care"
              />
            </div>
          </div>

          <div className="form bg-white lg:w-[50%] p-4 md:p-8 rounded-xl shadow-2xl">
            <h4 className="font-semibold">
              Let’s Connect and Get in Touch With Us.
            </h4>

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
                disabled={loading} // Disable button when loading
                className={`py-2 px-6 rounded-[5px] bg-[var(--primg)] outline-0 text-white font-semibold transition
                  ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 cursor-pointer'}`}
              >
                {loading ? 'Sending...' : 'Send'} {/* Change button text */}
              </button>

            
            </form>
          </div>
        </div>

        <div
          className="map w-[100%] p-4 md:p-8 flex flex-col bg-white rounded overflow-hidden"
        >
          <h4 className="text-[18px] flex-grow font-semibold mb-2 "> <i className="ri-record-circle-line"></i> Get Direction</h4>
          {/* IMPORTANT: Replace this iframe src with a proper Google Maps Embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.646543501744!2d174.9189033760451!3d-36.95353847225112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4b8f5d0f1b21%3A0x6d0d4b8f5d0f1b21!2s3%20Otaota%20Way%2C%20Flat%20Bush%2C%20Auckland%202019%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-[400px] border-0 rounded-xl md:mt-4 "
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}