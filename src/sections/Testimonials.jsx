import React from 'react'
import { motion } from 'framer-motion'

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-label="star" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
)

const TestimonialCard = ({name, text, role, delay}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="bg-white border border-[#E1E8F0] rounded-2xl p-5 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] transition-all duration-300"
  >
    <div className="flex items-center gap-1 mb-3 sm:mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} />)}
    </div>
    <p className="text-xs sm:text-sm lg:text-base text-[#5A6A7A] leading-relaxed mb-4 sm:mb-6">"{text}"</p>
    <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-[#E1E8F0]">
      <div className="w-8 h-8 sm:w-10 rounded-full bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <div className="font-semibold text-sm sm:text-base text-[#0A2540]">{name}</div>
        <div className="text-[10px] sm:text-xs text-[#5A6A7A]">{role}</div>
      </div>
    </div>
  </motion.div>
)

export default function Testimonials(){
  const testimonials = [
    {name: 'Alex P.', text: 'WellCrest transformed my care—clear, concise, and easy to navigate. The best healthcare experience I have ever had.', role: 'Patient since 2023' },
    {name: 'Jamie K.', text: 'Telehealth is seamless. The provider team feels premium and genuinely cares about your well-being.', role: 'Telehealth Patient' },
    {name: 'Priya S.', text: 'Thoughtful, data-backed care with real empathy. Finally found a practice that understands integrated health.', role: 'Primary Care Patient' },
  ]
  return (
    <motion.section id="testimonials" className="py-16 sm:py-20 lg:py-32 bg-[#F7F9FC]" aria-label="Testimonials" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div className="text-center mb-10 sm:mb-14 lg:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#0066FF] mb-3 sm:mb-4">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#0A2540]" >What Our Patients Say</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#5A6A7A] max-w-2xl mx-auto">Real stories from patients who trust us with their health.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} name={t.name} text={t.text} role={t.role} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
