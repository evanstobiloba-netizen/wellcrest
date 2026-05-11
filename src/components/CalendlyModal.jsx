import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

const CALENDLY_INITIAL = 'https://calendly.com/wellcresttherapy-info/initial-consultation'
const CALENDLY_FOLLOWUP = 'https://calendly.com/wellcresttherapy-info/follow-up-visit'

const CalendlyContext = createContext()

export function CalendlyProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [consultationType, setConsultationType] = useState('initial')
  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.innerHTML = ''
      const widgetDiv = document.createElement('div')
      widgetDiv.className = 'calendly-inline-widget'
      widgetDiv.setAttribute('data-url', consultationType === 'initial' ? CALENDLY_INITIAL : CALENDLY_FOLLOWUP)
      widgetDiv.style.minWidth = '320px'
      widgetDiv.style.height = '700px'
      containerRef.current.appendChild(widgetDiv)
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      containerRef.current.appendChild(script)
    }
  }, [isOpen, consultationType])

  const open = (type = 'initial') => {
    setConsultationType(type)
    setIsOpen(true)
  }

  const close = () => setIsOpen(false)

  return (
    <CalendlyContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="font-bold text-lg">Book Appointment</h2>
              <button onClick={close} className="text-slate-500 hover:text-slate-700 text-2xl">×</button>
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
      )}
    </CalendlyContext.Provider>
  )
}

export function useCalendly() {
  const ctx = useContext(CalendlyContext)
  if (ctx) return ctx
  // Fallback for components outside provider
  const [isOpen, setIsOpen] = useState(false)
  return { open: () => setIsOpen(true), close: () => setIsOpen(false), isOpen }
}

// Old component kept for backward compatibility - uses global context if available
export default function CalendlyModal({ isOpen: controlledOpen, onClose }) {
  const ctx = useContext(CalendlyContext)
  if (ctx) return null // ignore local props - provider handles it
  // Legacy fallback outside provider
  return null
}
