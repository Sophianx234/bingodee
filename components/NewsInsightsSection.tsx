'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ArrowRight, ChevronDown } from 'lucide-react';

type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  content: string[];
  ctaText: string;
};

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Why Data Center Projects Are Delayed and How Supply Chain Strategy Can Solve It',
    date: '21 May 2026',
    category: 'NEWS',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    content: [
      'Building a massive data center is no small feat. Yet, we are seeing more and more projects hit a wall right in the middle of construction. The biggest culprit is often a broken global supply chain. Getting critical equipment like commercial chillers or heavy duty backup generators on site takes longer than ever.',
      'The good news is that these delays are entirely preventable. By treating your supply chain strategy as the foundation of your project rather than an afterthought, you can completely change the trajectory of your build. This means locking in raw materials early and partnering closely with trusted structural steel erectors long before the ground is broken.',
      'Our integrated approach takes the guesswork out of the equation. We help you map out exactly what you need and when you need it, ensuring that sudden material shortages never dictate your timeline. When you have the right strategy in place, your project stays on schedule and your budget remains intact.'
    ],
    ctaText: 'Request Service'
  },
  
  {
    id: '3',
    title: 'Sustainable Practices in Modern Industrial Manufacturing Facilities',
    date: '02 May 2026',
    category: 'NEWS',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    content: [
      'Sustainability is no longer just a trend to talk about in board meetings. It has become a non-negotiable requirement for anyone building a modern manufacturing facility. Industry leaders are realizing that going green is actually one of the smartest business decisions they can make.',
      'The shift starts with the bones of the building. We are seeing a massive push toward energy-efficient piping systems and zero-waste fabrication processes. These upgrades might require a bit more planning upfront, but they immediately start paying off by reducing the facility\'s overall carbon footprint.',
      'What is really exciting is how these practices impact the bottom line. Embracing environmentally conscious methods directly translates to significantly lower operational costs over the life of the building. It is a win for the environment and an absolute necessity for staying competitive in today\'s market.'
    ],
    ctaText: 'Request Service'
  },
  {
    id: '4',
    title: 'Secure Products Before Constraints Become Delays',
    date: '25 Apr 2026',
    category: 'INSIGHT',
    image: 'https://plus.unsplash.com/premium_photo-1679870686438-7de708175059?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      'In today’s volatile market, waiting until the last minute to secure your materials is a guaranteed recipe for project delays. Procurement teams are learning the hard way that assuming availability is a critical mistake, especially for specialized equipment and components.',
      'The most successful project managers are flipping the script. Instead of relying on just-in-time delivery, they are securing products well in advance. By identifying potential bottlenecks early in the planning phase, you can build in buffers that keep your teams working without interruption.',
      'We work closely with clients to aggressively source and store necessary materials long before they are needed on site. This simple shift from reactive to proactive procurement ensures that constraints never have the chance to become costly delays.'
    ],
    ctaText: 'Request Supplies'
  },
  {
    id: '2',
    title: 'New Innovations in Heavy Structural Steel Erection Techniques and Processes',
    date: '15 May 2026',
    category: 'INSIGHT',
    image: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      'The structural steel industry is finally getting the tech upgrade it deserves. For decades, erecting steel for massive industrial facilities was done the exact same way. Today, advanced automation and incredibly precise 3D modeling are completely changing how we build.',
      'One of the most exciting shifts is the move toward modular pre-assembly. Instead of trying to piece everything together hundreds of feet in the air, crews can safely assemble massive sections on the ground. This simple change drastically reduces on-site risks and protects the workers who bring these facilities to life.',
      'These innovations do more than just improve safety. They also accelerate construction timelines in a very real way. By setting new standards in efficiency, modern erection techniques allow construction teams to reach new heights faster and more securely than anyone thought possible.'
    ],
    ctaText: 'Request Supplies'
  },
  {
    id: '5',
    title: 'Secure Critical Utility Infrastructure Before Constraints Become Delays',
    date: '18 Apr 2026',
    category: 'NEWS',
    image: 'https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: [
      'When it comes to large-scale construction, few things are as vulnerable to supply chain hiccups as utility infrastructure. From heavy-duty transformers to specialized piping, these critical components often have the longest lead times and the least room for error.',
      'Many builds are currently stalled simply because the essential utility connections are missing. If you cannot power or pipe the facility, no other work can move forward. Securing this infrastructure must be the very first priority on your project timeline.',
      'By committing to your utility needs before ground is even broken, you give manufacturers the lead time they actually require. Our strategic partnerships help you lock in these critical components early, completely bypassing the constraints that are currently crippling the industry.'
    ],
    ctaText: 'Request Service'
  },
  {
    id: '6',
    title: 'Future-Proofing Warehouses for the E-Commerce Boom',
    date: '10 Apr 2026',
    category: 'INSIGHT',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1935&auto=format&fit=crop',
    content: [
      'The rapid expansion of e-commerce has completely changed what a modern warehouse needs to be. It is no longer just a place to store boxes. Today’s logistics hubs must be highly automated, incredibly efficient, and ready to scale at a moment’s notice.',
      'Building for this new reality means designing flexible structural grids and incorporating advanced power infrastructure from day one. Facilities need the capacity to support heavy robotics, automated sorting systems, and a massive influx of power requirements without requiring a complete retrofit down the line.',
      'We are helping developers build facilities that will remain relevant decades from now. By anticipating the technological needs of tomorrow, we ensure that your warehouse is fully equipped to handle whatever the e-commerce boom throws at it next.'
    ],
    ctaText: 'Request Service'
  },
  {
    id: '7',
    title: 'Navigating the Labor Shortage in Heavy Construction',
    date: '28 Mar 2026',
    category: 'NEWS',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    content: [
      'Finding skilled labor for heavy construction projects has never been more difficult. A generational shift in the workforce has left a massive gap in experienced tradespeople, forcing companies to drastically rethink how they staff their sites.',
      'The solution lies in a combination of better training, competitive incentives, and a strong embrace of technology. By automating repetitive tasks and using advanced machinery, crews can accomplish much more with fewer hands on deck, safely and efficiently.',
      'We have adapted to this new landscape by investing heavily in our core team and utilizing the latest construction technology. This dual approach ensures that we always have the talent and the tools necessary to execute your project flawlessly, regardless of market shortages.'
    ],
    ctaText: 'Request Service'
  },
  {
    id: '8',
    title: 'The Role of Prefabrication in Rapid Facility Deployment',
    date: '15 Mar 2026',
    category: 'INSIGHT',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    content: [
      'When speed is the ultimate priority, traditional stick-built construction simply cannot keep up. Prefabrication has emerged as the clear winner for developers who need to bring massive facilities online as quickly as possible.',
      'By manufacturing large components in a controlled, off-site environment, teams can guarantee higher quality and completely eliminate weather delays. Once the pieces arrive on site, the building goes up in a fraction of the time it would normally take.',
      'Our deep expertise in prefabrication allows us to drastically compress project schedules. We deliver perfectly crafted modules right when they are needed, allowing you to rapidly deploy your facility and start generating a return on your investment sooner.'
    ],
    ctaText: 'Request Supplies'
  },
  {
    id: '9',
    title: 'Mitigating Financial Risks in Large-Scale Infrastructure Projects',
    date: '02 Mar 2026',
    category: 'NEWS',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    content: [
      'Large-scale infrastructure projects carry immense financial risk, often exacerbated by fluctuating material costs and unpredictable timelines. When a project spans several years, the economic landscape can change dramatically from the initial estimate.',
      'Smart developers are mitigating these risks through rigorous early-stage planning and ironclad supply chain agreements. By locking in pricing and establishing firm schedules before construction begins, they protect their budgets from unexpected spikes.',
      'We bring certainty to an uncertain process. Through transparent pricing, proactive procurement, and strict schedule adherence, we eliminate the variables that cause budget overruns, ensuring your investment remains secure from start to finish.'
    ],
    ctaText: 'Request Service'
  }
];

