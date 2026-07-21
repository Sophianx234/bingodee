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
    <section className="w-full bg-white py-12 mb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {cards.map(card => (
          <div key={card.id} className="relative w-full h-[320px] md:h-[350px] group">
            
            {/* Colored Background Block */}
            <div 
              className={`absolute -top-3 left-0 w-[95%] h-[40%] ${card.color} rounded-sm`}
              style={{ clipPath: 'polygon(0% 92.82%, 81.46% 92.82%, 100% 92.84%, 100% 47.4%, 86.9% 47.4%, 99.75% 31.9%, 99.75% 23.76%, 68.32% 23.76%, 0% 23.76%)' }}
            >
              <h3 className="absolute top-15 left-6 max-w-[75%] text-[17px] md:text-[16px] font-bold text-[#1c1c1c] leading-tight">
                {card.title}
              </h3>
            </div>
            
            {/* Image Foreground Block */}
            <div 
              className="absolute bottom-0 left-0 w-full h-[88%] shadow-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
              style={{ 
                clipPath: 'polygon(0 35%, 85% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' 
              }}
            >
              {/* The Image */}
              <div 
                className="absolute inset-0 bg-gray-500 transition-transform duration-700 "
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Navigation Icon */}
              <div className="absolute top-5 right-5 text-white/90 transform rotate-45">
                <Navigation className="w-5 h-5 fill-white" />
              </div>

              {/* Bulleted List */}
              <div className="absolute bottom-6 left-8 text-gray-200">
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
