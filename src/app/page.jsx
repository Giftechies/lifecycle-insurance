import Testimonials from "./Components/Testimonial/Testimonials";
import Contact from '@/components/Home/Contact'
import MortageService from "@/components/Home/Mortgage_Service"
import OurService from "@/components/Home/Our_Services"
import Number from "@/components/Home/Number"
import KnowMore from "@/components/Home/Know_More"
import HomeBanner from "@/components/Home/Home_banner"
import { getHomeBanner } from "../actions/homeBanner.action"
import {getOneMore} from "../actions/oneMore.action"
import {getNumber} from "../actions/number.action"
import { getTestimonial } from "../actions/testimonial.action";

export default async function Home() {

  const {data} = await getHomeBanner();
  const {data: oneMoreData} = await getOneMore();
  const {data: numberData} = await getNumber();
  const {data:testimonial} = await getTestimonial();

  return (
    <>
      <main className="  tracking-widest w-full    h-full relative">
        <HomeBanner data={data} />
        <KnowMore oneMoreData={oneMoreData} />
        <Number numberData={numberData} />
        <OurService />
        <MortageService />
        <Contact />
        <Testimonials testimonials={testimonial} />
      </main>
    </>
  );
}
