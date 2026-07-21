import Image from 'next/image';
import { ShieldCheck, Gem, HardHat, Lightbulb, Headset } from 'lucide-react';

const BicepIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    {/* A simple representation of a flexed bicep arm */}
    <path d="M19.3 6.3c-.6-.6-1.5-.7-2.3-.2-.5.3-1 .6-1.5.9-1 .6-2.2 1-3.5 1-1.3 0-2.5-.4-3.5-1-.5-.3-1-.6-1.5-.9-.8-.5-1.7-.4-2.3.2C4.1 6.9 3.8 7.8 4 8.6c.7 3.5 2.6 6.5 5.3 8.3.3.2.7.3 1.1.3 1.4 0 2.8-.7 3.6-1.9 1.1.4 2.3.6 3.5.6 1.4 0 2.8-.4 4.1-1.1.8-.5 1.1-1.5.7-2.3-.4-.8-1.4-1.1-2.2-.7-.9.4-1.9.6-2.9.6-.8 0-1.6-.2-2.3-.5 1.3-1.6 1.5-3.8.4-5.5-.4-.7-.9-1.2-1.5-1.6.5-.2 1-.4 1.5-.7.8-.5 1.8-.4 2.4.4.6.8.5 1.8-.3 2.4l-.8.6c-.6.4-.7 1.2-.3 1.8.4.6 1.2.7 1.8.3l.8-.6c1.5-1 1.8-3 1-4.5z"/>
  </svg>
);

export default function AboutValuesSection() {
  const values = [
    {
      title: "Integrity",
      image: "/imgs/values/v-1.jpg",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Quality",
      image: "/imgs/values/v-2.jpg",
      icon: <Gem className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Safety",
      image: "/imgs/values/v-3.jpg",
      icon: <HardHat className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Innovation",
      image: "/imgs/values/v-4.jpg",
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      title: "Reliability",
      image: "/imgs/values/v-5.jpg",
      icon: <BicepIcon className="w-6 h-6" />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-[#1a1a1a]",
    },
    {
      title: "Customer Focus",
      image: "/imgs/values/v-6.jpg",
      icon: <Headset className="w-6 h-6" strokeWidth={2.5} />,
      iconPos: "bottom-right",
      textColor: "text-white",
      iconColor: "text-white",
    }
  ];

  return (
    <section className="w-full bg-white py-12 mb-16">
      
      {/* Heading */}
      <div className="flex items-center justify-center mb-10 w-full max-w-[800px] mx-auto px-6">
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
        <h2 className="px-6 text-[22px] font-semibold text-slate-500">
          Our Values
        </h2>
        <div className="h-[1px] bg-slate-300 flex-grow"></div>
      </div>

      {/* Grid of Values */}
      <div className="w-full flex flex-wrap lg:flex-nowrap h-auto lg:h-[400px]">
        {values.map((val, index) => (
          <div 
            key={index} 
            className="relative w-1/2 md:w-1/3 lg:w-auto lg:flex-1 aspect-[4/5] lg:aspect-auto lg:h-full group overflow-hidden transition-all duration-500 ease-in-out lg:hover:flex-[2]"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out "
              style={{ backgroundImage: `url(${val.image})` }}
            ></div>
            
            {/* Optional Overlay for readability */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>

            {/* Text Overlay */}
            <h3 className={`absolute bottom-6 left-6 text-lg md:text-[19px] font-semibold ${val.textColor} z-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-primary`}>
              {val.title}
            </h3>

            {/* Icon Overlay */}
            <div 
              className={`absolute z-10 ${val.iconColor} ${
                val.iconPos === 'top-right' ? 'top-6 right-6' : 'bottom-6 right-6'
              } transition-all duration-500 group-hover:scale-110 group-hover:text-primary`}
            >
              {val.icon}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
