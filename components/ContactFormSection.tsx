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
    
    // Construct the WhatsApp message
    const text = `Hello Bingodee Company Limited,

*New Request from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Contact:* ${formData.contact}
*Request Type:* ${formData.requestType}

*Message:*
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = '233243127833'; // Main contact number provided
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="w-full bg-white py-12 ">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Column: Contact Details */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          {/* Phone Block */}
          <div 
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 "
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 rounded-sm shrink-0">
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
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 "
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 rounded-sm shrink-0">
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
            className="w-full bg-[#f8f9fb] p-8 flex items-start gap-6 "
            style={{ clipPath: 'polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%)' }}
          >
            <div className="bg-white p-3 rounded-sm shrink-0">
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
            className="w-full h-full bg-[#f8f9fb] p-10 md:p-12 lg:p-16 "
            style={{ clipPath: 'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col w-full h-full justify-between">
              
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow " 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow " 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Your Contact</label>
                    <input 
                      type="text" 
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow " 
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-slate-500 font-semibold text-[15px]">Select Request Type</label>
                    <select 
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      className="bg-white px-5 py-3.5 outline-none text-[#1c1c1c] font-medium transition-shadow cursor-pointer" 
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Engineering Services">Engineering Services</option>
                      <option value="Industrial Materials">Industrial Materials</option>
                      <option value="Fabrication Services">Fabrication Services</option>
                      <option value="Heavy Equipment">Heavy Equipment</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-12">
                  <label className="text-slate-500 font-semibold text-[15px]">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white px-5 py-4 outline-none text-[#1c1c1c] font-medium h-40 resize-none transition-shadow "
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white font-semibold text-[15px] px-10 py-4 transition-colors shadow-md"
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
