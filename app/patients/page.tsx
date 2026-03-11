'use client';

import { motion } from 'motion/react';
import { FileText, Clock, CreditCard, Bed, Map, Info, ChevronRight, Download, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const resources = [
  { title: 'Preparing for Surgery', icon: Clock, desc: 'Important guidelines on eating, drinking, and medications before your procedure.' },
  { title: 'Day of Surgery', icon: Bed, desc: 'What to bring, where to go, and what to expect when you arrive at Oakleaf.' },
  { title: 'Billing & Insurance', icon: CreditCard, desc: 'Information about accepted insurance plans, payment options, and financial assistance.' },
  { title: 'Visitor Information', icon: Info, desc: 'Visiting hours, amenities, and guidelines for family members and guests.' },
  { title: 'Patient Forms', icon: FileText, desc: 'Download and complete necessary paperwork prior to your appointment.' },
  { title: 'Directions & Parking', icon: Map, desc: 'Maps, driving directions, and parking information for our facility.' },
];

export default function PatientsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Patients & Visitors
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Everything you need to know to make your visit to Oakleaf Surgical Center as smooth and comfortable as possible.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg inline-flex items-center">
              Access Patient Portal <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{resource.title}</h3>
                  <p className="text-slate-600 mb-6">{resource.desc}</p>
                  <Link href="#" className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Forms */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Quick Access</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Important Forms & Documents
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                To expedite your check-in process, please download, print, and complete these forms prior to your arrival on the day of surgery.
              </motion.p>
              
              <div className="space-y-4">
                {['Patient Registration Form', 'Medical History Questionnaire', 'Notice of Privacy Practices', 'Advance Directives Information'].map((form, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group cursor-pointer">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 mr-3" />
                      <span className="font-medium text-slate-700 group-hover:text-slate-900">{form}</span>
                    </div>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Need Assistance?</h3>
                <p className="text-slate-300 mb-8">
                  Our patient care coordinators are available to answer any questions about your upcoming procedure, billing, or insurance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Call us directly</div>
                      <div className="text-xl font-bold">1-800-OAK-LEAF</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Hours of Operation</div>
                      <div className="font-medium">Monday - Friday<br/>6:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-medium transition-colors">
                  Contact Us Online
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
