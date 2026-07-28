export default function AboutMissionVision() {
  return (
    <section className="w-full bg-white pt-8 mb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Mission Card */}
        <div className="relative w-full h-[320px] lg:h-[350px]">
          {/* Blue Background */}
          <div 
  className="absolute -top-5 left-0 w-[95%] h-[60%] bg-primary"
  style={{ 
    clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' 
  }}
>
  <h3 className="absolute top-14 left-10 lg:left-14 text-[22px] lg:text-[24px] font-semibold text-white">
    Our Mission
  </h3>
</div>
          
          {/* Dark Foreground */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[85%] bg-[#1c1c1c] flex items-center shadow-2xl"
            style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}
          >
            <div className="pl-10 pr-6 lg:pl-14 lg:pr-12 pt-16">
              <p className="text-gray-300 text-[14px] lg:text-[15px] leading-[1.8] font-medium">
                Deliver safe, reliable and cost-effective engineering and construction support services while building long-term relationships through integrity, professionalism and technical excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative w-full h-[320px] lg:h-[350px]">
          {/* Cyan Background */}
          <div 
            className="absolute -top-5 left-0  w-[95%] h-[60%] bg-[#00e5ff]"
            style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
          >
            <h3 className="absolute top-14 left-10 lg:left-14  text-[22px] lg:text-[24px] font-semibold text-white">
              Our Vision
            </h3>
          </div>
          
          {/* Dark Foreground */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[85%] bg-[#1c1c1c] flex items-center shadow-2xl"
            style={{ clipPath: 'polygon(0 50%, 50% 0, 100% 0, 100% 75%, 75% 100%, 0 100%)' }}
          >
            <div className="pl-10 pr-6 lg:pl-14 lg:pr-12 pt-16">
              <p className="text-gray-300 text-[14px] lg:text-[15px] leading-[1.8] font-medium">
                To become Africa's preferred provider of engineering support, construction management and industrial supply solutions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
