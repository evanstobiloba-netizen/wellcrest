import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner(){
  return (
    <motion.section 
      id="cta-banner" 
      className="py-16 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden" 
      aria-label="CTA" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[80px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">
              Ready to elevate your <span className="text-brand-navy">health experience?</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-400">Join WellCrest Health today and premium care. Quality, compassionate mental health services.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              <span className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link to="/services" className="btn-secondary flex items-center justify-center gap-2">
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}