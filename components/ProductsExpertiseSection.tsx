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
          <div className="relative w-full h-[300px] md:h-[40rem] ">
            {/* The actual image container */}
            <div 
              className="absolute top-0 left-0 z-10 w-full h-full bg-gray-200 shadow-lg"
              style={{
                backgroundImage: 'url(/imgs/h-2.png)', // Placeholder for pipes
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                clipPath: 'polygon(0% 25.94%, 81.05% 25.94%, 99.64% 44.39%, 99.64% 75.37%, 57.61% 75.37%, 0% 47.94%)'
              }}
            ></div>
            {/* The Blue Polygon Overlay on Bottom Left */}
            <div 
              className="absolute bottom-19  -left-1 w-full h-[35%] bg-[#6592ff] z-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 7.18%, 81.46% 7.18%, 100% 7.16%, 100% 52.6%, 86.9% 52.6%, 99.75% 68.1%, 99.75% 76.24%, 68.32% 76.24%, 0% 76.24%)'
              }}
            ></div>
          </div>

          {/* Right Image Box */}
          <div className="relative w-full h-[300px] md:h-[40rem]">
            {/* The actual image container */}
            <div 
              className="absolute top-0 z-10 left-0 w-full h-full bg-gray-200 "
              style={{
                backgroundImage: 'url(/imgs/h-1.jpg)', // Placeholder for flanges
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                clipPath: 'polygon(100% 25.94%, 18.95% 25.94%, 0.36% 44.39%, 0.36% 75.37%, 42.39% 75.37%, 100% 47.94%)'
              }}
            ></div>
            {/* The Blue Polygon Overlay on Bottom Right */}
            <div 
  className="absolute bottom-19 -right-1 w-full h-[35%] bg-[#6592ff] z-0 pointer-events-none"
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
