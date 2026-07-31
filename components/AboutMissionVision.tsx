export default function AboutMissionVision() {
  return (
    <section className="w-full bg-white pt-8 mb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Mission Card */}
        <div className="relative w-full h-[400px] lg:h-[480px]">
          {/* Blue Background */}
          <div 
  className="absolute -top-5 left-0 w-[95%] h-[60%] bg-primary"
  style={{ 
    clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' 
  }}
>
  <h3 className="absolute top-24 left-10 lg:left-14 text-[22px] lg:text-[24px] font-semibold text-white">
    Our Mission
  </h3>
</div>
          
          {/* Dark Foreground */}
          <div 
            className="absolute -bottom-12 left-0 w-full h-[90%] bg-[#1c1c1c] flex items-center shadow-2xl"
            style={{ clipPath: 'polygon(0 40%, 40% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
          >
            <div className="pl-8 pr-6 lg:pl-12 lg:pr-10 pt-16">
              <p className="text-gray-300 text-[13px] lg:text-[14px] leading-[1.8] font-medium">
                Bingodee Company Limited highly values our clients’ needs for safe, reliable, and operational efficient designs through cost-effective engineering and construction management services in a responsive, dynamic and trusted, long-lasting relationship within the mining and Civil industries by conducting our business with integrity and hard work.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative w-full h-[400px] lg:h-[480px]">
          {/* Cyan Background */}
          <div 
            className="absolute -top-5 left-0 w-[95%] h-[60%] bg-[#00e5ff]"
            style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
          >
            <h3 className="absolute top-24 left-10 lg:left-14 text-[22px] lg:text-[24px] font-semibold text-white">
              Our Vision
            </h3>
          </div>
          
          {/* Dark Foreground */}
          <div 
            className="absolute -bottom-12 left-0 w-full h-[90%] bg-[#1c1c1c] flex items-center shadow-2xl"
            style={{ clipPath: 'polygon(0 40%, 40% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
          >
            <div className="pl-8 pr-6 lg:pl-12 lg:pr-10 pt-16">
              
              <p className="text-gray-300 text-[13px] lg:text-[14px] leading-[1.7] font-medium">
                BG believes our vision embodies who we are, reflects our core values and the path we follow in pursuit of providing the mining and civil industries with unmatched services and performances and unparalleled accountability and the highest-level of satisfaction that places us as the leader and the preferred engineering service provider in Africa and beyond.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
