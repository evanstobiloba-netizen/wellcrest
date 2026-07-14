import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Dna, Activity } from 'lucide-react'

export default function Genesight(){
  return (
    <motion.section 
      id="genesight" 
      className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden" 
      aria-label="Genesight" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-50 blur-[60px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 font-medium text-[10px] sm:text-xs uppercase tracking-[0.2em] text-brand mb-4 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <Dna className="w-3.5 h-3.5" />
              Genesight
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight mb-5 sm:mb-6 text-slate-900">
              Precision Mental & <span className="text-brand-navy">Wellness Support</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-500 mb-6 sm:mb-8 leading-relaxed">
              Integrated insights, tailored to you. A premium, tech-forward approach to health decisions powered by genetic testing and data-driven insights.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link to="/services" className="btn-primary flex items-center gap-2">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link to="/about" className="btn-secondary flex items-center gap-2">
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=500&fit=crop"
              alt="Genesight genetic testing"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}