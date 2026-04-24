import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import CalendlyModal from '../components/CalendlyModal'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Heart, Video, Shield, Users, Clock, MapPin, Phone, Mail, ArrowRight, Send, Clock3, Calendar } from 'lucide-react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [calendlyOpen, setCalendlyOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-[brand-navy]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-[#00C2FF]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[brand-navy]/10 text-[brand-navy] rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-[#5A6A7A]">
              Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#E1E8F0] p-8"
            >
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A2540] mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F0] focus:border-[brand-navy] focus:outline-none transition-colors"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A2540] mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F0] focus:border-[brand-navy] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A2540] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F0] focus:border-[brand-navy] focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A2540] mb-2">Service Interest</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F0] focus:border-[brand-navy] focus:outline-none transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select a service</option>
                    <option value="depression">Depression Treatment</option>
                    <option value="anxiety">Anxiety Treatment</option>
                    <option value="bipolar">Bipolar Disorder</option>
                    <option value="add-adhd">ADD/ADHD</option>
                    <option value="ptsd">PTSD Treatment</option>
                    <option value="insomnia">Insomnia/Sleep Disorder</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A2540] mb-2">Message *</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#E1E8F0] focus:border-[brand-navy] focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[brand-navy] hover:bg-[#0052D9] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#F8FAFC] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[brand-navy] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Address</p>
                      <p className="text-sm text-[#5A6A7A]">7910 Mall Ring Road Suite 200<br/>Stonecrest, GA 30038</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[brand-navy] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Phone</p>
                      <p className="text-sm text-[#5A6A7A]">470-481-2034</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[brand-navy] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Email</p>
                      <p className="text-sm text-[#5A6A7A]">info@wellcresttherapy.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock3 className="w-5 h-5 text-[brand-navy] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0A2540]">Fax</p>
                      <p className="text-sm text-[#5A6A7A]">470-481-2577</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#0A2540] mb-4">
                  Office Hours
                </h3>
                <ul className="space-y-2 text-sm text-[#5A6A7A]">
                  <li className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>By Appointment</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-brand to-brand-teal rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">
                  Emergency?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
                </p>
                <button onClick={() => setCalendlyOpen(true)} className="inline-flex items-center gap-2 bg-white text-brand px-4 py-2 rounded-xl font-medium text-sm">
                  Book Appointment <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
</div>
        </div>
      </section>

      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />

      <Footer />
    </div>
  )
}