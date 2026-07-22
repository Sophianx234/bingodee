import { Navigation } from 'lucide-react';

export default function IndustrialSolutionsSection() {
  const cards = [
    {
      id: 1,
      title: "Welding & Fabrication",
      color: "bg-[#00e5ff]",
      image: "/imgs/services/s-5.jpg",
      list: [
        "Custom Fabrication",
        "Metal Works",
        "Workshop Services"
      ]
    },
    {
      id: 2,
      title: "Office & Industrial Supplies",
      color: "bg-[#ffb700]",
      image: "/imgs/services/s-6.jpg",
      list: [
        "PPE",
        "Office Equipment",
        "General Merchandise"
      ]
    },
    {
      id: 3,
      title: "Engineering Supplies",
      color: "bg-[#f97316]",
      image: "/imgs/services/s-7.png",
      list: [
        ["Steel", "Valves", "Pumps", "HDPE", "Grinding Media"],
        ["Fasteners", "Piping Systems"]
      ]
    }
  ];

  return (
    <section className="w-full bg-white pt-12 -mt-15">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {cards.map(card => (
          <div key={card.id} className="relative w-full h-[320px] md:h-[350px] group mt-6">
            
            {/* Colored Background Block */}
            <div 
              className={`absolute -top-36 left-0 w-[95%] h-[50%] ${card.color} rounded-sm`}
              style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
            >
              <h3 
                className="absolute left-6 max-w-[55%] text-[17px] md:text-[16px] font-bold text-[#1c1c1c] leading-tight"
                style={{ top: '28%' }}
              >
                {card.title}
              </h3>
            </div>
            
            {/* Image Foreground Block */}
            <div 
              className="absolute -bottom-9 left-0 w-full h-[180%] shadow-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
              style={{ 
                clipPath: 'polygon(58.6% 25.44%, 100% 25.44%, 100% 60.35%, 85.79% 74.31%, 0% 74.31%, 0% 50.12%)' 
              }}
            >
              {/* The Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 "
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Dark Gradient Overlay for text readability - scoped to visible area */}
              <div 
                className="absolute w-full h-[40%]"
                style={{ bottom: '25%', left: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.4), transparent)' }}
              ></div>

              {/* Navigation Icon */}
              <div 
                className="absolute right-6 text-white/90 transform rotate-45"
                style={{ top: '28%' }}
              >
                <Navigation className="w-5 h-5 fill-white" />
              </div>

              {/* Bulleted List */}
              <div 
                className="absolute left-8 text-gray-200"
                style={{ bottom: '28%' }}
              >
                {Array.isArray(card.list[0]) ? (
                  <div className="flex gap-8">
                    <ul className="space-y-2 text-[14.5px] font-medium tracking-wide">
                      {(card.list[0] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1 h-1 rounded-full bg-white opacity-90"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2 text-[14.5px] font-medium tracking-wide">
                      {(card.list[1] as string[]).map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="w-1 h-1 rounded-full bg-white opacity-90"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="space-y-2 text-[14.5px] font-medium tracking-wide">
                    {(card.list as string[]).map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-white opacity-90"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
