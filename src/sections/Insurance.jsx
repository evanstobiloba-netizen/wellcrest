import React from 'react'

const insurances = [
  { name: 'Cigna', src: '/logos/cigna.png' },
  { name: 'Aetna', src: '/logos/aetna.svg' },
  { name: 'Oscar (Optum)' },
  { name: 'GTEB' },
  { name: 'Humana', src: '/logos/humana.svg' },
  { name: 'Medicare', src: '/logos/medicare.svg' },
  { name: 'Anthem' },
  { name: 'Blue Cross Blue Shield', src: '/logos/blue-cross-blue-shield.svg' },
  { name: 'UnitedHealthcare/Optum', src: '/logos/unitedhealthcare.svg' },
  { name: 'Carelon Behavioral Health' },
  { name: 'CareFirst BlueCross BlueShield' },
  { name: 'Oxford (Optum)', comingSoon: true },
]

export default function Insurance(){
  const items = [...insurances, ...insurances]
  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden" aria-label="Insurance Accepted">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
          Insurance Accepted
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-10 w-max marquee-track">
          {items.map((ins, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-10 px-8 border border-[#E1E8F0] rounded-md flex items-center justify-center bg-white"
            >
              {ins.src ? (
                <img src={ins.src} alt={ins.name} className="h-5 md:h-6 w-auto object-contain" />
              ) : (
                <span className="text-sm font-medium text-gray-600">
                  {ins.name}
                  {ins.comingSoon && <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-600">Coming Soon</span>}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
