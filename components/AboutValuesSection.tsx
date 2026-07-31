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
      image: "/imgs/values/v-1.jpg",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Relevance",
      description: "To continually stay abreast and be responsive to market conditions and customer expectations as part of the DNA of our organization. We aim at providing solutions that are both fit for purpose and competitive, but more importantly designed to sustain long-term relationship due to trust and a mutual beneficial partnering.",
      image: "/imgs/values/v-2.jpg",
      icon: <Activity className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Consistent",
      description: "We offer a personal service and you will be appointed a lead Engineer when you work with us. This means you will not have to speak to someone different each time you call.",
      image: "/imgs/values/v-3.jpg",
      icon: <Headset className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Individuals",
      description: "We work around you and your needs, providing you with a tailored solution for your organisation.",
      image: "/imgs/values/v-4.jpg",
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Fully flexible",
      description: "You can retain us for one project or multiple projects; it’s completely up to you.",
      image: "/imgs/values/v-5.jpg",
      icon: <Handshake className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Affordable",
      description: "Our services and products are affordable but durable with payment options to suit your business.",
      image: "/imgs/values/v-6.jpg",
      icon: <DollarSign className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Our code",
      description: "We genuinely care for and support organizations within the third sector, we are ethical and transparent in all of our work.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      icon: <Gem className="w-6 h-6" strokeWidth={2.5} />,
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
      <div className="w-full flex flex-wrap lg:flex-nowrap h-auto lg:h-[450px]">
        {values.map((val, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedValue(val)}
            className="relative w-1/2 md:w-1/3 lg:w-auto lg:flex-1 aspect-[3/4] lg:aspect-auto lg:h-full group overflow-hidden transition-all duration-500 ease-in-out lg:hover:flex-[1.5] cursor-pointer"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
            >
              <Image
                src={val.image}
                alt={val.title}
                fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 14vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Text Overlay */}
            <h3 className={`absolute bottom-6 left-4 right-4 text-[16px] md:text-[18px] font-semibold ${val.textColor} z-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-primary leading-tight drop-shadow-md`}>
              {val.title}
            </h3>

            {/* Icon Overlay */}
            <div 
              className={`absolute z-10 ${val.iconColor} ${
                val.iconPos === 'top-right' ? 'top-6 right-6' : 'bottom-6 right-4'
              } transition-all duration-500 group-hover:scale-110 group-hover:text-primary drop-shadow-md opacity-0 lg:opacity-100 group-hover:opacity-100`}
            >
              {val.icon}
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
