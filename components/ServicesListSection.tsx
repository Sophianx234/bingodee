export default function ServicesListSection() {
  return (
    <section className="w-full bg-white py-12 mb-16">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-16 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[22px] font-semibold text-slate-500">
          Our Services
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative w-full h-[850px] md:h-[650px] lg:h-[550px]">
          
          {/* Blue Background */}
          <div 
            className="absolute -top-32 left-0 w-[95%] lg:w-[90%] h-[70%] bg-[#6592ff]"
            style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
          >
            <h3 
              className="absolute left-8 md:left-12 text-2xl md:text-[28px] lg:text-[32px] font-semibold text-[#1a1a1a]"
              style={{ top: '30%' }}
            >
              Engineering Services
            </h3>
          </div>

          {/* Dark Foreground */}
          <div 
            className="absolute -bottom-60 left-0 w-full h-[185%] bg-[#1c1c1c] shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 gap-8 lg:gap-16"
            style={{ clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)' }}
          >
            {/* Left: Services List */}
            <div className="w-full md:w-[45%] text-gray-200 mt-28 md:mt-32 ml-0 md:ml-4 lg:ml-8">
              <ul className="space-y-4 lg:space-y-5 text-[16px] lg:text-[18px] font-medium tracking-wide">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                  Civil Engineering
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                  Structural Engineering
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                  Construction Management
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                  Engineering Consultancy
                </li>
              </ul>
            </div>

            {/* Right: 2x2 Image Grid */}
            <div className="w-full md:w-[55%] grid grid-cols-2 gap-4 lg:gap-6 mt-8 md:mt-12 lg:mt-8 mr-0 lg:mr-8">
              {/* Img 1: TL */}
              <div 
                className="w-full aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: 'url(/imgs/services/s-1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
                }}
              ></div>
              {/* Img 2: TR */}
              <div 
                className="w-full aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: 'url(/imgs/services/s-2.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
                }}
              ></div>
              {/* Img 3: BL */}
              <div 
                className="w-full aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: 'url(/imgs/services/s-3.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
                }}
              ></div>
              {/* Img 4: BR */}
              <div 
                className="w-full aspect-[4/3] shadow-md transition-transform duration-500 hover:scale-105"
                style={{
                  backgroundImage: 'url(/imgs/services/s-4.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)'
                }}
              ></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
