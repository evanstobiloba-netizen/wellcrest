import React from 'react'
import { motion } from 'framer-motion'
import { Target, Link2, Video, Award, Shield, Zap, Clock, Users, FileCheck, Smartphone, Heart, Activity, Stethoscope } from 'lucide-react'

const iconMap = {
  'clinical': Target,
  'integrated': Link2,
  'telehealth': Video,
  'certified': Award,
  'secure': Shield,
  'premium': Zap,
}

const FeatureCard = ({icon, title, desc, delay}) => {
  const Icon = iconMap[icon] || Zap
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand/20 transition-all duration-300"
    >
      <div className="w-11 h-11 sm:w-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center mb-4 sm:mb-5">
        <Icon className="w-5 h-5 sm:w-6 text-white" />
      </div>
      
      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2" >{title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Why(){
  const features = [
    { icon: 'clinical', title: 'Clinical Excellence', desc: 'Evidence-based approaches backed by latest research and best practices.' },
    { icon: 'integrated', title: 'Integrated Care', desc: 'Mental health and primary care services under one roof.' },
    { icon: 'telehealth', title: 'Telehealth Access', desc: 'Secure video consultations available across all served states.' },
    { icon: 'certified', title: 'Dual Certification', desc: 'Board-certified providers in both psychiatry and primary care.' },
    { icon: 'secure', title: 'Data Security', desc: 'HIPAA-compliant systems protecting your health information.' },
    { icon: 'premium', title: 'Premium Experience', desc: 'Modern, technology-forward healthcare experience.' },
  ]
  
  const stats = [
    { value: '20+', label: 'Years', icon: Clock },
    { value: '15K+', label: 'Patients', icon: Users },
    { value: '99%', label: 'Satisfaction', icon: Award },
    { value: '24/7', label: 'Support', icon: Smartphone },
  ]
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
  }
  return (
    <motion.section id="why" className="py-16 sm:py-20 lg:py-32 bg-slate-50" aria-label="Why" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div className="text-center mb-10 sm:mb-14 lg:mb-16" variants={item}>
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-brand mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-brand/10">Why Choose Us</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900">Healthcare, Reimagined</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">A modern approach to mental and primary health that puts you at the center.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-brand" />
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}