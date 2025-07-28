"use client"
import { useEffect, useState } from "react"
import {getCategoryPages} from '../lib/api'
import Banner from '../Components/Banner/Banner'
import { Section } from "lucide-react"



export default function(){
    const [data, setdata] = useState(null)

    // useEffect(()=>{
    //     async function fetchData() {
    //         try {
    //             const res = await getCategoryPages("privacy-policy")
    //             if(res){
    //                 setdata(res)
    //                 console.log("resp>>>>>",res);
                    
    //             }
                
    //         } catch (error) {
    //             console.log('error p>>>>',error)
                
    //         }
    //     }
    //     fetchData()
    // },[])

    // if(!data){
    //   return  <div>loding...</div>
    // }
    return(

        <>
        <Banner title="Privacy Policy"/>
         <section  className="max-w-[1600px] mx-auto p-4 lg:p-[3rem] ">
            <main>
                <div  className="styled-html privacy" >
                                 <div className="privacy-policy space-y-6 text-[15px] text-black/80">
  <h3 className="text-[22px] font-semibold text-black">1. Our commitment to protecting your privacy</h3>
  <p>
    We understand how important it is to protect your personal information. This document sets out our privacy
    commitment in respect of the personal information we hold about you and what we do with that information.
  </p>
  <p>
    It is important to us that you are confident that any personal information we hold about you will be treated in a way
    that ensures the protection of your personal information. Our commitment in respect of personal information is to
    abide by the Privacy Principles set out in the Privacy Act 2020 (or any successor legislation) (the Privacy Act) and
    all other applicable laws.
  </p>
  <p>
    In this Privacy Policy, “we” “us” and “our” means Lifecycle Financial Services Ltd, as the context requires. By
    receiving our services, you agree to this Privacy Policy and to us collecting, using, disclosing, storing, and
    retaining your personal information in accordance with this Privacy Policy and the Privacy Act 2020.
  </p>
  <p>
    We may amend this Privacy Policy from time to time and provide written notice of this to you. If you do not agree
    to any amendments, you may no longer receive our services after the date that any amendment takes effect.
  </p>

  <h3 className="text-[20px] font-semibold text-black">2. Your Authorisation</h3>
  <p>
    By providing us with personal information, engaging us to provide you with services, or by using our website, you
    consent to the collection, use, storage and disclosure of personal information in accordance with this Privacy Policy.
  </p>

  <h3 className="text-[20px] font-semibold text-black">3. Changes to our Privacy Policy</h3>
  <p>
    We may change our Privacy Policy from time to time, by publishing an updated version on this page, to reflect
    changes in the law and our business needs so long as the changes do not disadvantage you. By continuing to
    engage us or use our website you will be deemed to have accepted the updated Privacy Policy.
  </p>

  <h3 className="text-[20px] font-semibold text-black">4. What personal information may we collect and why?</h3>
  <p>The personal information that we may collect includes:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>Your name</li>
    <li>Your telephone number and/or email address</li>
    <li>Your address or location</li>
    <li>Recordings of your interactions with us</li>
    <li>Financial, billing, or invoicing information including bank account numbers</li>
    <li>Insurance information including details of assets and past insurance claims</li>
  </ul>
  <p>
    If you engage us to provide services to you, we may collect personal information about your financial situation or
    goals in order to recommend mortgage and insurance products.
  </p>
  <p>We collect your personal information for purposes such as:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>Responding to your requests or inquiries</li>
    <li>Providing services (e.g., product recommendations)</li>
    <li>Sending communications and marketing you may be interested in</li>
    <li>Conducting market research</li>
    <li>Any purpose authorised by you or the Privacy Act</li>
  </ul>
  <p>
    You may ‘opt out’ of marketing at any time. We may also collect info (credit/health) on behalf of lenders,
    insurers, and providers.
  </p>

  <h3 className="text-[20px] font-semibold text-black">5. How do we collect your personal information?</h3>
  <p>We may collect your personal information from:</p>
  <ul className="list-disc pl-5 space-y-1">
    <li>Directly from you (via our website or conversations)</li>
    <li>Lifecycle Financial Services Ltd and related bodies corporate</li>
    <li>Credit reporting agencies</li>
    <li>With your consent, from banks and employers</li>
    <li>Product providers</li>
    <li>Any person authorized by you or the Privacy Act</li>
  </ul>
  <p>
    If you provide us personal info about someone else, you must confirm they have authorised this in line with the
    Privacy Act and are aware of their access rights.
  </p>

  <h3 className="text-[20px] font-semibold text-black">6. Who do we disclose your personal information to?</h3>
  <ul className="list-disc pl-5 space-y-1">
    <li>KAN and related bodies corporate</li>
    <li>Product providers and third parties</li>
    <li>Referral partners</li>
    <li>Service providers and contractors</li>
    <li>Investors and potential buyers</li>
    <li>Government agencies, regulators</li>
    <li>Quote Monster (for quote comparisons)</li>
    <li>Auditors like KAN for regulatory compliance</li>
    <li>Your employer, referees, and credit/ID agencies</li>
  </ul>
  <p>
    Credit reporting agencies may use your credit info to provide their services. We ensure any third party meets our
    privacy standards before sharing.
  </p>

  <h3 className="text-[20px] font-semibold text-black">7. Updating your personal information</h3>
  <p>
    Please notify us of any changes to your personal info. We rely on you to ensure the info we hold is accurate.
  </p>

  <h3 className="text-[20px] font-semibold text-black">8. Do we disclose your personal information to anyone outside New Zealand?</h3>
  <p>
    Yes, we may store your personal info in overseas cloud services or share it with overseas service providers as
    needed.
  </p>

  <h3 className="text-[20px] font-semibold text-black">9. Our website</h3>
  <h4 className="font-semibold text-black mt-2">Cookies and IP addresses</h4>
  <p>
    We use cookies to recognise your device, track website usage, improve our service and measure trends. IP address,
    browser/device type, time spent, and search terms may be collected.
  </p>
  <p>
    You can disable cookies in your browser. Submitting your email links that info with cookies we collect.
  </p>

  <h4 className="font-semibold text-black mt-2">Security</h4>
  <p>
    Online data transmission is inherently insecure. We cannot guarantee your data won’t be intercepted online.
  </p>

  <h4 className="font-semibold text-black mt-2">Links and third-party advertisements</h4>
  <p>
    We are not responsible for the privacy practices of third-party websites or ads linked from our site. They should
    inform you of their own policies.
  </p>

  <h3 className="text-[20px] font-semibold text-black">10. Are you required to provide personal information to us?</h3>
  <p>
    You are not required to, but not doing so may affect our ability to serve you or help with products. In some cases,
    we may be able to assist without collecting personal info (e.g., general inquiries).
  </p>

  <h3 className="text-[20px] font-semibold text-black">11. Access and correction to your personal information</h3>
  <p>
    You can request access or correction of your personal info at any time by contacting us. We may charge a reasonable
    fee for retrieval.
  </p>

  <h3 className="text-[20px] font-semibold text-black">12. Further information</h3>
  <p>
    For questions about this Privacy Policy or your personal info, please contact us.
  </p>
  <p>This Privacy Policy was last updated on <strong>JULY 2023</strong>.</p>

  <h3 className="text-[20px] font-semibold text-black">13. How to contact us</h3>
  <ul className="list-disc pl-5 space-y-1">
    <li>Email: harpreet@lifecyclefinancial.co.nz </li>
    <li>Phone: 0800 507 770</li>
    <li>Mail: Harpreet Rattan, 3 Otaota way, Flat Bush, Auckland</li>
  </ul>
</div>
                </div>


            </main>
         </section>
        </>
    )
}