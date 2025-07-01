export default function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="footer bg-[var(--tri)] overflow-hidden">
        <section className="w-full h-full max-w-[1500px] mx-auto">
          <section className="md:min-h-[36em] text-[14px] pb-10 lg:pb-12 tracking-wide px-4 lg:px-[9%] font-light max-w-[1500px] mx-auto lg:h-[35em] lg:text-[14px]">
            
            <main className="border-b border-dotted border-white/50 text-white/90
              flex flex-col gap-10
              lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-8 lg:items-start lg:py-[5%]">
              
              {/* Insurance */}
              <div className="pt-10 shrink-0 lg:pt-0 lg:basis-[18%]">
                <h3 className="text-[20px] font-medium mb-3 lg:mb-0 text-white">Insurance</h3>
                <div className="flex flex-col space-y-4 lg:mt-4 ">
                  <p>Life Insurance</p>
                  <p>Trauma Recovery Cover</p>
                  <p>Total Permanent Disability Benefit Cover</p>
                  <p>Mortgage & Rent Protection Cover</p>
                  <p>Income Protection Cover</p>
                  <p>Medical Insurance</p>
                  <p>Group Insurance</p>
                </div>
              </div>

              {/* Mortgage */}
              <div className="pt-10 shrink-0 lg:pt-0 lg:basis-[18%]">
                <h3 className="text-[20px] font-medium mb-3 text-white">Mortgage</h3>
                <div className="flex flex-col space-y-4">
                  <p>Home Loans</p>
                  <p>Refinance</p>
                  <p>Investment Loan</p>
                  <p>Business Loan</p>
                  <p>Construction Loan</p>
                  <p>Commercial Loan</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-10 shrink-0 lg:pt-0 lg:basis-[18%]">
                <h3 className="text-[20px] font-medium mb-3 text-white">Quick Links</h3>
                <div className="flex flex-col space-y-4">
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Insurance</p>
                  <p>Mortgage</p>
                  <p>Case Study</p>
                  <p>Contact Us</p>
                </div>
              </div>

              {/* Important Links */}
              <div className="pt-10 lg:pt-0 shrink-0 lg:basis-[18%]">
                <h3 className="text-[20px] font-medium mb-3 text-white">Important Links</h3>
                <div className="flex flex-col space-y-4">
                  <p>Calculator</p>
                  <p>Interest Rates</p>
                  <p className="lg:w-[70%]">Public Available Disclosure</p>
                  <p>Make a Complaint</p>
                  <p>Privacy Policy</p>
                </div>
              </div>

              {/* Reach Us */}
              <div className="pt-10 lg:pt-0 lg:basis-[18%]">
                <h3 className="text-[20px] font-medium mb-3 text-white">Reach Us</h3>
                <div className="flex flex-col text-[14px] space-y-4">
                  <div className="flex items-start gap-1">
                    <i className="ri-phone-line text-2lg "></i>
                    <p>0800 50 7770</p>
                  </div>
                  <div className="flex items-start gap-1">
                    <i className="ri-mail-line  text-2lg"></i>
                    <p>harpreet@lifecyclefinancial.co.nz</p>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-map-pin-line mr-2 mt-1 text-2lg"></i>
                    <span>
                      402 Ormiston Road, Flat Bush, Auckland, 2016, North Island,
                      New Zealand
                    </span>
                  </div>
                  <div className="w-full border-t pb-8 lg:pb-0 border-dotted border-white/30 text-lg pt-4 flex gap-2">
                    <div className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                      <i className="ri-facebook-circle-line "></i>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                      <i className="ri-youtube-line"></i>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                      <i className="ri-instagram-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <h1 className="text-white font-medium tracking-widest text-center mt-3 mb-12 md:mb-0">
              Copyright © 2025 Lifecycle Financial. All Rights Reserved.
            </h1>
          </section>
        </section>
      </footer>
    </>
  )
}
