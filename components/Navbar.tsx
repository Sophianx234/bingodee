'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call handler right away so state gets updated with initial scroll position
    handleScroll();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-12 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Bingodee Logo" 
            width={200} 
            height={50} 
            className="h-9 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center justify-center space-x-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              className={`text-[14px] font-semibold transition-colors ${
                pathname === link.path 
                  ? 'text-slate-800 pb-1 border-b-[3px] border-[#6592ff]' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Right Side: Contact Button & Mobile Toggle */}
        <div className="flex md:order-2 items-center">
          <Link 
            href="/contact" 
            className="hidden md:inline-flex text-white bg-[#6592ff] hover:bg-[#4d7ef5] font-semibold text-[14px] px-6 py-2.5 transition-colors shadow-sm rounded-sm tracking-wide"
          >
            Contact
          </Link>
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-4 w-10 h-10 justify-center text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none rounded-lg transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="navbar-sticky" 
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg absolute w-full left-0 top-[100%]">
          <ul className="flex flex-col p-4 font-medium space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-md transition-colors ${
                    pathname === link.path
                      ? 'bg-blue-50 text-[#6592ff] font-bold'
                      : 'text-slate-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center py-3 px-4 rounded-md bg-[#6592ff] text-white font-bold hover:bg-[#4d7ef5] transition-colors shadow-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
