'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

const team: TeamMember[] = [
  
  { 
    id: 1, 
    name: 'John Doe',
    role: 'Managing Director', 
    image: '/imgs/team/t-1.jpg',
    description: 'John brings over 20 years of experience in the industry, overseeing all major operations and guiding the strategic vision of the company. His leadership ensures we deliver top-tier quality every time and continuously push the boundaries of innovation.',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  { 
    id: 2, 
    name: 'Jane Smith',
    role: 'Operations Manager', 
    image: '/imgs/team/t-2.jpg',
    description: 'Jane is the backbone of our daily operations. With her exceptional organizational skills, she ensures that all projects run smoothly, on time, and within budget, all while maintaining excellent communication with clients.',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  { 
    id: 3, 
    name: 'Michael Brown',
    role: 'Lead Engineer', 
    image: '/imgs/team/t-3.jpg',
    description: 'Michael heads our engineering department, bringing innovative solutions to complex technical challenges. His expertise guarantees that our projects meet the highest structural and safety standards.',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  { 
    id: 4, 
    name: 'Emily Davis',
    role: 'Safety Coordinator', 
    image: '/imgs/team/t-4.jpg',
    description: 'Emily is dedicated to maintaining a zero-accident workplace. She meticulously oversees safety protocols, conducts regular site inspections, and ensures all personnel are trained in the latest safety standards.',
    socials: { facebook: '#', twitter: '#', instagram: '#' }
  },
  
];

export default function AboutTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const extendedTeam = [...team, ...team, ...team];

  // Disable scrolling on body when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedMember]);

  useEffect(() => {
    // Start at the middle set for infinite scroll in both directions
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.firstElementChild?.clientWidth || 400;
      const gap = 32; // gap-8 is 2rem = 32px
      const setWidth = team.length * (itemWidth + gap);
      
      // We use a tiny timeout to ensure styles and layouts are fully computed
      setTimeout(() => {
        container.scrollLeft = setWidth;
      }, 50);
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 400;
    const gap = 32;
    const setWidth = team.length * (itemWidth + gap);

    // If we scroll into the first set, jump to the identical position in the middle set
    if (container.scrollLeft <= 0) {
      container.scrollLeft += setWidth;
    }
    // If we scroll into the third set, jump back to the identical position in the middle set
    else if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft -= setWidth;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-16 mb-20 overflow-hidden relative">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-16 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[22px] font-semibold text-slate-500">
          Our Team
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      <div className=" pl-6 relative">
        
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedTeam.map((member, index) => (
            <div 
              key={`${member.id}-${index}`} 
              className="relative flex-none w-[320px] md:w-[380px] lg:w-[420px] h-[360px] md:h-[420px] snap-start group"
            >
              {/* Yellow Background Box */}
              <div className="absolute bottom-0 left-0 w-[94%] h-[40%] bg-[#ffb700] rounded-sm transition-transform duration-300">
                <span className="absolute bottom-4 left-6 font-bold text-black text-[16px] z-20">
                  {member.role}
                </span>
              </div>

              {/* Main Image Container */}
              <div 
                className="absolute top-0 left-0 w-full h-[92%] bg-[#1a1a1a] shadow-lg transition-transform duration-500 group-hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedMember(member)}
                style={{
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 50% 100%, 0 50%)'
                }}
              >
                {/* Fallback pattern in case image fails or loads slow */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Blue Button */}
              <button 
                onClick={() => setSelectedMember(member)}
                className="absolute bottom-10 right-0 bg-primary hover:bg-primary-hover text-white font-semibold text-[14px] px-6 py-3 transition-all duration-300 shadow-md z-30 flex items-center gap-1 group-hover:pr-4"
              >
                Read Portfolio <ChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom CSS to hide scrollbar for webkit */}
        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-end mt-4 px-12 gap-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 flex items-center justify-center  transition-colors  text-gray-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 flex items-center justify-center  transition-colors  text-gray-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white  shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-20 text-gray-600 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-[45%] h-[250px] md:h-auto min-h-[300px] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedMember.image})` }}
                />
              </div>

              {/* Right Side: Description */}
              <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-primary font-semibold text-lg md:text-xl mb-6">
                  {selectedMember.role}
                </p>
                <p className="text-gray-600 text-[16px] md:text-[17px] leading-relaxed">
                  {selectedMember.description}
                </p>
                
                <div className="mt-10 flex items-center justify-between">
                  <div className="flex gap-3">
                    {selectedMember.socials?.facebook && (
                      <a href={selectedMember.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-gray-600 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.socials?.twitter && (
                      <a href={selectedMember.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-gray-600 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember.socials?.instagram && (
                      <a href={selectedMember.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-primary text-gray-600 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3  transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
