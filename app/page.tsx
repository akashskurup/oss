'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Calendar, ChevronRight, 
  Activity, HeartPulse, Bone, Eye, Stethoscope, 
  Award, Users, Star, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const specialties = [
  { name: 'Orthopedics', icon: Bone, description: 'Advanced joint replacement and sports medicine.' },
  { name: 'General Surgery', icon: Activity, description: 'Minimally invasive procedures for faster recovery.' },
  { name: 'Cardiology', icon: HeartPulse, description: 'Comprehensive heart and vascular care.' },
  { name: 'Ophthalmology', icon: Eye, description: 'State-of-the-art vision correction and eye surgery.' },
  { name: 'ENT', icon: Stethoscope, description: 'Ear, nose, and throat surgical treatments.' },
];

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '50+', label: 'Board-Certified Surgeons' },
  { value: '10k+', label: 'Successful Procedures' },
  { value: '99%', label: 'Patient Satisfaction' },
];

const testimonials = [
  { quote: "The care I received was exceptional. The staff made me feel comfortable and the private recovery room was like a hotel.", author: "Jane D.", procedure: "Joint Replacement" },
  { quote: "From check-in to discharge, everything was seamless. My surgeon was fantastic and the nurses were incredibly attentive.", author: "Michael S.", procedure: "General Surgery" },
  { quote: "I was nervous about my procedure, but the team at Oakleaf put me at ease immediately. Highly recommend this facility.", author: "Sarah T.", procedure: "Eye Surgery" }
];

const news = [
  { title: "Oakleaf Recognized for Excellence in Patient Safety", date: "March 1, 2026", category: "Awards" },
  { title: "New Minimally Invasive Robotic Surgery System Installed", date: "February 15, 2026", category: "Technology" },
  { title: "Welcoming Dr. Emily Rodriguez to Our General Surgery Team", date: "January 28, 2026", category: "Staff News" }
];

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/hospital/1920/1080" 
            alt="Modern surgical facility" 
            fill 
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30">
              Excellence in Surgical Care
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Advanced Care.<br/>
              <span className="text-emerald-400">Personalized</span> for You.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Oakleaf Surgical Center combines state-of-the-art technology with compassionate, patient-centered care to deliver exceptional outcomes.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/physicians" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center group">
                Find a Physician
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/specialties" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-900 relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{stat.value}</div>
              <div className="text-emerald-200 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">About Oakleaf</motion.h2>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                A higher standard of surgical excellence.
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded on the principle that patients deserve better, Oakleaf Surgical Center provides a comfortable, private, and highly specialized environment for outpatient and short-stay procedures.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our physician-owned facility ensures that medical decisions are made by those who know best—your doctors. This allows us to invest in the latest technology and maintain an industry-leading nurse-to-patient ratio.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Top Rated</div>
                    <div className="text-sm text-slate-500">By Healthgrades</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Expert Team</div>
                    <div className="text-sm text-slate-500">Specialized Staff</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://picsum.photos/seed/surgery/800/1200" 
                alt="Surgical team" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl max-w-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex -space-x-3 mr-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                          <Image src={`https://picsum.photos/seed/doctor${i}/100/100`} alt="Doctor" fill className="object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-bold text-slate-900">Meet our<br/>specialists</div>
                  </div>
                  <Link href="/physicians" className="text-emerald-600 font-medium text-sm flex items-center hover:text-emerald-700 transition-colors">
                    View Directory <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Our Specialties</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Comprehensive Surgical Care</h3>
            <p className="text-lg text-slate-600">We offer a wide range of specialized surgical procedures performed by leading experts in their respective fields.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 bg-white"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{specialty.name}</h4>
                  <p className="text-slate-600 mb-6">{specialty.description}</p>
                  <Link href="/specialties" className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700">
                    Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="border border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Link href="/specialties" className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">View All Services</h4>
                <p className="text-sm text-slate-500">Explore our complete list of procedures and treatments.</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Patient Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What Our Patients Say</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <div className="flex text-amber-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 text-lg italic mb-8 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">{testimonial.procedure}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experience CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Designed around <span className="text-emerald-400 italic">your</span> recovery.
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From our private recovery suites to our gourmet meals, every aspect of Oakleaf is designed to make your surgical experience as comfortable and stress-free as possible.
              </p>
              <ul className="space-y-4 mb-10">
                {['Private, hotel-like recovery suites', '1-to-1 nursing care in recovery', 'Concierge services for family members', 'Advanced pain management protocols'].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-300">
                    <div className="mt-1 mr-3 bg-emerald-500/20 rounded-full p-1">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/patients" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg inline-flex items-center">
                Patient Resources
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image 
                src="https://picsum.photos/seed/room/800/800" 
                alt="Private recovery suite" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Latest News</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Oakleaf Insights</h3>
            </div>
            <Link href="/" className="hidden md:flex items-center text-emerald-600 font-medium hover:text-emerald-700">
              View All News <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={`https://picsum.photos/seed/news${i}/600/400`} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="text-sm text-slate-500 mb-2">{item.date}</div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">{item.title}</h4>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
              View All News <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
