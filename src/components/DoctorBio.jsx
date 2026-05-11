import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Award, MapPin, GraduationCap } from 'lucide-react'

export default function DoctorBio() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <img
                src="/dr-faminu.jpg"
                alt="Dr. Oladunni Faminu"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-brand to-brand-teal text-white px-4 py-2 rounded-xl shadow-lg">
                <p className="text-xs font-medium">Founder & Lead Provider</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Quote className="w-8 h-8 text-brand/30 mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
              Dr. Oladunni Faminu
            </h2>
            <p className="text-brand font-medium mb-6">
              DNP, PMHNP, FNP — Founder of WellCrest Health
            </p>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Dr. Oladunni Faminu is a doctorate-prepared Advanced Practice Nurse Practitioner with over 20 years of clinical experience. She holds dual certification as both a Psychiatric Mental Health Nurse Practitioner (PMHNP) and a Family Nurse Practitioner (FNP) — a rare combination that allows her to provide genuinely integrated care across mental health and primary medicine.
              </p>
              <p>
                Dr. Faminu earned her Doctor of Nursing Practice (DNP) with a postgraduate specialization in Psychiatric Mental Health from Frontier Nursing University in Kentucky, and her Master of Science in Nursing as a Family Nurse Practitioner from South University in Savannah, Georgia.
              </p>
              <p>
                Licensed in Georgia, Arizona, and Maryland, she provides evidence-based, patient-centered care rooted in empathy and clinical precision. Her approach goes beyond symptom management — she works to understand each patient's full picture, tailoring individualized treatment plans that support long-term wellness across mind and body.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-brand" />
                Licensed in GA, AZ, MD
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Award className="w-4 h-4 text-brand" />
                PMHNP + FNP Board Certified
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <GraduationCap className="w-4 h-4 text-brand" />
                20+ Years Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
