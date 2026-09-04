import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, BookOpen, MessageCircle, Compass, Stethoscope, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SexualHealthEducation() {
  const calendly = useCalendly()

  const topics = [
    'Anatomy, the sexual response cycle, and normal variation',
    'Consent, communication skills, and boundary-setting',
    'Referrals for pelvic floor physical therapy, medical workup, or hormone evaluation when indicated'
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
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Education &amp; Psychoeducation</h1>
                <p className="text-slate-500 mt-2">Knowledge that normalizes, empowers, and heals</p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Our Education</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Many sexual concerns are rooted in misunderstanding, myth, or a lack of information about how our bodies actually work. Our education and psychoeducation services help you build an accurate, compassionate understanding of sexual health — so you can feel more confident, communicate more openly, and make informed decisions about your care.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We focus on normalizing the wide range of human sexual experience and empowering you with practical knowledge and skills you can use every day.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Topics We Cover</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{topic}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 p-3 bg-brand/5 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">Guided conversations to build confidence and communication skills with your partner</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">How We Help</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: BookOpen, title: 'Accurate Information', desc: 'Clear, evidence-based education about anatomy, response cycles, and normal variation' },
                    { icon: MessageCircle, title: 'Better Communication', desc: 'Practical tools for consent, boundary-setting, and talking about sex with your partner' },
                    { icon: Compass, title: 'The Right Referrals', desc: 'Guidance to pelvic floor physical therapy, medical workup, or hormone evaluation when indicated' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
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
                    <BookOpen className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Empowering Knowledge</p>
                      <p className="text-xs text-slate-500">Normalize, inform, and build confidence</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Specialist Referrals</p>
                      <p className="text-xs text-slate-500">PT, medical workup &amp; hormone evaluation</p>
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
          <h2 className="text-3xl font-bold mb-4">Understanding Is the First Step to Healing</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Gain the knowledge and tools to feel confident and in control of your sexual health.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}