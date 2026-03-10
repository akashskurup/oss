"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ChevronRight,
  Activity,
  HeartPulse,
  Bone,
  Eye,
  Stethoscope,
  Award,
  Users,
  Clock,
  MapPin,
  Mail,
} from "lucide-react";

const specialties = [
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Advanced joint replacement and sports medicine.",
  },
  {
    name: "General Surgery",
    icon: Activity,
    description: "Minimally invasive procedures for faster recovery.",
  },
  {
    name: "Cardiology",
    icon: HeartPulse,
    description: "Comprehensive heart and vascular care.",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    description: "State-of-the-art vision correction and eye surgery.",
  },
  {
    name: "ENT",
    icon: Stethoscope,
    description: "Ear, nose, and throat surgical treatments.",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50+", label: "Board-Certified Surgeons" },
  { value: "10k+", label: "Successful Procedures" },
  { value: "99%", label: "Patient Satisfaction" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="hidden md:flex bg-slate-900 text-slate-300 py-2 px-6 justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" /> 1-800-OAK-LEAF
          </span>
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> 123 Healing Way, Medical
            District
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            Patient Portal
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Careers
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pay Bill
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-white py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
              Oakleaf
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#about"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#specialties"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Specialties
            </a>
            <a
              href="#physicians"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Physicians
            </a>
            <a
              href="#patients"
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors"
            >
              Patients & Visitors
            </a>
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
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              <a
                href="#about"
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                About
              </a>
              <a
                href="#specialties"
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                Specialties
              </a>
              <a
                href="#physicians"
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                Physicians
              </a>
              <a
                href="#patients"
                className="text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                Patients & Visitors
              </a>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium w-full mt-4 flex justify-center items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Request Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
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
              <motion.span
                variants={fadeInUp}
                className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30"
              >
                Excellence in Surgical Care
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
              >
                Advanced Care.
                <br />
                <span className="text-emerald-400">Personalized</span> for You.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed"
              >
                Oakleaf Surgical Center combines state-of-the-art technology
                with compassionate, patient-centered care to deliver exceptional
                outcomes.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center group">
                  Find a Physician
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center justify-center">
                  Our Services
                </button>
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
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-200 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
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
                <motion.h2
                  variants={fadeInUp}
                  className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3"
                >
                  About Oakleaf
                </motion.h2>
                <motion.h3
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight"
                >
                  A higher standard of surgical excellence.
                </motion.h3>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-slate-600 mb-6 leading-relaxed"
                >
                  Founded on the principle that patients deserve better, Oakleaf
                  Surgical Center provides a comfortable, private, and highly
                  specialized environment for outpatient and short-stay
                  procedures.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-slate-600 mb-8 leading-relaxed"
                >
                  Our physician-owned facility ensures that medical decisions
                  are made by those who know best—your doctors. This allows us
                  to invest in the latest technology and maintain an
                  industry-leading nurse-to-patient ratio.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-6"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <Award className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Top Rated</div>
                      <div className="text-sm text-slate-500">
                        By Healthgrades
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="text-emerald-600 w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Expert Team
                      </div>
                      <div className="text-sm text-slate-500">
                        Specialized Staff
                      </div>
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
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                          >
                            <Image
                              src={`https://picsum.photos/seed/doctor${i}/100/100`}
                              alt="Doctor"
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        Meet our
                        <br />
                        specialists
                      </div>
                    </div>
                    <button className="text-emerald-600 font-medium text-sm flex items-center hover:text-emerald-700 transition-colors">
                      View Directory <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
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
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
                Our Specialties
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Comprehensive Surgical Care
              </h3>
              <p className="text-lg text-slate-600">
                We offer a wide range of specialized surgical procedures
                performed by leading experts in their respective fields.
              </p>
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
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {specialty.name}
                    </h4>
                    <p className="text-slate-600 mb-6">
                      {specialty.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-emerald-600 font-medium group-hover:text-emerald-700"
                    >
                      Learn more{" "}
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
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
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                  <ChevronRight className="w-6 h-6 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  View All Services
                </h4>
                <p className="text-sm text-slate-500">
                  Explore our complete list of procedures and treatments.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Patient Experience CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900 z-0"></div>
          <div
            className="absolute inset-0 opacity-20 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Designed around{" "}
                  <span className="text-emerald-400 italic">your</span>{" "}
                  recovery.
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  From our private recovery suites to our gourmet meals, every
                  aspect of Oakleaf is designed to make your surgical experience
                  as comfortable and stress-free as possible.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Private, hotel-like recovery suites",
                    "1-to-1 nursing care in recovery",
                    "Concierge services for family members",
                    "Advanced pain management protocols",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <div className="mt-1 mr-3 bg-emerald-500/20 rounded-full p-1">
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg flex items-center">
                  Take a Virtual Tour
                </button>
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
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center mr-2">
                  <Activity className="text-white w-5 h-5" />
                </div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  Oakleaf
                </span>
              </div>
              <p className="mb-6 text-sm leading-relaxed">
                A physician-owned surgical center dedicated to providing the
                highest quality care in a comfortable, patient-focused
                environment.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Find a Physician
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Patient Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Pay Your Bill
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    News & Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
                Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    General Surgery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Gastroenterology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Ophthalmology
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Pain Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                  <span>
                    123 Healing Way
                    <br />
                    Medical District
                    <br />
                    City, ST 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                  <span>1-800-OAK-LEAF</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                  <span>info@oakleafsurgical.com</span>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-emerald-500 shrink-0" />
                  <span>
                    Mon-Fri: 6:00 AM - 6:00 PM
                    <br />
                    Sat-Sun: Closed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>
              &copy; {new Date().getFullYear()} Oakleaf Surgical Center. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
