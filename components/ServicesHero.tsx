import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-0 mb-20">
      
      {/* Main Image Container */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] lg:h-[35rem] bg-gray-200"
        style={{
          backgroundImage: 'url(/imgs/h-4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Hexagonal/Geometric cut exactly like AboutHero
          clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
        }}
      ></div>

      {/* Dark Overlay Box Wrapper (for Drop Shadow) exactly like AboutHero */}
      <div 
        className="absolute bottom-4 left-6 transform translate-y-12 w-[50%] z-10" 
        style={{ filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.5))' }}
      >
        <div 
          className="w-full bg-[#111827] text-white py-10 md:py-12 lg:py-16 shadow-lg"
          style={{
            clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
          }}
        >
          <div className="pl-[8%] md:pl-[12%] pr-[5%]">
            <h1 className="text-3xl md:text-3xl font-bold leading-[1.2] mb-6">
              Engineering Services &<br />
              Industrial Solutions
            </h1>
            <p className="text-gray-300 text-[16px] md:text-[15px] leading-[1.6] font-medium max-w-[650px]">
              We deliver integrated engineering services and industrial procurement solutions that keep projects moving efficiently.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
