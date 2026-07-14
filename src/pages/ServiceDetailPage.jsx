import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { useCalendly } from '../components/CalendlyModal'
import { ArrowLeft, Brain, Activity, Shield, Video, Calendar, AlertCircle, Zap, Moon, Heart, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const allServices = {
  'depression': {
    title: 'Depression Treatment',
    shortDesc: 'Professional help for managing depression',
    description: 'Depression is a common but serious mood disorder. It causes severe symptoms that affect how a person feels, thinks, and handles daily activities, such as sleeping, eating, or working. The symptoms must be present for at least 2 weeks to be diagnosed with depression. At WellCrest Health, we provide comprehensive care for patients struggling with depression.',
    icon: Brain,
    features: [
      { icon: Activity, title: 'Holistic Therapy Support', desc: 'Therapeutic support and monitoring tailored to your needs' },
      { icon: Brain, title: 'Psychotherapy', desc: 'Cognitive Behavioral Therapy (CBT) and other evidence-based approaches' },
      { icon: Shield, title: 'Personalized Plans', desc: 'Treatment tailored to your specific needs' }
    ],
    conditions: ['Major Depressive Disorder', 'Persistent Depressive Disorder', 'Seasonal Affective Disorder', 'Postpartum Depression']
  },
  'anxiety': {
    title: 'Anxiety Treatment',
    shortDesc: 'Effective treatments to help you manage anxiety',
    description: 'Occasional anxiety is a normal part of life. Many people may worry about things such as health, money, or family problems. But people with GAD feel extremely worried or nervous more frequently about these and other things even when there is little or no reason to worry about them.',
    icon: AlertCircle,
    features: [
      { icon: Activity, title: 'CBT Therapy', desc: 'Cognitive-behavioral therapy techniques' },
      { icon: Brain, title: 'Mindfulness', desc: 'Mindfulness-based stress reduction' },
      { icon: Calendar, title: 'Wellness Support', desc: 'Clinical wellness support when appropriate' },
      { icon: Shield, title: 'Coping Strategies', desc: 'Tools to manage panic and worry' }
    ],
    conditions: ['Generalized Anxiety Disorder', 'Panic Disorder', 'Social Anxiety', 'Specific Phobias', 'Agoraphobia']
  },
  'bipolar': {
    title: 'Bipolar Disorder',
    shortDesc: 'Specialized care for bipolar disorder',
    description: 'Bipolar disorder is a mental illness that causes remarkable shifts in a person\'s mood, energy, activity levels, and concentration. These shifts can make it difficult to carry out day-to-day tasks.',
    icon: Zap,
    features: [
      { icon: Activity, title: 'Mood Stabilizing Strategies', desc: 'Clinical strategies to help balance mood swings' },
      { icon: Brain, title: 'Psychoeducation', desc: 'Understanding your triggers and patterns' },
      { icon: Calendar, title: 'Therapy', desc: 'Interpersonal and social rhythm therapy' },
      { icon: Shield, title: 'Crisis Planning', desc: 'Safety plans for episodes' }
    ],
    conditions: ['Bipolar I Disorder', 'Bipolar II Disorder', 'Cyclothymic Disorder', 'Rapid Cycling']
  },
  'adhd': {
    title: 'ADD/ADHD Treatment',
    shortDesc: 'Comprehensive care for attention deficit disorders',
    description: 'Attention-deficit/hyperactivity disorder (ADHD) is marked by an ongoing pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development.',
    icon: Calendar,
    features: [
      { icon: Activity, title: 'Assessment', desc: 'Comprehensive ADHD evaluation' },
      { icon: Brain, title: 'Clinical Support', desc: 'Evidence-based clinical options to support focus and attention' },
      { icon: Calendar, title: 'Behavioral Therapy', desc: 'Strategies for focus and organization' },
      { icon: Shield, title: 'Coaching', desc: 'ADHD-specific coaching support' }
    ],
    conditions: ['ADHD Combined Type', 'ADHD Predominantly Inattentive', 'ADHD Predominantly Hyperactive', 'Adult ADHD']
  },
  'ptsd': {
    title: 'PTSD Treatment',
    shortDesc: 'Comprehensive support for post-traumatic stress disorder',
    description: 'Post-traumatic stress disorder (PTSD) can have a great impact on every aspect of a person\'s life. At WellCrest Health, we offer compassionate and effective care for patients dealing with PTSD.',
    icon: Shield,
    features: [
      { icon: Activity, title: 'Holistic Therapy Support', desc: 'Therapeutic strategies to help manage PTSD symptoms' }
    ],
    conditions: ['PTSD from Trauma', 'Complex PTSD', 'Developmental Trauma', 'Acute Stress Disorder']
  },
  'insomnia': {
    title: 'Insomnia Treatment',
    shortDesc: 'Effective treatments for sleep disorders',
    description: 'Insomnia is a common sleep disorder that can make falling or staying asleep hard. Patients with insomnia usually complain about difficulty falling asleep and staying asleep.',
    icon: Moon,
    features: [
      { icon: Activity, title: 'Sleep Hygiene', desc: 'Healthy sleep habits education' },
      { icon: Brain, title: 'CBT-I', desc: 'Cognitive Behavioral Therapy for Insomnia' },
      { icon: Calendar, title: 'Routine', desc: 'Personalized sleep schedule' },
      { icon: Shield, title: 'Clinical Sleep Support', desc: 'Clinical sleep supports when appropriate' }
    ],
    conditions: ['Chronic Insomnia', 'Acute Insomnia', 'Sleep Onset Disorder', 'Sleep Maintenance Disorder']
  },
  'stress': {
    title: 'Stress & Burnout',
    shortDesc: 'Support and strategies for managing stress',
    description: 'Stress is an unavoidable part of life, but with the right tools, it doesn\'t have to take over your life. WellCrest Health offers services designed to help individuals manage stress effectively.',
    icon: Heart,
    features: [
      { icon: Activity, title: 'Stress Management', desc: 'Practical techniques for daily life' },
      { icon: Brain, title: 'Mindfulness', desc: 'Meditation and grounding exercises' },
      { icon: Calendar, title: 'Work-Life Balance', desc: 'Strategies for healthy boundaries' },
      { icon: Shield, title: 'Resilience Building', desc: 'Strengthen your coping abilities' }
    ],
    conditions: ['Chronic Stress', 'Occupational Burnout', 'Caregiver Stress', 'Life Transitions']
  }
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const calendly = useCalendly()
  const service = allServices[serviceId]

  const category = 'mental-health'
  const categoryTitle = 'Mental Health Services'

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-40 pb-20 text-center">
          <p className="text-slate-500">Service not found</p>
          <Link to="/services" className="text-brand mt-4 inline-block">Back to Services</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 page-section">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to={`/services/${category}`} className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              {categoryTitle}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">{service.title}</h1>
                <p className="text-slate-500 mt-2">{service.shortDesc}</p>
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
                <p className="text-slate-600 text-lg leading-relaxed mb-8">{service.description}</p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{feature.title}</div>
                        <div className="text-sm text-slate-500">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">Conditions We Treat</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.conditions.map((cond, cidx) => (
                    <span key={cidx} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {cond}
                    </span>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Need Help Deciding?</h3>
                  <p className="text-slate-500 text-sm mb-4">Speak with our care team. We'll help you find the right treatment.</p>
                  <button onClick={calendly.open} className="btn-primary">Book a Consultation</button>
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
                    <Video className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Telehealth</p>
                      <p className="text-xs text-slate-500">Available in GA, AZ, MD</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-brand" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">In-Person</p>
                      <p className="text-xs text-slate-500">Georgia location</p>
                    </div>
                  </div>
                </div>
                <button onClick={calendly.open} className="btn-primary w-full mb-2">Book Appointment</button>
                <p className="text-xs text-slate-400 text-center">No referral needed</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Our compassionate team is here to support you every step of the way.</p>
          <button onClick={calendly.open} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}