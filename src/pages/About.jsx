import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Heart, Video, Shield, Users, Clock, MapPin, Phone, Mail, ArrowRight, Award, CheckCircle } from 'lucide-react'

export default function About(){
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-[brand-navy]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-[brand-navy]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[brand-navy]/10 text-[brand-navy] rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              Compassionate Care for Your Mental Health
            </h1>
            <p className="text-lg text-[#5A6A7A] mb-8">
              WellCrest Health is a leading mental health practice dedicated to providing compassionate, convenient, and affordable mental health services to patients across Georgia, Arizona and Maryland.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#0A2540]">
                Our Mission
              </h2>
              <p className="text-[#5A6A7A]">
                WellCrest Health is committed to helping patients achieve their mental health goals through patient-centered care and evidence-based treatments throughout their lives. We believe that everyone deserves access to quality mental health care in a supportive and understanding environment.
              </p>
              <p className="text-[#5A6A7A]">
                Our team brings decades of experience to the table, ensuring that every patient receives the highest standard of care. We treat each individual with respect, dignity, and compassion.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Brain className="w-10 h-10 text-[brand-navy] mb-4" />
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Expert Care</h3>
                <p className="text-sm text-[#5A6A7A]">Licensed professionals with years of experience</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Heart className="w-10 h-10 text-[brand-navy] mb-4" />
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Compassionate</h3>
                <p className="text-sm text-[#5A6A7A]">We listen and understand your journey</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Video className="w-10 h-10 text-[brand-navy] mb-4" />
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Telehealth</h3>
                <p className="text-sm text-[#5A6A7A]">Care from the comfort of your home</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <Shield className="w-10 h-10 text-[brand-navy] mb-4" />
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">Confidential</h3>
                <p className="text-sm text-[#5A6A7A]">Your privacy is always protected</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
              Why Choose WellCrest Health
            </h2>
            <p className="text-[#5A6A7A] max-w-2xl mx-auto">
              Choosing the right mental health partner matters. Here's why individuals and families trust us:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Compassionate Care', desc: 'We listen, we understand, and we meet you where you are.' },
              { icon: Video, title: 'Convenience First', desc: 'With in-person, in-office and telehealth options, getting help fits into your life.' },
              { icon: Users, title: 'Trusted Professionals', desc: 'Our licensed providers bring both clinical excellence and genuine care to every session.' },
              { icon: Shield, title: 'Personalized Support', desc: 'Every journey is unique, and we design care plans that reflect your specific needs.' },
              { icon: Brain, title: 'Holistic Approach', desc: 'We care for the whole person—mind, body, and spirit.' },
              { icon: CheckCircle, title: 'Confidential & Safe', desc: 'Your privacy and comfort are always protected.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[#E1E8F0] hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-[brand-navy] mb-4" />
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-sm text-[#5A6A7A]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Convenient, confidential, compassionate care
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Reserve your appointment today and start your journey to better mental health.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand" />
                <span className="font-bold text-xl text-white">WellCrest</span>
              </div>
              <p className="text-white/60 text-sm">
                Compassionate, convenient, and affordable mental health services.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/60 hover:text-white text-sm">Home</Link></li>
                <li><Link to="/about" className="text-white/60 hover:text-white text-sm">About Us</Link></li>
                <li><Link to="/services" className="text-white/60 hover:text-white text-sm">Our Services</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white text-sm">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Regions</h4>
              <ul className="space-y-2">
                <li><Link to="/services/georgia" className="text-white/60 hover:text-white text-sm">Georgia</Link></li>
                <li><Link to="/services/arizona" className="text-white/60 hover:text-white text-sm">Arizona</Link></li>
                <li><Link to="/services/maryland" className="text-white/60 hover:text-white text-sm">Maryland</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />7910 Mall Ring Road Suite 200, Stonecrest, GA</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" />470-481-2034</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" />info@wellcresttherapy.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            © 2025 WellCrest Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}