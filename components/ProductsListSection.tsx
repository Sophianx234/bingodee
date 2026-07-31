'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const products = [
  { "id": 1, "title": "Abrasive Compounds", "images": ["/imgs/products/Abrasive Compounds.jpeg"] },
  { "id": 2, "title": "Assorted Items", "images": ["/imgs/products/Assorted Items.jpg.jpeg"] },
  { "id": 3, "title": "Assorted Valves", "images": ["/imgs/products/Assorted Valves.jpg.jpeg", "/imgs/products/Assorted Valves (2).jpg.jpeg"] },
  { "id": 6, "title": "Ball Valves", "images": ["/imgs/products/Ball Valves.jpg.jpeg", "/imgs/products/Ball Valve Lever.jpg.jpeg"] },
  { "id": 7, "title": "Butterfly Valve", "images": ["/imgs/products/Butterfly Valve Gear.jpg.jpeg", "/imgs/products/Butterfly Valve Lever.jpg.jpeg"] },
  { "id": 9, "title": "Carbon Steel Butt Welding Fittings", "images": ["/imgs/products/Carbon-Steel-Butt-Welding-Fittings.jpg.jpeg"] },
  { "id": 10, "title": "Conveyor Belt", "images": ["/imgs/products/Conveyor Belt.jpg.jpeg", "/imgs/products/Cover strip - Conveyor.jpg.jpeg"] },
  { "id": 13, "title": "Diaphragm Valve", "images": ["/imgs/products/Diaphragm Valve.jpg.jpeg"] },
  { "id": 14, "title": "Disc", "images": ["/imgs/products/Disc.jpg.jpeg"] },
  { "id": 15, "title": "Fastners", "images": ["/imgs/products/Fastners.jpg.jpeg"] },
  { "id": 16, "title": "Flanged Ball Valve", "images": ["/imgs/products/Flanged Ball Valve.jpg.jpeg", "/imgs/products/Flanged Ball Valves.jpg.jpeg", "/imgs/products/Flanged Ball Valves (2).jpg.jpeg"] },
  { "id": 20, "title": "Flanges", "images": ["/imgs/products/Flanges.jpg.jpeg", "/imgs/products/Flanges (2).jpg.jpeg"] },
  { "id": 22, "title": "Galvanize Stair Treads", "images": ["/imgs/products/Galvanize Stair Treads.jpg.jpeg"] },
  { "id": 23, "title": "Gate Valve", "images": ["/imgs/products/Gate Valve.jpg.jpeg", "/imgs/products/Gate Valves.jpg.jpeg"] },
  { "id": 25, "title": "Helmitin Glue", "images": ["/imgs/products/Helmitin Glue.png"] },
  { "id": 26, "title": "Carbon Steel Elbows", "images": ["/imgs/products/IMG_9495 copy.jpg.jpeg"] },
  { "id": 27, "title": "Tee Fitting", "images": ["/imgs/products/IMG_9496 copy.jpg.jpeg"] },
  { "id": 28, "title": "Heavy Duty Gate Valve", "images": ["/imgs/products/IMG_9530 copy.jpg.jpeg"] },
  { "id": 29, "title": "Large Steel Flanges", "images": ["/imgs/products/IMG_9537 copy.jpg.jpeg"] },
  { "id": 30, "title": "Knife Gate Valve", "images": ["/imgs/products/Knife Gate Valve.jpg.jpeg", "/imgs/products/Knife Gate Valve (2).jpg.jpeg"] },
  { "id": 32, "title": "Non Metallic Pump", "images": ["/imgs/products/Non Metallic Pump.jpg.jpeg"] },
  { "id": 33, "title": "Non Return Valve", "images": ["/imgs/products/Non-Return Valve.jpg.jpeg", "/imgs/products/Non-Return Valve (2).jpg.jpeg", "/imgs/products/Non-Return Valve Threaded.jpg.jpeg"] },
  { "id": 37, "title": "Phosphor Bronze Bars", "images": ["/imgs/products/Phosphor-Bronze Bars.jpg.jpeg"] },
  { "id": 38, "title": "Pipe Bandage", "images": ["/imgs/products/Pipe Bandage.jpg.jpeg"] },
  { "id": 39, "title": "Pulley", "images": ["/imgs/products/Pulley.jpg.jpeg"] },
  { "id": 40, "title": "Slurry Knife Gate Valve", "images": ["/imgs/products/Slurry Knife Gate Valve.jpg.jpeg"] },
  { "id": 42, "title": "Solenoid Valve", "images": ["/imgs/products/Solenoid Valve.jpg.jpeg"] },
  { "id": 43, "title": "Spiral Wrap", "images": ["/imgs/products/Spiral Wrap.jpg.jpeg"] },
  { "id": 45, "title": "Stanchions", "images": ["/imgs/products/Stanchions.jpg.jpeg", "/imgs/products/Stanchions (2).jpg.jpeg"] },
  { "id": 47, "title": "Steel Fittings", "images": ["/imgs/products/Steel Fittings.jpg.jpeg", "/imgs/products/Steel fitting.jpg.jpeg"] },
  { "id": 49, "title": "Taper Lock Bush", "images": ["/imgs/products/Taper-Lock-Bush.jpg.jpeg"] },
  { "id": 50, "title": "Threaded Rods", "images": ["/imgs/products/Threaded Rods.jpg.jpeg"] },
  { "id": 51, "title": "Valves", "images": ["/imgs/products/Valves.jpg.jpeg"] },
  { "id": 52, "title": "Vent Valve", "images": ["/imgs/products/Vent Valve.jpg.jpeg"] },
  { "id": 53, "title": "Welding Consumables", "images": ["/imgs/products/Welding consumables.jpg.jpeg", "/imgs/products/welding-consumable-250x250.jpg.jpeg"] }
];

