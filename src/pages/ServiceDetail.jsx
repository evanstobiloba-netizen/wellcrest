import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import BookAppointmentButton from '../components/BookAppointmentButton'
import { ArrowLeft, Brain, Activity, Shield, Video, Calendar, AlertCircle, Zap, Moon, Heart, Stethoscope, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const mentalHealthServices = [
  {
    id: 'depression',
    title: 'Depression Treatment',
    shortDesc: 'Professional help for managing depression',
    description: 'Depression is a common but serious mood disorder. It causes severe symptoms that affect how a person feels, thinks, and handles daily activities, such as sleeping, eating, or working. The symptoms must be present for at least 2 weeks to be diagnosed with depression. At WellCrest Health, we provide comprehensive care for patients struggling with depression.',
    icon: Brain,
    features: [
      { icon: Activity, title: 'Medication Management', desc: 'Expert prescribing and monitoring of antidepressants' },
      { icon: Brain, title: 'Psychotherapy', desc: 'Cognitive Behavioral Therapy (CBT) and other evidence-based approaches' },
      { icon: Calendar, title: 'Talk Therapy', desc: 'Individual sessions to address root causes' },
      { icon: Shield, title: 'Personalized Plans', desc: 'Treatment tailored to your specific needs' }
    ],
    conditions: ['Major Depressive Disorder', 'Persistent Depressive Disorder', 'Seasonal Affective Disorder', 'Postpartum Depression']
  },
  {
    id: 'anxiety',
    title: 'Anxiety Treatment',
    shortDesc: 'Effective treatments to help you manage anxiety',
    description: 'Occasional anxiety is a normal part of life. Many people may worry about things such as health, money, or family problems. But people with GAD feel extremely worried or nervous more frequently about these and other things even when there is little or no reason to worry about them. Anxiety can be overwhelming, but with WellCrest Health, you don\'t have to face it alone.',
    icon: AlertCircle,
    features: [
      { icon: Activity, title: 'CBT Therapy', desc: 'Cognitive-behavioral therapy techniques' },
      { icon: Brain, title: 'Mindfulness', desc: 'Mindfulness-based stress reduction' },
      { icon: Calendar, title: 'Medication', desc: 'Anti-anxiety medications when appropriate' },
      { icon: Shield, title: 'Coping Strategies', desc: 'Tools to manage panic and worry' }
    ],
    conditions: ['Generalized Anxiety Disorder', 'Panic Disorder', 'Social Anxiety', 'Specific Phobias', 'Agoraphobia']
  },
  {
    id: 'bipolar',
    title: 'Bipolar Disorder',
    shortDesc: 'Specialized care for bipolar disorder',
    description: 'Bipolar disorder is a mental illness that causes remarkable shifts in a person\'s mood, energy, activity levels, and concentration. These shifts can make it difficult to carry out day-to-day tasks. Managing bipolar disorder requires a nuanced and compassionate approach.',
    icon: Zap,
    features: [
      { icon: Activity, title: 'Mood Stabilizers', desc: 'Medication to balance mood swings' },
      { icon: Brain, title: 'Psychoeducation', desc: 'Understanding your triggers and patterns' },
      { icon: Calendar, title: 'Therapy', desc: 'Interpersonal and social rhythm therapy' },
      { icon: Shield, title: 'Crisis Planning', desc: 'Safety plans for episodes' }
    ],
    conditions: ['Bipolar I Disorder', 'Bipolar II Disorder', 'Cyclothymic Disorder', 'Rapid Cycling']
  },
  {
    id: 'adhd',
    title: 'ADD/ADHD Treatment',
    shortDesc: 'Comprehensive care for attention deficit disorders',
    description: 'Attention-deficit/hyperactivity disorder (ADHD) is marked by an ongoing pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development.',
    icon: Calendar,
    features: [
      { icon: Activity, title: 'Assessment', desc: 'Comprehensive ADHD evaluation' },
      { icon: Brain, title: 'Medication', desc: 'Stimulant and non-stimulant options' },
      { icon: Calendar, title: 'Behavioral Therapy', desc: 'Strategies for focus and organization' },
      { icon: Shield, title: 'Coaching', desc: 'ADHD-specific coaching support' }
    ],
    conditions: ['ADHD Combined Type', 'ADHD Predominantly Inattentive', 'ADHD Predominantly Hyperactive', 'Adult ADHD']
  },
  {
    id: 'ptsd',
    title: 'PTSD Treatment',
    shortDesc: 'Comprehensive support for post-traumatic stress disorder',
    description: 'Post-traumatic stress disorder (PTSD) can have a great impact on every aspect of a person\'s life. At WellCrest Health, we offer compassionate and effective care for patients dealing with PTSD.',
    icon: Shield,
    features: [
      { icon: Activity, title: 'Trauma-Focused Therapy', desc: 'TF-CBT and other trauma treatments' },
      { icon: Brain, title: 'EMDR', desc: 'Eye Movement Desensitization and Reprocessing' },
      { icon: Calendar, title: 'Processing', desc: 'Safe trauma processing sessions' },
      { icon: Heart, title: 'Support', desc: 'Compassionate, understanding care' }
    ],
    conditions: ['PTSD from Trauma', 'Complex PTSD', 'Developmental Trauma', 'Acute Stress Disorder']
  },
  {
    id: 'insomnia',
    title: 'Insomnia Treatment',
    shortDesc: 'Effective treatments for sleep disorders',
    description: 'Insomnia is a common sleep disorder that can make falling or staying asleep hard. Patients with insomnia usually complain about difficulty falling asleep and staying asleep.',
    icon: Moon,
    features: [
      { icon: Activity, title: 'Sleep Hygiene', desc: 'Healthy sleep habits education' },
      { icon: Brain, title: 'CBT-I', desc: 'Cognitive Behavioral Therapy for Insomnia' },
      { icon: Calendar, title: 'Routine', desc: 'Personalized sleep schedule' },
      { icon: Shield, title: 'Medication', desc: 'Sleep aids when appropriate' }
    ],
    conditions: ['Chronic Insomnia', 'Acute Insomnia', 'Sleep Onset Disorder', 'Sleep Maintenance Disorder']
  },
  {
    id: 'stress',
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
]

const primaryHealthServices = [
  {
    id: 'primary-care',
    title: 'Primary Care',
    shortDesc: 'Comprehensive primary healthcare services',
    description: 'Our primary care services focus on preventive health, chronic disease management, and overall wellness. We provide comprehensive healthcare for patients of all ages.',
    icon: Stethoscope,
    features: [
      { icon: Activity, title: 'Chronic Disease', desc: 'Management of diabetes, hypertension, and other conditions' },
      { icon: Shield, title: 'Preventive Care', desc: 'Annual checkups and screenings' },
      { icon: Video, title: 'Care Coordination', desc: 'Coordination with specialists' },
      { icon: Calendar, title: 'Health Screenings', desc: 'Routine screenings for early detection' }
    ],
    conditions: ['Annual Physicals', 'Chronic Disease Management', 'Preventive Care', 'Health Screenings']
  },
  {
    id: 'medication',
    title: 'Medication Management',
    shortDesc: 'Expert prescription and monitoring',
    description: 'Our medication management services ensure safe and effective use of medications for mental health and primary care conditions.',
    icon: Activity,
    features: [
      { icon: Activity, title: 'Prescribing', desc: 'Expert medication prescribing' },
      { icon: Shield, title: 'Monitoring', desc: 'Regular monitoring and adjustments' },
      { icon: Calendar, title: 'Follow-ups', desc: 'Ongoing follow-up care' },
      { icon: Heart, title: 'Support', desc: 'Pharmacy support and questions' }
    ],
    conditions: ['Medication Reviews', 'Refill Management', 'Drug Interactions', 'Adherence Support']
  },
  {
    id: 'telehealth',
    title: 'Telehealth Services',
    shortDesc: 'Virtual healthcare from anywhere',
    description: 'Access quality healthcare from the comfort of your home. Our telehealth services make it easy to get the care you need, wherever you are.',
    icon: Video,
    features: [
      { icon: Video, title: 'Video Visits', desc: 'Secure video consultations' },
      { icon: Activity, title: 'Online Portal', desc: 'Easy access to records' },
      { icon: Calendar, title: 'Flexible Scheduling', desc: 'Appointments that fit your schedule' },
      { icon: Shield, title: 'HIPAA Secure', desc: 'Private and secure platform' }
    ],
    conditions: ['Virtual Visits', 'Remote Monitoring', 'Online Prescriptions', 'Tele-therapy']
  }
]

export default function ServiceDetail({ type }) {
  const services = type === 'mental' ? mentalHealthServices : primaryHealthServices
  const pageTitle = type === 'mental' ? 'Mental Health Services' : 'Primary Health Services'
  const pageDesc = type === 'mental' 
    ? 'Comprehensive mental health care services including depression, anxiety, bipolar disorder, PTSD, and more.'
    : 'Comprehensive primary healthcare services for preventive health, chronic disease management, and wellness.'

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{pageTitle}</h1>
            <p className="text-lg text-slate-500 max-w-2xl">{pageDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-navy transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-500">{service.shortDesc}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm line-clamp-2">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.conditions.slice(0, 3).map((cond, cidx) => (
                    <span key={cidx} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {cond}
                    </span>
                  ))}
                  {service.conditions.length > 3 && (
                    <span className="text-xs px-2 py-1 text-brand">+{service.conditions.length - 3} more</span>
                  )}
                </div>
                
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, idx) => (
        <section key={service.id} id={service.id} className="py-16 bg-slate-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="text-sm text-slate-400">WellCrest Health</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-8 text-base leading-relaxed">{service.description}</p>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-4">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{feature.title}</div>
                      <div className="text-sm text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Conditions We Treat</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.conditions.map((cond, cidx) => (
                  <span key={cidx} className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full">
                    {cond}
                  </span>
                ))}
              </div>
              
              <div className="pt-8 border-t border-slate-200">
                <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
                  Schedule Appointment <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r ">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Schedule an appointment today and take the first step towards better mental health.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}