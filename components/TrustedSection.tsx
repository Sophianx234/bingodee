"use client";

import { motion } from 'framer-motion';

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
    <section className="w-full bg-white  overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Header with lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
          <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide">
            Trusted By
          </h3>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
        </div>

        {/* Fading edges for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

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
                className="relative flex-shrink-0 flex items-center justify-center h-12 w-24 sm:h-16 sm:w-32 md:h-20 md:w-40 mx-4 md:mx-6 lg:mx-8 transition-transform "
              >
                <img 
                  src={brand} 
                  alt={`Trusted Brand ${index + 1}`}
                  className="max-h-full max-w-full object-contain  transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
