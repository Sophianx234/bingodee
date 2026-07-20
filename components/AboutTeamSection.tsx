'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const team = [
    { id: 1, role: 'Managing Director', image: '/imgs/team/t-1.jpg' },
    { id: 2, role: 'Operations Manager', image: '/imgs/team/t-2.jpg' },
    { id: 3, role: 'Lead Engineer', image: '/imgs/team/t-3.jpg' },
    { id: 4, role: 'Safety Coordinator', image: '/imgs/team/t-4.jpg' },
    // Replicating a 5th just to ensure it scrolls if needed, or stick to 4.
    { id: 5, role: 'Project Manager', image: '/imgs/team/t-1.jpg' },
  ];

  return (
    <section className="w-full bg-white py-16 mb-20 overflow-hidden">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-16 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[22px] font-semibold text-slate-500">
          Our Team
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((member) => (
            <div 
              key={member.id} 
              className="relative flex-none w-[320px] md:w-[380px] lg:w-[420px] h-[360px] md:h-[420px] snap-start group"
            >
              {/* Yellow Background Box */}
              <div className="absolute bottom-0 left-0 w-[94%] h-[40%] bg-[#ffb700] rounded-sm transition-transform duration-300">
                <span className="absolute bottom-4 left-6 font-bold text-black text-[16px] z-20">
                  {member.role}
                </span>
              </div>

              {/* Main Image Container */}
              <div 
                className="absolute top-0 left-0 w-full h-[92%] bg-[#1a1a1a] shadow-lg transition-transform duration-500 group-hover:-translate-y-2"
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 50% 100%, 0 50%)'
                }}
              >
                {/* Fallback pattern in case image fails or loads slow */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Blue Button */}
              <Link 
                href="#" 
                className="absolute bottom-10 right-0 bg-[#6592ff] hover:bg-[#4d7ef5] text-white font-semibold text-[14px] px-6 py-3 transition-colors shadow-md z-30"
              >
                Read Portfolio
              </Link>
            </div>
          ))}
        </div>

        {/* Custom CSS to hide scrollbar for webkit */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-end mt-4 gap-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
