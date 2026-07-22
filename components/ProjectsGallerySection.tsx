import { Pickaxe, HardHat, Building2, Factory, Ruler } from 'lucide-react';

export default function ProjectsGallerySection() {
  return (
    <section className="w-full bg-white -mt-24 md:-mt-20 mb-16 md:mb-20 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-10 md:mb-16 w-full max-w-[800px] mx-auto px-2 md:px-6">
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
          <h2 className="px-4 md:px-6 text-[18px] md:text-[22px] font-semibold text-slate-500 whitespace-nowrap">
            Industries Served
          </h2>
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
        </div>

        <div className="flex flex-col gap-3 md:gap-6">
          
          {/* Top Row - 2 Columns */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 h-[160px] sm:h-[220px] md:h-[340px]">
            
            {/* Card 1: Mining */}
            <div 
              className="relative w-full h-full group overflow-hidden shadow-lg"
              style={{ clipPath: 'polygon(0 0, 92% 0, 100% 15%, 100% 100%, 8% 100%, 0 85%)' }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/imgs/p-4.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 md:px-12">
                <h3 className="text-white text-[15px] sm:text-xl md:text-3xl font-semibold tracking-wide">
                  Mining
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-none">
                  <Pickaxe className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>

            {/* Card 2: Civil Engineering */}
            <div 
              className="relative w-full h-full group overflow-hidden shadow-lg"
              style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 85%, 92% 100%, 0 100%, 0 15%)' }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/imgs/p-5.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8 md:px-12">
                <h3 className="text-white text-[15px] sm:text-xl md:text-3xl font-semibold tracking-wide leading-tight">
                  Civil<br className="md:hidden" /> Engineering
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-none">
                  <HardHat className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Columns (2 Cols on mobile with last item spanning 2) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            
            {/* Card 3: Infrastructure */}
            <div 
              className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] group overflow-hidden shadow-lg"
              style={{ clipPath: 'polygon(0 0, 85% 0, 100% 18%, 100% 100%, 15% 100%, 0 82%)' }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/imgs/p-6.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 lg:px-10">
                <h3 className="text-white text-[14px] sm:text-[18px] lg:text-[22px] font-semibold tracking-wide">
                  Infrastructure
                </h3>
                <div className="w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-none">
                  <Building2 className="text-white w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Card 4: Industrial Manufacturing */}
            <div 
              className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] group overflow-hidden shadow-lg"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 82%, 85% 100%, 0 100%, 0 18%)' }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/imgs/p-7.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <h3 className="text-white text-[14px] sm:text-[18px] lg:text-[22px] font-semibold tracking-wide leading-tight max-w-[65%]">
                  Industrial<br/>Manufacturing
                </h3>
                <div className="w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-none">
                  <Factory className="text-white w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Card 5: Construction (Spans 2 columns on mobile) */}
            <div 
              className="relative w-full col-span-2 md:col-span-1 h-[160px] sm:h-[220px] md:h-[280px] group overflow-hidden shadow-lg"
              style={{ clipPath: 'polygon(0 0, 85% 0, 100% 18%, 100% 100%, 15% 100%, 0 82%)' }}
            >
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/imgs/p-8.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-8 lg:px-10">
                <h3 className="text-white text-[16px] sm:text-[20px] lg:text-[22px] font-semibold tracking-wide">
                  Construction
                </h3>
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-none">
                  <Ruler className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
