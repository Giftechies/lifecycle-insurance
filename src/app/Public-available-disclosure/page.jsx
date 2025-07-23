"use client";
import { useEffect, useState } from "react";
import { getCategoryPages } from "../lib/api";
import Banner from "../Components/Banner/Banner";

export default function () {
  const [data, setdata] = useState(null);

  return (
    <>
      <Banner title="Public Available Disclosure" />
      <div className="max-w-[1600px] mx-auto p-4 lg:p-[3rem] ">
        <main>
          <div className="styled-html privacy">
            <div className="complaint-section px-4 py-6 space-y-6 text-[15px] leading-relaxed text-gray-800">
              <h3 className="text-xl font-bold">Make a Complaint</h3>

              <div>
                <h3 className="text-lg font-semibold">
                  Complaints handling and dispute resolution
                </h3>
                <p>
                  At LifeCycle Financial, we are committed to providing the
                  highest standards of service and support. However, if you are
                  dissatisfied or experience an issue, we encourage you to let
                  us know as soon as possible. Your feedback helps us
                  continuously improve the products and services we offer.
                </p>
                <p>
                  We take complaints seriously and are committed to resolving
                  them sincerely, fairly, and as quickly as possible. We have a
                  well-established escalation process that ensures your concerns
                  are addressed promptly, with further options available if
                  needed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Step One – Talk to Us</h3>
                <p>
                  You can contact us in any of the following ways. Often, a
                  quick conversation or email is all that’s needed to resolve
                  your concern:
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Phone:</strong> 021 408 971
                  </li>
                  <li>
                    <strong>Email:</strong> harpreet@lifecyclefinancial.co.nz
                  </li>
                  <li>
                    <strong>Post:</strong> 3 Otaota Way, Flat Bush, Auckland
                    2019
                  </li>
                </ul>

                <p className="mt-2">Please include:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>A clear description of your complaint</li>
                  <li>The outcome or resolution you are seeking</li>
                </ul>

                <p className="mt-2">What happens next:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>We will acknowledge your complaint within 24 hours</li>
                  <li>
                    Your complaint will be recorded in our Complaints Register
                    and notified to our Licence Holder
                  </li>
                  <li>We may contact you to discuss the matter further</li>
                  <li>A response will be provided within 7 working days</li>
                  <li>If we need more time, we will let you know</li>
                  <li>
                    If we are unable to reach a resolution, you may refer your
                    complaint to our external dispute resolution service at no
                    cost to you
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Step Two – Contact Financial Services Complaints Limited
                  (FSCL)
                </h3>
                <p>
                  If we are unable to resolve your complaint to your
                  satisfaction, we will issue a letter of deadlock. You can then
                  contact FSCL — an independent, free service that can help
                  resolve your concerns.
                </p>

                <ul className="list-disc list-inside ml-4">
                  <li>
                    <strong>Phone:</strong> 0800 347 257
                  </li>
                  <li>
                    <strong>Email:</strong> info@fscl.org.nz
                  </li>
                  <li>
                    <strong>Post:</strong> Financial Services Complaints Ltd, PO
                    Box 5967, Wellington 6145
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.fscl.org.nz"
                      className="text-blue-600 underline"
                    >
                      www.fscl.org.nz
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
