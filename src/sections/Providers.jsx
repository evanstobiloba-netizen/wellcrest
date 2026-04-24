import React from 'react'
import { motion } from 'framer-motion'

const ProviderBadge = ({children}) => (
  <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-[#E1E8F0] text-[10px] sm:text-xs font-medium text-[#5A6A7A]">{children}</span>
)

export default function Providers(){
  const provider = {
    name: 'Dr. Sarah Mitchell',
    credentials: 'MD, Psychiatry & Internal Medicine',
    bio: 'Board-certified psychiatrist and primary care physician with over 15 years of experience in integrated mental and medical healthcare. Dedicated to providing comprehensive, patient-centered care.',
    badges: ['Board Certified', 'Dual Specialty', 'HIPAA Compliant'],
  }
  return (
    <motion.section id="providers" className="py-16 sm:py-20 lg:py-32 bg-[#F0F4F8]" aria-label="Providers" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div className="text-center mb-10 sm:mb-14 lg:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#0066FF] mb-3 sm:mb-4">Our Providers</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#0A2540]" >Meet Our Care Team</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5A6A7A] max-w-2xl mx-auto">Experienced professionals dedicated to your well-being.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl lg:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative bg-gradient-to-br p-8 sm:p-10 lg:p-16 flex items-center justify-center min-h-[250px] lg:min-h-auto">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 sm:w-24 lg:w-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-brand to-brand-teal flex items-center justify-center text-white text-xl sm:text-2xl lg:text-4xl font-bold">
                  SM
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-mono uppercase tracking-wider">Provider Initials</div>
              </div>
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/5 border border-white/10 blur-2xl" />
            </div>
            
            {/* Content side */}
            <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center">
              <div>
                <span className="text-[#0066FF] font-mono text-[10px] sm:text-xs uppercase tracking-wider mb-2 block">{provider.credentials}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A2540] mb-3 sm:mb-4" >{provider.name}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#5A6A7A] leading-relaxed mb-4 sm:mb-6">{provider.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {provider.badges.map((badge, idx) => (
                    <ProviderBadge key={idx}>{badge}</ProviderBadge>
                  ))}
                </div>
                <button className="bg-[#0066FF] hover:bg-[#0052D9] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200">
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
