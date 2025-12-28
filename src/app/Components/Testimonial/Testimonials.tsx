"use client";

import React, { useState, useCallback, FC, SVGProps, useEffect } from 'react';

// --- Types ---

export interface Testimonial {
  _id?: string;   // For MongoDB data
  id?: number;    // For Static data
  name: string;
  quote?: string;  // Static data field
  review?: string; // Database field
  rating?: number; // Static data field
  rate?: number;   // Database field
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// --- SVG Icons ---

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

// --- Sub-Components ---

const StarRating: FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    className={`w-5 h-5 ${ i < rating ? 'text-yellow-400' : 'text-slate-300'}`}
                />
            ))}
        </div>
    );
};

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const initial = testimonial.name.charAt(0).toUpperCase();
  const bgColors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500', 'bg-yellow-500'];
  // Fallback to index 0 if id/_id isn't numeric
  const bgColor = bgColors[0]; 

  return (
    <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-xl overflow-hidden ">
      <div className="flex flex-col items-center mb-6">
        <div className={`w-20 h-20 rounded-full ${bgColor} text-white flex items-center justify-center text-4xl font-medium mb-4`}>
          {initial}
        </div>
        <div className='w-full flex flex-col items-center'>
          <p className="font-semibold text-lg text-slate-900 ">{testimonial.name}</p>
        </div>
      </div>
      {/* Handles both 'rating' (static) and 'rate' (DB) */}
      <StarRating rating={testimonial.rate || testimonial.rating || 0} />
      <blockquote className="text-slate-600 leading-relaxed">
        {/* Handles both 'quote' (static) and 'review' (DB) */}
        <h3 className='text-[14px]'>“{testimonial.review || testimonial.quote}”</h3>
      </blockquote>
    </div>
  );
};

// --- Main Component ---

const Testimonials: FC<TestimonialsProps> = ({ testimonials = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [Ispc, setIspc] = useState(false);
  const [IsMoblie, setIsMobie] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIspc(window.innerWidth > 1024);
        setIsMobie(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  }, [testimonials.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  }, [testimonials.length]);
  
  const getCardClasses = (index: number) => {
    let offset = index - activeIndex;
    const total = testimonials.length;
    if (Math.abs(offset) > total / 2) {
      offset = offset > 0 ? offset - total : offset + total;
    }

    if(Ispc){
       switch (offset) {
          case 0: return 'transform scale-95 opacity-100 z-20 shadow';
          case 1: return 'transform scale-[0.8] opacity-90 z-10 translate-x-[100%] shadow';
          case -1: return 'transform scale-[0.8] opacity-90 z-10 translate-x-[-100%] shadow';
          default: return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
       }
    } 
    
    if(IsMoblie){
       switch (offset) {
          case 0: return 'transform scale-80 opacity-100 z-20 shadow';
          case 1: return 'transform scale-[0.4] opacity-90 z-10 translate-x-[80%] shadow';
          case -1: return 'transform scale-[0.4] opacity-90 z-10 translate-x-[-80%] shadow';
          default: return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
       }
    } 

    // Tablet/Default
    switch (offset) {
      case 0: return 'transform scale-55 opacity-100 z-20 shadow';
      case 1: return 'transform scale-[0.4] opacity-90 z-10 translate-x-[50%] shadow';
      case -1: return 'transform scale-[0.4] opacity-90 z-10 translate-x-[-50%] shadow';
      default: return `transform ${offset > 0 ? 'translate-x-[110%]' : 'translate-x-[-110%]'} scale-[0.7] opacity-0 z-0`;
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="w-full max-w-[1600px] p-4 lg:p-[3rem] mx-auto bg-[var(--secgr)]/10 overflow-hidden ">
      <div className="text-center mb-12">
          <h6 className="text-[18px] md:text-[36px] mt-8 font-bold text-[var(--secgr)]">
            Our Client Reviews
          </h6>
      </div>

      <div className="relative w-full h-[400px] md:h-[300px] lg:h-[400px] ">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-30 bg-white/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-md"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <div className="relative w-full mx-auto h-full flex items-center justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial._id || testimonial.id || index}
              className={`absolute transition-all duration-800 ease-in-out ${getCardClasses(index)}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-30 bg-white/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:bg-white transition-all shadow-md"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center space-x-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-slate-800 scale-125' : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;