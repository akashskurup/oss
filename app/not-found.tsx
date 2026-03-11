import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
        <Activity className="text-emerald-600 w-8 h-8" />
      </div>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-lg text-slate-600 mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved or no longer exists.
      </p>
      <Link 
        href="/" 
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
