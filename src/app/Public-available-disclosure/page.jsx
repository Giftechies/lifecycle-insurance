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
            <div className="px-6 py-10 space-y-5 text-black">
  {/* Licensing Information */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Licensing Information</h3>
    <p>
      We operate as a Financial Advice Provider (FSP210065) under a current license issued by the Financial Markets Authority in the name of Lifecycle Financial Services Ltd.
    </p>
    <p>
      There are no conditions on the license to restrict or limit the advice that may be given.
    </p>
  </div>

  {/* Contact Details */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>Phone:</strong> 0800507770</li>
      <li><strong>Email:</strong> harpreet@lifecyclefinancial.co.nz, raji@lifeyclefinancial.co.nz</li>
      <li><strong>Address:</strong> 3 Otaota Way, Flat Bush, Auckland 2019</li>
    </ul>
  </div>

  {/* Duties Information */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Duties Information</h3>
    <p>
      Lifecycle Financial Services Ltd, and anyone who gives financial advice on our behalf, has duties under the Financial Markets Conduct Act 2013 relating to the way we give advice. We are required to:
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li>Give priority to your interests</li>
      <li>Exercise care, diligence, and skill</li>
      <li>Meet standards of competence, knowledge, and skill</li>
      <li>Meet standards of ethical behaviour and client care</li>
    </ul>
    <p>
      More information is available by contacting us, or by visiting the <a href="https://www.fma.govt.nz" className="text-blue-600 underline">Financial Markets Authority</a>.
    </p>
  </div>

  {/* Nature and Scope */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Nature and Scope of the Advice</h3>
    <p>Our financial advisers provide advice in relation to:</p>
    <ul className="list-disc ml-6 space-y-1">
      <li>Life and disability Insurance</li>
      <li>Health Insurance</li>
      <li>Home Loans, Business Loans, Construction Loans</li>
    </ul>
    <p>We only provide advice about products from the following providers:</p>
    <h4 className="mt-2 font-semibold">Loan Providers:</h4>
    <ul className="list-disc ml-6">
      <li>ANZ, BNZ, ASB, ASAP Finance Limited, Avanti Finance, Cressida, DBR, First Mortgage Trust, Heartland Bank, Liberty Financial, NZCU, Pepper Money, RESIMAC, SBS Bank, SELECT, Sovereign, The Co-operative Bank</li>
    </ul>
    <h4 className="mt-2 font-semibold">Insurance Providers:</h4>
    <ul className="list-disc ml-6">
      <li>Asteron Life, AIA, NIB, Fidelity Life, Partners Life, Chubb Life</li>
    </ul>
  </div>

  {/* Remuneration */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Remuneration</h3>
    <p>
      Our remuneration comes primarily from commissions paid by insurance companies or product providers.
    </p>
    <p>
      We may charge a one-off fee in rare cases where we receive no commission. This will be agreed upon in writing and won’t exceed $2,500 (+ GST).
    </p>
  </div>

  {/* Commissions */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Commissions / Brokerage</h3>
    <p>
      On settlement, we receive upfront and/or renewal commissions. This also covers adviser remuneration and business costs.
    </p>
    <p>
      We ensure commissions do not influence our advice by:
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li>Following a needs-based advice process</li>
      <li>Providing commission disclosure in a Statement of Advice</li>
    </ul>
  </div>

  {/* Conflicts of Interest */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Conflicts of Interest and Incentives</h3>
    <p>
      Our advisers may receive non-monetary benefits from providers (e.g., gifts or event tickets), but we train our team to prioritize clients’ interests.
    </p>
    <p>
      We maintain a conflicts-of-interest register and conduct annual compliance audits and adviser training.
    </p>
  </div>

  {/* Complaints */}
  <div>
    <h3 className="text-xl font-semibold mb-2">Complaints Handling and Dispute Resolution</h3>
    <p>
      We aim to resolve issues sincerely and quickly. If you have a concern:
    </p>
    <h4 className="font-semibold mt-2">Step One – Talk to Us</h4>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>Phone:</strong> 021408971</li>
      <li><strong>Email:</strong> harpreet@lifecyclefinancial.co.nz</li>
      <li><strong>Write:</strong> 3 Otaota Way, Flat Bush, Auckland 2019</li>
    </ul>
    <p>
      We’ll acknowledge your complaint within 24 hours, log it in our register, and respond within 7 working days.
    </p>

    <h4 className="font-semibold mt-4">Step Two – Contact FSCL</h4>
    <p>
      If unresolved, you can contact Financial Services Complaints Limited (FSCL) – an independent, free service:
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>Phone:</strong> 0800 347 257</li>
      <li><strong>Email:</strong> info@fscl.org.nz</li>
      <li><strong>Post:</strong> PO Box 5967, Wellington 6145</li>
      <li><strong>Website:</strong> <a href="https://www.fscl.org.nz" className="text-blue-600 underline">www.fscl.org.nz</a></li>
    </ul>
  </div>
</div>

          </div>
        </main>
      </div>
    </>
  );
}
