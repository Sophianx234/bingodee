export default function ContactMap() {
  return (
    <section className="w-full bg-white pt-10 md:pt-0 pb-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-center mb-12 w-full max-w-[800px] mx-auto">
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
          <h2 className="px-6 text-[22px] font-semibold text-slate-500 text-center">
            Find Us on the Map
          </h2>
          <div className="h-[1px] bg-slate-300 flex-grow"></div>
        </div>

        {/* Map Container */}
        <div 
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 shadow-xl overflow-hidden"
          style={{
            // Applying the signature geometric cut to the map container!
            clipPath: 'polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)'
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Obuasi,+Ashanti+Region,+Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            title="Bingodee Co. Ltd. Location"
          ></iframe>

          {/* Decorative Blue Box overlapping slightly to anchor the design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary mix-blend-multiply opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#111827] opacity-80" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
        </div>
      </div>
    </section>
  );
}
