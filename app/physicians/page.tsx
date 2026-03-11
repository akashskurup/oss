'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Search, MapPin, Phone, Star, ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';

const doctors = [
  { name: 'Dr. Sarah Jenkins', specialty: 'Orthopedics', img: 'doctor1', rating: 4.9, reviews: 124, education: 'Harvard Medical School' },
  { name: 'Dr. Michael Chen', specialty: 'Cardiology', img: 'doctor2', rating: 5.0, reviews: 89, education: 'Johns Hopkins University' },
  { name: 'Dr. Emily Rodriguez', specialty: 'General Surgery', img: 'doctor3', rating: 4.8, reviews: 210, education: 'Stanford University' },
  { name: 'Dr. James Wilson', specialty: 'Ophthalmology', img: 'doctor4', rating: 4.9, reviews: 156, education: 'Yale School of Medicine' },
  { name: 'Dr. Anita Patel', specialty: 'ENT', img: 'doctor5', rating: 4.7, reviews: 92, education: 'UCSF School of Medicine' },
  { name: 'Dr. Robert Taylor', specialty: 'Orthopedics', img: 'doctor6', rating: 4.9, reviews: 178, education: 'Mayo Clinic Alix School' },
  { name: 'Dr. Lisa Wong', specialty: 'Neurosurgery', img: 'doctor7', rating: 5.0, reviews: 64, education: 'Columbia University' },
  { name: 'Dr. David Smith', specialty: 'Plastic Surgery', img: 'doctor8', rating: 4.8, reviews: 112, education: 'University of Pennsylvania' },
];

const specialties = ['All Specialties', 'Orthopedics', 'Cardiology', 'General Surgery', 'Ophthalmology', 'ENT', 'Neurosurgery', 'Plastic Surgery'];

export default function PhysiciansPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All Specialties' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="pb-24 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-emerald-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Find a Physician
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10"
          >
            Our board-certified surgeons are leaders in their respective fields, dedicated to providing exceptional care.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto bg-white rounded-full p-2 flex items-center shadow-xl"
          >
            <div className="pl-4 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or condition..." 
              className="w-full px-4 py-3 text-slate-900 bg-transparent border-none focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {specialties.map((specialty, i) => (
              <button
                key={i}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSpecialty === specialty 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <Image 
                      src={`https://picsum.photos/seed/${doc.img}/400/400`} 
                      alt={doc.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">{doc.specialty}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.name}</h3>
                    
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                      <span className="font-bold text-slate-700 mr-2">{doc.rating}</span>
                      <span className="text-slate-500 text-sm">({doc.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-start text-sm text-slate-600 mb-6 flex-grow">
                      <Award className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-slate-400" />
                      <span>{doc.education}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                      <button className="text-slate-600 hover:text-emerald-600 transition-colors">
                        <Phone className="w-5 h-5" />
                      </button>
                      <Link href="#" className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors">
                        View Profile <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No physicians found</h3>
                <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setSelectedSpecialty('All Specialties'); }}
                  className="mt-6 text-emerald-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
