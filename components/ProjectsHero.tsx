import Image from 'next/image';

export default function ProjectsHero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-8 mb-24">
      
      {/* Main Image Container */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200"
        style={{
          backgroundImage: 'url(/imgs/h-5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Top-right corner cut
          clipPath: 'polygon(0 0, 90% 0, 100% 15%, 100% 100%, 0 100%)'
        }}
      ></div>

      {/* Dark Overlay Box */}
      {/* Absolute positioned relative to the section, sticking out bottom and left slightly, or just overlaid */}
      <div 
        className="absolute bottom-0 left-6 lg:left-12 transform translate-y-12 w-[90%] md:w-[75%] lg:w-[65%] max-w-[800px] bg-[#111827] text-white p-8 md:p-12 lg:p-16 z-10 shadow-2xl"
        style={{
          // Top-right cut and Bottom-left cut
          clipPath: 'polygon(0 0, 90% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)'
        }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] mb-6">
          Projects That Deliver Real<br />
          Results
        </h1>
        <p className="text-gray-300 text-[16px] md:text-[18px] leading-[1.6] font-medium max-w-[650px]">
          Our experience spans mining, civil engineering and industrial infrastructure projects across Ghana.
        </p>
      </div>
      
      {/* Spacer to account for the absolutely positioned translated box */}
      <div className="h-16"></div>
      
    </section>
  );
}
