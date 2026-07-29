import Image from 'next/image';

export default function AboutStorySection() {
  return (
    <section id="story" className="w-full bg-white -mt-18 sm:-mt-12 md:mt-0 pt-6 md:pt-12 pb-8 md:pb-12 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-24">
        
        {/* Left Side: Image with Geometric Cut */}
        <div className="w-full max-w-[500px] md:max-w-none md:w-[60%] lg:w-[50%] aspect-[4/3] md:aspect-auto md:h-[21rem] lg:h-[25rem] relative group mx-auto md:mx-0">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gray-100 shadow-xl transition-transform duration-700 "
            style={{
              // Top-left: square, Top-right: cut, Bottom-right: square, Bottom-left: cut
              clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
            }}
          >
            <Image
              src="/imgs/products/Knife Gate Valve (2).jpg.jpeg"
              alt="Our Story"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex text-center flex-col justify-center md:text-left">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2937] mb-4 sm:mb-6 tracking-tight leading-[1.2]">
            Our Story
          </h2>
          <p className="text-[14.5px] sm:text-[15px] md:text-[16px] text-gray-600 leading-[1.7] md:leading-[1.8] font-medium max-w-[580px]">
            Founded in 2012 in Obuasi, Bingodee Company Limited was established to provide dependable engineering support services and industrial supplies for Ghana's growing mining and civil engineering sectors. Through continuous investment in people, equipment and infrastructure, we have grown into a trusted partner for organizations seeking quality engineering solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