export default function ProductsListSection() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredProducts.length));
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProduct]);

  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 md:mb-32 relative">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        
        {/* Header with Title and Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-6 w-full md:max-w-[400px]">
            <h2 className="text-[20px] md:text-[28px] font-bold text-slate-800 whitespace-nowrap">
              Our Products
            </h2>
            <div className="h-[2px] bg-primary flex-grow"></div>
          </div>
          
          {/* Search Bar */}
          <div className="w-full md:w-auto md:min-w-[320px]">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(12); }}
                className="w-full bg-white border border-slate-200 px-5 py-3 pr-11 outline-none text-[15px] text-slate-700 placeholder:text-slate-400 focus:border-primary transition-colors "
              />
              <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500">
              No products found matching "{searchQuery}"
            </div>
          ) : null}
          {filteredProducts.slice(0, visibleCount).map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-[320px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-[220px] bg-slate-100 p-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image 
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
              </div>
              
              {/* Product Info */}
              <div className="flex-1 flex flex-col items-center justify-center p-4 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full">
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-slate-700 group-hover:text-white text-center transition-colors duration-300 line-clamp-2 px-2 mb-2 group-hover:mb-3">
                    {product.title}
                  </h3>
                  
                  {/* View Details Button (appears on hover) */}
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-[13px] font-bold py-1.5 px-5 shadow-sm transform translate-y-4 group-hover:translate-y-0"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={loadMore}
              className="bg-primary text-white text-white font-bold py-3 px-8 transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              Load More Products
            </button>
          </div>
        )}

      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
          {/* Modal Backdrop Click Area */}
          <div 
            className="absolute inset-0 cursor-pointer"
            onClick={() => setSelectedProduct(null)}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto sm:overflow-hidden shadow-2xl flex flex-col sm:flex-row animate-in fade-in zoom-in duration-300"
            role="dialog"
            aria-modal="true"
          >
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-slate-100 text-slate-800 p-2 rounded-full  transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Product Image */}
            <div className="relative w-full sm:w-1/2 min-h-[300px] sm:min-h-[400px] bg-slate-50 flex flex-col items-center justify-center p-8 border-b sm:border-b-0 sm:border-r border-slate-100">
              <div className="absolute inset-0 bg-pattern opacity-5"></div>
              <div className="relative w-full flex-grow h-64 sm:h-auto mb-6">
                <Image 
                  src={selectedProduct.images[activeImageIndex]}
                  alt={selectedProduct.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                  className="z-10"
                />
              </div>

              {/* Thumbnails if multiple images */}
              {selectedProduct.images.length > 1 && (
                <div className="flex gap-3 mt-auto z-10 overflow-x-auto w-full pb-2 scrollbar-hide justify-center">
                  {selectedProduct.images.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 flex-shrink-0 border-2 rounded ${activeImageIndex === idx ? 'border-primary' : 'border-slate-200'} hover:border-primary transition-colors`}
                    >
                      <Image src={img} alt="" fill style={{ objectFit: 'cover' }} className="rounded-sm" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side: Product Details */}
            <div className="w-full sm:w-1/2 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className="w-12 h-1.5 bg-primary mb-6"></div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 leading-tight">
                {selectedProduct.title}
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-[15px] sm:text-[16px]">
                High-quality industrial <strong className="text-slate-800">{selectedProduct.title.toLowerCase()}</strong> manufactured to meet exact specifications. Designed for superior durability, peak performance, and reliability in demanding mining, civil engineering, and infrastructure operations across Ghana.
              </p>
              
              <div className="mt-auto pt-4 border-t border-slate-100">
                <Link 
                  href={`/contact?product=${encodeURIComponent(selectedProduct.title)}`}
                  className="inline-flex items-center justify-center bg-primary  text-white font-bold py-3.5 px-8 transition-colors duration-300 shadow-md w-full sm:w-auto"
                >
                  Request Product
                </Link>
                <p className="text-xs text-slate-400 mt-3 text-center sm:text-left">
                  Our engineering team will respond within 24 hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
