import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, Users, HeartPulse, Pill, Activity, Network, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SexualHealthCoordination() {
  const calendly = useCalendly()

  const partners = [
    { icon: HeartPulse, title: 'OB-GYNs', desc: 'Collaborating on gynecological and reproductive concerns' },
    { icon: Activity, title: 'Urologists', desc: 'Coordinating care for urological and erectile concerns' },
    { icon: Network, title: 'Endocrinologists', desc: 'Working together on hormone-related sexual concerns' },
    { icon: Users, title: 'Pelvic Floor PTs', desc: 'Connecting you with specialists for pelvic floor therapy' },
    { icon: Pill, title: 'Prescribers', desc: 'Coordinating with your medication team for safe care' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 page-section">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to="/sexual-health" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              Sexual Health
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Coordination of Care</h1>
                <p className="text-slate-500 mt-2">One team, connected around your sexual health</p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Care Coordination</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Many sexual concerns have overlapping medical and psychological roots. That&apos;s why we take a collaborative, whole-person approach. We partner closely with OB-GYNs, urologists, endocrinologists, pelvic floor physical therapists, and prescribers to make sure every side of your health is addressed.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Rather than leaving you to navigate different providers on your own, our team connects the dots — sharing the right information, coordinating treatment plans, and keeping everyone on the same page.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Who We Collaborate With</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <partner.icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{partner.title}</h4>
                        <p className="text-sm text-slate-600">{partner.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Why It Matters</h3>
                <div className="space-y-4 mb-8">
                  {[
                    'Because many sexual concerns have overlapping medical and psychological roots, integrated care leads to more accurate diagnoses',
                    'Coordinate referrals so you never have to chase down providers on your own',
                    'The psychological and physical sides of your care work together, not in silos'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
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
                    <Users className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Integrated Team</p>
                      <p className="text-xs text-slate-500">Psychological &amp; medical care together</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Provider Network</p>
                      <p className="text-xs text-slate-500">OB-GYN, urology, endocrinology &amp; more</p>
                    </div>
                  </div>
                </div>
                <button onClick={calendly.open} className="btn-primary w-full mb-3">
                  Book Appointment
                </button>
                <p className="text-xs text-slate-400 text-center">Telehealth available in GA, AZ &amp; MD</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Whole-Person Care, One Team</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let us coordinate your care so every provider works together around your goals.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Get Connected
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}