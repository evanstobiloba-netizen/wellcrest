import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, CheckCircle, Heart, Activity, Thermometer, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServiceAcuteCare() {
  const calendly = useCalendly()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Acute Care</h1>
                <p className="text-slate-500 mt-2">Treatment for immediate health concerns</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Acute Care</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Acute care addresses immediate, short-term health issues that need prompt attention. Whether you're dealing with an upper respiratory infection, a common cold, STI concerns, or UTI symptoms, our team provides fast, effective treatment to get you feeling better quickly.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We offer both in-person and telehealth appointments for acute concerns, making it easy to get the care you need when you need it.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Conditions We Treat</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Upper Respiratory Infections',
                    'Common Cold & Flu',
                    'Sore Throat & Strep Throat',
                    'Urinary Tract Infections (UTI)',
                    'Sexually Transmitted Infections (STI)',
                    'Skin Infections & Rashes',
                    'Ear Infections',
                    'Sinus Infections',
                    'Bronchitis',
                    'Allergies & Asthma Flares'
                  ].map((condition, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700">{condition}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Approach</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { title: 'Rapid Assessment', desc: 'Quick evaluation to determine the best treatment plan' },
                    { title: 'Same-Day Appointments', desc: 'Get care when you need it most' },
                    { title: 'Prescription Management', desc: 'Fast prescriptions sent directly to your pharmacy' },
                    { title: 'Follow-Up Care', desc: 'We ensure your treatment is working effectively' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-2xl p-6 sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Info</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Same-Day Visits</p>
                      <p className="text-xs text-slate-500">For urgent concerns</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Telehealth Available</p>
                      <p className="text-xs text-slate-500">GA, AZ, MD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">In-Person</p>
                      <p className="text-xs text-slate-500">Georgia location</p>
                    </div>
                  </div>
                </div>
                <button onClick={calendly.open} className="btn-primary w-full mb-3">
                  Book Appointment
                </button>
                <p className="text-xs text-slate-400 text-center">Walk-ins welcome in Georgia</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Feel Better, Faster</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Don't wait when you're feeling unwell. Schedule a same-day appointment with our caring team.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Get Care Now <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
