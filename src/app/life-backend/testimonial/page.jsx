
  import { getTestimonial } from '../../../actions/testimonial.action'
import TestimonialTable from './component/testimonialTable';


export default async function TestimonialPage() {
    
    const testimonialies = await getTestimonial();  

    return(
       <TestimonialTable initialData={testimonialies?.data}  />

    )
}