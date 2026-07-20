'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsListSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'AngloGold Ashanti',
      desc: 'Supply of structural steel products for the Obuasi Mine Redevelopment Phase 3 Project.',
      image: '/imgs/p-1.png'
    },
    {
      id: 2,
      title: 'Asanko Gold',
      desc: 'Supply of HDPE liners for the Obotan Mine tailings dam project.',
      image: '/imgs/p-2.png'
    },
    {
      id: 3,
      title: 'Perseus Mining',
      desc: 'Supply of critical piping systems and valves for processing plant expansion.',
      image: '/imgs/p-3.png' // Assumed
    },
    // Adding a 4th to allow scrolling
    {
      id: 4,
      title: 'Gold Fields',
      desc: 'Heavy equipment procurement and supply of grinding media for Tarkwa Mine.',
      image: '/imgs/p-1.png'
    }
  ];

  return (
    <section className="w-full bg-white py-16 mb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header with Title and Arrows */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6 w-full max-w-[600px]">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-500 whitespace-nowrap">
              Our Projects
            </h2>
            <div className="h-[1px] bg-slate-300 flex-grow"></div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map(project => (
            <div 
              key={project.id} 
              className="relative flex-none w-[340px] md:w-[400px] h-[380px] snap-start group"
            >
              {/* Light Blue Title Background */}
              <div 
                className="absolute top-0 left-0 w-[92%] h-[60%] bg-[#6592ff] rounded-sm transition-transform duration-300"
                style={{ clipPath: 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 0 100%)' }}
              >
                <h3 className="absolute top-6 left-6 max-w-[85%] text-[20px] md:text-[22px] font-semibold text-[#1c1c1c]">
                  {project.title}
                </h3>
              </div>

              {/* Image Foreground Container */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[75%] shadow-xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                style={{ clipPath: 'polygon(0 40%, 50% 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-gray-600 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Dark Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>

                {/* Content inside Image */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-5">
                  <p className="text-gray-200 text-[14px] md:text-[15px] leading-relaxed max-w-[90%] font-medium">
                    {project.desc}
                  </p>
                  
                  <Link 
                    href="#"
                    className="self-start bg-[#6592ff] hover:bg-[#4d7ef5] text-white font-semibold text-[14px] px-6 py-2.5 transition-colors shadow-sm"
                  >
                    View Project
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CSS to hide scrollbar for webkit browsers */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />

      </div>
    </section>
  );
}
