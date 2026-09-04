import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react'

const mentalGroups = [
  { title: 'Depression', conditions: ['Major depressive disorder', 'Persistent depressive disorder', 'Seasonal depression'], href: '/services/mental-health/depression' },
  { title: 'Anxiety disorders', conditions: ['Generalized anxiety disorder (GAD)', 'Panic disorder', 'Social anxiety disorder'], href: '/services/mental-health/anxiety' },
  { title: 'Trauma-related disorders', conditions: ['Post-traumatic stress disorder (PTSD)', 'Acute stress disorder'], href: '/services/mental-health/ptsd' },
  { title: 'Bipolar disorders', conditions: ['Bipolar I disorder', 'Bipolar II disorder', 'Cyclothymic disorder'], href: '/services/mental-health/bipolar' },
  { title: 'Psychotic disorders', conditions: ['Brief psychosis'], href: '/services/mental-health' },
  { title: 'ADHD', conditions: ['Attention-deficit/hyperactivity disorder'], href: '/services/mental-health/adhd' },
  { title: 'Obsessive-compulsive & related disorders', conditions: ['Obsessive-compulsive disorder (OCD)'], href: '/services/mental-health' },
  { title: 'Sleep-related mental health concerns', conditions: ['Insomnia & sleep problems associated with psychiatric conditions'], href: '/services/mental-health/insomnia' },
]

const sexualConditions = [
  'Sexual concerns associated with depression and anxiety',
  'Changes in sexual functioning related to stress, medications, aging, or mental-health conditions',
  'Erectile dysfunction, premature or delayed ejaculation',
  'Orgasmic difficulties (anorgasmia, delayed orgasm)',
  'Painful intercourse (dyspareunia, vaginismus)',
  'Sexual anxiety, performance anxiety, or avoidance',
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function CommonConditions(){
  return (
    <motion.section id="conditions" className="py-16 sm:py-20 lg:py-24 bg-slate-50" aria-label="Common Conditions Treated" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-semibold mb-4">
            Common Conditions Treated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Compassionate Care for Mental <span className="text-brand">&amp;</span> Sexual Health
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Evidence-based treatment for a wide range of conditions across both mental and sexual health.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Mental Health */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mental Health</h3>
                <p className="text-sm text-slate-500">Conditions we treat</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              {mentalGroups.map((group) => (
                <div key={group.title}>
                  <Link
                    to={group.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all mb-2"
                  >
                    {group.title}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {group.conditions.map((cond) => (
                      <span key={cond} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link to="/services/mental-health" className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all">
              View Mental Health Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Sexual Health */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Sexual Health</h3>
                <p className="text-sm text-slate-500">Concerns we help with</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {sexualConditions.map((item) => (
                <Link
                  key={item}
                  to="/sexual-health/individual-therapy"
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-brand/5 hover:shadow-sm transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </Link>
              ))}
            </div>

            <Link to="/sexual-health/individual-therapy" className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all">
              Explore Sexual Health Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}