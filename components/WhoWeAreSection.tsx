import Link from 'next/link';

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-white pb-16 - md:-mt-15 lg:py-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Image with Geometric Shapes */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Main Image Container */}
            <div 
              className="relative w-full max-w-[500px] lg:max-w-none aspect-square lg:aspect-auto lg:h-[37rem] scale-100 lg:scale-110 z-10 transition-transform duration-500"
              style={{
                clipPath: 'polygon(0% 24.88%, 81.34% 24.88%, 100% 38.06%, 100% 74.13%, 60.95% 74.13%, 35.7% 61.33%, 0% 43.64%)',
                backgroundImage: 'url(/imgs/h-2.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
            </div>

            {/* Blue Shape Overlay */}
            <div 
              className="absolute bottom-4 lg:bottom-14 -left-2 lg:-left-6 w-[105%] lg:w-[108%] h-[40%] bg-primary z-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 7.18%, 81.46% 7.18%, 100% 7.16%, 100% 52.6%, 86.9% 52.6%, 99.75% 68.1%, 99.75% 76.24%, 68.32% 76.24%, 0% 76.24%)'
              }}
            ></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left -mt-12 lg:mt-0">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#1a1a1a] mb-6">
              Who We Are
            </h2>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.8] mb-8 lg:mb-10 max-w-[600px] mx-auto lg:mx-0">
              Established in 2012, Bingodee Company Limited is a proudly Ghanaian engineering company headquartered in Obuasi. We specialize in engineering support services, industrial supplies, civil engineering, and fabrication solutions for mining, construction, and infrastructure projects.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link 
                href="/about" 
                className="inline-flex text-white hover:text-white bg-primary font-bold text-[14px] md:text-[15px] px-8 py-3.5 transition-all lg    tracking-wide "
              >
                Learn More About Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
