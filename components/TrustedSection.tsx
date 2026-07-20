import Image from 'next/image';

export default function TrustedSection() {
  const brands = [
    '/imgs/brands/b-1.png',
    '/imgs/brands/b-2.jpg',
    '/imgs/brands/b-3.png',
    '/imgs/brands/b-4.png',
    '/imgs/brands/b-5.jpg',
    '/imgs/brands/b-6.png',
    '/imgs/brands/b-7.jpg',
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header with lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
          <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide">
            Trusted By
          </h3>
          <div className="h-[1px] bg-gray-300 flex-grow max-w-[200px]"></div>
        </div>

        {/* Brands Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div key={index} className="relative flex items-center justify-center h-16 w-32 md:h-20 md:w-40 transition-transform hover:scale-105">
              <img 
                src={brand} 
                alt={`Trusted Brand ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
