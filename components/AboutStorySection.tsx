export default function AboutStorySection() {
  return (
    <section id="story" className="w-full bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Side: Image with Geometric Cut */}
        <div className="w-full md:w-1/2 h-[23rem] scale-100 relative">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gray-200 shadow-lg"
            style={{
              backgroundImage: 'url(/imgs/h-2.png)', // Specified by user
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // Top-left: square, Top-right: cut, Bottom-right: square, Bottom-left: cut
              clipPath: 'polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)'
            }}
          ></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1f2937] mb-8">
            Our Story
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] font-medium max-w-[580px]">
            Founded in 2012 in Obuasi, Bingodee Company Limited was established to provide dependable engineering support services and industrial supplies for Ghana's growing mining and civil engineering sectors. Through continuous investment in people, equipment and infrastructure, we have grown into a trusted partner for organizations seeking quality engineering solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
