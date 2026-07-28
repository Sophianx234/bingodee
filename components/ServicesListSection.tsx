import Image from 'next/image';

export default function ServicesListSection() {
  return (
    <section className="w-full bg-white md:mt-0 -mt-15 md:py-12 mb-16">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-8 md:mb-16 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[20px] md:text-[22px] font-semibold text-slate-500">
          Our Services
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE DESIGN (Hidden on desktop) */}
      {/* ============================================================== */}
      <div className="w-full flex flex-col md:hidden mb-12">
        {/* Title Block with Geometric Cut */}
        <div 
          className="w-full bg-[#ffb700] py-12 px-6 relative z-10"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)' }}
        >
          <h3 className="text-[28px] sm:text-3xl font-bold text-white mb-6">
            Engineering Services
          </h3>
        </div>

        {/* Content Block (pulled up to tuck under the geometric cut) */}
        <div className="w-full bg-[#1c1c1c] px-6 pt-16 pb-12 -mt-10 z-0">
          {/* Services List */}
          <div className="text-gray-200 mb-10">
            <ul className="space-y-4 text-[15px] sm:text-[16px] font-medium tracking-wide">
              <li className="flex items-center gap-4">
                {/* Square bullet point (No rounded edges) */}
                <span className="w-2 h-2 bg-[#ffb700]"></span>
                Civil Engineering
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ffb700]"></span>
                Structural Engineering
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ffb700]"></span>
                Construction Management
              </li>
              <li className="flex items-center gap-4">
                <span className="w-2 h-2 bg-[#ffb700]"></span>
                Engineering Consultancy
              </li>
            </ul>
          </div>

          {/* 2x2 Geometric Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Img 1: TL */}
            <div 
              className="relative w-full aspect-[4/3] shadow-md"
              style={{
                clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
              }}
            >
              <Image src="/imgs/services/s-1.jpg" alt="Service 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            {/* Img 2: TR */}
            <div 
              className="relative w-full aspect-[4/3] shadow-md"
              style={{
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
              }}
            >
              <Image src="/imgs/services/s-2.jpg" alt="Service 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            {/* Img 3: BL */}
            <div 
              className="relative w-full aspect-[4/3] shadow-md"
              style={{
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
              }}
            >
              <Image src="/imgs/services/s-3.jpg" alt="Service 3" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            {/* Img 4: BR */}
            <div 
              className="relative w-full aspect-[4/3] shadow-md"
              style={{
                clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
              }}
            >
              <Image src="/imgs/services/s-4.jpg" alt="Service 4" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP DESIGN (Original overlapping layout, hidden on mobile) */}
      {/* ============================================================== */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative w-full h-[650px] lg:h-[550px]">
          
          {/* Blue Background */}
          <div 
            className="absolute -top-32 left-0 w-[95%] lg:w-[90%] h-[70%] bg-primary"
            style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
          >
            <h3 
              className="absolute left-12 lg:left-12 text-[28px] lg:text-[32px] font-semibold text-white"
              style={{ top: '30%' }}
            >
              Engineering Services
            </h3>
          </div>

          {/* Dark Foreground */}
          <div 
            className="absolute -bottom-60 left-0 w-full h-[185%] bg-[#1c1c1c] shadow-2xl flex items-center p-12 lg:p-16 gap-8 lg:gap-16"
            style={{ clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)' }}
          >
            {/* Left: Services List */}
            <div className="w-[45%] text-gray-200 mt-32 ml-4 lg:ml-8">
              <ul className="space-y-4 lg:space-y-5 text-[16px] lg:text-[18px] font-medium tracking-wide">
                <li className="flex items-center gap-4">
                  {/* Replaced rounded-full with square block to enforce geometry */}
                  <span className="w-2 h-2 bg-[#ffb700]"></span>
                  Civil Engineering
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#ffb700]"></span>
                  Structural Engineering
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#ffb700]"></span>
                  Construction Management
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#ffb700]"></span>
                  Engineering Consultancy
                </li>
              </ul>
            </div>

            {/* Right: 2x2 Image Grid */}
            <div className="w-[55%] grid grid-cols-2 p-5 gap-6 mt-12 lg:mt-8 mr-0 lg:mr-8">
              {/* Img 1: TL */}
              <div 
                className="relative w-full aspect-[4/3] shadow-md transition-transform duration-500 "
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
                }}
              >
                <Image src="/imgs/services/s-1.jpg" alt="Service 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              {/* Img 2: TR */}
              <div 
                className="relative w-full aspect-[4/3] shadow-md transition-transform duration-500 "
                style={{
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
                }}
              >
                <Image src="/imgs/services/s-2.jpg" alt="Service 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              {/* Img 3: BL */}
              <div 
                className="relative w-full aspect-[4/3] shadow-md transition-transform duration-500 "
                style={{
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
                }}
              >
                <Image src="/imgs/services/s-3.jpg" alt="Service 3" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              {/* Img 4: BR */}
              <div 
                className="relative w-full aspect-[4/3] shadow-md transition-transform duration-500 "
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
                }}
              >
                <Image src="/imgs/services/s-4.jpg" alt="Service 4" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
