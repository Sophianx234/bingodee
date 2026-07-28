'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from 'react';

function CountUp({ end, suffix = '', duration = 1 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const totalFrames = Math.round(duration * 60);
          let frame = 0;

          const easeOutCubic = (t: number) => {
            return 1 - Math.pow(1 - t, 3);
          };

          const animate = () => {
            frame++;
            const progress = easeOutCubic(frame / totalFrames);
            const current = Math.round(end * progress);
            setCount(current);

            if (frame < totalFrames) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function ProductsHero() {
  return (
    <section className="relative w-full mx-auto mt-0 pt-0 mb-16 md:mb-24 overflow-x-hidden md:overflow-visible">
      
      {/* ============================================================== */}
      {/* MOBILE DESIGN (Home Page Style, hidden on desktop) */}
      {/* ============================================================== */}
      <div className="w-full flex flex-col md:hidden relative mb-8">
        
        {/* Main Top Area: Image + Text (Fixed Height) */}
        <div className="relative w-full h-[500px] sm:h-[550px]">
          {/* Image Background Layer with slight bottom tilt */}
          <div 
            className="absolute inset-0 bg-gray-200 overflow-hidden"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%)'
            }}
          >
            <Image src="/imgs/h-5.jpg" alt="Hero background" fill unoptimized priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>

          {/* Dark Polygon Overlay */}
          <div 
            className="absolute top-0 left-0 h-full w-full bg-[#1c1c1c] z-10 opacity-[0.93]"
            style={{
              clipPath: 'polygon(0% 0%, 150% 100%, 0% 100%)'
            }}
          ></div>

          {/* Content Overlaid on the Dark Area */}
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-6 pb-12 z-20">
            <h1 className="text-[28px] sm:text-[34px] font-bold leading-[1.2] mb-4 text-white tracking-tight">
              Products That Deliver Real<br />
              Results
            </h1>
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-[1.6] font-medium max-w-[90%]">
              We provide top-tier products for mining, civil engineering and industrial
              infrastructure sectors across Ghana.
            </p>
          </div>
        </div>

        {/* Mobile Stats Marquee (Only shown on mobile) */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes products-scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .products-mobile-marquee {
            display: flex;
            width: max-content;
            animation: products-scroll-x 15s linear infinite;
          }
        `}} />
        
        <div className="w-full bg-white z-20 overflow-hidden py-8 -mt-2 relative">
          <div className="products-mobile-marquee">
            {
              [
                { end: 13, suffix: '+', label: 'Years of\nExcellence' },
                { end: 6, suffix: '+', label: 'Major Mining\nCompanies' },
                { end: 4, suffix: '', label: 'Core Service\nDivisions' },
                { end: 100, suffix: '%', label: 'Ghanaian-owned\nCompany' }
              ].concat([
                { end: 13, suffix: '+', label: 'Years of\nExcellence' },
                { end: 6, suffix: '+', label: 'Major Mining\nCompanies' },
                { end: 4, suffix: '', label: 'Core Service\nDivisions' },
                { end: 100, suffix: '%', label: 'Ghanaian-owned\nCompany' }
              ]).map((stat, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center px-10"
                >
                  <span className="text-[32px] sm:text-[34px] font-extrabold text-[#171717]">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-bold text-gray-500 mt-1 leading-[1.3] capitalize tracking-wide whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP DESIGN (Original overlapping layout, hidden on mobile) */}
      {/* ============================================================== */}
      <div className="hidden md:block relative px-6 lg:px-12 w-full max-w-[1400px] mx-auto">
        {/* Main Image Container */}
        <div 
          className="relative w-full md:aspect-auto md:h-[450px] lg:h-[35rem] bg-gray-100"
          style={{
            clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
          }}
        >
          <Image src="/imgs/h-5.jpg" alt="Hero background" fill unoptimized priority style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* Dark Overlay Box Wrapper */}
        <div 
          className="absolute bottom-0 left-6 lg:left-12 translate-y-12 md:w-[70%] lg:w-[50%] z-10" 
        >
          <div 
            className="w-full bg-[#1c1c1c] z-10 opacity-[0.97] text-white py-12 lg:py-16 shadow-xl"
            style={{
              clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
            }}
          >
            <div className="pl-[12%] pr-[5%]">
              <h1 className="text-3xl lg:text-4xl font-bold leading-[1.25] mb-6 tracking-tight">
                Products That Deliver Real<br />
                Results
              </h1>
              <p className="text-gray-300 text-[16px] leading-[1.6] font-medium max-w-[650px]">
                We provide top-tier products for mining, civil engineering and industrial
                infrastructure sectors across Ghana.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
