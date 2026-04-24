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
              Precision Mental & <span className="text-brand-navy">Medical Care</span>
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
            {/* Card visual */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Genesight</div>
                  <div className="text-xs text-slate-400">Analysis Ready</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: [0.3, 0.7, 0.3] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    className="aspect-square rounded-xl bg-slate-100"
                  />
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Analysis Status</span>
                  <span className="flex items-center gap-2 text-emerald-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}