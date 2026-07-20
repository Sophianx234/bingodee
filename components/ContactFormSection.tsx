'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <section className="w-full bg-white py-12 mb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Column: Contact Details */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          {/* Phone Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 shadow-sm"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 shadow-sm rounded-sm shrink-0">
              <Phone className="w-6 h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] font-semibold text-[#1c1c1c] mb-3">
                Talk to Us on Phone
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                (+233) 243 127 833<br />
                (+233) 209 669 713<br />
                (+233) 244 919 613
              </p>
            </div>
          </div>

          {/* Email Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 shadow-sm"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 shadow-sm rounded-sm shrink-0">
              <Mail className="w-6 h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] font-semibold text-[#1c1c1c] mb-3">
                Send Us an Email
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                info@bingodee.com
              </p>
            </div>
          </div>

          {/* Location Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 shadow-sm"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 shadow-sm rounded-sm shrink-0">
              <MapPin className="w-6 h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] font-semibold text-[#1c1c1c] mb-3">
                Visit Us
              </h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Plot No. 1, Block A, Sanso Anwonakrom<br />
                Off Obuasi-Dunkwa Road<br />
                Obuasi, Ashanti Region, Ghana
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-2/3">
          <div 
            className="w-full h-full bg-[#f8f9fb] p-10 md:p-12 lg:p-16 shadow-sm"
            style={{ clipPath: 'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)' }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full h-full justify-between">
              
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Name</label>
                    <input 
                      type="text" 
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow focus:shadow-md" 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Email</label>
                    <input 
                      type="email" 
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow focus:shadow-md" 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Contact</label>
                    <input 
                      type="text" 
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow focus:shadow-md" 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Select Request Type</label>
                    <input 
                      type="text" 
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow focus:shadow-md" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-12">
                  <label className="text-slate-500 font-semibold text-[15px]">Your Message</label>
                  <textarea 
                    className="bg-white px-5 py-4 outline-none text-[#1c1c1c] font-medium h-40 resize-none transition-shadow focus:shadow-md"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-[#6592ff] hover:bg-[#4d7ef5] text-white font-semibold text-[15px] px-10 py-4 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
