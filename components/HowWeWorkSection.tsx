'use client';

import { useState } from 'react';
import { Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      title: "Consultation",
      description: "We start by understanding your unique requirements, technical specifications, and project goals to ensure we align perfectly with your vision.",
      image: "/imgs/products/Carbon-Steel-Butt-Welding-Fittings.jpg.jpeg"
    },
    {
      title: "Technical Assessment",
      description: "Our experts conduct a thorough assessment of your needs, evaluating structural, mechanical, and material requirements to propose the most robust solutions.",
      image: "/imgs/h-3.jpg"
    },
    {
      title: "Quotation",
      description: "We provide a transparent, detailed, and competitive quotation covering all aspects of procurement, fabrication, or engineering services required.",
      image: "/imgs/h-4.jpg"
    },
    {
      title: "Supply & Delivery",
      description: "Leveraging our robust supply chain, we source top-tier industrial materials and deliver them directly to your site safely and on schedule.",
      image: "/imgs/h-1.jpg"
    },
    {
      title: "Project Support",
      description: "Our commitment doesn't end at delivery. We provide ongoing technical support, installation guidance, and maintenance consultation for total peace of mind.",
      image: "/imgs/products/Ball%20Valves.jpg.jpeg" 
    }
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-20 -mt-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: List */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-12">
            How We Work
          </h2>
          
          <div className="flex flex-col w-full max-w-[600px]">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.title}
                  onClick={() => setActiveStep(isActive ? null : index)}
                  className={`flex flex-col cursor-pointer transition-all duration-300 border-b-2 ${
                    isActive ? 'border-white' : 'border-[#476bb3]'
                  }`}
                >
                  <div className="flex items-center justify-between py-4">
                    <span className="text-[17px] font-semibold text-white tracking-wide">
                      {step.title}
                    </span>
                    <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-90 text-white' : 'rotate-45 text-primary'}`}>
                      <Navigation className={`w-5 h-5 ${isActive ? 'fill-white' : 'fill-primary'}`} />
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 pb-5 pr-8 text-[15px] leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image and Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-end">
          
          <div className="relative w-full max-w-[700px] aspect-[16/9] mb-8">
            {/* Blue offset background */}
            <div 
              className="absolute -bottom-4 -left-4 w-full h-full bg-primary rounded-sm transition-transform duration-500 hover:scale-[1.02]"
              style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)' }}
            ></div>
            
            {/* Main Image with Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeStep ?? 'default'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-full h-full shadow-2xl"
                style={{
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
                }}
              >
                <Image
                  src={activeStep !== null ? steps[activeStep].image : steps[0].image}
                  alt={activeStep !== null ? steps[activeStep].title : steps[0].title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] px-8 py-3.5 transition-colors shadow-lg">
            Request Service
          </Link>

        </div>

      </div>
    </section>
  );
}
