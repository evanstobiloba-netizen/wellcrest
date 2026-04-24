import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import BookAppointmentButton from '../components/BookAppointmentButton'
import { Brain, Stethoscope, ArrowRight, MapPin, Phone, Video } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesPage(){
  const serviceCategories = [
    {
      title: 'Mental Health Services',
      description: 'Comprehensive mental health care including depression, anxiety, bipolar disorder, PTSD, and more.',
      icon: Brain,
      href: '/services/mental-health',
      servicesCount: 7
    },
    {
      title: 'Primary Health Services',
      description: 'Primary care services focusing on preventive health, chronic disease management, and overall wellness.',
      icon: Stethoscope,
      href: '/services/primary-health',
      servicesCount: 3
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-violet-50 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Services</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Compassionate, convenient, and affordable mental health services across Georgia, Arizona, and Maryland.</p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-brand-navy transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                    <p className="text-sm text-slate-500">{category.servicesCount} services</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">{category.description}</p>
                
                <Link 
                  to={category.href}
                  className="inline-flex items-center gap-2 text-brand font-medium hover:gap-3 transition-all"
                >
                  View Services <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose WellCrest Health</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Choosing the right mental health partner matters.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Compassionate Care', desc: 'We listen, we understand, and we meet you where you are.' },
              { title: 'Convenience First', desc: 'With in-person, in-office and telehealth options, getting help fits into your life.' },
              { title: 'Trusted Professionals', desc: 'Our licensed providers bring both clinical excellence and genuine care.' },
              { title: 'Personalized Support', desc: 'Every journey is unique, and we design care plans that reflect your needs.' },
              { title: 'Holistic Approach', desc: 'We care for the whole person—mind, body, and spirit.' },
              { title: 'Confidential & Safe', desc: 'Your privacy and comfort are always protected.' }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 bg-white rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Schedule an appointment today and take the first step towards better mental health.</p>
          <BookAppointmentButton />
        </div>
      </section>

      <Footer />
    </div>
  )
}