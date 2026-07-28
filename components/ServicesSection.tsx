'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 340;
      const gap = 24; // space-x-6 is 24px
      const currentScroll = container.scrollLeft;
      const index = Math.round(currentScroll / (cardWidth + gap));
      const targetIndex = Math.max(0, index - 1);
      container.scrollTo({ left: targetIndex * (cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 340;
      const gap = 24;
      const currentScroll = container.scrollLeft;
      const index = Math.round(currentScroll / (cardWidth + gap));
      const targetIndex = index + 1;
      container.scrollTo({ left: targetIndex * (cardWidth + gap), behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Engineering Services",
      titleColor: "text-white",
      bgColor: "bg-[#ffc107]",
      desc: "Civil, structural and construction management solutions.",
      image: "/imgs/services/s-1.jpg"
    },
    {
      title: "Engineering Supplies",
      titleColor: "text-white",
      bgColor: "bg-primary",
      desc: "Reliable supply of industrial materials, pumps, valves, piping systems, steel products and more.",
      image: "/imgs/services/s-2.jpg"
    },
    {
      title: "Welding & Fabrication",
      titleColor: "text-[#171717]",
      bgColor: "bg-[#00e5ff]",
      desc: "Precision fabrication and welding services delivered from our modern workshop.",
      image: "/imgs/services/s-3.jpg"
    },
    {
      title: "Industrial Supplies",
      titleColor: "text-white",
      bgColor: "bg-[#f59e0b]",
      desc: "Supply of PPE, office equipment, and general merchandise for industrial scale needs.",
      image: "/imgs/services/s-4.jpg"
    },
    {
      title: "Project Consultation",
      titleColor: "text-white",
      bgColor: "bg-[#8b5cf6]",
      desc: "Expert technical assessment, quotation, and full project lifecycle support.",
      image: "/imgs/services/s-5.jpg"
    }
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section className="w-full bg-white py-12 md:py-0 relative">
      <div className="max-w-[1400px] mx-auto pl-6 md:pl-12">
        
        {/* Header with lines */}
        <div className="flex items-center justify-center mb-10 md:mb-16 pr-6 md:pr-12">
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
          <h3 className="mx-4 md:mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide">
            Our Services
          </h3>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedService(service)}
                className="relative flex-none w-[300px] sm:w-[340px] md:w-[420px] h-[380px] md:h-[420px] snap-start group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${service.title}`}
              >
                {/* Colored Top Rectangle */}
                <div className={`absolute top-0 left-0 w-full h-[110px] md:h-[130px] ${service.bgColor} p-5 md:p-6 transition-all duration-300 group-hover:brightness-110`}>
                  <h4 className={`text-[16px] md:text-[18px] font-bold ${service.titleColor}`}>
                    {service.title}
                  </h4>
                </div>

                {/* Dark Polygon Overlaid */}
                <div 
                  className="absolute -bottom-1 left-0 md:left-2 w-full h-[28rem] md:h-[32rem] z-0 bg-[#1c1c1c] transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
                  style={{
                    clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)'
                  }}
                >
                  <div className="absolute w-full px-6 md:px-8 pr-10 md:pr-16 flex flex-col" style={{ top: '53%' }}>
                    <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    
                    <span className="text-primary text-[13px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between -mt-16 md:-mt-24 pr-6 md:pr-12 gap-6 sm:gap-0">
          <Link 
            href="/services" 
            className="inline-flex text-white bg-primary font-bold text-[14px] md:text-[15px] px-8 py-3.5 transition-all hover:bg-primary-hover shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Explore Services
          </Link>
          
          <div className="flex gap-3 self-end sm:self-auto">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-700 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-x-1 rounded-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-700 hover:text-white transition-all duration-300 hover:shadow-md hover:translate-x-1 rounded-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
      
      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md transition-all duration-300">
          {/* Modal Backdrop Click Area */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto sm:overflow-hidden shadow-2xl flex flex-col sm:flex-row animate-in fade-in zoom-in duration-300"
            role="dialog"
            aria-modal="true"
          >
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-slate-100 text-slate-800 p-2 rounded-full  transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Service Image */}
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto min-h-[300px] sm:min-h-[400px] bg-slate-100 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="z-10"
                />
              </div>
            </div>

            {/* Right Side: Service Details */}
            <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
              {/* Dynamic Header color matching the service card */}
              <div className={`w-12 h-1.5 mb-6 bg-primary `}></div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 leading-tight">
                {selectedService.title}
              </h2>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-[15px] sm:text-[16px]">
                {selectedService.desc}
              </p>
              
              <p className="text-slate-500 mb-8 leading-relaxed text-[14px]">
                Our highly trained team ensures that all deliverables meet rigorous industry standards. Partner with us to guarantee safety, efficiency, and exceptional quality across every phase of your project.
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link 
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className={`inline-flex items-center justify-center bg-primary text-white font-bold py-3.5 px-8 transition-transform duration-300   w-full sm:w-auto hover:brightness-110`}
                >
                  Request Service
                </Link>
                <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">
                  Speak with one of our specialized consultants.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Hide scrollbar styles using global css block */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
