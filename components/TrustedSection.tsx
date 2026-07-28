"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedSection() {
  const brands = [
    '/imgs/brands/b-1.png',
    '/imgs/brands/b-2.jpg',
    '/imgs/brands/b-3.png',
    '/imgs/brands/b-4.png',
    '/imgs/brands/b-5.jpg',
    '/imgs/brands/b-6.png',
    '/imgs/brands/b-7.jpg',
  ];

  // We use 4 sets of brands to guarantee there's never empty space on ultra-wide monitors.
  // 1 full set (7 brands) equals exactly 25% of the total width.
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  const xValues: string[] = [];
  const times: number[] = [];
  const easings: any[] = [];

  const numSteps = 7;
  const pauseDuration = 2.5;
  const slideDuration = 0.8;
  const totalStepDuration = pauseDuration + slideDuration;
  const totalDuration = numSteps * totalStepDuration; // 7 * 3.3 = 23.1s

  for (let i = 0; i < numSteps; i++) {
    const stepStart = i * totalStepDuration;
    const slideStart = stepStart + pauseDuration;
    
    // Pause state (holds current position)
    xValues.push(`-${i * (25 / numSteps)}%`);
    times.push(stepStart / totalDuration);
    
    // Just before slide starts (still holding position)
    xValues.push(`-${i * (25 / numSteps)}%`);
    times.push(slideStart / totalDuration);
    
    easings.push("linear");
    easings.push([0.65, 0, 0.35, 1]); // The smooth slide easing
  }

  // Final position after the 7th slide (exactly -25%)
  xValues.push(`-25%`);
  times.push(1);

  return (
    <section className="w-full bg-white overflow-hidden -mt-5 md:py-16">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Header with lines (Padded) */}
        <div className="flex items-center justify-center mb-8 md:mb-12 px-6 lg:px-12">
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
          <h3 className="mx-4 md:mx-6 text-[13px] sm:text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wider  whitespace-nowrap">
            Trusted By
          </h3>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
        </div>

        {/* Brands Track Container (Edge-to-Edge) */}
        <div className="relative w-full">
          {/* Fading edges for a premium look */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Brands Flex Container */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex flex-nowrap items-center w-max"
              animate={{ x: xValues }}
              transition={{
                duration: totalDuration,
                times: times,
                ease: easings,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div 
                  key={index} 
                  className="relative flex-shrink-0 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 mx-6 sm:mx-8 md:mx-10 transition-transform"
                >
                  <Image 
                    src={brand} 
                    alt={`Trusted Brand ${index + 1}`}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
