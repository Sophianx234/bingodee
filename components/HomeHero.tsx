'use client';

import Link from 'next/link';
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

export default function HomeHero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-0 md:px-6 lg:px-12 mb-16 md:mb-24 overflow-x-hidden md:overflow-x-visible">
      
      {/* Main Wrapper Container */}
      <div className="relative w-full flex flex-col md:block h-auto md:h-[calc(100vh-60px)] md:min-h-[500px] md:max-h-[900px]">
        
        {/* Top Section (Hero Visuals & Content) */}
        <div className="relative w-full h-[550px] sm:h-[600px] md:h-full md:absolute md:inset-0">
          
          {/* Hexagonal Image Background Layer */}
          <div 
            className="absolute inset-0 bg-gray-200 overflow-hidden  md:[clip-path:polygon(0%_0%,93%_0,100%_15%,100%_100%,114.8%_100%,0%_55%)] [clip-path:polygon(0%_0%,100%_0%,100%_92%,0%_100%)]"
            style={{
              backgroundImage: 'url(/imgs/h-1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Dark Polygon Overlay */}
          <div 
            className="absolute top-0 left-0 h-full w-full bg-[#1c1c1c] z-10 opacity-90 md:opacity-95 md:[clip-path:polygon(0_-65%,59%_100%,0_100%)] [clip-path:polygon(0_0,150%_100%,0_100%)]"
          ></div>

          {/* Content Overlaid on the Dark Area */}
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 pb-16 md:p-12 lg:pb-16 lg:pl-16 z-20 max-w-[650px]">
            <h1 className="text-[38px] sm:text-[44px] md:text-5xl lg:text-[52px] font-bold leading-[1.15] mb-5 tracking-tight">
              <span className="text-[#00e5ff]">Engineering</span> <span className="text-white">Solutions</span><br/>
              <span className="text-white">Built for </span><span className="text-[#ffc107]">Industry.</span>
            </h1>
            <p className="text-gray-200 md:text-gray-300 text-[15px] md:text-[16px] leading-[1.6] mb-8 max-w-[420px] font-medium pr-4 md:pr-0">
              Delivering reliable engineering services, industrial supplies, and fabrication solutions since 2012.
            </p>
            <div>
              <Link 
                href="/products" 
                className="inline-flex  text-white  bg-primary font-bold text-[14px] md:text-[15px] px-8 py-3.5 transition-colors shadow-lg rounded-sm uppercase tracking-wide"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Section - Positioned at the bottom right on desktop, horizontal auto scroll on mobile */}
        <style>{`
          @media (max-width: 767px) {
            @keyframes scroll-x {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .mobile-marquee {
              display: flex;
              width: max-content;
              animation: scroll-x 15s linear infinite;
            }
            .mobile-marquee:hover {
              animation-play-state: paused;
            }
          }
        `}</style>
        
        <div className="relative md:absolute bottom-0 right-0 bg-white z-20  md:w-full md:max-w-[700px] -mt-4 md:mt-0 mx-auto md:mx-0 overflow-hidden py-6 md:py-8 md:px-10 rounded-sm md:rounded-none">
          <div className="mobile-marquee md:flex md:w-full md:items-center md:justify-between">
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
                  className={`flex flex-col items-center text-center px-10 md:px-0 ${index >= 4 ? 'md:hidden' : ''}`}
                >
                  <span className="text-[32px] md:text-[34px] font-extrabold text-[#171717]">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </span>
                  <span className="text-[12px] md:text-[13px] font-bold text-gray-500 md:text-[#171717] mt-1 leading-[1.3] uppercase md:capitalize tracking-wide md:tracking-normal whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))
            }
          </div>
        </div>

      </div>

    </section>
  );
}
