import React from 'react'
import { Wallet } from 'lucide-react'

const insurances = [
  { name: 'Aetna', src: '/logos/aetna.svg' },
  { name: 'Cigna', src: '/logos/cigna.svg' },
  { name: 'Carelon', src: '/logos/carelon-behavioral-health.svg' },
  { name: 'Optum (UnitedHealth Care)', src: '/logos/unitedhealthcare.svg' },
  { name: 'Oscar', src: '/logos/oscar.svg' },
  { name: 'Blue Cross Blue Shield', src: '/logos/blue-cross-blue-shield.svg' },
  { name: 'Medicare', src: '/logos/medicare.svg' },
  { name: 'GTEB' },
  { name: 'Humana', src: '/logos/humana.svg' },
  { name: 'Ambetter', src: '/logos/ambetter.png' },
  { name: 'Cash (Self-Pay)', icon: 'cash' },
  { name: 'Wellcare', src: '/logos/wellcare.png' },
  { name: 'Care First', src: '/logos/carefirst.png' },
  { name: 'Medicaid', src: '/logos/medicaid.png' },
]

export default function Insurance(){
  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden" aria-label="Insurance Accepted">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-10">
          Insurance Accepted
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center w-max marquee-track">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center gap-14 pr-14" aria-hidden={half === 1}>
              {insurances.map((ins, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 h-20 px-10 border border-[#E1E8F0] rounded-lg flex items-center justify-center bg-white"
                >
                  {ins.src ? (
                    <img src={ins.src} alt={ins.name} className="h-10 md:h-12 w-auto max-w-[190px] object-contain" />
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50">
                      {ins.icon && <Wallet className="w-4 h-4 text-slate-400" />}
                      <span className="text-base md:text-lg font-semibold text-gray-600 whitespace-nowrap">
                        {ins.name}
                      </span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
