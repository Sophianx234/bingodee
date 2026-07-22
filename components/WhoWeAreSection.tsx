import Link from 'next/link';

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image with Geometric Shapes */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* The blue polygon background sitting slightly offset and covering the bottom-left */}
            {/* <div 
              className="absolute -bottom-8 -left-8 w-[90%] h-[50%] bg-primary z-0"
              style={{
                clipPath: 'polygon(0 40%, 100% 100%, 0 100%)'
              }}
            ></div> */}

            {/* Main Image Container */}
            <div 
              className="relative w-full h-[450px] md:h-[37rem] scale-110  bg-gray-200 z-10 overflow-hidden "
              style={{
                // Polygon cuts the top-right corner and bottom-left slightly to reveal the blue below
                clipPath: 'polygon(0% 24.88%, 81.34% 24.88%, 100% 38.06%, 100% 74.13%, 60.95% 74.13%, 35.7% 61.33%, 0% 43.64%)',
                backgroundImage: 'url(/imgs/h-2.png)',
                backgroundSize: 'contain',
                
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              {/* Optional dark overlay if needed for contrast, but image looks bright in s-2.png */}
            </div>

            {/* In the design, the blue shape actually sits on TOP of the bottom-left of the image, slanting upwards */}
            {/* Let's overlay a solid blue polygon on the bottom left corner to precisely match s-2.png */}
            <div 
              className="absolute bottom-14 -left-6 w-[108%] h-[40%] bg-primary z-0 pointer-events-none"
              style={{
                // A wedge starting higher on the left and slanting down to the right, sitting right at the bottom
                clipPath: 'polygon(0% 7.18%, 81.46% 7.18%, 100% 7.16%, 100% 52.6%, 86.9% 52.6%, 99.75% 68.1%, 99.75% 76.24%, 68.32% 76.24%, 0% 76.24%)'
              }}
            ></div>

          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[44px] font-bold text-[#1a1a1a] mb-6">
              Who We Are
            </h2>
            <p className="text-[16px] text-gray-600 leading-[1.8] mb-10 max-w-[550px]">
              Established in 2012, Bingodee Company Limited is a proudly Ghanaian engineering company headquartered in Obuasi. We specialize in engineering support services, industrial supplies, civil engineering, and fabrication solutions for mining, construction, and infrastructure projects.
            </p>
            <div>
              <Link 
                href="/about" 
                className="inline-flex text-white bg-primary hover:bg-primary-hover font-semibold text-[15px] px-8 py-3.5 transition-colors  "
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
