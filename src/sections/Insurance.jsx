import React from 'react'

const insurances = [
  { name: 'Aetna', src: '/logos/aetna.svg' },
  { name: 'Blue Cross Blue Shield of Georgia', src: '/logos/anthem.svg' },
  { name: 'Blue Cross Blue Shield of North Carolina', src: '/logos/bcbs-north-carolina.svg' },
  { name: 'Cigna Healthcare', src: '/logos/cigna.svg' },
  { name: 'Tricare', src: '/logos/tricare.svg' },
  { name: 'Ambetter', src: '/logos/ambetter.png' },
  { name: 'Oscar', src: '/logos/oscar.svg' },
  { name: 'U.S. Department of Veterans Affairs', src: '/logos/va.svg' },
  { name: 'UnitedHealthcare', src: '/logos/unitedhealthcare.svg' },
  { name: 'UnitedHealthcare Oxford', src: '/logos/oxford.png' },
  { name: 'Humana', src: '/logos/humana.svg' },
  { name: 'Medicare', src: '/logos/medicare.svg' },
  { name: 'Anthem', src: '/logos/anthem.svg' },
  { name: 'Blue Cross Blue Shield', src: '/logos/blue-cross-blue-shield.svg' },
  { name: 'Carelon Behavioral Health', src: '/logos/carelon-behavioral-health.svg' },
  { name: 'CareFirst BlueCross BlueShield', src: '/logos/carefirst.png' },
  { name: 'Oxford (Optum)', src: '/logos/oxford.png', comingSoon: true },
]

export default function Insurance(){
  const items = [...insurances, ...insurances]
  return (
    <section className="py-20 bg-white border-y border-slate-100 overflow-hidden" aria-label="Insurance Accepted">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-10">
          Insurance Accepted
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-14 w-max marquee-track">
          {items.map((ins, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-20 px-10 border border-[#E1E8F0] rounded-lg flex items-center justify-center bg-white"
            >
              {ins.src ? (
                <img src={ins.src} alt={ins.name} className="h-10 md:h-12 w-auto max-w-[190px] object-contain" />
              ) : (
                <span className="text-lg md:text-xl font-medium text-gray-600">
                  {ins.name}
                  {ins.comingSoon && <span className="ml-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">Coming Soon</span>}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
