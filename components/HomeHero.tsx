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
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
      
      {/* Main Wrapper Container */}
      <div className="relative w-full h-[600px] md:h-[calc(100vh-60px)] min-h-[500px] max-h-[900px]">
        
        {/* Hexagonal Image Background Layer */}
        <div 
          className="absolute inset-0 bg-gray-200 overflow-hidden shadow-xl"
          style={{
            clipPath: 'polygon(0% 0%, 93% 0, 100% 15%, 100% 100%, 114.8% 100%, 0% 55%)',
            backgroundImage: 'url(/imgs/h-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Dark Polygon Overlay overlapping the image */}
        <div 
          className="absolute top-0 left-0 h-full w-full bg-[#1c1c1c] z-10 opacity-95"
          style={{
            clipPath: 'polygon(0 -65%, 59% 100%, 0 100%)'
          }}
        ></div>

        {/* Content Overlaid on the Dark Area */}
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 md:p-12 lg:pb-16 lg:pl-16 z-20 max-w-[650px]">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] mb-5 tracking-tight">
            <span className="text-[#00e5ff]">Engineering</span> <span className="text-white">Solutions</span><br/>
            <span className="text-white">Built for </span><span className="text-[#ffc107]">Industry.</span>
          </h1>
          <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.6] mb-8 max-w-[420px] font-medium">
            Delivering reliable engineering services, industrial supplies, and fabrication solutions since 2012.
          </p>
          <div>
            <Link 
              href="/services" 
              className="inline-flex text-white bg-primary hover:bg-primary-hover font-semibold text-[15px] px-8 py-3.5 transition-colors shadow-sm rounded-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
        
        {/* Stats Section - Positioned at the bottom right */}
        <div className="absolute bottom-0 right-0 bg-white z-20 flex items-center justify-between px-10 py-8 w-full max-w-[700px] ">
          <div className="flex flex-col items-center text-center">
            <span className="text-[34px] font-extrabold text-[#171717]"><CountUp end={13} suffix="+" /></span>
            <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Years of<br/>Excellence</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[34px] font-extrabold text-[#171717]"><CountUp end={6} suffix="+" /></span>
            <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Major Mining<br/>Companies</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[34px] font-extrabold text-[#171717]"><CountUp end={4} /></span>
            <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Core Service<br/>Divisions</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-[34px] font-extrabold text-[#171717]"><CountUp end={100} suffix="%" /></span>
            <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Ghanaian-owned<br/>Company</span>
          </div>
        </div>

      </div>

    </section>
  );
}
