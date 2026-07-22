'use client';

import { useRef, useEffect } from 'react';
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
      image: '/imgs/p-3.png'
    },
    {
      id: 4,
      title: 'Gold Fields',
      desc: 'Heavy equipment procurement and supply of grinding media for Tarkwa Mine.',
      image: '/imgs/p-1.png'
    }
  ];

  // Triplicate array for infinite scrolling
  const extendedProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    // Start at the middle set for infinite scroll in both directions
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 400;
      const gap = window.innerWidth >= 768 ? 32 : 24; // gap-8 = 32px, gap-6 = 24px
      const setWidth = projects.length * (itemWidth + gap);
      
      // Tiny timeout to ensure layouts are fully computed
      setTimeout(() => {
        container.scrollLeft = setWidth;
      }, 50);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 400;
    const gap = window.innerWidth >= 768 ? 32 : 24;
    const setWidth = projects.length * (itemWidth + gap);

    // If we scroll into the first set, jump to the identical position in the middle set
    if (container.scrollLeft <= 0) {
      container.scrollLeft += setWidth;
    }
    // If we scroll into the third set, jump back to the identical position in the middle set
    else if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    }
  };

  return (
    <section className="w-full bg-white pt-16   overflow-hidden">
      <div className=" mx-auto pl-6 ">
        
        {/* Header with Title and Arrows */}
        <div className="flex items-center px-12 justify-between -mb-6">
          <div className="flex items-center gap-6  w-full max-w-[600px]">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-500 whitespace-nowrap">
              Our Projects
            </h2>
            <div className="h-[1px] bg-slate-300 flex-grow"></div>
          </div>
          
          <div className="flex  gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-700 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-x-1 rounded-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-700 hover:text-white transition-all duration-300 hover:shadow-md hover:translate-x-1 rounded-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-40 -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="relative flex-none w-[340px] md:w-[420px] h-[320px] md:h-[350px] snap-start group mt-6"
            >
              
              {/* Colored Background Block */}
              <div 
                className="absolute -top-36 left-0 w-[95%] h-[50%] bg-primary rounded-sm"
                style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
              >
                <h3 
                  className="absolute left-6 max-w-[55%] text-[17px] md:text-[18px] font-bold text-[#1c1c1c] leading-tight"
                  style={{ top: '28%' }}
                >
                  {project.title}
                </h3>
              </div>
              
              {/* Image Foreground Block */}
              <div 
                className="absolute -bottom-9 left-0 w-full h-[180%] shadow-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                style={{ 
                  clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)' 
                }}
              >
                {/* The Image */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                  }}
                ></div>
  
                {/* Dark Gradient Overlay for text readability - scoped to visible area */}
                <div 
                  className="absolute w-full h-[45%]"
                  style={{ bottom: '25%', left: 0, background: 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 10%, rgba(17, 24, 39, 0.6) 60%, transparent)' }}
                ></div>
  
                {/* Content inside Image */}
                <div 
                  className="absolute left-6 right-10 text-gray-200 flex flex-col gap-3"
                  style={{ bottom: '28%' }}
                >
                  <p className="text-[13px] md:text-[14px] leading-relaxed font-medium">
                    {project.desc}
                  </p>
                  
                  <Link 
                    href="#"
                    className="self-start bg-primary hover:bg-primary-hover text-white font-semibold text-[13px] px-5 py-2 transition-colors shadow-sm"
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
