import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, CheckCircle, Heart, Activity, Shield, Clock, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServiceChronicDisease() {
  const calendly = useCalendly()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 page-section">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Chronic Disease Management</h1>
                <p className="text-slate-500 mt-2">Comprehensive care for long-term health conditions</p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Chronic Disease Management</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Living with a chronic condition requires ongoing, coordinated care. At WellCrest Health, we provide comprehensive management for chronic diseases including hypertension (high blood pressure), diabetes, asthma, and more. Our approach focuses on prevention, early intervention, and personalized treatment plans.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We work closely with you to monitor your condition, adjust treatment plans as needed, and provide lifestyle counseling to help you maintain the best possible quality of life.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Conditions We Manage</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Hypertension (High Blood Pressure)',
                    'Type 2 Diabetes',
                    'Type 1 Diabetes',
                    'Asthma',
                    'COPD (Chronic Obstructive Pulmonary Disease)',
                    'Heart Disease',
                    'High Cholesterol',
                    'Thyroid Disorders',
                    'Arthritis',
                    'Obesity'
                  ].map((condition, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700">{condition}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Approach</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { title: 'Regular Monitoring', desc: 'Scheduled check-ups to track your progress and adjust treatment plans' },
                    { title: 'Holistic Therapy Support', desc: 'Careful review and adjustment of treatment plans to optimize effectiveness' },
                    { title: 'Lifestyle Counseling', desc: 'Guidance on diet, exercise, and stress management techniques' },
                    { title: 'Care Coordination', desc: 'Working with specialists to ensure comprehensive care' }
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
                    <Shield className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Insurance Accepted</p>
                      <p className="text-xs text-slate-500">Most major plans</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Available</p>
                      <p className="text-xs text-slate-500">GA, AZ, MD (Telehealth)</p>
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
                <p className="text-xs text-slate-400 text-center">No referral required</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Take Control of Your Health</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Our team is here to support you in managing your chronic condition with expert care and compassion.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Schedule Consultation <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
