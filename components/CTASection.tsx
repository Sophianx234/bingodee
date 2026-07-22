import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-[#1c1c1c] py-0 -mt-15">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text and Button */}
        <div className="w-full md:w-1/2 py-16 md:py-24 pr-8 lg:pr-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-white leading-tight mb-6 tracking-tight">
            Looking for a Reliable Engineering Partner?
          </h2>
          <p className="text-[16px] text-gray-300 mb-10 font-medium tracking-wide">
            Speak with our engineering team about your next project.
          </p>
          <div>
            <Link 
              href="/contact" 
              className="inline-flex text-white bg-primary hover:bg-primary-hover font-semibold text-[15px] px-8 py-3.5 transition-colors shadow-sm "
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        {/* Right Side: Image with Geometric Cut */}
        <div className="w-full md:w-[30rem] h-[350px] md:h-[35rem]  relative mt-8 md:mt-0">
          <div 
            className="absolute top-0 right-0 w-full h-full bg-gray-200"
            style={{
              backgroundImage: 'url(/imgs/cta-1.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              // Polygon matches s-4.png right image:
              // top-left corner is square
              // top-right corner is cut diagonally
              // bottom-right corner is square
              // bottom-left corner is cut with a long steep diagonal
              clipPath: 'polygon(0% 25.19%, 80.8% 25.19%, 100% 38.4%, 100% 74.81%, 17.46% 74.81%, 0% 54.61%)'
            }}
          ></div>
        </div>

      </div>
    </section>
  );
}
