'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, Heart, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/hospital-exterior/1920/1080" 
            alt="Oakleaf Exterior" 
            fill 
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            About Oakleaf
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-200"
          >
            Setting a new standard for surgical excellence and patient-centered care.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Mission</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                To provide exceptional surgical care in an environment that prioritizes patient comfort, safety, and recovery.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-6 leading-relaxed">
                Oakleaf Surgical Center was founded by a group of visionary physicians who believed that the surgical experience could be vastly improved. By creating a facility owned and operated by the surgeons themselves, we ensure that every decision made prioritizes patient outcomes over corporate bottom lines.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col">
                  <Heart className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Patient First</h4>
                  <p className="text-sm text-slate-600">Every protocol is designed around your comfort and safety.</p>
                </div>
                <div className="flex flex-col">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Highest Standards</h4>
                  <p className="text-sm text-slate-600">Rigorous quality control and advanced infection prevention.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
            >
              <Image 
                src="https://picsum.photos/seed/doctors-meeting/800/1000" 
                alt="Doctors collaborating" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Tour */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Facility</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Designed for Healing</h3>
            <p className="text-lg text-slate-600">Our state-of-the-art center features advanced operating suites and hotel-like recovery rooms to ensure your comfort.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Advanced Operating Rooms', img: 'surgery-room' },
              { title: 'Private Recovery Suites', img: 'recovery-suite' },
              { title: 'Comfortable Waiting Areas', img: 'waiting-area' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${item.img}/600/400`} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-900 mt-12 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to experience the Oakleaf difference?</h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
          Explore our specialties or find a physician to schedule your consultation today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/physicians" className="bg-white text-emerald-900 hover:bg-slate-100 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg">
            Find a Physician
          </Link>
          <Link href="/specialties" className="bg-emerald-800 hover:bg-emerald-700 border border-emerald-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
            View Specialties
          </Link>
        </div>
      </section>
    </div>
  );
}
