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
      icon: <Waypoints className="w-6 h-6 text-[#6592ff]" />,
      desc: "We ensure consistent product availability through strong local and international partnerships."
    },
    {
      title: "Qualified Engineers",
      icon: <HardHat className="w-6 h-6 text-[#6592ff]" />,
      desc: "Our experienced engineering professionals provide practical technical solutions."
    },
    {
      title: "Safety First",
      icon: <ShieldCheck className="w-6 h-6 text-[#6592ff]" />,
      desc: "Every project is delivered with safety, quality and compliance at its core."
    },
    {
      title: "Long-Term Partnerships",
      icon: <Handshake className="w-6 h-6 text-[#6592ff]" />,
      desc: "We build lasting client relationships through transparency, trust and dependable service."
    },
    {
      title: "Affordable Solutions",
      icon: <BadgeDollarSign className="w-6 h-6 text-[#6592ff]" />,
      desc: "Competitive pricing without compromising quality."
    },
    {
      title: "Responsive Support",
      icon: <Headset className="w-6 h-6 text-[#6592ff]" />,
      desc: "Dedicated engineers who understand your operational needs."
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[34px] font-extrabold text-[#0f172a] mb-4">
            Why We Are Trusted
          </h2>
          <p className="text-[15px] text-gray-500">
            Why Organizations Choose Bingodee
          </p>
        </div>

        {/* Feature Grid with Inner Borders Trick */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-100 border border-gray-100 rounded-sm">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-10 lg:p-14 bg-white"
            >
              <h4 className="text-[16px] font-bold text-slate-500 mb-6 tracking-wide">
                {feature.title}
              </h4>
              
              <div className="w-[64px] h-[64px] bg-[#1a1a1a] flex items-center justify-center mb-6  ">
                {feature.icon}
              </div>
              
              <p className="text-[14.5px] text-gray-500 leading-relaxed max-w-[280px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
