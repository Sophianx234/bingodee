import Link from 'next/link';
import Image from 'next/image';

export default function ProductsExpertiseSection() {
  return (
    <section className="w-full bg-white pt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-6 md:mb-12 relative z-20 gap-4 sm:gap-0">
          <h2 className="text-[28px] sm:text-[30px] md:text-[32px] font-bold text-[#1f2937] leading-[1.25] max-w-[500px]">
            Products That Demonstrate Our Expertise
          </h2>
          <Link 
            href="/products" 
            className="inline-flex   bg-primary md:bg-white font-bold text-[14px] px-8 py-3 transition-all   md:text-primary  whitespace-nowrap"
          >
            See More
          </Link>
        </div>


        {/* Images Grid */}
        {/* The clip-path starts around 26% from the top, creating a massive artificial gap. 
            We use a negative margin top here to pull the boxes up and eliminate the gap visually. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 -mt-16 md:-mt-40 z-10 relative">
          
          {/* Left Image Box */}
          <div className="relative  w-full h-[300px] md:h-[40rem]">
            {/* The actual image container */}
            <div 
              className="absolute top-0 left-0 z-10 w-full h-full bg-gray-200 shadow-lg"
              style={{
                clipPath: 'polygon(0% 25.94%, 81.05% 25.94%, 99.64% 44.39%, 99.64% 75.37%, 57.61% 75.37%, 0% 47.94%)'
              }}
            >
              <Image
                src="/imgs/products/Stanchions%20(2).jpg.jpeg"
                alt="Pipes"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            {/* The Blue Polygon Overlay on Bottom Left */}
            <div 
              className="absolute bottom-19 -left-1 w-full h-[35%] bg-primary z-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 7.18%, 81.46% 7.18%, 100% 7.16%, 100% 52.6%, 86.9% 52.6%, 99.75% 68.1%, 99.75% 76.24%, 68.32% 76.24%, 0% 76.24%)'
              }}
            ></div>
          </div>

          {/* Right Image Box */}
          <div className="relative w-full -mt-32 md:mt-0 h-[300px] md:h-[40rem]">
            {/* The actual image container */}
            <div 
              className="absolute top-0 z-10 left-0 w-full h-full bg-gray-200 shadow-lg"
              style={{
                clipPath: 'polygon(100% 25.94%, 18.95% 25.94%, 0.36% 44.39%, 0.36% 75.37%, 42.39% 75.37%, 100% 47.94%)'
              }}
            >
              <Image
                src="/imgs/products/Fastners.jpg.jpeg"
                alt="Flanges"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            {/* The Blue Polygon Overlay on Bottom Right */}
            <div 
              className="absolute bottom-19 -right-1 w-full h-[35%] bg-primary z-0 pointer-events-none"
              style={{
                clipPath: 'polygon(100% 7.18%, 18.54% 7.18%, 0% 7.16%, 0% 52.6%, 13.1% 52.6%, 0.25% 68.1%, 0.25% 76.24%, 31.68% 76.24%, 100% 76.24%)'
              }}
            ></div>
          </div>

        </div>

      </div>
    </section>
  );
}
