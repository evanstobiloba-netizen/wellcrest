import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import CalendlyModal from '../components/CalendlyModal'
import { MapPin, Video, Building2, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LocationsPage(){
  const [showCalendly, setShowCalendly] = React.useState(false)

  const locations = [
    {
      id: 'georgia',
      name: 'Georgia',
      tagline: 'In-Person & Telehealth',
      badge: 'Main Office',
      services: ['In-Person Visits', 'Telehealth', 'Psychiatric Care', 'Primary Care', 'Medication Management', 'Lab Work'],
      description: 'Our Georgia location offers both in-person and telehealth services in the Atlanta metro area.',
      href: '/locations/georgia'
    },
    {
      id: 'arizona',
      name: 'Arizona',
      tagline: 'Telehealth Only',
      badge: 'Telehealth',
      services: ['Telehealth', 'Psychiatric Care', 'Medication Management', 'Therapy'],
      description: 'Access quality mental health care from anywhere in Arizona through our secure telehealth platform.',
      href: '/locations/arizona'
    },
    {
      id: 'maryland',
      name: 'Maryland',
      tagline: 'Telehealth Only',
      badge: 'Telehealth',
      services: ['Telehealth', 'Psychiatric Care', 'Medication Management', 'Therapy'],
      description: 'Access quality mental health care from anywhere in Maryland through our secure telehealth platform.',
      href: '/locations/maryland'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CalendlyModal open={showCalendly} onClose={() => setShowCalendly(false)} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Locations</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Quality mental health services available in Georgia, Arizona, and Maryland.</p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, idx) => (
              <motion.div 
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{location.name}</h3>
                      <p className="text-xs text-slate-500">{location.tagline}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${location.badge === 'Main Office' ? 'bg-brand/10 text-brand' : 'bg-violet-50 text-violet-600'}`}>
                    {location.badge}
                  </span>
                </div>
                
                <p className="text-sm text-slate-600 mb-4">{location.description}</p>
                
                <div className="space-y-2 mb-6">
                  {location.services.map((service, sidx) => (
                    <div key={sidx} className="flex items-center gap-2 text-xs text-slate-500">
                      {service.includes('In-Person') || service.includes('Telehealth') ? (
                        <Video className="w-3.5 h-3.5 text-brand" />
                      ) : (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      )}
                      {service}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={location.href}
                  className="inline-flex items-center gap-2 text-brand font-medium text-sm hover:gap-3 transition-all"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Insurance Accepted</h2>
            <p className="text-slate-500">We accept most major insurance plans. Contact us to verify your coverage.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'Humana', 'United Healthcare', 'Medicare', 'Medicaid'].map((insurance, idx) => (
              <div key={idx} className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm text-slate-600">
                {insurance}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand to-brand-teal">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book an Appointment?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Schedule your visit today and start your journey to better health.</p>
          <button onClick={() => setShowCalendly(true)} className="inline-flex items-center gap-2 bg-white text-brand px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}