'use client';

import Image from 'next/image';
import { ShieldCheck, Gem, HardHat, Lightbulb, Headset, Users, Handshake, DollarSign, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function AboutValuesSection() {
  const values = [
    {
      title: "Security of Supply",
      description: "Through our vertical integrated supply chain model, we guarantee security of supply. Local supply capacity is augmented with international manufacturing partnership capacity and strategic safety stock.",
      image: "https://images.unsplash.com/photo-1642797735471-3e90055c5ff9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Relevance",
      description: "To continually stay abreast and be responsive to market conditions and customer expectations as part of the DNA of our organization. We aim at providing solutions that are both fit for purpose and competitive, but more importantly designed to sustain long-term relationship due to trust and a mutual beneficial partnering.",
      image: "https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a",
      icon: <Activity className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Consistent",
      description: "We offer a personal service and you will be appointed a lead Engineer when you work with us. This means you will not have to speak to someone different each time you call.",
      image: "/imgs/values/v-3.jpg",
      icon: <Headset className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Individuals",
      description: "We work around you and your needs, providing you with a tailored solution for your organisation.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
      icon: <Users className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Fully flexible",
      description: "You can retain us for one project or multiple projects; it’s completely up to you.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068&auto=format&fit=crop",
      icon: <Handshake className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Affordable",
      description: "Our services and products are affordable but durable with payment options to suit your business.",
      image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0",
      icon: <DollarSign className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Our code",
      description: "We genuinely care for and support organizations within the third sector, we are ethical and transparent in all of our work.",
      image: "https://images.unsplash.com/photo-1548838670-cb67b43a6adb",
      icon: <Gem className="w-5 h-5" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    }
  ];

  const [selectedValue, setSelectedValue] = useState<typeof values[0] | null>(null);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedValue(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedValue]);

  return (
    <section className="w-full bg-white py-12">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-10 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[22px] font-semibold text-slate-500">
          Our Values
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      {/* Grid of Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 max-w-6xl mx-auto pb-12">
        {values.map((val, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedValue(val)}
            className="group relative h-[360px]  overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-slate-200/20"
          >
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
              <Image
                src={val.image}
                alt={val.title}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={95}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black group-hover:via-black/60 transition-colors duration-500"></div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              {/* Icon */}
              <div className="relative w-14 h-14 md:w-10 md:h-10 mb-5 flex items-center justify-center group-hover:scale-110 transition-all duration-500 flex-shrink-0 shadow-xl">
                
                {/* Glassmorphism background inside the octagon */}
                <div 
                  className="absolute inset-0 bg-white/10 backdrop-blur-md transition-colors duration-500 group-hover:bg-white/20"
                  style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
                ></div>

                {/* Octagon Border SVG (Placed after background so it sits on top) */}
                <svg 
                  className="absolute inset-0 w-full h-full overflow-visible text-[#ffb700] drop-shadow-sm transition-colors duration-300 group-hover:text-[#ffca4d]"
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <polygon 
                    points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                
                {/* Icon Content */}
                <div className={`relative z-10 ${val.iconColor} group-hover:text-white transition-colors duration-300`}>
                  {val.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-lg">
                {val.title}
              </h3>

              {/* Animated underline */}
              <div className="w-10 h-[3px] bg-primary/80 group-hover:w-full group-hover:bg-primary transition-all duration-700 ease-in-out rounded-full mb-2"></div>
              
              {/* "Read more" hint */}
              <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 flex items-end">
                <span className="text-white/90 text-sm font-semibold flex items-center gap-2 uppercase tracking-wider">
                  Discover More <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Value Modal */}
      {selectedValue && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
          {/* Modal Backdrop Click Area */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedValue(null)}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto sm:overflow-hidden shadow-2xl flex flex-col sm:flex-row animate-in fade-in zoom-in duration-300"
            role="dialog"
            aria-modal="true"
          >
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedValue(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-slate-100 text-slate-800 p-2 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image */}
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto min-h-[300px] sm:min-h-[400px]">
              <Image 
                src={selectedValue.image}
                alt={selectedValue.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                quality={95}
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                <div className="bg-primary p-3 rounded-full text-white shadow-lg">
                  {selectedValue.icon}
                </div>
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className="w-12 h-1.5 bg-primary mb-6"></div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 leading-tight">
                {selectedValue.title}
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-[15px] sm:text-[16px]">
                {selectedValue.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <Link 
                  href={`/contact?subject=${encodeURIComponent(selectedValue.title)}`}
                  className="inline-flex items-center justify-center bg-primary text-white font-bold py-3.5 px-8 transition-colors duration-300 shadow-md w-full sm:w-auto"
                >
                  Request Service
                </Link>
                <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">
                  Our team will respond promptly to your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
