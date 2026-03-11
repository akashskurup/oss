import Link from 'next/link';
import { Activity, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center mr-2">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">Oakleaf</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              A physician-owned surgical center dedicated to providing the highest quality care in a comfortable, patient-focused environment.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/physicians" className="hover:text-emerald-400 transition-colors">Find a Physician</Link></li>
              <li><Link href="/patients" className="hover:text-emerald-400 transition-colors">Patient Portal</Link></li>
              <li><Link href="/patients" className="hover:text-emerald-400 transition-colors">Pay Your Bill</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">News & Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/specialties" className="hover:text-emerald-400 transition-colors">Orthopedics</Link></li>
              <li><Link href="/specialties" className="hover:text-emerald-400 transition-colors">General Surgery</Link></li>
              <li><Link href="/specialties" className="hover:text-emerald-400 transition-colors">Gastroenterology</Link></li>
              <li><Link href="/specialties" className="hover:text-emerald-400 transition-colors">Ophthalmology</Link></li>
              <li><Link href="/specialties" className="hover:text-emerald-400 transition-colors">Pain Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>123 Healing Way<br />Medical District<br />City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>1-800-OAK-LEAF</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                <span>info@oakleafsurgical.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Oakleaf Surgical Center. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
