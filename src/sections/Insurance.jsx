import React from 'react'
import { motion } from 'framer-motion'

export default function Insurance(){
  const logos = Array.from({length:8}).map((_,i)=>(`Logo${i+1}`))
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }
  return (
    <motion.section id="insurance" className="py-16 bg-white" aria-label="Insurance" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={container}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6" >Insurance Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((l, idx)=> (
            <motion.div key={idx} className="h-10 border border-[#E1E8F0] rounded-md flex items-center justify-center text-sm text-gray-600" variants={container} initial="hidden" whileInView="visible">
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