export default function NewsInsightsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setCanScroll(scrollTop + clientHeight < scrollHeight - 2);
    }
  };

  // Function to close modal
  const closeModal = () => setSelectedNews(null);

  useEffect(() => {
    if (selectedNews) {
      setTimeout(checkScroll, 100);
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
    }
  }, [selectedNews]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  return (
    <section className="w-full bg-gray-50 py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center justify-center w-full max-w-[600px] mx-auto mb-4">
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
            <h3 className="mx-6 text-[16px] md:text-[18px] font-bold text-gray-500 tracking-wide uppercase">
              News & Insights
            </h3>
            <div className="h-[1px] bg-gray-300 flex-grow"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Stay Updated with Our Latest News
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, visibleCount).map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedNews(item)}
              className="cursor-pointer group flex flex-col bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-xs hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full aspect-[1.6] mb-6 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover  transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h4 className="text-[22px] md:text-[26px] font-bold text-black mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
                
                <div className="mt-auto">
                  <p className="text-[#a0a0a0] font-medium text-[16px] mb-3">
                    {item.date}
                  </p>
                  <span className="text-[#0056b3] font-bold uppercase tracking-wider text-[15px]">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < newsItems.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="px-10 py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              Load More News
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-50  flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          selectedNews ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Modal Background Click */}
        <div className="absolute inset-0" onClick={closeModal}></div>
        
        {/* Modal Content */}
        <div 
          className={`relative w-full max-w-5xl bg-white rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10 transition-all duration-300 transform ${
            selectedNews ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors "
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left side: Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto shrink-0 overflow-hidden">
            {selectedNews && (
              <Image
                src={selectedNews.image}
                alt={selectedNews.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20"></div>
          </div>

          {/* Right side: Content */}
          <div className="w-full md:w-1/2 relative flex flex-col overflow-hidden">
            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="p-8 md:p-12 flex flex-col overflow-y-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {selectedNews && (
              <>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[#0056b3] font-bold uppercase tracking-wider text-xs md:text-sm bg-blue-50 px-3 py-1.5 ">
                    {selectedNews.category}
                  </span>
                  <span className="text-gray-400 font-medium text-sm">
                    {selectedNews.date}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {selectedNews.title}
                </h3>
                
                <div className="w-16 h-1.5 bg-primary mb-8 rounded-full"></div>
                
                <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 flex-grow flex flex-col gap-5">
                  {selectedNews.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100">
                  <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold  hover:bg-primary/90 transition-all duration-300  flex items-center justify-center gap-3 group">
                    {selectedNews.ctaText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </>
            )}
            </div>
            
            {/* Scroll Indicator */}
            {canScroll && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary  pointer-events-none bg-white/95 rounded-full p-1.5 shadow-md border border-gray-100 z-10">
                <ChevronDown className="w-6 h-6" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
