'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Activity, MapPin } from 'lucide-react';

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
    <>
      {/* Top Bar */}
      <div className="hidden md:flex bg-slate-900 text-slate-300 py-2 px-6 justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 1-800-OAK-LEAF</span>
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> 123 Healing Way, Medical District</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/patients" className="hover:text-white transition-colors">Patient Portal</Link>
          <Link href="/about" className="hover:text-white transition-colors">Careers</Link>
          <Link href="/patients" className="hover:text-white transition-colors">Pay Bill</Link>
        </div>
      </div>

      {/* Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-700 transition-colors">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold text-slate-900 tracking-tight">Oakleaf</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">About</Link>
            <Link href="/specialties" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Specialties</Link>
            <Link href="/physicians" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Physicians</Link>
            <Link href="/patients" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Patients & Visitors</Link>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Request Appointment
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden absolute w-full z-40 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2 border-b border-slate-50">About</Link>
              <Link href="/specialties" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2 border-b border-slate-50">Specialties</Link>
              <Link href="/physicians" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2 border-b border-slate-50">Physicians</Link>
              <Link href="/patients" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium py-2 border-b border-slate-50">Patients & Visitors</Link>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium w-full mt-4 flex justify-center items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Request Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
