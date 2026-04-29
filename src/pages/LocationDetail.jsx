import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Video, Building2, Clock, CheckCircle, Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import CalendlyModal from '../components/CalendlyModal'

const locationData = {
  georgia: {
    name: 'Georgia',
    fullName: 'WellCrest Health — Georgia',
    tagline: 'In-Person & Telehealth',
    address: '7910 Mall Ring Road Suite 200, Stonecrest, GA 30038',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['Psychiatric Evaluations', 'Individual Therapy', 'Group Therapy', 'Medication Management', 'Primary Care Visits', 'Chronic Disease Management', 'Preventive Screenings', 'Lab Work & Testing'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment Only',
      sunday: 'Closed'
    },
    features: ['Full In-Person Services', 'Telehealth Available', 'Free Parking', 'Wheelchair Accessible', 'Private Waiting Areas', 'On-site Lab Services'],
    description: 'Our Georgia location offers both in-person and telehealth services in the Atlanta metro area. Located in Stonecrest, we serve patients from throughout the greater Atlanta region with comprehensive mental health and primary care services.',
    mapUrl: 'https://maps.google.com/?q=7910+Mall+Ring+Road+Suite+200+Stonecrest+GA+30038',
    stateLicense: 'Licensed to practice in Georgia'
  },
  arizona: {
    name: 'Arizona',
    fullName: 'WellCrest Health — Arizona',
    tagline: 'Telehealth Only',
    address: 'Telehealth — Serving All of Arizona',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['Psychiatric Evaluations', 'Individual Therapy', 'Medication Management', 'Cognitive Behavioral Therapy', 'Anxiety & Depression Treatment', 'Stress Management', 'Follow-up Visits'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment Only',
      sunday: 'Closed'
    },
    features: ['Secure Video Visits', 'HIPAA Compliant Platform', 'Flexible Scheduling', 'No Travel Required', 'Digital Intake Forms', 'Prescription Refills Available'],
    description: 'Our Arizona services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.',
    mapUrl: null,
    stateLicense: 'Licensed to practice in Arizona'
  },
  maryland: {
    name: 'Maryland',
    fullName: 'WellCrest Health — Maryland',
    tagline: 'Telehealth Only',
    address: 'Telehealth — Serving All of Maryland',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['Psychiatric Evaluations', 'Individual Therapy', 'Medication Management', 'Trauma-Informed Care', 'ADHD Assessment & Treatment', 'Mood Disorder Management', 'Follow-up Visits'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment Only',
      sunday: 'Closed'
    },
    features: ['Secure Video Visits', 'HIPAA Compliant Platform', 'Flexible Scheduling', 'No Travel Required', 'Digital Intake Forms', 'Prescription Refills Available'],
    description: 'Our Maryland services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.',
    mapUrl: null,
    stateLicense: 'Licensed to practice in Maryland'
  }
}

export default function LocationDetail() {
  const { location: locationId } = useParams()
  const location = locationData[locationId] || locationData.georgia
  const [showCalendly, setShowCalendly] = React.useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CalendlyModal open={showCalendly} onClose={() => setShowCalendly(false)} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand/5 via-white to-brand-teal/5 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to="/locations" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              All Locations
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">{location.name}</h1>
              <span className="px-3 py-1 bg-brand/10 text-brand text-sm font-semibold rounded-full">{location.tagline}</span>
            </div>
            <p className="text-lg text-slate-500 max-w-2xl">{location.description}</p>
            <p className="text-sm text-slate-400 mt-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              {location.stateLicense}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => setShowCalendly(true)} className="btn-primary">
              Book Appointment
            </button>
            {location.mapUrl && (
              <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 rounded-xl font-medium text-slate-700 hover:border-brand hover:text-brand transition-all">
                <ExternalLink className="w-5 h-5" />
                View on Map
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-semibold text-slate-900">Address</h3>
              </div>
              <p className="text-slate-600">{location.address}</p>
              {location.tagline === 'In-Person & Telehealth' && (
                <p className="text-sm text-slate-400 mt-2">Suite 200 — Second Floor</p>
              )}
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-semibold text-slate-900">Contact</h3>
              </div>
              <a href={`tel:${location.phone.replace(/-/g, '')}`} className="text-brand font-medium hover:underline">{location.phone}</a>
              <p className="text-sm text-slate-400 mt-1">Fax: {location.fax}</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-semibold text-slate-900">Email</h3>
              </div>
              <a href={`mailto:${location.email}`} className="text-brand font-medium hover:underline">{location.email}</a>
              <p className="text-sm text-slate-400 mt-1">Response within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Available</h2>
              <div className="space-y-3">
                {location.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Location Features</h2>
              <div className="space-y-3">
                {location.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-sm transition-all">
                    <Star className="w-5 h-5 text-violet-500 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Office Hours</h2>
              <div className="space-y-3">
                {Object.entries(location.hours).map(([day, hours]) => {
                  const today = new Date().getDay()
                  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
                  const isToday = dayNames[today] === day
                  return (
                    <div key={day} className={`flex justify-between items-center p-4 rounded-xl ${isToday ? 'bg-brand/10 border border-brand/20' : 'bg-white'}`}>
                      <span className="capitalize text-slate-700 font-medium">{day} {isToday && <span className="text-xs text-brand">(Today)</span>}</span>
                      <span className={`text-sm ${isToday ? 'text-brand font-semibold' : 'text-slate-500'}`}>{hours}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">How to Get Started</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-brand">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Schedule Online</p>
                      <p className="text-sm text-slate-500">Click "Book Appointment" to choose a time that works for you</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-brand">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Complete Intake</p>
                      <p className="text-sm text-slate-500">Fill out your forms online before your visit</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-brand">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Meet Your Provider</p>
                      <p className="text-sm text-slate-500">Join in-person or via video for your first appointment</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => setShowCalendly(true)} className="btn-primary w-full mt-6">
                  Book Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand to-brand-teal text-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Our compassionate team is here to support your mental health and wellness needs.</p>
          <button onClick={() => setShowCalendly(true)} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand rounded-xl font-semibold hover:bg-white/90 transition-all">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}