'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 350;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 350;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Engineering Services",
      titleColor: "text-[#171717]",
      bgColor: "bg-[#ffc107]",
      desc: "Civil, structural and construction management solutions."
    },
    {
      title: "Engineering Supplies",
      titleColor: "text-white",
      bgColor: "bg-primary",
      desc: "Reliable supply of industrial materials, pumps, valves, piping systems, steel products and more."
    },
    {
      title: "Welding & Fabrication",
      titleColor: "text-[#171717]",
      bgColor: "bg-[#00e5ff]",
      desc: "Precision fabrication and welding services delivered from our modern workshop."
    },
    {
      title: "Industrial Supplies",
      titleColor: "text-white",
      bgColor: "bg-[#f59e0b]",
      desc: "Supply of PPE, office equipment, and general merchandise for industrial scale needs."
    },
    {
      title: "Project Consultation",
      titleColor: "text-white",
      bgColor: "bg-[#8b5cf6]",
      desc: "Expert technical assessment, quotation, and full project lifecycle support."
    }
  ];

  return (
    <section className="w-full bg-white ">
      <div className="max-w-[1400px] mx-auto pl-6 ">
        
        {/* Header with lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
          <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide">
            Our Services
          </h3>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative ">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="relative flex-none w-[340px] md:w-[420px] h-[420px] snap-start group"
              >
                {/* Colored Top Rectangle */}
                <div className={`absolute top-0 left-0 w-full h-[130px] ${service.bgColor} p-6`}>
                  <h4 className={`text-[16px] md:text-[18px] font-bold ${service.titleColor}`}>
                    {service.title}
                  </h4>
                </div>

                {/* Dark Polygon Overlaid */}
                <div 
                  className="absolute -bottom-1 left-2 w-full h-[32rem] z-0 bg-[#1c1c1c] transition-transform duration-300 "
                  style={{
                    clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)'
                  }}
                >
                  <div className="absolute w-full px-8 pr-16" style={{ top: '53%' }}>
                    <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="relative z-10 flex items-center justify-between -mt-24 px-6 ">
          <Link 
            href="/services" 
            className="inline-flex text-white bg-primary hover:bg-primary-hover font-semibold text-[15px] px-8 py-3 transition-colors "
          >
            Explore Services
          </Link>
          
          <div className="flex space-x-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center  transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center bg-white    transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>

      </div>
      
      {/* Hide scrollbar styles using global css block */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
