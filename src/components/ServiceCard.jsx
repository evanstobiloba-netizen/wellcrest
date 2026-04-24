import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Stethoscope, Activity } from 'lucide-react'

const getIcon = (icon) => {
  const icons = {
    '🧠': Brain,
    '💊': Stethoscope,
  }
  const Icon = icons[icon] || Activity
  return <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
}

export default function ServiceCard({title, bullets, icon, to = '/services'}){
  return (
    <motion.div 
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="card p-6 sm:p-8"
    >
      {/* Icon with gradient */}
      <div className="w-12 h-12 sm:w-14 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-brand-navy/20">
        {icon ? getIcon(icon) : <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">{title}</h3>
      
      <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-[15px] text-slate-600 mb-6 sm:mb-8" aria-label={`${title} bullets`}>
        {bullets.map((b, idx) => (
          <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      
      <Link to={to} className="group/btn flex items-center gap-2 text-brand font-semibold text-sm hover:gap-3 transition-all">
        Learn More
        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  )
}