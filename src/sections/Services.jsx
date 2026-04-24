import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { Zap, ArrowRight, Brain, Stethoscope, Video, Heart, Activity, FlaskConical } from 'lucide-react'

const iconMap = {
  Brain: Brain,
  Stethoscope: Stethoscope,
  Video: Video,
  Heart: Heart,
  Activity: Activity,
  FlaskConical: FlaskConical,
}

export default function Services({ services: propServices }){
  const { content } = useContent()
  const services = propServices || content.services || []
  
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }
  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }
  return (
    <motion.section id="services" className="py-16 sm:py-20 lg:py-32 bg-white" aria-label="Services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div className="text-center mb-10 sm:mb-14 lg:mb-16" variants={item}>
          <span className="inline-flex items-center gap-2 font-medium text-[10px] sm:text-xs uppercase tracking-[0.2em] text-brand mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-brand/10">
            <Zap className="w-3.5 h-3.5" />
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900">Comprehensive Care</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">Expert services tailored to your health needs.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.slice(0, 6).map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Brain
            return (
              <motion.div key={service.id || idx} variants={item} className="group">
                <Link to="/services" className="block bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-brand/20 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 rounded-xl bg-brand flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6 line-clamp-2">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand font-medium text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}