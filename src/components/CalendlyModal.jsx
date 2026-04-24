import React, { useState, useEffect, useRef } from 'react'

const CALENDLY_INITIAL = 'https://calendly.com/wellcresttherapy-info/initial-consultation'
const CALENDLY_FOLLOWUP = 'https://calendly.com/wellcresttherapy-info/follow-up-visit'

export default function CalendlyModal({ isOpen, onClose }) {
  const [consultationType, setConsultationType] = useState('initial')
  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = ''
      
      // Create Calendly widget
      const widgetDiv = document.createElement('div')
      widgetDiv.className = 'calendly-inline-widget'
      widgetDiv.setAttribute('data-url', consultationType === 'initial' ? CALENDLY_INITIAL : CALENDLY_FOLLOWUP)
      widgetDiv.style.minWidth = '320px'
      widgetDiv.style.height = '700px'
      containerRef.current.appendChild(widgetDiv)

      // Load Calendly script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      containerRef.current.appendChild(script)
    }
  }, [isOpen, consultationType])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="font-bold text-lg">Book Appointment</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 text-2xl">×</button>
        </div>
        <div className="p-4">
          <div className="flex gap-2 mb-4">
            <button 
              onClick={() => setConsultationType('initial')}
              className={`px-4 py-2 rounded-xl font-medium ${consultationType === 'initial' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              Initial Consultation
            </button>
            <button 
              onClick={() => setConsultationType('followup')}
              className={`px-4 py-2 rounded-xl font-medium ${consultationType === 'followup' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-600'}`}
            >
              Follow-up Visit
            </button>
          </div>
          <div ref={containerRef} />
        </div>
      </div>
    </div>
  )
}

// Reusable hook for any component to use
export function useCalendly() {
  const [isOpen, setIsOpen] = useState(false)
  return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
}