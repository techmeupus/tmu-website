'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:3023907520" className="hover:text-secondary-light transition-colors flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (302) 390-7520
            </a>
            <a href="mailto:abrarsharief@techmeup.us" className="hover:text-secondary-light transition-colors flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              abrarsharief@techmeup.us
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-secondary-light transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="hover:text-secondary-light transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-secondary-light transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
<nav className="container-custom py-0 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold font-heading">
              <span className="text-primary">TECH</span>
              <span className="text-navy">ME</span>
              <span className="text-secondary">UP</span>
            </div>
          </Link> */}
          <Link href="/" className="flex items-center">
            <Image
              src="/image/tmu-logo (1).png"
              alt="TechMeUp Logo"
              width={100}
              height={100}
              priority
              className="w-36 h-auto "   

            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-navy hover:text-primary transition-colors font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/solutions" className="text-navy hover:text-primary transition-colors font-medium">
              Solutions
            </Link>
            <Link href="/industries" className="text-navy hover:text-primary transition-colors font-medium">
              Industries
            </Link>
            <Link href="/case-studies" className="text-navy hover:text-primary transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="text-navy hover:text-primary transition-colors font-medium">
              Resources
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/services" className="text-navy hover:text-primary transition-colors font-medium">
                Services
              </Link>
              <Link href="/solutions" className="text-navy hover:text-primary transition-colors font-medium">
                Solutions
              </Link>
              <Link href="/industries" className="text-navy hover:text-primary transition-colors font-medium">
                Industries
              </Link>
              <Link href="/portfolio" className="text-navy hover:text-primary transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/resources" className="text-navy hover:text-primary transition-colors font-medium">
                Resources
              </Link>
              <Link href="/contact" className="btn-primary inline-block text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
