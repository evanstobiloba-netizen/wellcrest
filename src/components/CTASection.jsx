import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="py-16 bg-gradient-to-r ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link to={buttonLink} className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
          {buttonText} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export function SimpleCTA({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors btn-primary">
          <Link to={buttonLink} className="flex items-center gap-2">
            {buttonText} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}