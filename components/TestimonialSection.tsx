'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'Apex Industrial Corp',
    content: "Bingo Dee has completely transformed our supply chain reliability. Their engineering supplies are top-tier, and their project consultation saved us over two months of downtime on our recent expansion.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'David Okafor',
    role: 'Lead Project Manager',
    company: 'Westgate Construction',
    content: "The level of precision in their welding and fabrication is unmatched. We contracted them for heavy structural works, and they delivered perfectly aligned components ahead of schedule.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Procurement Head',
    company: 'Nexus Mining Solutions',
    content: "Sourcing specialized industrial valves and piping systems used to be a headache until we partnered with Bingo Dee. Their inventory scale and immediate dispatch capabilities are phenomenal.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Chief Engineer',
    company: 'Oceanic Refining',
    content: "We rely on them exclusively for all our civil and structural needs. Their team doesn't just execute; they consult, optimize, and bring serious technical expertise to every single blueprint.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    // Start at the middle set for infinite scroll
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 400;
      const gap = 32; // gap-8
      const setWidth = testimonials.length * (itemWidth + gap);
      
      setTimeout(() => {
        container.scrollLeft = setWidth;
      }, 50);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 400;
    const gap = 32;
    const itemFullWidth = itemWidth + gap;
    const setWidth = testimonials.length * itemFullWidth;

    // Calculate active dot index
    const scrollPos = container.scrollLeft;
    let index = Math.round(scrollPos / itemFullWidth);
    
    // Normalize to original array length safely
    let normalizedIndex = index % testimonials.length;
    if (normalizedIndex < 0) normalizedIndex += testimonials.length;
    setActiveIndex(normalizedIndex);

    // Infinite loop jump
    if (container.scrollLeft <= 0) {
      container.scrollLeft += setWidth;
    } else if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 350;
      scrollRef.current.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 350;
      scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
    }
  };

  const scrollToDot = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 400;
    const gap = 32;
    // Scroll to the middle set corresponding index
    const targetScroll = (testimonials.length + index) * (itemWidth + gap);
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      scrollRight();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="w-full bg-[#1c1c1c] py-24 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Background Geometric Polygon */}
      <div 
        className="absolute top-0 right-0 w-[80%] md:w-[60%] h-full bg-primary/10 z-0 pointer-events-none"
        style={{
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      ></div>

      <div className="relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 px-6 lg:px-12">
          <div className="flex items-center justify-center w-full max-w-[600px] mx-auto mb-6">
            <div className="h-[1px] bg-gray-700 flex-grow"></div>
            <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-400 tracking-wide">
              Client Testimonials
            </h3>
            <div className="h-[1px] bg-gray-700 flex-grow"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Don't just take our word for it. <br className="hidden md:block"/>
            <span className="text-gray-500">See what our partners say.</span>
          </h2>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x pl-8 snap-mandatory scrollbar-hide pb-8 -mx-6  "
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedTestimonials.map((t, idx) => {
            const shapeColors = ['bg-[#3b82f6]', 'bg-[#10b981]', 'bg-[#8b5cf6]', 'bg-[#f59e0b]', 'bg-[#ef4444]'];
            const colorClass = shapeColors[idx % shapeColors.length];

            return (
              <div 
                key={idx}
                className="relative flex-none w-[320px] md:w-[400px] h-[400px] md:h-[450px] snap-start group"
              >
                {/* Decorative Colored Polygon Below the Card */}
                <div 
                  className={`absolute bottom-0 right-0 w-[80%] h-[50%] ${colorClass} z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}
                  style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%)'
                  }}
                ></div>

                {/* Main White Card */}
                <div 
                  className="absolute top-0 left-0 w-[95%] h-[92%] bg-white p-8 md:p-10 shadow-lg z-10 flex flex-col justify-between"
                  style={{
                    clipPath: 'polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 10% 100%, 0% 90%)'
                  }}
                >
                  {/* Background Open Quote Icon */}
                  <div className="absolute top-1 left-2 text-primary/10 transition-colors duration-300 group-hover:text-primary/20 z-0 pointer-events-none">
                    <svg 
                      className="w-15 h-15 " 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Top Content (Quote) */}
                  <div className="relative z-10 pt-4">
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px] italic">
                      {t.content}
                    </p>
                  </div>

                  {/* Bottom Content (Author Info) */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ffb700] p-[2px] flex-shrink-0 bg-white">
                      <img 
                        src={t.image} 
                        alt={t.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1f2937] text-[16px]">{t.name}</h4>
                      <p className="text-sm font-medium text-primary">{t.role}</p>
                      <p className="text-xs text-gray-500">{t.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-10 px-6 lg:px-12">
          
          {/* Spacer to perfectly center the dots when using space-between */}
          <div className="hidden md:block w-[100px]"></div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToDot(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-600 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-x-1 rounded-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center bg-[#2a2a2a] hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 hover:shadow-md hover:translate-x-1 rounded-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />

      </div>
    </section>
  );
}
