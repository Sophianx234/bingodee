'use client';

import { useState } from 'react';
import { Navigation } from 'lucide-react';

export default function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Consultation",
    "Technical Assessment",
    "Quotation",
    "Supply & Delivery",
    "Project Support"
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-20">
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
                  key={step}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center justify-between py-4 cursor-pointer transition-all duration-300 border-b-2 ${
                    isActive ? 'border-white' : 'border-[#476bb3]'
                  }`}
                >
                  <span className="text-[17px] font-semibold text-white tracking-wide">
                    {step}
                  </span>
                  <div className={`transform rotate-45 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#6592ff]'}`}>
                    <Navigation className={`w-5 h-5 ${isActive ? 'fill-white' : 'fill-[#6592ff]'}`} />
                  </div>
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
              className="absolute -bottom-4 -left-4 w-full h-full bg-[#6592ff] rounded-sm transition-transform duration-500 hover:scale-[1.02]"
              style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)' }}
            ></div>
            
            {/* Main Image */}
            <div 
              className="absolute top-0 left-0 w-full h-full shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                backgroundImage: 'url(/imgs/h-2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
              }}
            ></div>
          </div>

          <button className="bg-[#6592ff] hover:bg-[#4d7ef5] text-white font-semibold text-[15px] px-8 py-3.5 transition-colors shadow-lg">
            Request a Quote
          </button>

        </div>

      </div>
    </section>
  );
}
