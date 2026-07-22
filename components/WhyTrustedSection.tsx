import { 
  Waypoints, 
  HardHat, 
  ShieldCheck, 
  Handshake, 
  BadgeDollarSign, 
  Headset 
} from 'lucide-react';

export default function WhyTrustedSection() {
  const features = [
    {
      title: "Reliable Supply Chain",
      icon: <Waypoints className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "We ensure consistent product availability through strong local and international partnerships."
    },
    {
      title: "Qualified Engineers",
      icon: <HardHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "Our experienced engineering professionals provide practical technical solutions."
    },
    {
      title: "Safety First",
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "Every project is delivered with safety, quality and compliance at its core."
    },
    {
      title: "Long-Term Partnerships",
      icon: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "We build lasting client relationships through transparency, trust and dependable service."
    },
    {
      title: "Affordable Solutions",
      icon: <BadgeDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "Competitive pricing without compromising quality."
    },
    {
      title: "Responsive Support",
      icon: <Headset className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
      desc: "Dedicated engineers who understand your operational needs."
    }
  ];

  return (
    <section className="w-full bg-white md:pt-16 pt-8">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-[34px] font-extrabold text-[#0f172a] mb-4">
            Why We Are Trusted
          </h2>
          <p className="text-[15px] text-gray-500">
            Why Organizations Choose Bingodee
          </p>
        </div>

        {/* Feature Grid with Inner Borders Trick */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-100 border border-gray-100 rounded-none">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 lg:p-14 bg-white hover:bg-gray-50 transition-colors"
            >
              <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold text-slate-500 mb-4 sm:mb-6 tracking-wide">
                {feature.title}
              </h4>
              
              <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] bg-[#1a1a1a] flex items-center justify-center mb-4 sm:mb-6 rounded-none transition-transform hover:scale-105">
                {feature.icon}
              </div>
              
              <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-gray-500 leading-relaxed max-w-[280px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
