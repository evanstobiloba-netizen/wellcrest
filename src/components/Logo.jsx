import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo({ invert = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-10 w-auto flex items-center justify-center">
        <div className={`flex items-center gap-2 ${invert ? 'text-white' : 'text-slate-900'}`}>
          <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-sm ${
            invert ? 'bg-gradient-to-r from-brand to-brand-teal text-white' : 'bg-gradient-to-r from-brand to-brand-teal text-white'
          }`}>
            WC
          </div>
          <span className="font-bold text-xl tracking-tight">WellCrest</span>
        </div>
      </div>
    </Link>
  )
}