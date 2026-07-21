import Link from "next/link"
import path from "path/win32"

function Hero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-0 mb-20">
      
      {/* Main Image Container */}
      {/* The overall image has cut corners on top-left and top-right */}
      <div 
        className="relative w-full h-[600px] md:h-[calc(100vh-96px)] min-h-[500px] max-h-[900px] bg-gray-200 overflow-hidden shadow-xl"
          style={{
            clipPath: `polygon(18.95% 24.94%, 60.85% 24.94%, 100.81% 36.66%, 74.81% 59.79%, 51.68% 59.79%, 18.95% 36.66%)`,
            backgroundImage: 'url(/imgs/h-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Polygon Overlay on the Left */}
          {/* This dark shape starts midway down the left side and slants to the bottom right. */}
        

          {/* Content Overlaid on the Dark Area */}
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 md:p-12 lg:pb-16 lg:pl-16 z-20 max-w-[650px]"
          style={{
          }}>
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
          {/* In the design, this sits in the bottom right corner, acting as a white cutout over the image. */}
          <div className="absolute bottom-0 right-0 bg-white z-20 flex items-center justify-between px-10 py-8 w-full max-w-[700px] ">
            <div className="flex flex-col items-center text-center">
              <span className="text-[34px] font-extrabold text-[#171717]">13+</span>
              <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Years of<br/>Excellence</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[34px] font-extrabold text-[#171717]">6+</span>
              <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Major Mining<br/>Companies</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[34px] font-extrabold text-[#171717]">4</span>
              <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Core Service<br/>Divisions</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-[34px] font-extrabold text-[#171717]">100%</span>
              <span className="text-[13px] font-bold text-[#171717] mt-1 leading-[1.3]">Ghanaian-owned<br/>Company</span>
            </div>
          </div>

        </div>

      </section>
  )
}

export default Hero
