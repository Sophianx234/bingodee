import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="w-full bg-[#1c1c1c] py-0 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between pb-10 md:pb-0">
        
        {/* Left Side: Text and Button */}
        <div className="w-full md:w-1/2 py-16 md:py-24 pr-0 md:pr-8 lg:pr-16 text-center md:text-left flex flex-col items-center md:items-start relative z-10">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-[1.25] mb-4 md:mb-6 tracking-tight">
            Looking for a Reliable Engineering Partner?
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-400 mb-8 md:mb-10 font-medium tracking-wide">
            Speak with our engineering team about your next project.
          </p>
          <div>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center text-white bg-primary font-bold text-[14px] md:text-[15px] px-8 md:px-10 py-3.5 md:py-4 transition-all shadow-md hover:shadow-lg rounded-none hover:-translate-y-1"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Right Side: Image with Geometric Cut */}
        {/* The polygon cuts off the top 25% and bottom 25%, so we use negative margins on mobile to close the empty gaps */}
        <div className="w-full max-w-[400px] md:max-w-none md:w-[30rem] aspect-square md:aspect-auto md:h-[35rem] relative -mt-12 sm:-mt-20 md:mt-0 -mb-12 sm:-mb-20 md:-mb-0 mx-auto md:mx-0 group z-0">
          <div 
            className="absolute top-0 right-0 w-full h-full bg-gray-100 transition-transform duration-700 group-hover:scale-105"
            style={{
              // Polygon matches s-4.png right image:
              clipPath: 'polygon(0% 25.19%, 80.8% 25.19%, 100% 38.4%, 100% 74.81%, 17.46% 74.81%, 0% 54.61%)'
            }}
          >
            <Image
              src="/imgs/products/Non-Return%20Valve.jpg.jpeg"
              alt="CTA Background"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain', objectPosition: '50% 55%' }}
            />
          </div>
          
          {/* Subtle Accent Glow behind the image to separate from dark background */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/20 blur-3xl -z-10 rounded-full opacity-50 md:opacity-100 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
        </div>

      </div>
    </section>
  );
}
