import Link from 'next/link';

export default function ProductsExpertiseSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-[32px] font-semibold text-[#1f2937]">
            Products That Demonstrate Our Expertise
          </h2>
          <Link href="/products" className="text-[#6592ff] font-bold text-[14px] hover:underline uppercase tracking-wider">
            See More
          </Link>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          
          {/* Left Image Box */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
            {/* The actual image container */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gray-200 shadow-lg"
              style={{
                backgroundImage: 'url(/imgs/h-2.png)', // Placeholder for pipes
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)'
              }}
            ></div>
            {/* The Blue Polygon Overlay on Bottom Left */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[45%] bg-[#6592ff] z-10 pointer-events-none"
              style={{
                clipPath: 'polygon(0 35%, 65% 100%, 0 100%)'
              }}
            ></div>
          </div>

          {/* Right Image Box */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px]">
            {/* The actual image container */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-gray-200 shadow-lg"
              style={{
                backgroundImage: 'url(/imgs/h-1.jpg)', // Placeholder for flanges
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 15%)'
              }}
            ></div>
            {/* The Blue Polygon Overlay on Bottom Right */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[45%] bg-[#6592ff] z-10 pointer-events-none"
              style={{
                clipPath: 'polygon(100% 35%, 100% 100%, 35% 100%)'
              }}
            ></div>
          </div>

        </div>

      </div>
    </section>
  );
}
