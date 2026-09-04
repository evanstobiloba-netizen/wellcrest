import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, HeartHandshake, MessageCircle, Brain, ShieldCheck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SexualHealthTherapy() {
  const calendly = useCalendly()

  const concerns = [
    'Sexual concerns associated with depression, anxiety, or relationship difficulties',
    'Changes in sexual functioning related to stress, medications, aging, or mental-health conditions',
    'Erectile dysfunction, premature or delayed ejaculation',
    'Orgasmic difficulties (anorgasmia, delayed orgasm)',
    'Painful intercourse (dyspareunia, vaginismus)',
    'Sexual anxiety, performance anxiety, or avoidance',
    'Sexual concerns related to chronic illness, disability, menopause, or aging',
    'Low or mismatched desire/libido concerns',
    'Recovery and adjustment after sexual trauma or abuse (in coordination with trauma-focused therapist)',
    'Sexual dissatisfaction or intimacy problems',
    'Anxiety, shame, or trauma related to sexuality',
    'Compulsive sexual behavior or out-of-control sexual behavior patterns',
    'Sexual identity, orientation, and gender exploration'
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
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Individual Therapy</h1>
                <p className="text-slate-500 mt-2">Support for the sexual concerns that affect your life</p>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About Individual Therapy</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Sexual concerns are deeply personal, and they often carry anxiety, shame, or uncertainty. Our individual therapy provides a safe, confidential space to explore these concerns with a licensed professional who treats you with respect and without judgment. Whether the issue is tied to stress, relationships, mental health, or your overall well-being, we meet you where you are and work with you toward meaningful change.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Concerns We Help With</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {concerns.map((concern, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{concern}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Approach</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: MessageCircle, title: 'Individualized Care', desc: 'Therapy tailored to your unique concerns and goals' },
                    { icon: Brain, title: 'Evidence-Based Modalities', desc: 'CBT and other proven approaches for sexual concerns' },
                    { icon: ShieldCheck, title: 'Confidential & Safe', desc: 'A judgment-free space built on trust and discretion' }
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
                    <HeartHandshake className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Individual Sessions</p>
                      <p className="text-xs text-slate-500">One-on-one confidential care</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Judgment-Free</p>
                      <p className="text-xs text-slate-500">A safe space for every concern</p>
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
          <h2 className="text-3xl font-bold mb-4">You Don&apos;t Have to Navigate This Alone</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Start individual therapy and get compassionate, professional support for your sexual health.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Start Therapy
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}