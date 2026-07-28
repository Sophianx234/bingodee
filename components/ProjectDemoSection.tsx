'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

type ProjectVideo = {
  id: string;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
};

const projectVideos: ProjectVideo[] = [
  {
    id: '1',
    title: 'Heavy Structural Steel Erection',
    category: 'Construction',
    videoId: 'FLs2faYqoNU', 
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '2',
    title: 'Industrial Piping & Valve Systems',
    category: 'Engineering',
    videoId: 'ZEzq8KQWV7g', 
    thumbnail: 'https://images.unsplash.com/photo-1581092570490-cc40829efaae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '3',
    title: 'Precision Welding & Fabrication',
    category: 'Manufacturing',
    videoId: 'EVgkMU1-8sw', 
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200&h=800'
  }
];

export default function ProjectDemoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = projectVideos[currentIndex];

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projectVideos.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? projectVideos.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="flex items-center justify-center w-full max-w-[600px] mx-auto mb-6">
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
            <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide ">
              Project Demos
            </h3>
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
          </div>
          
          
        </div>

        {/* Video Player Section */}
        <div className="flex flex-col items-center relative w-full lg:w-[85%] mx-auto">
          
          {/* Decorative Polygon 1 (Top Left) */}
          <div 
            className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 bg-primary z-0 transition-transform duration-700 hover:-translate-x-2 hover:-translate-y-2"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 15% 100%, 0 100%)' }}
          ></div>
          
          {/* Decorative Polygon 2 (Bottom Right) */}
          <div 
            className="absolute bottom-16 -right-4 md:bottom-12 md:-right-6 w-40 h-40 md:w-64 md:h-64 bg-[#ffb700] z-0 transition-transform duration-700 hover:translate-x-2 hover:translate-y-2"
            style={{ clipPath: 'polygon(100% 100%, 0 100%, 0 85%, 85% 0, 100% 0)' }}
          ></div>

          {/* Main Featured Video Player */}
          <div 
            className="relative w-full aspect-video bg-[#1c1c1c] overflow-hidden group z-10"
            style={{ 
              clipPath: 'polygon(0% 0%, 88% 0%, 100% 18%, 100% 100%, 10% 100%, 0% 82%)' 
            }}
          >
            {isPlaying ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <Image 
                  src={activeVideo.thumbnail} 
                  alt={activeVideo.title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="relative w-20 h-20 bg-primary  text-white transition-all duration-300 hover:scale-110 shadow-2xl flex items-center justify-center rounded-full"
                    aria-label="Play Video"
                  >
                    <Play className="w-8 h-8 " fill="currentColor" />
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Bottom Info & Navigation */}
          <div className="w-full flex items-center justify-between mt-8 relative z-10">
            

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-600 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-x-1 rounded-sm"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-primary text-gray-600 hover:text-white transition-all duration-300 hover:shadow-md hover:translate-x-1 rounded-sm"
                aria-label="Next video"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
