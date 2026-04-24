import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Video, Building2, CheckCircle, ArrowRight } from 'lucide-react'

function LocationCard({city, badge, available, location, delay}){
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-navy transition-all duration-300 overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-5">
        <div className="w-11 h-11 sm:w-12 rounded-xl bg-blue-50 flex items-center justify-center">
          <MapPin className="w-5 h-5 sm:w-6 text-brand" />
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold ${
          badge === 'Dual' 
            ? 'bg-gradient-to-r  text-white shadow-lg shadow-brand-purple/30' 
            : badge === 'In-Person'
            ? 'bg-slate-900 text-white'
            : 'bg-blue-50 text-brand border border-blue-100'
        }`}>
          {badge}
        </span>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-1">{city}</h4>
        <p className="text-xs sm:text-sm text-slate-500 mb-4">United States</p>
        
        {/* Services available */}
        <div className="space-y-2 mb-4">
          {(badge === 'Dual' ? [Video, Building2] : [Video]).map((Icon, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand" />
              <span>{idx === 0 ? 'Telehealth' : 'In-Person'}</span>
            </div>
          ))}
        </div>
        
        {/* Status */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <CheckCircle className={`w-4 h-4 ${available ? 'text-emerald-500' : 'text-amber-500'}`} />
            <span className={`text-xs sm:text-sm font-medium ${available ? 'text-emerald-600' : 'text-amber-600'}`}>
              {available ? 'Available Now' : 'Coming Soon'}
            </span>
          </div>
          <Link to={`/locations/${location || city.toLowerCase()}`} className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Locations(){
  const locations = [
    { city: 'Georgia', badge: 'Dual', available: true, location: 'georgia' },
    { city: 'Arizona', badge: 'Telehealth', available: true, location: 'arizona' },
    { city: 'Maryland', badge: 'Telehealth', available: true, location: 'maryland' }
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
    <motion.section id="locations" className="py-16 sm:py-20 lg:py-32 bg-slate-50" aria-label="Locations" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div className="text-center mb-10 sm:mb-14 lg:mb-16" variants={item}>
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-brand mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">Locations</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900">Care Across States</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-500 max-w-2xl mx-auto">Access care in-person or through our secure telehealth platform serving Georgia, Arizona, and Maryland.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {locations.map((loc, idx) => (
            <LocationCard key={idx} city={loc.city} badge={loc.badge} available={loc.available} location={loc.location} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}