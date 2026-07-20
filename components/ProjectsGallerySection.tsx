import { Pickaxe, HardHat, Building2, Factory, Ruler } from 'lucide-react';

export default function ProjectsGallerySection() {
  return (
    <section className="w-full bg-white py-16 mb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center mb-16 w-full max-w-[800px] mx-auto px-6">
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
          <h2 className="px-6 text-[22px] font-semibold text-slate-500">
            Industries Served
          </h2>
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
        </div>

        <div className="flex flex-col gap-6">
          
          {/* Top Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[300px] md:h-[340px]">
            
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
              
              <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
                  Mining
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm">
                  <Pickaxe className="text-white w-5 h-5 md:w-6 md:h-6" />
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
              
              <div className="absolute inset-0 flex items-center justify-between px-8 md:px-12">
                <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
                  Civil Engineering
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm">
                  <HardHat className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px] md:h-[280px]">
            
            {/* Card 3: Infrastructure */}
            <div 
              className="relative w-full h-full group overflow-hidden shadow-lg"
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
              
              <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-10">
                <h3 className="text-white text-[20px] lg:text-[22px] font-semibold tracking-wide">
                  Infrastructure
                </h3>
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm">
                  <Building2 className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 4: Industrial Manufacturing */}
            <div 
              className="relative w-full h-full group overflow-hidden shadow-lg"
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
              
              <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-8">
                <h3 className="text-white text-[20px] lg:text-[22px] font-semibold tracking-wide leading-tight max-w-[65%]">
                  Industrial<br/>Manufacturing
                </h3>
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm">
                  <Factory className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 5: Construction */}
            <div 
              className="relative w-full h-full group overflow-hidden shadow-lg"
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
              
              <div className="absolute inset-0 flex items-center justify-between px-6 lg:px-10">
                <h3 className="text-white text-[20px] lg:text-[22px] font-semibold tracking-wide">
                  Construction
                </h3>
                <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm">
                  <Ruler className="text-white w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
