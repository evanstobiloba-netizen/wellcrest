import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, CheckCircle, Heart, Shield, Clock, Stethoscope } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicePreventiveCare() {
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
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Preventive Care</h1>
                <p className="text-slate-500 mt-2">Stay healthy with proactive wellness support</p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Preventive Care</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Prevention is the foundation of good health. Our preventive care services focus on keeping you healthy through regular screenings, immunizations, and lifestyle counseling. We believe in catching potential health issues early, when they're most treatable.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  From annual physical exams to routine screenings, we provide comprehensive preventive services for patients of all ages.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Services We Offer</h3>
                <div className="space-y-3 mb-8">
                  {[
                    'Annual Physical Exams',
                    'Well-Child Visits',
                    'Immunizations & Vaccinations',
                    'Blood Pressure Screening',
                    'Cholesterol Screening',
                    'Diabetes Screening (HbA1c, Glucose)',
                    'Cancer Screenings (Mammograms, Colonoscopy referrals)',
                    'BMI & Obesity Screening',
                    'Vision & Hearing Tests',
                    'Smoking Cessation Counseling',
                    'Nutrition & Lifestyle Counseling'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Preventive Care Matters</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Early Detection', desc: 'Catch health issues before they become serious' },
                    { title: 'Cost Savings', desc: 'Preventive care is more affordable than treating advanced disease' },
                    { title: 'Better Outcomes', desc: 'Early treatment leads to better health outcomes' },
                    { title: 'Peace of Mind', desc: 'Regular check-ups keep you informed about your health' }
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
          <h2 className="text-3xl font-bold mb-4">Invest in Your Health Today</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Schedule your annual physical or preventive screening with our caring team.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Schedule Now <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
