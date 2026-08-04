'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    requestType: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message in a natural, first-person perspective
    const text = `Hello Bingodee Company Limited,

My name is ${formData.name}. I am reaching out regarding a ${formData.requestType} inquiry.

${formData.message}

You can contact me back at ${formData.contact} or via email at ${formData.email}.
Thank you.`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = '233243127833'; // Main contact number provided
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-white md:mt-0 -mt-18 md:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Column: Contact Details (2 cols on mobile, 3rd item spans 2 cols) */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 lg:flex lg:flex-col gap-4 lg:gap-6">
          
          {/* Phone Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-5 sm:p-6 lg:p-8 flex flex-col xl:flex-row items-start gap-4 lg:gap-6"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-2.5 sm:p-3 rounded-none shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 lg:mb-3">
                Talk to Us
              </h3>
              <p className="text-slate-600 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed">
                0243 127 833<br />
                0209 669 713<br />
                0244 919 613
              </p>
            </div>
          </div>

          {/* Email Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-5 sm:p-6 lg:p-8 flex flex-col xl:flex-row items-start gap-4 lg:gap-6"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-2.5 sm:p-3 rounded-none shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col overflow-hidden w-full">
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 lg:mb-3">
                Send Email
              </h3>
              <p className="text-slate-600 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed break-all">
                info@bingodee.com
              </p>
            </div>
          </div>

          {/* Location Block (Spans 2 cols on mobile) */}
          <div 
            className="col-span-2 lg:col-span-1 w-full bg-[#f8f9fb] p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row xl:flex-row items-start gap-4 lg:gap-6"
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-2.5 sm:p-3 rounded-none shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#1c1c1c]" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#1c1c1c] mb-2 lg:mb-3">
                Visit Us
              </h3>
              <p className="text-slate-600 text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed">
                <strong>Address:</strong> P.O Box 1309<br />
                <strong>Digital Address:</strong> AO-354-4922<br />
                <strong>Location:</strong> Plot no.1 Block A,<br />
                Sanso Anwonakrom off Obuasi Dunkwa Road,<br />
                Obuasi-Ashanti Region, Ghana
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-2/3 mt-4 lg:mt-0">
          <div 
            className="w-full h-full bg-[#f8f9fb] p-6 sm:p-8 md:p-12 lg:p-16"
            style={{ clipPath: 'polygon(0 0, 88% 0, 100% 8%, 100% 100%, 12% 100%, 0 92%)' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full justify-between pt-2">
              
              <div>
                {/* Form fields: 2 columns on mobile and desktop */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                  <div className="flex flex-col gap-2 md:gap-3 col-span-2 sm:col-span-1">
                    <label className="text-slate-500 font-semibold text-[13px] md:text-[15px]">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="bg-white px-4 md:px-5 py-3 md:py-3.5 outline-none text-[#1c1c1c] text-[14px] md:text-[15px] font-medium transition-shadow rounded-none placeholder:text-gray-400 placeholder:font-normal" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3 col-span-2 sm:col-span-1">
                    <label className="text-slate-500 font-semibold text-[13px] md:text-[15px]">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@company.com"
                      className="bg-white px-4 md:px-5 py-3 md:py-3.5 outline-none text-[#1c1c1c] text-[14px] md:text-[15px] font-medium transition-shadow rounded-none placeholder:text-gray-400 placeholder:font-normal" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3 col-span-2 sm:col-span-1">
                    <label className="text-slate-500 font-semibold text-[13px] md:text-[15px]">Your Contact</label>
                    <input 
                      type="text" 
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 024 123 4567"
                      className="bg-white px-4 md:px-5 py-3 md:py-3.5 outline-none text-[#1c1c1c] text-[14px] md:text-[15px] font-medium transition-shadow rounded-none placeholder:text-gray-400 placeholder:font-normal" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-3 col-span-2 sm:col-span-1">
                    <label className="text-slate-500 font-semibold text-[13px] md:text-[15px]">Select Request Type</label>
                    <select 
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      className="bg-white px-4 md:px-5 py-3 md:py-3.5 outline-none text-[#1c1c1c] text-[14px] md:text-[15px] font-medium transition-shadow cursor-pointer rounded-none" 
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request for Free Quote">Request for Free Quote</option>
                      <option value="Engineering Services">Engineering Services</option>
                      <option value="Industrial Materials">Industrial Materials</option>
                      <option value="Fabrication Services">Fabrication Services</option>
                      <option value="Heavy Equipment">Heavy Equipment</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 mb-8 md:mb-12">
                  <label className="text-slate-500 font-semibold text-[13px] md:text-[15px]">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    className="bg-white px-4 md:px-5 py-3 md:py-4 outline-none text-[#1c1c1c] text-[14px] md:text-[15px] font-medium h-32 md:h-40 resize-none transition-shadow rounded-none placeholder:text-gray-400 placeholder:font-normal"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end pb-2">
                <button 
                  type="submit"
                  className="bg-primary text-white font-bold text-[14px] md:text-[15px] px-8 md:px-10 py-3.5 md:py-4 transition-colors  rounded-none w-full sm:w-auto"
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
