import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Video, Building2, Clock, CheckCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const locations = {
  georgia: {
    name: 'Georgia',
    fullName: 'Georgia',
    tagline: 'In-Person & Telehealth',
    address: '7910 Mall Ring Road Suite 200, Stonecrest, GA 30038',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['In-Person Visits', 'Telehealth', 'Psychiatric Care', 'Primary Care', 'Medication Management'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed'
    },
    features: ['Full In-Person Services', 'Telehealth Available', 'On-site Parking', ' wheelchair Accessible'],
    accepted: true,
    description: 'Our Georgia location offers both in-person and telehealth services in the Atlanta metro area. Located in Stonecrest, we serve patients from throughout the greater Atlanta region with comprehensive mental health and primary care services.'
  },
  arizona: {
    name: 'Arizona',
    fullName: 'Arizona',
    tagline: 'Telehealth Only',
    address: 'Telehealth only - serving all of Arizona',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['Telehealth', 'Psychiatric Care', 'Medication Management', 'Therapy'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed'
    },
    features: ['Secure Video Visits', 'Online Portal', 'Flexible Scheduling', 'HIPAA Compliant'],
    accepted: true,
    description: 'Our Arizona services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.'
  },
  maryland: {
    name: 'Maryland',
    fullName: 'Maryland',
    tagline: 'Telehealth Only',
    address: 'Telehealth only - serving all of Maryland',
    phone: '470-481-2034',
    fax: '470-481-2577',
    email: 'info@wellcresttherapy.com',
    services: ['Telehealth', 'Psychiatric Care', 'Medication Management', 'Therapy'],
    hours: {
      monday: '8:00 AM - 5:00 PM',
      tuesday: '8:00 AM - 5:00 PM',
      wednesday: '8:00 AM - 5:00 PM',
      thursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 5:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed'
    },
    features: ['Secure Video Visits', 'Online Portal', 'Flexible Scheduling', 'HIPAA Compliant'],
    accepted: true,
    description: 'Our Maryland services are delivered exclusively through telehealth, providing convenient access to quality mental health care from anywhere in the state. Meet with our providers from the comfort of your home.'
  }
}

export default function LocationDetail() {
  const { location: locationId } = useParams()
  const location = locations[locationId] || locations.georgia

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-violet-50 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <Link to="/locations" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" />
              All Locations
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">{location.name}</h1>
              <span className="badge-blue">{location.tagline}</span>
            </div>
            <p className="text-lg text-slate-500 max-w-2xl">{location.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-slate-900">Address</h3>
              </div>
              <p className="text-slate-600">{location.address}</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-slate-900">Contact</h3>
              </div>
              <a href={`tel:${location.phone.replace(/-/g, '')}`} className="text-slate-600 hover:text-brand">{location.phone}</a>
              <p className="text-sm text-slate-400">Fax: {location.fax}</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-brand" />
                <h3 className="font-semibold text-slate-900">Email</h3>
              </div>
              <a href={`mailto:${location.email}`} className="text-slate-600 hover:text-brand">{location.email}</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Available</h2>
              <div className="space-y-3">
                {location.services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Features */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Location Features</h2>
              <div className="space-y-3">
                {location.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <Star className="w-5 h-5 text-violet-500" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Office Hours</h2>
            <div className="space-y-3">
              {Object.entries(location.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="capitalize text-slate-700 font-medium">{day}</span>
                  <span className="text-slate-500">{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Book an Appointment?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">Schedule your visit today and start your journey to better health.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
            Book Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}