'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, X } from 'lucide-react';

export default function IndustrialSolutionsSection() {
  const cards = [
    {
      id: 1,
      title: "Welding & Fabrication",
      color: "bg-[#00e5ff]",
      image: "/imgs/services/w-2.jpg",
      list: [
        "Custom Fabrication",
        "Metal Works",
        "Workshop Services"
      ]
    },
    {
      id: 2,
      title: "Office & Industrial Supplies",
      color: "bg-[#ffb700]",
      image: "/imgs/services/o-1.jpg",
      list: [
        "PPE",
        "Office Equipment",
        "General Merchandise"
      ]
    },
    {
      id: 3,
      title: "Engineering Supplies",
      color: "bg-[#f97316]",
      image: "/imgs/products/Flanges%20(2).jpg.jpeg",
      list: [
        ["Steel", "Valves", "Pumps", "HDPE", "Grinding Media"],
        ["Fasteners", "Piping Systems"]
      ]
    }
  ];

  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCard(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCard]);

  return (
    <section className="w-full bg-white pt-12 -mt-15 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {cards.map(card => (
          <div 
            key={card.id} 
            className="relative w-full h-[320px] md:h-[350px] group mt-6 cursor-pointer"
            onClick={() => setSelectedCard(card)}
          >
            
            {/* Colored Background Block */}
            <div 
              className={`absolute -top-36 left-0 w-[95%] h-[50%] ${card.color} rounded-sm transition-colors duration-300 group-hover:brightness-110`}
              style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
            >
              <h3 
                className="absolute left-6 max-w-[55%] text-[17px] md:text-[16px] font-bold text-[#1c1c1c] leading-tight"
                style={{ top: '28%' }}
              >
                {card.title}
              </h3>
            </div>
            
            {/* Image Foreground Block */}
            <div 
              className="absolute -bottom-9 left-0 w-full h-[180%] shadow-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
              style={{ 
                clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)' 
              }}
            >
              {/* The Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Dark Gradient Overlay for text readability - scoped to visible area */}
              <div 
                className="absolute w-full h-[40%]"
                style={{ bottom: '25%', left: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), transparent)' }}
              ></div>

              {/* Navigation Icon */}
              <div 
                className="absolute right-6 text-white/90 transform rotate-45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                style={{ top: '28%' }}
              >
                <Navigation className="w-5 h-5 fill-white" />
              </div>

              {/* Bulleted List */}
              <div 
                className="absolute left-8 text-gray-200"
                style={{ bottom: '28%' }}
              >
                {Array.isArray(card.list[0]) ? (
                  <div className="flex gap-8 transition-transform duration-300 group-hover:-translate-y-1">
                    <ul className="space-y-2 text-[14.5px] font-medium tracking-wide">
                      {(card.list[0] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className={`w-1.5 h-1.5 rounded-none ${card.color}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2 text-[14.5px] font-medium tracking-wide">
                      {(card.list[1] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className={`w-1.5 h-1.5 rounded-none ${card.color}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="space-y-2 text-[14.5px] font-medium tracking-wide transition-transform duration-300 group-hover:-translate-y-1">
                    {(card.list as string[]).map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className={`w-1.5 h-1.5 rounded-none ${card.color}`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-md transition-all duration-300">
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedCard(null)}
          ></div>
          
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto sm:overflow-hidden shadow-2xl flex flex-col sm:flex-row animate-in fade-in zoom-in duration-300"
            role="dialog"
            aria-modal="true"
          >
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-slate-100 text-slate-800 p-2 rounded-full  transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image */}
            <div className="relative w-full sm:w-1/2 h-64 sm:h-auto min-h-[300px] sm:min-h-[400px] bg-slate-100 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-slate-100 overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="z-10"
                />
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className={`w-12 h-1.5 mb-6 bg-primary`}></div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-6 leading-tight">
                {selectedCard.title}
              </h2>
              
              <p className="text-slate-600 mb-6 leading-relaxed text-[15px] sm:text-[16px] font-medium">
                Key Solutions Provided:
              </p>
              
              <div className="mb-8 pl-1">
                {Array.isArray(selectedCard.list[0]) ? (
                  <div className="flex flex-wrap gap-x-8 gap-y-3">
                    <ul className="space-y-3 text-[15px] text-slate-700">
                      {(selectedCard.list[0] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-none bg-primary`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3 text-[15px] text-slate-700">
                      {(selectedCard.list[1] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-none bg-primary`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="space-y-3 text-[15px] text-slate-700">
                    {(selectedCard.list as string[]).map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-none bg-primary`}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link 
                  href={`/contact?service=${encodeURIComponent(selectedCard.title)}`}
                  className={`inline-flex items-center justify-center bg-primary text-white font-bold py-3.5 px-8 transition-transform duration-300  w-full sm:w-auto hover:brightness-110`}
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
