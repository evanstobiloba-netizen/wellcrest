import React from 'react'
import CalendlyModal from '../components/CalendlyModal'
import { useCalendly } from '../components/CalendlyModal'
import { Calendar } from 'lucide-react'

function BookAppointmentButtonComponent({ className = '', variant = 'primary' }) {
  const calendly = useCalendly()
  
  const baseClasses = variant === 'primary' 
    ? 'flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-brand-teal text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity'
    : 'flex items-center justify-center gap-2 bg-white text-brand border-2 border-brand px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors'

  return (
    <>
      <button onClick={calendly.open} className={`${baseClasses} ${className}`}>
        <Calendar className="w-5 h-5" />
        Book Appointment
      </button>
      <CalendlyModal isOpen={calendly.isOpen} onClose={calendly.close} />
    </>
  )
}

export default BookAppointmentButtonComponent