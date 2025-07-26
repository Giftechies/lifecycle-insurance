"use client";

import React, { useState, useCallback, FC, SVGProps, useEffect } from 'react';

// --- Consolidated Types and Constants ---

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'laddi dhillon',
    quote: `I highly recommend Lifecycle financial for their efficiency and support. They maintained excellent communication and were always ...`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Pritpaal Sokhi',
    quote: `Excellent service and great financial advice to help save money and invest wisely. Harpreet Rattan is very professional, quick...`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Monu Singh',
    quote: `Really good service from Harpreet Rattan . he is really good consultant and always give good advice to help you save money and do...`,
    rating: 4,
  },
  {
    id: 4,
    name: 'Sushwanth Sai Konigeti',
    quote: `Very Professional and Quick in providing financial advice and Mortgages. Mrs Raji Rathan is being very helpful and supportive throughout the ...`,
    rating: 5,
  },
  {
    id: 5,
    name: 'Japjeet Kaur',
    quote: `Very satisfied with the service . Samkit understands our requirement and advise the best policy product for us within our budget.`,
    rating: 4,
  },
];


// --- End of Consolidated Section ---

// SVG Icons
const ChevronLeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

const StarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

// Star Rating Component
interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
    return (
        <div className="flex justify-center items-center mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    className={`w-5 h-5 ${ i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
  const initial = testimonial.name.charAt(0).toUpperCase();
  const bgColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-yellow-500'];
  const bgColor = bgColors[testimonial.id % bgColors.length];

  return (
    <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl overflow-hidden ">
      <div className="flex flex-col items-center mb-6">
        <div
          className={`w-25 h-25 rounded-full ${bgColor} text-white flex items-center justify-center text-4xl font-medium mb-4`}
        >
          {initial}
        </div>

        <div className='w-full flex flex-col items-center'>
          <p className="font-semibold text-lg text-slate-900 ">{testimonial.name}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <blockquote className="text-slate-600 leading-relaxed">
        <h3 className=' text-[14px]  ' >“{testimonial.quote}”</h3>
      </blockquote>
    </div>
  );
};


// Main Testimonials Component
const Testimonials: FC = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [Ispc, setIspc] = useState(false)
  const [IsMoblie, setIsMobie] = useState(false)

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex ===  testimonials.length - 1? 0  : prevIndex + 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, []);
  
  const getCardClasses = (index: number) => {
    let offset = index - activeIndex;
    const total = testimonials.length;
    if (Math.abs(offset) > total / 2) {
      offset = offset > 0 ? offset - total : offset + total;
    }

    useEffect(()=>{
    setIspc(window.innerWidth > 1024)
    setIsMobie(window.innerWidth < 640)
    },[Ispc])

    if(Ispc){
       switch (offset) {
      case 0:
        return 'transform scale-95 opacity-100 z-20 shadow';
      case 1:
        return 'transform scale-[0.8] opacity-90 z-10 translate-x-[100%] shadow';
      case -1:
        return 'transform scale-[0.8] opacity-90 z-10 translate-x-[-100%] shadow';
      default:
        return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
    }
    }if(IsMoblie){

       switch (offset) {
      case 0:
        return 'transform scale-55 opacity-100 z-20 shadow';
      case 1:
        return 'transform scale-[0.4] opacity-90 z-10 translate-x-[80%] shadow';
      case -1:
        return 'transform scale-[0.4] opacity-90 z-10 translate-x-[-80%] shadow';
      default:
        return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
    }

    } else{
       switch (offset) {
      case 0:
        return 'transform scale-55 opacity-100 z-20 shadow';
      case 1:
        return 'transform scale-[0.4] opacity-90 z-10 translate-x-[50%] shadow';
      case -1:
        return 'transform scale-[0.4] opacity-90 z-10 translate-x-[-50%] shadow';
      default:
        return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
    }
    }

   
  };

  return (
    <div className="  w-full max-w-[1600px] p-4 lg:p-[3rem] mx-auto bg-[var(--secgr)]/10 overflow-hidden ">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secgr)]">
            Our Client Reviews
            
          </h1>
      </div>

      <div className="relative w-full h-[450px] ">
        <button
          onClick={handlePrev}
          className="absolute  top-1/2 -translate-y-1/2 left-0 z-30 bg-white/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-md"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="relative w-full mx-auto h-full flex items-center justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute transition-all duration-800 ease-in-out ${getCardClasses(index)}`}
              aria-hidden={index !== activeIndex}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-30 bg-white/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-md"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex  justify-center space-x-3 mt-12 " role="tablist" aria-label="Testimonials Navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-slate-800 scale-125' : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-selected={activeIndex === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
