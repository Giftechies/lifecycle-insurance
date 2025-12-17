"use client";
import Testimonials from "./Components/Testimonial/Testimonials";
import Contact from '@/components/Home/Contact'
import MortageService from "@/components/Home/Mortgage_Service"
import OurService from "@/components/Home/Our_Services"
import Number from "@/components/Home/Number"
import KnowMore from "@/components/Home/Know_More"
import HomeBanner from "@/components/Home/Home_banner"

export default function Home() {

  return (
    <>
      <main className="  tracking-widest w-full    h-full relative">
        <HomeBanner />
        <KnowMore />
        <Number />
        <OurService />
        <MortageService />
        <Contact />
        <Testimonials />
      </main>
    </>
  );
}
