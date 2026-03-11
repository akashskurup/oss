'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Bone, Activity, HeartPulse, Eye, Stethoscope, Brain, Baby, Scissors, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const allSpecialties = [
  { name: 'Orthopedics', icon: Bone, desc: 'Comprehensive care for bones, joints, ligaments, tendons, and muscles. Including total joint replacements and sports medicine.' },
  { name: 'General Surgery', icon: Activity, desc: 'Advanced surgical treatments for a wide range of abdominal and digestive tract conditions, focusing on minimally invasive techniques.' },
  { name: 'Cardiology', icon: HeartPulse, desc: 'Expert care for heart and vascular conditions, utilizing the latest diagnostic and interventional procedures.' },
  { name: 'Ophthalmology', icon: Eye, desc: 'State-of-the-art vision correction, cataract surgery, and treatments for various eye conditions.' },
  { name: 'ENT (Otolaryngology)', icon: Stethoscope, desc: 'Surgical and medical management of conditions of the ear, nose, throat, and related structures of the head and neck.' },
  { name: 'Neurosurgery', icon: Brain, desc: 'Specialized surgical treatment for disorders of the central and peripheral nervous system, including spine surgery.' },
  { name: 'Gynecology', icon: Baby, desc: 'Comprehensive surgical care for women’s health issues, including minimally invasive hysterectomies and pelvic floor repair.' },
  { name: 'Plastic Surgery', icon: Scissors, desc: 'Reconstructive and cosmetic surgical procedures performed by board-certified specialists.' },
];

export default function SpecialtiesPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Surgical Specialties
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Oakleaf Surgical Center offers a comprehensive range of surgical procedures performed by the region&apos;s top specialists.
          </motion.p>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSpecialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{specialty.name}</h3>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{specialty.desc}</p>
                  <Link href="/physicians" className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 mt-auto">
                    Find a {specialty.name} Specialist <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image 
                src="https://picsum.photos/seed/medical-tech/800/800" 
                alt="Advanced medical technology" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Advanced Technology</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Equipped for the Future of Surgery
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We continuously invest in the latest surgical technologies, including robotic-assisted surgery systems, advanced imaging, and minimally invasive tools. This commitment ensures our surgeons have the best equipment to deliver superior outcomes.
              </p>
              <ul className="space-y-4">
                {['Robotic-Assisted Joint Replacement', 'Advanced Laparoscopic Systems', 'High-Definition Surgical Microscopes', 'Real-time Intraoperative Imaging'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
